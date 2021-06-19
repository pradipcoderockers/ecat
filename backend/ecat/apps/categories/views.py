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
from common.models import State

from categories.serializers import *
# Create your views here.

class CategoryList(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    pagination_class = None
    queryset = Category.objects.all().order_by('id')
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    ordering_fields = ['id', 'name']
    ordering = ['id']

    def get_queryset(self):
        queryset = Category.objects.all()
        page = self.request.query_params.get('page')
        page_size = self.request.query_params.get('page_size')
        if page is not None:
            pagination.PageNumberPagination.page = page
        if page_size is not None:
            pagination.PageNumberPagination.page_size = page_size
        return queryset

        
class SubCategoryList(generics.ListCreateAPIView):
    serializer_class = ProductSubCategorySerializer
    queryset = Product.objects.all().order_by('id')
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    pagination_class = None
    def get_queryset(self):
        code = self.request.query_params.get('code')
        category = Category.objects.filter(code=code)
        if category is not None:
            categoryObj = category.last()
            queryset = Product.objects.filter(category_id=categoryObj.id).distinct('subcategory__id')
            return queryset

class SegmentList(generics.ListCreateAPIView):
    serializer_class = ProductSegmentSerializer
    queryset = Product.objects.all().order_by('id')
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    pagination_class = None
    def get_queryset(self):
        code = self.request.query_params.get('code')
        subcategory = SubCategory.objects.filter(code=code)
        if subcategory.exists():
            subcategoryObj = subcategory.last()
            queryset = Product.objects.filter(subcategory_id=subcategoryObj.id).distinct('segment__id')
            return queryset

class SubSegmentList(generics.ListCreateAPIView):
    serializer_class = ProductSubSegmentSerializer
    queryset = Product.objects.all().order_by('id')
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    pagination_class = None
    def get_queryset(self):
        code = self.request.query_params.get('code',None)
        category = self.request.query_params.get('category',None)
        subcategory = self.request.query_params.get('subcategory',None)
        query = Q()
        if code is not None:
            query.add(Q(segment__code=code), Q.AND)
        if category is not None:
            query.add(Q(category__code=category), Q.AND)
        if subcategory is not None:
            query.add(Q(subcategory__code=subcategory), Q.AND)
        queryset = Product.objects.filter(query).distinct('subsegment__id')
        return queryset

class LeafTypeList(generics.ListCreateAPIView):
    serializer_class = ProductLeafTypeSerializer
    queryset = Product.objects.all().order_by('id')
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    pagination_class = None
    def get_queryset(self):
        code = self.request.query_params.get('code',None)
        segment = self.request.query_params.get('segment',None)
        category = self.request.query_params.get('category',None)
        subcategory = self.request.query_params.get('subcategory',None)
        query = Q()
        if code is not None:
            query.add(Q(subsegment__code=code), Q.AND)
        if segment is not None:
            query.add(Q(segment__code=segment), Q.AND)
        if category is not None:
            query.add(Q(category__code=category), Q.AND)
        if subcategory is not None:
            query.add(Q(subcategory__code=subcategory), Q.AND)
        # print("query",query)    
        queryset = Product.objects.filter(query).distinct('leaftype__id')
        return queryset

class VechicleList(generics.ListCreateAPIView):
    serializer_class = ProductVechicleSerializer
    queryset = Product.objects.all().order_by('id')
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    pagination_class = None
    def get_queryset(self):
        code = self.request.query_params.get('code',None)
        subsegment = self.request.query_params.get('subsegment',None)
        segment = self.request.query_params.get('segment',None)
        category = self.request.query_params.get('category',None)
        subcategory = self.request.query_params.get('subcategory',None)
        query = Q()
        if code is not None:
            query.add(Q(leaftype__code=code), Q.AND)
        if subsegment is not None:
            query.add(Q(subsegment__code=subsegment), Q.AND)    
        if segment is not None:
            query.add(Q(segment__code=segment), Q.AND)
        if category is not None:
            query.add(Q(category__code=category), Q.AND)
        if subcategory is not None:
            query.add(Q(subcategory__code=subcategory), Q.AND)
        # print("query",query)    
        queryset = Product.objects.filter(query).distinct('vechicle__id')
        return queryset

class BrandApiList(generics.ListCreateAPIView):
    serializer_class = ProductVechicleSerializer
    queryset = Product.objects.all().order_by('id')
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    pagination_class = None
    def get_queryset(self):
        queryset = Product.objects.filter().distinct('vechicle__id')
        return queryset

class LeafPositionList(generics.ListCreateAPIView):
    serializer_class = ProductLeafPositionSerializer
    pagination_class = None
    queryset = Product.objects.all().order_by('id')
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    
    def get_queryset(self):
        code = self.request.query_params.get('code',None)
        leaftype = self.request.query_params.get('leaftype',None)
        subsegment = self.request.query_params.get('subsegment',None)
        segment = self.request.query_params.get('segment',None)
        category = self.request.query_params.get('category',None)
        subcategory = self.request.query_params.get('subcategory',None)
        query = Q()
        if code is not None:
            query.add(Q(vechicle__code=code), Q.AND)
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
        queryset = Product.objects.filter(query).distinct('leafposition__id')
        return queryset                            

class VechicleModelList(generics.ListCreateAPIView):
    serializer_class = ProductVechicleModelSerializer
    queryset = Product.objects.all().order_by('id')
    pagination_class = None
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    
    def get_queryset(self):
        code = self.request.query_params.get('code',None)
        vechicle = self.request.query_params.get('vechicle',None)
        leaftype = self.request.query_params.get('leaftype',None)
        subsegment = self.request.query_params.get('subsegment',None)
        segment = self.request.query_params.get('segment',None)
        category = self.request.query_params.get('category',None)
        subcategory = self.request.query_params.get('subcategory',None)
        query = Q()
        if code is not None:
            query.add(Q(leafposition__code=code), Q.AND)
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
        queryset = Product.objects.filter(query).distinct('leafposition__id')
        return queryset      

class StateList(generics.ListCreateAPIView):

    def get(self, request, *args, **kwargs):
        statelist = State.objects.filter().values()
        return Response(statelist)