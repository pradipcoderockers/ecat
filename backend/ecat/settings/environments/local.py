from ecat.settings.components.common import *

CORS_ORIGIN_WHITELIST = (
    'http://localhost:4200', 
    'http://localhost:49153'
)
CORS_ALLOW_CREDENTIALS = True
CSRF_TRUSTED_ORIGINS = [
    'http://localhost:4200', 
    'http://localhost:49153'
]

CORS_ALLOW_HEADERS = (
    'accept',
    'accept-encoding',
    'authorization', 
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
    'pragma',
    'cache-control',
    'client-timezone-name',
)