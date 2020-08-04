from django.conf import settings
from accounts.models import User
import os
import xlrd
import re
from django.utils import timezone
from categories.models import *
from common.models import *
CATEGORY = [
    {
        'code': 'leafspring',
        'name': 'LEAF SPRING',
        'image': 'leafspring.jpg'
    },
    {
        'code': 'leafspringallied',
        'name': 'LEAF SPRING ALLIED',
        'image': 'leafspringallied.jpg'
    },
    {
        'code': 'liftaxlecompontents',
        'name': 'LIFT AXLE COMPONENTS',
        'image': 'liftaxlecompontents.jpg'
    },
    {
        'code': 'trailersuspension',
        'name': 'TRAILER SUSPENSION',
        'image': 'trailersuspension.jpg'
    },
    {
        'code': 'thailerspd',
        'name': 'TRAILER SPD',
        'image': 'thailerspd.jpg'
    },
    
]
SUBCATEGORY = [
    {
        'code': 'bs6vehicle',
        'name': 'BS6 VEHICLE',
        'image': 'bs6vehicle.jpg'
    },
    {
        'code': 'bs6hybridvehicle',
        'name': 'BS6 HYBRID Vehicles',
        'image': 'bs6hybridvehicle.jpg'
    },
    {
        'code': 'nonbs6vehicle',
        'name': 'NON BS6 VEHICLE',
        'image': 'nonbs6vehicle.jpg'
    },
    {
        'code': 'withab2bush',
        'name': 'WITH AB2 BUSH',
        'image': 'withab2bush.jpg'
    },
]

ROLE = [
    {'name':'ADMIN'},
    {'name':'RETAILER'},
    {'name':'DISTRIBUTOR'},
    {'name':'USER'}
]

STATE =[
{
"key": "AN",
"name": "Andaman and Nicobar Islands",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "AP",
"name": "Andhra Pradesh",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "AR",
"name": "Arunachal Pradesh",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "AS",
"name": "Assam",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "BR",
"name": "Bihar",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "CG",
"name": "Chandigarh",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "CH",
"name": "Chhattisgarh",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "DH",
"name": "Dadra and Nagar Haveli",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "DD",
"name": "Daman and Diu",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "DL",
"name": "Delhi",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "GA",
"name": "Goa",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "GJ",
"name": "Gujarat",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "HR",
"name": "Haryana",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "HP",
"name": "Himachal Pradesh",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "JK",
"name": "Jammu and Kashmir",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "JH",
"name": "Jharkhand",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "KA",
"name": "Karnataka",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "KL",
"name": "Kerala",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "LD",
"name": "Lakshadweep",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "MP",
"name": "Madhya Pradesh",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "MH",
"name": "Maharashtra",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "MN",
"name": "Manipur",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "ML",
"name": "Meghalaya",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "MZ",
"name": "Mizoram",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "NL",
"name": "Nagaland",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "OR",
"name": "Odisha",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "PY",
"name": "Puducherry",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "PB",
"name": "Punjab",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "RJ",
"name": "Rajasthan",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "SK",
"name": "Sikkim",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "TN",
"name": "Tamil Nadu",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "TS",
"name": "Telangana",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "TR",
"name": "Tripura",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "UK",
"name": "Uttar Pradesh",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "UP",
"name": "Uttarakhand",
"mrp":"mrp1",
"dbp":"dbp1"
},
{
"key": "WB",
"name": "West Bengal",
"mrp":"mrp1",
"dbp":"dbp1"
}
]


def generate_fake_data():

    for state in STATE:
        State.objects.get_or_create(name=state['name'], code=state['key'],mrp=state['mrp'],
                            dbp=state['dbp'])
    
    admin, created = User.objects.get_or_create(first_name='Super', last_name='User', defaults={
        'email': 'admin@admin.com',
        'is_superuser': True,
        'is_staff': True,
    })
    password = 'Passw0rd!'
    admin.set_password(password)
    admin.username = 'administrator'
    admin.save()
    print('Superuser {}: {}/{}'.format('created', admin.email, password))
    
    for cat in CATEGORY:
        Category.objects.get_or_create(name=cat['name'], code=cat['code'],shortDesc=cat['name'],
                            longDesc=cat['name'], image=cat['image'])
        
    print("category created")

    for subcat in SUBCATEGORY:
        SubCategory.objects.get_or_create(name=subcat['name'], code=subcat['code'],shortDesc=subcat['name'],
                            longDesc=subcat['name'], image=cat['image'])
    print("subcategory created")   

    import_segment_master()
    print("import_segment_master created") 
    import_subsegment_master()
    print("import_subsegment_master created") 
    import_leaf_master()
    print("import_leaf_master created") 
    import_leaf_position_master()
    print("import_leaf_position_master created") 
    import_vechicle_master()
    print("import_vechicle_master created") 
    import_vechicle_model_master()
    print("import_vechicle_model_master created") 

