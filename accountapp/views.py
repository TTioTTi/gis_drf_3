from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response


# API Guide - Views - Function Based Views
@api_view()
def hello_world(request):
    return Response({"message": "hello world"})
