from .import views
from django.urls import  path

urlpatterns = [
    path('get_or_create/', views.TodoListAPIView.as_view()),
    path('update_or_delete/<int:id>/',views.GetUpadateOrDelete.as_view())
]