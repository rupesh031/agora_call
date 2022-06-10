
from django.urls import path
from . import views

urlpatterns=[
    path('',views.lobby,name="Lobby"),
    path('room/',views.room,name='room')

]