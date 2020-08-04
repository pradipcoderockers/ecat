from django.urls import path
from products import views
urlpatterns = [
    path('products', views.ProductList.as_view(), name='product_list'),
    path('cart', views.CartList.as_view(), name='cart_list'),
    path('favourite', views.FavouriteList.as_view(), name='favourite_list'),
    path('cart/<int:pk>/', views.CartDetail.as_view(), name='cart_detail'),
    path('favourite/<int:pk>/', views.FavouriteDetail.as_view(), name='favourite_detail'),
    path('orders', views.OrderList.as_view(), name='order_list'),
    path('order/<int:pk>/', views.OrderDetails.as_view(), name='order_details'),
]