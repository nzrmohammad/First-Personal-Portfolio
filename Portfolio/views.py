from django.http import JsonResponse
from django.shortcuts import render
from .models import Gallery, Home, About, Profile, Skill, Experience, Education, Service, Portfolio, Testimonial, Contact, Category, ContactUs
from .forms import ContactUsForm

def home_page(request):
    form = ContactUsForm()
    home = Home.objects.latest('updated')
    about = About.objects.latest('updated')
    profiles = Profile.objects.filter(about=about)
    skills = Skill.objects.filter(about=about)
    experiences = Experience.objects.all()
    educations = Education.objects.all()
    services = Service.objects.all()
    categories = Category.objects.filter()
    portfolio = Portfolio.objects.all()
    galleries = Gallery.objects.filter(portfolio=portfolio)
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
        'portfolios':portfolio,
        'galleries':galleries,
        'testimonials':testimonials,
        'contact':contact,
        'form':ContactUsForm
    }

    if request.is_ajax():
        form = ContactUsForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'msg':'Success'})
        else:
            return JsonResponse({'msg':'Error'})

    return render(request, 'home.html',context)
