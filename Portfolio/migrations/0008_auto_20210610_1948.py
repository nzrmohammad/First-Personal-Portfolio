# Generated by Django 3.2.4 on 2021-06-10 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Portfolio', '0007_auto_20210606_1347'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='about',
            options={'verbose_name_plural': '2 - About'},
        ),
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name_plural': '4 - Category'},
        ),
        migrations.AlterModelOptions(
            name='contact',
            options={'verbose_name_plural': '7 - Contact'},
        ),
        migrations.AlterModelOptions(
            name='contactus',
            options={'verbose_name': 'CONTACT US', 'verbose_name_plural': '8 - Contact Us'},
        ),
        migrations.AlterModelOptions(
            name='home',
            options={'verbose_name_plural': '1 - Home'},
        ),
        migrations.AlterModelOptions(
            name='portfolio',
            options={'verbose_name_plural': '5 - Portfolio'},
        ),
        migrations.AlterModelOptions(
            name='service',
            options={'verbose_name_plural': '3 - Service'},
        ),
        migrations.AlterModelOptions(
            name='testimonial',
            options={'verbose_name_plural': '6 - Testimonial'},
        ),
        migrations.RemoveField(
            model_name='about',
            name='name',
        ),
        migrations.AlterField(
            model_name='contactus',
            name='is_read',
            field=models.BooleanField(default=False, verbose_name='Read / Unread'),
        ),
    ]