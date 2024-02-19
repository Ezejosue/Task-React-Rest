from django.contrib import admin
from .models import Task

# Register your models here.

# The admin.site.register(Task) line tells Django to create an admin interface for the Task model.
admin.site.register(Task)
