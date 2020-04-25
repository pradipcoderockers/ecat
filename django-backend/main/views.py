from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def hello_world(request):
    res = {
        "message": "Hello, world!"
    }
    return Response(res, status=status.HTTP_200_OK)