def import_segment_master():
    cwd = os.getcwd()
    xls = os.path.join(cwd, "MSP", "unique.xlsx")
    wb = xlrd.open_workbook(xls)
    sheet = wb.sheet_by_index(1)
    keys = []

    for idx_j in range(sheet.ncols):
        keys.append(sheet.cell(1, idx_j).value)
    
    for idx_i in range(2, sheet.nrows):
        item = {}
        for idx_j in range(sheet.ncols):
            item[keys[idx_j]] = sheet.cell(idx_i, idx_j).value

        
        if item['Segment_code'] is not None:
            segment = Segment(
                            name=item['Segment_desc'],
                            code=item['Segment_code'],
                            shortDesc=item['Segment_desc'],
                            longDesc=item['Segment_desc'],
                            image = str(item['Segment_code'])+".jpg"
                        )
            segment.save()

def import_subsegment_master():
    cwd = os.getcwd()
    xls = os.path.join(cwd, "MSP", "unique.xlsx")
    wb = xlrd.open_workbook(xls)
    sheet = wb.sheet_by_index(2)
    keys = []

    for idx_j in range(sheet.ncols):
        keys.append(sheet.cell(1, idx_j).value)
    
    for idx_i in range(2, sheet.nrows):
        item = {}
        for idx_j in range(sheet.ncols):
            item[keys[idx_j]] = sheet.cell(idx_i, idx_j).value

        
        if item['Sub Segment_code'] is not None:
            segment = SubSegment(
                            name=item['Sub Segment_desc'],
                            code=item['Sub Segment_code'],
                            shortDesc=item['Sub Segment_desc'],
                            longDesc=item['Sub Segment_desc'],
                            image = str(item['Sub Segment_code'])+".jpg"
                        )
            segment.save()

def import_leaf_master():
    cwd = os.getcwd()
    xls = os.path.join(cwd, "MSP", "unique.xlsx")
    wb = xlrd.open_workbook(xls)
    sheet = wb.sheet_by_index(3)
    keys = []

    for idx_j in range(sheet.ncols):
        keys.append(sheet.cell(1, idx_j).value)
    
    for idx_i in range(2, sheet.nrows):
        item = {}
        for idx_j in range(sheet.ncols):
            item[keys[idx_j]] = sheet.cell(idx_i, idx_j).value

        
        if item['Leaf Type code'] is not None:
            segment = LeafType(
                            name=item['Leaf Type Desc'],
                            code=item['Leaf Type code'],
                            shortDesc=item['Leaf Type Desc'],
                            longDesc=item['Leaf Type Desc'],
                            image = str(item['Leaf Type code'])+".jpg"
                        )
            segment.save()           



 

def import_leaf_position_master():
    cwd = os.getcwd()
    xls = os.path.join(cwd, "MSP", "unique.xlsx")
    wb = xlrd.open_workbook(xls)
    sheet = wb.sheet_by_index(5)
    keys = []

    for idx_j in range(sheet.ncols):
        keys.append(sheet.cell(1, idx_j).value)
    
    for idx_i in range(2, sheet.nrows):
        item = {}
        for idx_j in range(sheet.ncols):
            item[keys[idx_j]] = sheet.cell(idx_i, idx_j).value

        
        if item['Leaf Position code'] is not None:
            segment = LeafPosition(
                            name=item['Leaf Position  Desc'],
                            code=item['Leaf Position code'],
                            shortDesc=item['Leaf Position  Desc'],
                            longDesc=item['Leaf Position  Desc'],
                            image = str(item['Leaf Position code'])+".jpg"
                        )
            segment.save()                     

def import_vechicle_model_master():
    cwd = os.getcwd()
    xls = os.path.join(cwd, "MSP", "unique.xlsx")
    wb = xlrd.open_workbook(xls)
    sheet = wb.sheet_by_index(6)
    keys = []

    for idx_j in range(sheet.ncols):
        keys.append(sheet.cell(1, idx_j).value)
    
    for idx_i in range(2, sheet.nrows):
        item = {}
        for idx_j in range(sheet.ncols):
            item[keys[idx_j]] = sheet.cell(idx_i, idx_j).value

        
        if item['Vehicle Model  Desc'] is not None:
            segment = VechicleModel(
                            name=item['Vehicle Model  Desc'],
                            code=item['Vehicle Model code'],
                            shortDesc=item['Vehicle Model  Desc'],
                            longDesc=item['Vehicle Model  Desc'],
                            image = str(item['Vehicle Model code'])+".jpg"
                        )
            segment.save()           

def import_vechicle_master():
    cwd = os.getcwd()
    xls = os.path.join(cwd, "MSP", "unique.xlsx")
    wb = xlrd.open_workbook(xls)
    sheet = wb.sheet_by_index(4)
    keys = []

    for idx_j in range(sheet.ncols):
        keys.append(sheet.cell(1, idx_j).value)
    
    for idx_i in range(2, sheet.nrows):
        item = {}
        for idx_j in range(sheet.ncols):
            item[keys[idx_j]] = sheet.cell(idx_i, idx_j).value

        
        if item['Vehicle code'] is not None:
            segment = Vechicle(
                            name=item['VehicleDesc'],
                            code=item['Vehicle code'],
                            shortDesc=item['VehicleDesc'],
                            longDesc=item['VehicleDesc'],
                            image = str(item['Vehicle code'])+".jpg"
                        )
            segment.save()             