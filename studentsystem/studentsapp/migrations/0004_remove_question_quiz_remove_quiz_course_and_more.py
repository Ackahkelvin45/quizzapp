# Generated by Django 4.1.2 on 2022-11-12 18:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('studentsapp', '0003_remove_result_user_delete_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='quiz',
        ),
        migrations.RemoveField(
            model_name='quiz',
            name='course',
        ),
        migrations.RemoveField(
            model_name='result',
            name='quiz',
        ),
        migrations.DeleteModel(
            name='Answer',
        ),
        migrations.DeleteModel(
            name='Course',
        ),
        migrations.DeleteModel(
            name='Question',
        ),
        migrations.DeleteModel(
            name='Quiz',
        ),
        migrations.DeleteModel(
            name='Result',
        ),
    ]
