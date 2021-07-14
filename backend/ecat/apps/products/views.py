from django.shortcuts import render
from django.db import transaction
from django.db.models import Q, F
from django.http import Http404
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, exceptions, pagination, status
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from utils.rest.code import code
from categories.models import *
from products.models import *
from categories.serializers import *
from products.serializers import *
from orders.serializers import OrderSerializer, OrderDetailSerializer
from orders.models  import Order, OrderDetail
import random
import datetime
from products.helper import *
import os
from decouple import config
from django.conf import settings

# Create your views here.
class ProductList(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all().order_by('id')
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    
    def get_queryset(self):
        page = self.request.query_params.get('page')
        page_size = self.request.query_params.get('page_size',100)
        if page is not None:
            pagination.PageNumberPagination.page = page
            
        if page_size is not None:
            pagination.PageNumberPagination.page_size = page_size

        # queryset = Product.objects.filter(status="1")
        vechiclemodel = self.request.query_params.get('vechiclemodel',None)
        leafposition = self.request.query_params.get('leafposition',None)
        vechicle = self.request.query_params.get('vechicle',None)
        leaftype = self.request.query_params.get('leaftype',None)
        subsegment = self.request.query_params.get('subsegment',None)
        segment = self.request.query_params.get('segment',None)
        category = self.request.query_params.get('category',None)
        subcategory = self.request.query_params.get('subcategory',None)
        query = Q()
        if leafposition is not None:
            query.add(Q(leafposition__code=leafposition), Q.AND)
        if vechiclemodel is not None:
            query.add(Q(vechiclemodel__code=vechiclemodel), Q.AND)
        if vechicle is not None:
            query.add(Q(vechicle__code=vechicle), Q.AND)
        if leaftype is not None:
            query.add(Q(leaftype__code=leaftype), Q.AND)
        if subsegment is not None:
            query.add(Q(subsegment__code=subsegment), Q.AND)    
        if segment is not None:
            query.add(Q(segment__code=segment), Q.AND)
        if category is not None:
            query.add(Q(category__code=category), Q.AND)
        if subcategory is not None:
            query.add(Q(subcategory__code=subcategory), Q.AND)
        item_code = self.request.query_params.get('item_code')
        if item_code is not None:
            query.add(Q(item_code__contains=item_code), Q.AND)

        queryset = Product.objects.filter(query)
        return queryset 
        # subcategory = self.request.query_params.get('subcategory')
        # if subcategory is not None:
        #     queryset = queryset.filter(subcategory__code = subcategory)

        # segment = self.request.query_params.get('segment')
        # if segment is not None:
        #     pass
        #     queryset = queryset.filter(Q(segment__code = segment))

        # subsegment = self.request.query_params.get('subsegment')
        # if subsegment is not None:
        #     pass
        #     queryset = queryset.filter(Q(subsegment__code__contains = subsegment))
        
        # leaftype = self.request.query_params.get('leaftype')
        # if leaftype is not None:
        #     queryset = queryset.filter(leaftype__code__contains = leaftype)

        # vechicle = self.request.query_params.get('vechicle')
        # if vechicle is not None:
        #     queryset = queryset.filter(vechicle__code__contains = vechicle)
        #     return queryset     

        # leafposition = self.request.query_params.get('leafposition')
        # if leafposition is not None:
        #     queryset = queryset.filter(leafposition__code__contains = "3")

        # vechiclemodel = self.request.query_params.get('vechiclemodel')
        # if vechiclemodel is not None:
        #     queryset = queryset.filter(vechiclemodel__code__contains = vechiclemodel)

        # return queryset     

class CartList(generics.ListCreateAPIView):
    serializer_class = CartSerializer
    queryset = Cart.objects.all()
    def get_queryset(self):
        return self.queryset.filter(user_id= self.request.user.id)
    def post(self, request, *args, **kwargs): 
        check_cart = Cart.objects.filter(product_id = self.request.data.get('product_id'),user = self.request.user)
        if check_cart.exists():
            check_cart  = check_cart.first()
            check_cart.quantity = check_cart.quantity+int(self.request.data.get('quantity'))
            check_cart.save()
        else:
            Cart.objects.get_or_create(product_id = self.request.data.get('product_id'), quantity = self.request.data.get('quantity'),
        user = self.request.user)
        return Response('created')


class CartDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def get(self, request, *args, **kwargs):
        Cart.objects.filter(user_id=self.request.user.id).delete()
        return Response('deleted successfully')

class FavouriteList(generics.ListCreateAPIView):
    serializer_class = FavouriteSerializer
    queryset = Favourite.objects.all().order_by('id')
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    
    def get_queryset(self):       
         return self.queryset.filter(user_id= self.request.user.id)

    def post(self, request, *args, **kwargs):
        Favourite.objects.get_or_create(product_id = self.request.data.get('product_id'),
        user = self.request.user)
        return Response('created')

class FavouriteDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer

    def get(self, request, *args, **kwargs):
        Favourite.objects.filter(user_id=self.request.user.id).delete()
        return Response('deleted successfully')


# class OrderList(generics.ListCreateAPIView):
#     permission_classes = (IsAuthenticated,)
#     queryset = Order.objects.all()
#     serializer_class = OrderSerializer 
#     def get_queryset(self):
#         return self.queryset.filter(user_id= self.request.user.id)
        
#     def post(self, request, *args, **kwargs): 
#         cartList = Cart.objects.filter(user_id=self.request.user.id)
#         sampleStr = "ABCDEFGHIGKLMNOPQRSTUVWXYZ123456789"
#         char_list = list(sampleStr)
#         # shuffle list
#         random.shuffle(char_list)
#         # convert list to string
#         finalStr = ''.join(char_list)
#         order, created = Order.objects.get_or_create(orderId = finalStr,  total = 0, user = self.request.user,addedon = datetime.datetime.now())
#         totalPrice = 0
#         if cartList.exists():
#             for cart in cartList:
#                 totalPrice = totalPrice+int(cart.product.mrp1)
#                 OrderDetail.objects.create(order = order,  product_id = cart.product_id, quantity = cart.quantity, user = self.request.user,addedon = datetime.datetime.now())
#                 cart.delete()
#         order.total = totalPrice  
#         order.save()      
#         return Response('created')

class OrderDetails(generics.RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = OrderDetail.objects.all().order_by('-addedon')
    serializer_class = OrderDetailSerializer        


class OrderList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Order.objects.all()
    serializer_class = OrderSerializer 
    def get_queryset(self):
        page = self.request.query_params.get('page')
        page_size = self.request.query_params.get('page_size',100)
        if page is not None:
            pagination.PageNumberPagination.page = page
            
        if page_size is not None:
            pagination.PageNumberPagination.page_size = page_size
        query_set = self.queryset.filter(user_id= self.request.user.id)
        return query_set
    def post(self, request, *args, **kwargs): 
        cartList = Cart.objects.filter(user_id=self.request.user.id)
        n = random.randint(0,123445)
        # shuffle list
        # convert list to string
        now = datetime.datetime.now()
        finalStr = ''
        user = User.objects.get(id=self.request.user.id)
        mrp = 'mrp1'
        try:
            mrp = user.profile.state.dbp
        except Exception as e:
            pass
        order, created = Order.objects.get_or_create(orderId = n,  total = 0, user = user,addedon = datetime.datetime.now())
        totalPrice = 0
        if cartList.exists():
            for cart in cartList:
                finalStr = 'EC/'+str(now.year)+'/OR'+str(cart.product.category.id)+str(n)
                cart_product = cart.product.mrp1
                if mrp=='dbp1':
                    cart_product = cart.product.dbp1
                cart_quantity = cart.quantity
                totalPrice = totalPrice+int(cart_product)*int(cart_quantity)
                OrderDetail.objects.create(order_number=finalStr, order = order,  product_id = cart.product_id, quantity = cart.quantity, user = user,addedon = datetime.datetime.now())
                cart.delete()
        order.total = totalPrice  
        order.save()
        oreder_data = OrderSerializer(order)
        queryset = OrderDetail.objects.filter(order_id=order.id).distinct().values('order_number')
        csv_arr = []
        for csvorder in queryset:
            orderMain =  OrderDetail.objects.filter(order_number=csvorder['order_number'])
            data = OrderDetailSerializer(orderMain,many=True)
            for order in data.data:
                arr = {}
                arr['Ecatalogue_orderno'] = csvorder['order_number']
                arr['Ecatalogue_orderDate'] = order['addedon']
                arr['Customer_Code'] = order['user']
                arr['Shipping_point'] = ""
                arr['line_no'] = 1
                arr['Item_Code'] = "'"+str(order['product']['item_code'])
                arr['Item_Variant'] = order['product']['variant']
                arr['Quantity'] = order['quantity']
                arr['Remarks'] = ""
                csv_arr.append(arr)
            csvfilename = str(csvorder['order_number'])    
            csvfilename = csvfilename.replace('/','-')+'.csv' 
            filename = settings.MEDIA_ROOT+'/order_csv/'+csvfilename
        # print("csv_arr",csv_arr)
        # write_to_csv(csv_arr,filename)
        csv_url = settings.ROOT_URL+'/api/media/order_csv/'+csvfilename 
        sendemail(oreder_data.data,csv_url)
        try:
            write_to_csv(csv_arr,filename)
            sendemail(oreder_data.data,csv_url)
        except Exception as e:
            pass      
        return Response('created')

