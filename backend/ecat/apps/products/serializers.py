from rest_framework import serializers
from categories.models import *
from django.db import transaction
from django.conf import settings
from django.http import Http404
from products.models import Product, Favourite, Cart
from categories.serializers import *

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    segment = SegmentSerializer(read_only=True)
    subcategory = SubCategorySerializer(read_only=True)
    subsegment = SubSegmentSerializer(read_only=True)
    leaftype = LeafTypeSerializer(read_only=True)
    vechicle = VechicleSerializer(read_only=True)
    leafposition = LeafPositionSerializer(read_only=True)
    vechiclemodel = VechicleModelSerializer(read_only=True)
    class Meta:
        model = Product
        fields = '__all__'

class FavouriteSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = Favourite
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = Cart
        fields = '__all__'        