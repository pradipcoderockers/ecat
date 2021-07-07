from rest_framework import serializers
from categories.models import *
from django.db import transaction
from django.conf import settings
from django.http import Http404
from products.models import Product, Favourite, Cart
from categories.serializers import *
import qrcode
from django.conf import settings
import os.path

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    segment = SegmentSerializer(read_only=True)
    subcategory = SubCategorySerializer(read_only=True)
    subsegment = SubSegmentSerializer(read_only=True)
    leaftype = LeafTypeSerializer(read_only=True)
    vechicle = VechicleSerializer(read_only=True)
    leafposition = LeafPositionSerializer(read_only=True)
    vechiclemodel = VechicleModelSerializer(read_only=True)
    length = serializers.SerializerMethodField()
    qrcode = serializers.SerializerMethodField()

    def get_qrcode(self, obj):
        input_data = obj.name+" "+ obj.item_code+ " "+ obj.variant+" "+ obj.item_description
        qr = qrcode.QRCode(
                version=1,
                box_size=10,
                border=5)
        qr.add_data(input_data)
        qr.make(fit=True)
        qr_code_url = settings.ROOT_URL+"/api/media/"+obj.item_code+".png"
        try:
            img = qr.make_image(fill='black', back_color='white')
            img.save(settings.MEDIA_ROOT+"/"+obj.item_code+".png")
        except:
            pass
        return qr_code_url

    def get_length(self, obj):
        format_float = obj.length
        try:
            format_float = format(float(obj.length),".2f")
        except:
            pass
        return format_float
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