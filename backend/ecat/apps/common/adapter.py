from allauth.account.adapter import DefaultAccountAdapter
from django.conf import settings

class DefaultAccountAdapterCustom(DefaultAccountAdapter):

    def send_mail(self, template_prefix, email, context):
        protocol = 'http' if settings.DEBUG else 'https'
        context['activate_url'] = protocol + '://' + settings.FRONTEND_HOST + '/verify-email/' + context['key']
        msg = self.render_mail(template_prefix, email, context)
        try:
            msg.send()
        except:
            print("An exception occurred")
        