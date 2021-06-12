"""
Django settings for ecat project.

Generated by 'django-admin startproject' using Django 2.2.1.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os
import sys
from decouple import config

from django.urls import reverse_lazy

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(os.path.join(BASE_DIR, 'apps/'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY', 'h872gf#sj!*nisdJKGbd')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
FRONTEND_HOST = os.getenv('FRONTEND_HOST', default='localhost:4200')

ALLOWED_HOSTS = ['ecat.jaispring.com','localhost','127.0.0.1','34.68.23.11']
# REST_FRAMEWORK = {
#     'DEFAULT_AUTHENTICATION_CLASSS': (
#         'rest_framework.authentication.TokenAuthentication',
#     ),
#     'DEFAULT_PERMISSION_CLASSES': (
#         'rest_framework.permissions.IsAuthenticated', )
# }

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    'common',
    'categories',
    'products',
    'orders',
    'import_export',
    'corsheaders',
    'django_extensions',
    'django.contrib.sites',
    'rest_framework',
    'rest_framework_tracking',
    'rest_framework.authtoken',
    'rest_auth',
    'rest_auth.registration',
    'allauth',
    'allauth.account',
    'accounts',
    
]

AUTH_USER_MODEL = 'accounts.User'
SITE_ID = 1

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'ecat.urls'
os.environ["DJANGO_ALLOW_ASYNC_UNSAFE"] = "true"
ROLEPERMISSIONS_REGISTER_ADMIN = False
TEMPLATES_ROOT = os.path.join(BASE_DIR, "templates")

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join("templates")
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


WSGI_APPLICATION = 'ecat.wsgi.application'

ACCOUNT_EMAIL_SUBJECT_PREFIX  = 'E-Catelog Jai Spring '
ACCOUNT_LOGOUT_ON_GET = True
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_EMAIL_VERIFICATION = 'mandatory'
ACCOUNT_AUTHENTICATION_METHOD = "email"
ACCOUNT_CONFIRM_EMAIL_ON_GET = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = reverse_lazy('account_confirm_complete')
ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = reverse_lazy('account_confirm_complete')
ACCOUNT_ADAPTER = 'common.adapter.DefaultAccountAdapterCustom'

# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

DATA_VOLUME = os.getenv('DATA_VOLUME', '/data')
STATIC_URL = '/assets/'
STATIC_ROOT = f'{DATA_VOLUME}/staticserve'
MEDIA_URL = '/api/media/'
MEDIA_ROOT =f'{DATA_VOLUME}/uploads'
ALLOWED_EXTENSIONS = (
    'pdf', 'doc', 'docx', 'xls', 'xlsx' 'img', 'png', 'jpg', 'jpeg', 'csv', 'zip'
)
FILE_UPLOAD_MAX_MEMORY_SIZE = 25 * 1024 * 1024  # 25mb
DATA_UPLOAD_MAX_MEMORY_SIZE = 50 * 1024 * 1024

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
)

REST_FRAMEWORK = {
    'TEST_REQUEST_DEFAULT_FORMAT': 'json',
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
     'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    )
}


# Notebook
NOTEBOOK_ARGUMENTS = [
    '--ip', '0.0.0.0', 
    '--allow-root',
    '--no-browser', 
]

# AWS Credentials
AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID', '')
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY', '')


REST_AUTH_REGISTER_SERIALIZERS = {
    "REGISTER_SERIALIZER": "accounts.serializers.CustomRegisterSerializer",
}

def extend_list_avoid_repeats(list_to_extend, extend_with):
    """Extends the first list with the elements in the second one, making sure its elements are not already there in the
    original list."""
    list_to_extend.extend(filter(lambda x: not list_to_extend.count(x), extend_with))

# Sendgrid SMTP for email

EMAIL_HOST          = config("EMAIL_HOST")
EMAIL_PORT          = config("EMAIL_PORT")
EMAIL_HOST_USER     = config("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = config("EMAIL_HOST_PASSWORD")
EMAIL_USE_TLS       = True
EMAIL_USE_SSL       = False
STATICFILES_DIRS = [os.path.join(BASE_DIR, '../../staticfiles')] 
