from django.shortcuts import render
from .models import Gallery, Home, About, Profile, Skill, Experience, Education, Service, Portfolio, Testimonial, Contact, Category
# Create your views here.

def home_page(request):
    home = Home.objects.latest('updated')
    about = About.objects.latest('updated')
    profiles = Profile.objects.filter(about=about)
    skills = Skill.objects.filter(about=about)
    experiences = Experience.objects.all()
    educations = Education.objects.all()
    services = Service.objects.all()
    categories = Category.objects.filter()
    portfolios = Portfolio.objects.all()
    galleries = Gallery.objects.filter(portfolio=portfolios)
    testimonials = Testimonial.objects.all()
    contact = Contact.objects.latest('updated')
    context = {
        'home':home,
        'about':about,
        'profiles':profiles,
        'skills':skills,
        'experiences':experiences,
        'educations':educations,
        'services':services,
        'categories':categories,
        'portfolios':portfolios,
        'galleries':galleries,
        'testimonials':testimonials,
        'contact':contact
    }
    return render(request, 'home.html',context)
