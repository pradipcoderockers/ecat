# Generated by Django 3.0.4 on 2020-09-19 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0002_auto_20200705_0709'),
    ]

    operations = [
        migrations.AddField(
            model_name='state',
            name='depo_email',
            field=models.TextField(default=True, null=True),
        ),
    ]
