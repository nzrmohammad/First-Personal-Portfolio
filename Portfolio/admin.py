from django.contrib import admin
from .models import Category, Contact, ContactUs, Portfolio, Home, About, Service, Profile, Skill, Experience, Education, Testimonial, Gallery

# Register your models here.
admin.site.register(Home)

class ProfileInline(admin.TabularInline):
    model = Profile
    extra = 1
class SkillInline(admin.TabularInline):
    model = Skill
    extra = 1
class ExperienceInline(admin.TabularInline):
    model = Experience
    extra = 1
class EducationInline(admin.TabularInline):
    model = Education
    extra = 1       
@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    inlines = [ProfileInline, SkillInline, ExperienceInline, EducationInline]

admin.site.register(Service)

admin.site.register(Category)

class GalleryInline(admin.TabularInline):
    model = Gallery
    extra = 1
@admin.register(Portfolio)
class GalleryAdmin(admin.ModelAdmin):
    inlines = [GalleryInline,]

admin.site.register(Testimonial)

admin.site.register(Contact)

admin.site.register(ContactUs)
