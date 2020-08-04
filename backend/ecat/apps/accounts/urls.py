from django.urls import path
from accounts import views
urlpatterns = [
    path('<int:pk>/', views.AccountDetail.as_view(), name='user-detail'),
]
