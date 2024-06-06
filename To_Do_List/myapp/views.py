from django.shortcuts import render
from .serializer import TodoItemSerializer
from.models import TodoListItem
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# to view or create the article 
class TodoListAPIView(APIView):
    permission_classes = []
    def get(self,request):
        if request.method == 'GET':
            todo = TodoListItem.objects.all()
            serializer = TodoItemSerializer(todo,many=True)
            return Response(serializer.data)
        
        
    def post(self,request):
        serializer = TodoItemSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
#get the data with id, or update or delete.   
class GetUpadateOrDelete(APIView):
    permission_classes = []
    def get(self,request,id):
        todo = TodoListItem.objects.get(id =id)
        serializer = TodoItemSerializer(todo)
        return Response(serializer.data)
        
    def put(self,request,id):
        todo = TodoListItem.objects.get(id = id)
        serializer = TodoItemSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                            )
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,id):
        todo = TodoListItem.objects.get(id=id)
        todo.delete()
        return Response(
            status=status.HTTP_204_NO_CONTENT
        )