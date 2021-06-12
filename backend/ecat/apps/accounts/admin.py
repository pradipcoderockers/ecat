# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from import_export import fields, resources
from import_export.admin import ImportExportModelAdmin
from import_export.widgets import ForeignKeyWidget
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from .models import  User, UserProfile
from django.utils.translation import ugettext_lazy as _

class UserAdmin(DjangoUserAdmin):

    fieldsets = ( (None, {'fields': ('email', 'password')}), (_('Personal info'), {'fields': ('first_name', 'last_name')}), (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),) 
    add_fieldsets = ( (None, { 'classes': ('wide',), 'fields': ('username','email', 'password1', 'password2'), }), ) 
    list_display = ('email', 'first_name', 'last_name', 'is_staff') 
    search_fields = ('email', 'first_name', 'last_name') 
    ordering = ('email',)

class ProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False
    verbose_name_plural = 'UserProfile'
    fk_name = 'user'

admin.site.register(UserProfile)
class UserModelResource(resources.ModelResource):
    state = fields.Field(column_name='state',attribute='state')
    class Meta:
        model = User
class CustomUserAdminProfile(ImportExportModelAdmin,UserAdmin):
    # inlines = (ProfileInline, )

    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    resource_class = UserModelResource 

admin.site.register(User,CustomUserAdminProfile)

