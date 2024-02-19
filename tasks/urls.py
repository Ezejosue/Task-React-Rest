from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from . import views

# api versioning
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSet, 'tasks')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Tasks API',
         description='RESTful API for managing tasks.')),
]

"""
URL patterns for the tasks app.

This module defines the URL patterns for the tasks app. It includes the API versioning and registers the TaskViewSet with the 'tasks' endpoint.

Example usage:
    urlpatterns = [
        path('api/v1/', include(router.urls)),
    ]
"""
