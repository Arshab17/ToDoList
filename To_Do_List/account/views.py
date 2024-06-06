from django.shortcuts import render
from rest_framework .views import APIView
from rest_framework .response import Response
from django.contrib.auth import authenticate,logout,login
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.authtoken.models import Token
# Create your views here.
class UserRegister(APIView):
    permission_classes=[]
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        name = request.data.get('name')
        if not User.objects.filter(username = username):
            User.objects.create_user(
                username = username,
                password = password,
                first_name = name
            )
            return Response(
                {
                    'message':'Account registration successful'
                },
                status = status.HTTP_200_OK
            )
        return Response(
            {
                'message':'Username already exists'
            },
            status = status.HTTP_400_BAD_REQUEST
        )
        
class UserLogin(APIView):
    permission_classes=[]
    
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(username=username, password=password)
        print(user)
        #  "token": "49df50c30ef57e219a1bcc09320ef9d2517baab3"

        if user:
            token,created = Token.objects.get_or_create(user = user)
            return Response(
                {
                    "message":"Login successful",
                    "token":token.key
                }
            )
            
        return Response(
            {
                "message":"Login failed .try valid credentials!"
            }, status=status.HTTP_401_UNAUTHORIZED
        )