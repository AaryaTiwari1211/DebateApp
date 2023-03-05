from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.signup, name='signup'),
    path('signup', views.signup, name='signup'),
    path('signin', views.signin, name='signin'),
]