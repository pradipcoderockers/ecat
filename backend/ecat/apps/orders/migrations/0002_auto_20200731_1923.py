# Generated by Django 3.0.4 on 2020-07-31 19:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='page_type',
            new_name='orderId',
        ),
    ]
