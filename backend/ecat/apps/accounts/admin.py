# -*- coding: utf-8 -*-
# from __future__ import unicode_literals
# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin
# from .models import User, Role

# class CustomUserAdmin(UserAdmin):
#     list_display = ('email', 'date_joined', 'is_staff')
#     list_filter = ('is_staff', 'is_superuser', 'is_active')
#     search_fields = ('email', )
#     ordering = ('email', )
#     readonly_fields = (
#         'last_login', 'date_joined'
#     )

# admin.site.register(User, CustomUserAdmin)
# admin.site.register(Role)
from import_export import fields, resources
from import_export.admin import ImportExportModelAdmin
from import_export.widgets import ForeignKeyWidget
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import  User, UserProfile

# class ProfileInline(admin.StackedInline):
#     model = UserProfile
#     can_delete = False
#     verbose_name_plural = 'UserProfile'
#     fk_name = 'user'

# class CustomUserAdmin(UserAdmin):
#     inlines = (ProfileInline, )
#     list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
#     readonly_fields = (
#         'last_login', 'date_joined',
#     )
    
#     def get_inline_instances(self, request, obj=None):
#         if not obj:
#             return list()
#         return super(CustomUserAdmin, self).get_inline_instances(request, obj)

# admin.site.register(User, CustomUserAdmin)
admin.site.register(UserProfile)
class UserModelResource(resources.ModelResource):
    state = fields.Field(column_name='state',attribute='state')
    class Meta:
        model = User
class CustomUserAdminProfile(ImportExportModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    # list_filter = ('item_code','status')
    # ordering = ('item_code','status')
    resource_class = UserModelResource 

admin.site.register(User,CustomUserAdminProfile)
