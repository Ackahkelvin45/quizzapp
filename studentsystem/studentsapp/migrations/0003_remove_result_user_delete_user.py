# Generated by Django 4.1.2 on 2022-11-12 18:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('studentsapp', '0002_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='result',
            name='user',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
