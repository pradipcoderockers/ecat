from django.db import transaction
from django.db.models import Q, F
from django.http import Http404
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, exceptions, pagination, status
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_auth.registration.views import RegisterView
from utils.rest.code import code
from accounts.models import *
import random
from accounts.serializers import *
from common.models import State

class CustomRegisterView(RegisterView):
    queryset = User.objects.all()

class CurrentUserView(generics.ListAPIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request, *args, **kwargs):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class AccountDetail(generics.RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def patch(self, request, *args, **kwargs):
        check_user = User.objects.filter(id=kwargs['pk'])
        if check_user.exists():
            user = check_user.last()
            if self.request.data.get('first_name') is not None:
                user.first_name = self.request.data.get('first_name')
            if self.request.data.get('last_name') is not None:
                user.last_name = self.request.data.get('last_name')
            user.save()
            userProfile = UserProfile.objects.get(user_id=user.id)
            profileObj = self.request.data.get('profile') 
            state = State.objects.filter(id=profileObj['state']['id'])
            userProfile.address1 = profileObj['address1']
            userProfile.address2 = profileObj['address2']
            userProfile.city = profileObj['city']
            userProfile.state = state.last()
            userProfile.country = profileObj['country']
            userProfile.contact_number = profileObj['contact_number']
            userProfile.pincode = profileObj['pincode']
            userProfile.role = profileObj['role']
            userProfile.save()
            return Response('updated')
        else:
            error = 'The requested resource is not found'
            raise exceptions.APIException(error)


