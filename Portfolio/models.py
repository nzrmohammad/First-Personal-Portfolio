from django.db import models
from django.utils.safestring import mark_safe

# 1 - Home Page 1 - Home Page 1 - Home Page 1 - Home Page 1 - Home Page
class Home(models.Model):
    greetings = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    logo = models.CharField(max_length=1)
    image = models.ImageField(upload_to='Home/')
    updated = models.DateTimeField(auto_now=True)

    def show_photo(self):
        return mark_safe('<img src="{}" width="125" />'.format(self.image.url))
    show_photo.short_description = 'Image Preview'
    show_photo.allow_tags = True

    class Meta:
        verbose_name_plural = '1 - Home'

    def __str__(self):
        return self.name


# 2 - About Page 2 - About Page 2 - About Page 2 - About Page 2 - About Page
class About(models.Model):
    description_1 = models.TextField(max_length=350)
    description_2 = models.TextField(max_length=170)
    image = models.ImageField(upload_to='About/')
    name = models.CharField(max_length=25)
    updated = models.DateTimeField(auto_now=True)

    def show_photo(self):
        return mark_safe('<img src="{}" width="250" />'.format(self.image.url))
    show_photo.short_description = 'Image Preview'
    show_photo.allow_tags = True

    class Meta:
        verbose_name_plural = '2 - About'

    def __str__(self):
        return self.name

class Profile(models.Model):
    about = models.ForeignKey(About, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    link = models.URLField()

    def __str__(self):
        return self.name

class Skill(models.Model):
    about = models.ForeignKey(About, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    percent = models.CharField(max_length=3)

    def __str__(self):
        return self.name

class Experience(models.Model):
    about = models.ForeignKey(About, on_delete=models.CASCADE)
    date = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    description_1 = models.CharField(max_length=150)

    def __str__(self):
        return self.title

class Education(models.Model):
    about = models.ForeignKey(About, on_delete=models.CASCADE)
    date = models.CharField(max_length=50)
    certificate = models.CharField(max_length=50)
    description_1 = models.CharField(max_length=150)

    def __str__(self):
        return self.certificate


# 3 - Service Page 3 - Service Page 3 - Service Page 3 - Service Page 3 - Service Page
class Service(models.Model):
    name = models.CharField(max_length=15)
    title = models.CharField(max_length=20)
    description_1 = models.TextField(max_length=150)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = '3 - Service'

    def __str__(self):
        return self.title


# 4 - Category Page 4 - Category Page 4 - Category Page 4 - Category Page 4 - Category Page
class Category(models.Model):
    name = models.CharField(max_length=35)

    class Meta:
        verbose_name_plural = '4 - Category'

    def __str__(self):
        return self.name


# 5 - Portfolio Page 5 - Portfolio Page 5 - Portfolio Page 5 - Portfolio Page 5 - Portfolio Page
class Portfolio(models.Model):
    title = models.CharField(max_length=50)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(max_length=350)
    image = models.ImageField(upload_to='Portfolio/')
    date = models.DateTimeField(auto_now_add=True)
    client = models.CharField(max_length=35)
    frontend = models.CharField(max_length=35)
    backend = models.CharField(max_length=35)
    website = models.URLField()
    complete_date = models.DateField()

    def show_photo(self):
        return mark_safe('<img src="{}" width="250" />'.format(self.image.url))
    show_photo.short_description = 'Image Preview'
    show_photo.allow_tags = True

    class Meta:
        verbose_name_plural = '5 - Portfolio'

    def __str__(self):
        return self.title

class Gallery(models.Model):
    portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='Portfolio/')

    def __str__(self):
        return "Image " + '1'


# 6 - Testimonial Page 6 - Testimonial Page 6 - Testimonial Page 6 - Testimonial Page 6 - Testimonial Page
class Testimonial(models.Model):
    description = models.TextField(max_length=200)
    image = models.ImageField(upload_to='Testimonial/')
    name = models.CharField(max_length=30)

    def show_photo(self):
        return mark_safe('<img src="{}" width="150" />'.format(self.image.url))
    show_photo.short_description = 'Image Preview'
    show_photo.allow_tags = True

    class Meta:
        verbose_name_plural = '6 - Testimonial'

    def __str__(self):
        return self.name


# 7 - Contact Page 7 - Contact Page 7 - Contact Page 7 - Contact Page 7 - Contact Page
class Contact(models.Model):
    phone = models.CharField(max_length=15)
    email = models.CharField(max_length=25)
    address = models.CharField(max_length=100)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = '7 - Contact'

    def __str__(self):
        return self.email


# 8 - ContactUs Page 8 - ContactUs Page 8 - ContactUs Page 8 - ContactUs Page 8 - ContactUs Page
class ContactUs(models.Model):
    name = models.CharField(max_length=35)
    subject = models.CharField(max_length=30)
    email = models.CharField(max_length=35)
    message = models.TextField()
    is_read = models.BooleanField(default=False , verbose_name='Read / Unread')

    class Meta:
        verbose_name = 'CONTACT US'
        verbose_name_plural = '8 - Contact Us'

    def __str__(self):
        return "Message From" + " -----> " + self.email