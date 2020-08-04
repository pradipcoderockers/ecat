from django.db import models
from accounts.models import User
from products.models import Product

# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(User, null=True,  on_delete = models.CASCADE)
    orderId  = models.CharField(default=True,null=True,max_length=200)
    total  = models.IntegerField(null=True,max_length=200)
    addedon = models.CharField(default=True,null=True,max_length=200)

class OrderDetail(models.Model):
    user = models.ForeignKey(User, null=True,  on_delete = models.CASCADE)
    order  = models.ForeignKey(Order, null=True,  on_delete = models.CASCADE)
    quantity  = models.IntegerField(null=True,max_length=200)
    product = models.ForeignKey(Product, null=True,  on_delete = models.CASCADE)
    addedon = models.CharField(default=True,null=True,max_length=200)    