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

# Create your views here.
class ProductList(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all().order_by('id')
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    
    def get_queryset(self):
        page = self.request.query_params.get('page')
        page_size = self.request.query_params.get('page_size')
        if page is not None:
            pagination.PageNumberPagination.page = page
            
        if page_size is not None:
            pagination.PageNumberPagination.page_size = page_size

        queryset = Product.objects.filter(status="1")
        product_type = self.request.query_params.get('product_type')
        if product_type is not None:
            queryset = queryset.filter(leaf_desc = product_type)

        category = self.request.query_params.get('category')
        if category is not None:
            queryset = queryset.filter(category__code__contains = category)

        item_code = self.request.query_params.get('item_code')
        if item_code is not None:
            queryset = queryset.filter(item_code__contains = item_code)    

        subcategory = self.request.query_params.get('subcategory')
        if subcategory is not None:
            queryset = queryset.filter(subcategory__code__contains = subcategory)

        segment = self.request.query_params.get('segment')
        if segment is not None:
            pass
            #queryset = queryset.filter(Q(segment__code__contains = segment))

        subsegment = self.request.query_params.get('subsegment')
        if subsegment is not None:
            pass
            #queryset = queryset.filter(Q(subsegment__code__contains = subsegment))
        
        #print("leaftype",queryset) 
        leaftype = self.request.query_params.get('leaftype')
        if leaftype is not None:
            queryset = queryset.filter(leaftype__code__contains = leaftype)

        vechicle = self.request.query_params.get('vechicle')
        if vechicle is not None:
            queryset = queryset.filter(vechicle__code__contains = vechicle)
            return queryset     

        leafposition = self.request.query_params.get('leafposition')
        if leafposition is not None:
            queryset = queryset.filter(leafposition__code__contains = "3")

        vechiclemodel = self.request.query_params.get('vechiclemodel')
        if vechiclemodel is not None:
            queryset = queryset.filter(vechiclemodel__code__contains = vechiclemodel)

        return queryset     

class CartList(generics.ListCreateAPIView):
    serializer_class = CartSerializer
    queryset = Cart.objects.all()
    def get_queryset(self):
        return self.queryset.filter(user_id= self.request.user.id)
    def post(self, request, *args, **kwargs): 
        Cart.objects.get_or_create(product_id = self.request.data.get('product_id'), quantity = self.request.data.get('quantity'),
        user = self.request.user)
        return Response('created')


class CartDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

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

class OrderList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Order.objects.all()
    serializer_class = OrderSerializer 
    def get_queryset(self):
        return self.queryset.filter(user_id= self.request.user.id)
        
    def post(self, request, *args, **kwargs): 
        cartList = Cart.objects.filter(user_id=self.request.user.id)
        sampleStr = "ABCDEFGHIGKLMNOPQRSTUVWXYZ123456789"
        char_list = list(sampleStr)
        # shuffle list
        random.shuffle(char_list)
        # convert list to string
        finalStr = ''.join(char_list)
        order, created = Order.objects.get_or_create(orderId = finalStr,  total = 0, user = self.request.user,addedon = datetime.datetime.now())
        totalPrice = 0
        if cartList.exists():
            for cart in cartList:
                totalPrice = totalPrice+int(cart.product.mrp1)
                OrderDetail.objects.create(order = order,  product_id = cart.product_id, quantity = cart.quantity, user = self.request.user,addedon = datetime.datetime.now())
                cart.delete()
        order.total = totalPrice  
        order.save()      
        return Response('created')

class OrderDetails(generics.RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = OrderDetail.objects.all()
    serializer_class = OrderDetailSerializer        


class OrderList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Order.objects.all()
    serializer_class = OrderSerializer 
    def get_queryset(self):
        return self.queryset.filter(user_id= self.request.user.id)
        
    def post(self, request, *args, **kwargs): 
        cartList = Cart.objects.filter(user_id=self.request.user.id)
        sampleStr = "ABCDEFGHIGKLMNOPQRSTUVWXYZ123456789"
        char_list = list(sampleStr)
        # shuffle list
        random.shuffle(char_list)
        # convert list to string
        finalStr = ''.join(char_list)
        order, created = Order.objects.get_or_create(orderId = finalStr,  total = 0, user = self.request.user,addedon = datetime.datetime.now())
        totalPrice = 0
        if cartList.exists():
            for cart in cartList:
                totalPrice = totalPrice+int(cart.product.mrp1)
                OrderDetail.objects.create(order = order,  product_id = cart.product_id, quantity = cart.quantity, user = self.request.user,addedon = datetime.datetime.now())
                cart.delete()
        order.total = totalPrice  
        order.save()      
        return Response('created')

