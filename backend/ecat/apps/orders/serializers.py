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
from django.db.models import Sum
class OrderDetailSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = OrderDetail
        fields = '__all__'
     

class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    order_details = OrderDetailSerializer(read_only=True)
    addedon = serializers.SerializerMethodField()
    total_quantity = serializers.SerializerMethodField()
    csv_url  = serializers.SerializerMethodField()
    def get_addedon(self, obj):
        date_time_str = str(obj.addedon)
        now_utc = datetime.strptime(date_time_str, "%Y-%m-%d %H:%M:%S.%f")
        now_asia = now_utc.astimezone(timezone('Asia/Kolkata'))
        format = "%Y-%m-%d %H:%M %p"
        return now_asia.strftime(format)
        
    def get_total_quantity(self, obj):
        total_quantity = OrderDetail.objects.filter(order_id = obj.id).values('quantity').aggregate(Sum('quantity'))
        return total_quantity['quantity__sum']
    
    def get_csv_url(self, obj):
        csvfilename = ''
        csvfilename = 'EC-00-'+str(obj.orderId)+'-OR.csv'
        csv_url = settings.ROOT_URL+'/api/media/order_csv/'+csvfilename 
        return csv_url

    class Meta:
        model = Order
        fields = ('csv_url','orderId',  'order_details','user','total','addedon','total_quantity')
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
        