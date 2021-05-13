from rest_framework import serializers
from accounts.models import User, UserProfile
from rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework import generics, status,exceptions
from utils.rest.code import code
from django.db import transaction
from django.conf import settings
from rest_framework.response import Response
from django.http import Http404
from allauth.account.models import EmailAddress
import secrets
import string
from django.db.models import F
from common.serializers import StateSerializer

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
            try:
                setup_user_email(request, user, [])
            except Exception as e:
                pass
            return user
        except Exception as e:
            print("dfsfdafasdfdfasf")
            raise exceptions.APIException(e)
        
    def get_cleaned_data(self):
        super(CustomRegisterSerializer, self).get_cleaned_data()
        print("self.validated_data",self.validated_data)
        return {
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
            'username': self.validated_data.get('username', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
        }


