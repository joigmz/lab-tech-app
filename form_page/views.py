from django.shortcuts import render

# Create your views here.

def index(request):
    op = 100 + 200

    context = {
        'data': op
    }

    return render(request, "index.html", context = context )