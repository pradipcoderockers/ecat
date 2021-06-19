import os
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname('__file__'), '../'))+'assets'
csv_arr = []
from django.core.mail import send_mail
from django.utils.html import strip_tags
from django.core import mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
import csv
from common.models import State
def sendemail(Order, csv_url):
    header  =  '<html xmlns="http://www.w3.org/1999/xhtml">'
    header  +=  '<head>'
    header  +=  '<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">'
    header  +=  '<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>'
    header  += '<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>'

    header  +=  '</head>'

    header  +=  '<body>'
    header  +=  '<div  align="center">'
    header  +=  '<div class="col-xs-12">'
    header  +=     '<img height="100" style="text-align: center" src="http://ecat.jaispring.com/assets/images/logo.png">'
    header  += '</div>'
    header  += '<div class="col-xs-12" style="padding-top: 10px;font-size: 30px;text-align: center">'
    header  +=  '<span style="font-weight: bolder;font-weight: bolder;font-size: 24px;line-height: 81px;float: revert;" CLASS="model-head-detail">E-CAT CONNECT - SALE ORDER</span>'
    header  += '</div>'
    header  += '<div class="col-xs-12" style="border-top:1px solid grey;padding-top: 10px">'
    header += '<table width="800" class="table" border="1">'
    
    for orderOne in Order['order_details']:
        header += '<thead style="background:#0B9FDB" class="table-primary">'
        header += '<tr class="table-primary">'
        header += '<th width="50%" colspan="2">SALSE ORDER NUMBER</th>'
        header += '<th width="50%" colspan="2">SALSE ORDER DATE</th>'
        header += '</tr>'
        header += '</thead>'
        header += '<tbody>'
        header += '<tr>'
        header += '<td  width="50%" colspan="2">'
        header +=    str(orderOne["orders"][0]["order_number"])+'</td><td   width="50%" colspan="2">'+str(Order["addedon"])+'</td>'
        header +=  '</tr></tbody><thead style="background:#0B9FDB" class="table-primary">'
        header +=  '<tr class="table-primary"><th  width="25%">CUSTOMER NAME </th> <th  width="25%">MOBILE</th><th  width="25%">ADDRESS</th> <th  width="25%">REMARK</th></tr>'
        header += '</thead><tbody><tr>'
        header += '<td  width="25%">'+str(Order["user"]["first_name"])+ str(Order["user"]["last_name"])+'</td>'
        header +=     '<td width="25%">'+str(Order["addedon"])+'</td>'
        header +=     '<td width="25%">'+str(Order["user"]['profile']['contact_number'])+'</td>'
        header +=     '<td width="25%">'+str(Order["user"]['profile']['address1'])+'</td></tr></tbody></table>'
       
        header += '<table class="table" border="1">'
        header += '<thead class="table-primary" style="background:#0B9FDB;line-height: 50px">'
        header +=                 '<th style="text-align: center" colspan="10" class="table-primary">'
        header +=                   str(orderOne["name"])
        header +=                 '</th>'
        header +=             '</thead>'
        header +=             '<thead style="background:#ccc" class="table-primary">'
        header +=                 '<tr class="table-primary">'
        header +=                     '<th  width="10%">ID</th>'
        header +=                     '<th  width="10%">CODE</th>'
        header +=                     '<th  width="10%">VARIENT</th>'
        header +=                     '<th  width="10%">SEGMENT</th>'
        header +=                     '<th  width="10%">SUB SEGMENT</th>'
        header +=                     '<th  width="20%">DESC</th>'
        header +=                     '<th  width="10%">PRICE</th>'
        header +=                     '<th  width="10%">QUANTITY</th>'
        header +=                     '<th  width="10%">ORDER VALUE</th>'
        header +=                 '</tr>'
        header +=           ' </thead>'
        for order in orderOne["orders"]:
            header +=             '<tbody>'
            header +=                 '<tr>'
            header +=                     '<td width="10%">'+str(order["id"])+'</td>'
            header +=                     '<td width="10%">'+str(order["product"]["item_code"])+'</td>'
            header +=                     '<td width="10%">'+str(order["product"]["variant"])+'</td>'
            header +=                     '<td width="10%">'+str(order["product"]["segment"]['name'])+'</td>'
            header +=                     '<td width="10%">'+str(order["product"]["subsegment"]['name'])+'</td>'
            header +=                     '<td width="20%">'+str(order["product"]["item_description"])+'</td>'
            header +=                     '<td width="10%">'+str(order["product"]["mrp1"])+'</td>'
            header +=                     '<td width="10%">'+str(order["quantity"])+'</td>'
            header +=                     '<td width="10%">'+str(int(order["product"]["mrp1"])*int(order["quantity"]))+'</td>'
            header +=                 '</tr>'
            header +=             '</tbody>'
        header +=           ' </table>'
    
    header  +=         '<table width="800" class="table" border="1">'
    header  +=         '<thead style="background:#0B9FDB" class="table-primary">'
    header  +=         '<tr class="table-primary">'
    header  +=          '<th width="50%" ></th>'
    header  +=          '<th width="50%" ></th>'
    header  +=                 '</tr>'
    header  +=             '</thead>'
    header  +=             '<tbody>'
    header  +=                 '<tr>'
    header  +=                     '<td width="50%">'
    header  +=                         '<strong>GRAND Total</strong>'
    header  +=                     '</td>'
    header  +=                     '<td width="50%">'
    header  +=                        '<strong>'+str(Order["total"])+'</strong>'
    header  +=                     '</td>'
    header  +=                 '</tr>'
    header  +=             ' </tbody>'
    header  +=       '</table>'
    header  +=       '</div>'
    header  +=       '<div style="margin-top:10px;"><a href='+csv_url+'>Click here to export orders to a CSV file</a></div>'
    header  += '</div>'
    header  += '</body>'
    header  += '</html>'
    html_content = header
    to  =  ['jaiconnect@jaispring.com']
    if Order["user"]['profile']['state']['depo_email'] is not True:
        to  =   Order["user"]['profile']['state']['depo_email'].split(',')
    print("tooooo",to)
    subject = 'E-CAT ORDER INVOICE'
    send_mail(
    subject,
    '',
    '',
    to,
    html_message=html_content,
    fail_silently=False,
    )
    if Order["user"]['email'] is not None:
        ##### USER EMAIAL
        user_email  = Order["user"]['email']
        send_mail(
            'E-CAT ORDER INVOICE',
            '',
            '',
            [user_email],
            html_message=html_content,
            fail_silently=False,
        )
def write_to_csv(input_json,file_name):
    file_path = file_name
    with open(file_path, 'w', newline="") as csvfile:
        csv_writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_ALL)
        header = [key for key, value in input_json[0].items()]
        csv_writer.writerow(header)
        for item in input_json[1:]:
            row = [v for k, v in item.items()]
            csv_writer.writerow(row)    