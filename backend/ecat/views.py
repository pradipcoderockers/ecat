from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from allauth.account.views import ConfirmEmailView, app_settings
from django.http import Http404, HttpResponseBadRequest
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from django.shortcuts import redirect

@api_view()
def password_reset_view(request, *args, **kwargs):
    url = request.path.strip("/")
    return redirect('/'+url)
    # return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view()
def null_view(request, *args, **kwargs):
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view()
def complete_view(request):
    return Response("Email account is activated")   

@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def ok_view(request, *args, **kwargs):
    return Response(status=status.HTTP_200_OK)

class CustomConfirmEmailView(ConfirmEmailView):

    def get(self, *args, **kwargs):
        try:
            self.object = self.get_object()
            if app_settings.CONFIRM_EMAIL_ON_GET:
                return self.post(*args, **kwargs)
        except Http404:
            return HttpResponseBadRequest()
        ctx = self.get_context_data()
        return self.render_to_response(ctx)
