# Generated by Django 3.2.2 on 2021-05-12 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='about',
            name='name',
            field=models.CharField(default='', max_length=55),
            preserve_default=False,
        ),
    ]
