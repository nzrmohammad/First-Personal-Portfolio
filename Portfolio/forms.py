from django import forms
from .models import ContactUs

class ContactUsForm(forms.ModelForm):
    class Meta:
        model = ContactUs
        fields = ('name', 'subject', 'email', 'message')
        widgets={
            'name': forms.TextInput(attrs={'placeholder': 'Enter Your Name {Required}','class': 'input-control'}),
            'subject': forms.TextInput(attrs={'placeholder': 'Enter Your Subject {Required}','class': 'input-control'}),
            'email': forms.TextInput(attrs={'placeholder': 'Enter Your Email {Required}','class': 'input-control'}),
            'message': forms.Textarea(attrs={'placeholder': 'Enter Your Message {Required}','class': 'input-control'})}
