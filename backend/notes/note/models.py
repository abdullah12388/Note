from django.db import models

# Create your models here.


class Note(models.Model):
    note = models.TextField(max_length=100)

    def __str__(self):
        return self.note
