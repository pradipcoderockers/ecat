from rest_framework import serializers
from categories.models import *
from django.db import transaction
from django.conf import settings
from django.http import Http404
from orders.models import Order, OrderDetail
from products.serializers import ProductSerializer
from accounts.serializers import UserSerializer
from categories.models import Category
from datetime import datetime
import pytz

class OrderDetailSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = OrderDetail
        fields = '__all__'
     

class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    order_details = OrderDetailSerializer(read_only=True)
    addedon = serializers.SerializerMethodField()
    
    def get_addedon(self, obj):
        date_time_str = obj.addedon,
        
        # local = pytz.timezone("Asia/Kolkata")
        naive = datetime.strptime(obj.addedon, "%Y-%m-%d %H:%M:%S.%f")
        myFormat = "%Y-%m-%d %H:%M %p"
        # print("naive",naive.strftime(myFormat))
        # print("naive",naive)
        # local_dt = local.localize(int(naive), is_dst=None)
        # utc_dt = local_dt.astimezone(pytz.utc)
        # date_time_obj = datetime.strptime(obj.addedon, '%Y-%m-%d %H:%M:%S.%f')
        
        # print('dddddddddd',date_time_obj)
        # date_time = datetime.datetime.fromisoformat(obj.addedon)
        return naive.strftime(myFormat)

    
    class Meta:
        model = Order
        fields = ('orderId',  'order_details','user','total','addedon')
    def to_representation(self,instance):
        serializer = super().to_representation(instance)
        category_list = Category.objects.all().values()
        orderList = []
        for cat in category_list:
            order_list = OrderDetail.objects.filter(order = instance)
            order_list  = order_list.filter(product__category=cat['id'])
            if order_list.exists():
                order_detail_serializer  =  OrderDetailSerializer(order_list,many=True)
                cat['orders'] = order_detail_serializer.data 
                orderList.append(cat)
        serializer.update({"order_details":orderList})
        return serializer
        