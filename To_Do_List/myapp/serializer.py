from rest_framework import serializers
from .models import TodoListItem

class TodoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoListItem
        fields = ['id','title','description','status','due_date'] 