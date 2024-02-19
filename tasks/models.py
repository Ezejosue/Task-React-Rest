from django.db import models

# Create your models here.

# Task model


class Task(models.Model):
    """
    Represents a task.

    Attributes:
        title (str): The title of the task.
        description (str): The description of the task.
        completed (bool): Indicates whether the task is completed or not.
        created (datetime): The date and time when the task was created.
    """

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """
        Returns a string representation of the Task object.

        The string includes the task's title, completion status, creation date, and description.

        Returns:
            str: A string representation of the Task object.
        """
        return self.title + " - " + str(self.completed) + " - " + str(self.created) + " - " + self.description
