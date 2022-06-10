from django.shortcuts import render

# Create your views here.
def lobby(request):
    return render(request,'core/lobby.html')

def room(request):
    return render(request,'core/room.html')