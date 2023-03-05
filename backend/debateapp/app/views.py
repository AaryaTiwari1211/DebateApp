from django.shortcuts import render ,redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth import authenticate,login
from debateapp import settings
from django.core.mail import send_mail

# Create your views here.


def signup(request):
    if request.method=="POST":
        username=request.POST['username']  
        email=request.POST['email']
        firstname=request.POST['firstname']
        lastname=request.POST['lastname']
        pass1=request.POST['pass1']
        pass2=request.POST['pass2']
        if User.objects.filter(username=username):
            messages.error(request,"Username is already used")
            return redirect('signup')
        
        if User.objects.filter(email=email):
            messages.error(request,"Email has already been used")
            return redirect('signup')

        if len(username)>10:
            messages.error(request,'Username is too long')
            return redirect('signup')
        
        if pass1!=pass2:
            messages.rror(request,"Passwords didn't match")
            return redirect('signup')

        if not username.isalnum():
            messages.error(request,"Username must be Alpha-numeric")
            return redirect('signup')


        myuser=User(username=username,email=email,password=pass1,first_name=firstname,last_name=lastname)
        myuser.save()
        messages.success(request,"Your account has been created succesfully")
        # from_email=settings.EMAIL_HOST_USER
        # to_list=[myuser.email]
        # send_mail(subject,message,from_email,to_list,fail_silently=True)
        # Welcome Email

        # subject="Welcome To debate website"
        # message="Hello" + myuser.first_name+". thank you for registering."

        # from_email=settings.EMAIL_HOST_USER
        # to_list=[myuser.email]
        # send_mail(subject,message,from_email,to_list,fail_silently=True)
        return redirect('signin')
    return render(request, 'app/signup.html')

def signin(request):
    if request.method=="POST":
        username=request.POST['username']
        pass1=request.POST['pass1']
        user=authenticate(username=username, password=pass1)

        if user is not None:
            login(request,user)
        else:
            messages.error(request,"Bad credentials")
            redirect('app/signin.html')
    return render(request,'app/signin.html')