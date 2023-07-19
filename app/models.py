from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Aula(models.Model):
    data = models.DateField()
    hora = models.TimeField()
    aluno = models.ForeignKey(User, on_delete=models.CASCADE)
