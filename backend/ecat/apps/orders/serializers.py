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
from pytz import timezone
from dateutil import tz
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
        date_time_str = str(obj.addedon)
        now_utc = datetime.strptime(date_time_str, "%Y-%m-%d %H:%M:%S.%f")
        now_asia = now_utc.astimezone(timezone('Asia/Kolkata'))
        format = "%Y-%m-%d %H:%M %p"
        return now_asia.strftime(format)
        # utc_tz= tz.gettz('UTC')
        # india_tz= tz.gettz('Asia/Kolkata')
        # print("date_time_str[:date_time_str.rindex('-')]",date_time_str[:date_time_str.rindex('-')])
        # utc = datetime.strptime(date_time_str, "%Y-%m-%d %H:%M:%S.%f")
        # utc = utc.replace(tzinfo=utc_tz)
        # india_time_with_offset = utc.astimezone(india_tz)
        # india_time_without_offset = india_time_with_offset.replace(tzinfo=None)
        # return india_time_without_offset
        
        # # local = pytz.timezone("Asia/Kolkata")
        # naive = datetime.strptime(obj.addedon, "%Y-%m-%d %H:%M:%S.%f")
        # myFormat = "%Y-%m-%d %H:%M %p"
        # # print("naive",naive.strftime(myFormat))
        # # print("naive",naive)
        # # local_dt = local.localize(int(naive), is_dst=None)
        # # utc_dt = local_dt.astimezone(pytz.utc)
        # # date_time_obj = datetime.strptime(obj.addedon, '%Y-%m-%d %H:%M:%S.%f')
        
        # # print('dddddddddd',date_time_obj)
        # # date_time = datetime.datetime.fromisoformat(obj.addedon)
        # return naive.strftime(myFormat)

    
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
        