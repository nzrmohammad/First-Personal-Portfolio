# Generated by Django 3.2.2 on 2021-05-12 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Portfolio', '0002_about_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portfolio',
            name='portfolio_type',
        ),
        migrations.AlterField(
            model_name='about',
            name='name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='education',
            name='description_1',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='experience',
            name='description_1',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='description',
            field=models.TextField(max_length=120),
        ),
    ]
