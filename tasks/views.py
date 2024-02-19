from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.

# Task view


class TaskViewSet(viewsets.ModelViewSet):
    """
    A viewset for the Task model.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
