from django.db import models

# Create your models here.

class Home(models.Model):
    greetings = models.CharField(max_length=55)
    name = models.CharField(max_length=55)
    title = models.CharField(max_length=55)
    logo = models.CharField(max_length=2)
    image = models.ImageField(upload_to='Home/')
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class About(models.Model):
    description_1 = models.TextField()
    description_2 = models.TextField()
    image = models.ImageField(upload_to='About/')
    name = models.CharField(max_length=30)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Profile(models.Model):
    about = models.ForeignKey(About, on_delete=models.CASCADE)
    name = models.CharField(max_length=15)
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
    date = models.CharField(max_length=55)
    title = models.CharField(max_length=55)
    company = models.CharField(max_length=55)
    description_1 = models.CharField(max_length=250)

    def __str__(self):
        return self.title

class Education(models.Model):
    about = models.ForeignKey(About, on_delete=models.CASCADE)
    date = models.CharField(max_length=55)
    certificate = models.CharField(max_length=55)
    description_1 = models.CharField(max_length=250)

    def __str__(self):
        return self.certificate

class Service(models.Model):
    name = models.CharField(max_length=20)
    title = models.CharField(max_length=30)
    description_1 = models.CharField(max_length=120)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
class Category(models.Model):
    name = models.CharField(max_length=55)

    def __str__(self):
        return self.name

class Portfolio(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=120)
    description = models.TextField(max_length=120)
    image = models.ImageField(upload_to='Portfolio/')
    date = models.DateTimeField(auto_now_add=True)
    client = models.CharField(max_length=45)
    tools = models.CharField(max_length=45)
    website = models.URLField(blank=True, null=True)
    complete_date = models.DateField()

    def __str__(self):
        return self.title

class Gallery(models.Model):
    portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='Portfolio/')


class Testimonial(models.Model):
    description = models.TextField()
    image = models.ImageField(upload_to='Testimonial/')
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Contact(models.Model):
    phone = models.CharField(max_length=15)
    email = models.CharField(max_length=25)
    address = models.CharField(max_length=100)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email

class ContactUs(models.Model):
    name = models.CharField(max_length=35)
    subject = models.CharField(max_length=30)
    email = models.CharField(max_length=35)
    message = models.TextField()

    def __str__(self):
        return "Message From" + " -----> " + self.email