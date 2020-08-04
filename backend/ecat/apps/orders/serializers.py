from rest_framework import serializers
from categories.models import *
from django.db import transaction
from django.conf import settings
from django.http import Http404
from orders.models import Order, OrderDetail
from products.serializers import ProductSerializer
from accounts.serializers import RegisterSerializer

class OrderDetailSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = OrderDetail
        fields = '__all__'
     

class OrderSerializer(serializers.ModelSerializer):
    user = RegisterSerializer(read_only=True)
    order_details = OrderDetailSerializer(read_only=True)
    
    class Meta:
        model = Order
        fields = ('orderId',  'order_details','user','total','addedon')
     
    def to_representation(self,instance):
        serializer = super().to_representation(instance)
        order_list = OrderDetail.objects.filter(order = instance)
        order_detail_serializer  =  OrderDetailSerializer(order_list,many=True)
        serializer.update({"order_details":order_detail_serializer.data})
        return serializer
        