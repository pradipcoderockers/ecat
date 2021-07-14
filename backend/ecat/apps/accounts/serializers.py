from rest_framework import serializers
from accounts.models import User, UserProfile
from rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework import generics, status,exceptions
from utils.rest.code import code
from django.db import transaction
from django.conf import settings
from django.core.mail import send_mail

from rest_framework.response import Response
from django.http import Http404
from allauth.account.models import EmailAddress
import secrets
import string
from django.db.models import F
from common.serializers import StateSerializer
from common.models import State

class UserProfileSerializer(serializers.ModelSerializer):
    state = StateSerializer(read_only=True)
    class Meta:
        model = UserProfile
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(required=True)
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}
    
class CustomRegisterSerializer(RegisterSerializer):

    email = serializers.EmailField(required=True)
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    first_name = serializers.CharField(write_only=True)
    last_name = serializers.CharField(write_only=True)
    username = serializers.CharField(write_only=True)

    @transaction.atomic
    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        try:
            adapter.save_user(request, user, self)
            user.is_active = True
            user.save()
            user_profile = UserProfile.objects.get(user=user)
            state = State.objects.get(code= request.data['state'])
            user_profile.state = state
            user_profile.save()
            header  =  '<html xmlns="http://www.w3.org/1999/xhtml">'
            header  +=  '<head>'
            header  +=  '<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">'
            header  +=  '<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>'
            header  += '<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>'

            header  +=  '</head>'

            header  +=  '<body>'
            header  +=  '<div  align="center">'
            header  +=  '<div class="col-xs-12">'
            header  +=     '<img height="100" style="text-align: center" src="http://ecat.jaispring.com/assets/images/logo.png">'
            header  += '</div>'
            header  += '<div class="col-xs-12" style="padding-top: 10px;font-size: 30px;text-align: center">'
            header  +=  '<span style="font-weight: bolder;font-weight: bolder;font-size: 24px;line-height: 81px;float: revert;" CLASS="model-head-detail">Welcome to E-CAT Portal</span>'
            header  += '</div>'
            header  += '<div class="col-xs-12" style="border-top:1px solid grey;padding-top: 10px;text-align:left;">'
            header  +=  'Dear User,<p>Thanks for signing up to E-cat Portal!</p><p>We’re confident that E-cat online portal will help you to find your products easily.</p><p>And here you can log in to E-cat online portal.</p><p><a href="https://ecat.jaispring.com/login">https://ecat.jaispring.com/login</a></p><p>Thanks, </p><p>E-cat Team </p></div>'
            header  += '</div>'
            header  += '</body>'
            header  += '</html>'
            to_mail = user.email
            if to_mail and header:
                send_mail('Welcome to E-catelog portal', '','',  [to_mail], html_message=header,  fail_silently=False)
            return user
        except Exception as e:
            raise exceptions.APIException(e)
        
    def get_cleaned_data(self):
        super(CustomRegisterSerializer, self).get_cleaned_data()
        return {
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
            'username': self.validated_data.get('username', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
        }


