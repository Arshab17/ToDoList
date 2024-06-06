from django.db import models

# Create your models here.
class TodoListItem(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=20,choices=[('pending','Pending'),('completed','Completed')])
    due_date = models.DateField()
    
    def __str__(self):
        return self.title
    
    
    