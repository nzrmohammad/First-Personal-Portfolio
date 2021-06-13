from django.contrib import admin
from .models import Category, Contact, ContactUs, Portfolio, Home, About, Service, Profile, Skill, Experience, Education, Testimonial, Gallery
from django.utils.html import format_html


# 1 - Home Page 1 - Home Page 1 - Home Page 1 - Home Page 1 - Home Page
class HomeAdmin(admin.ModelAdmin):
    list_display = ['name','image_tag','title','logo']
    readonly_fields= ['show_photo']

    def image_tag(self, obj):
        return format_html('<img src="{}" width="80px" height="75px" />'.format(obj.image.url))
    image_tag.short_description = 'Image'

admin.site.register(Home,HomeAdmin)


# 2 - About Page 2 - About Page 2 - About Page 2 - About Page 2 - About Page
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
    list_display = ['name','image_tag']
    readonly_fields= ['show_photo']

    def image_tag(self, obj):
        return format_html('<img src="{}" width="75px" height="75px" />'.format(obj.image.url))
    image_tag.short_description = 'Image'


# 3 - Service Page 3 - Service Page 3 - Service Page 3 - Service Page 3 - Service Page
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title','name']
admin.site.register(Service,ServiceAdmin)


# 4 - Category Page 4 - Category Page 4 - Category Page 4 - Category Page 4 - Category Page
admin.site.register(Category)


# 5 - Portfolio Page 5 - Portfolio Page 5 - Portfolio Page 5 - Portfolio Page 5 - Portfolio Page
class GalleryInline(admin.TabularInline):
    model = Gallery
    extra = 1
@admin.register(Portfolio)
class GalleryAdmin(admin.ModelAdmin):
    inlines = [GalleryInline]
    list_display = ['title','category','image_tag','client','frontend','backend','website','complete_date']
    list_display_links = ['title','website']
    readonly_fields= ['show_photo']
    list_filter = ['category']
    search_fields = ['client','description']

    def image_tag(self, obj):
        return format_html('<img src="{}" width="110px" height="50px" />'.format(obj.image.url))
    image_tag.short_description = 'Image'


# 6 - Testimonial Page 6 - Testimonial Page 6 - Testimonial Page 6 - Testimonial Page 6 - Testimonial Page
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name','image_tag']
    readonly_fields= ['show_photo']

    def image_tag(self, obj):
        return format_html('<img src="{}" width="75px" height="75px" />'.format(obj.image.url))
    image_tag.short_description = 'Image'

admin.site.register(Testimonial,TestimonialAdmin)


# 7 - Contact Page 7 - Contact Page 7 - Contact Page 7 - Contact Page 7 - Contact Page
class ContactAdmin(admin.ModelAdmin):
    list_display = ['email','address','phone']
admin.site.register(Contact,ContactAdmin)


# 8 - ContactUs Page 8 - ContactUs Page 8 - ContactUs Page 8 - ContactUs Page 8 - ContactUs Page
class ContactUsAdmin(admin.ModelAdmin):
    list_display = ['name','email','subject','is_read']
    list_display_links = ['name']
    list_filter = ['is_read']
    list_editable = ['is_read']
    search_fields = ['name','subject','message']
    readonly_fields = ['name','subject','email','message']

    def has_add_permission(self, request):
        return False

    # def has_delete_permission(self, request, obj=None):
    #     return False
admin.site.register(ContactUs,ContactUsAdmin)
