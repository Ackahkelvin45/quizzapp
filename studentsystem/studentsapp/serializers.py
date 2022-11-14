from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User




class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model=User
    fields=["username","id"]




class   CourseSerializer(serializers.ModelSerializer):
  class Meta:
    model=Course
    fields="__all__"


class QuizSerializer(serializers.ModelSerializer):
  class Meta:
    model=Quiz
    fields="__all__"

class QuestionsSerializer(serializers.ModelSerializer):
  class Meta:
    model=Question
    fields="__all__"
    
    
class AnswerSerializer(serializers.ModelSerializer):
  class Meta:
    model=Answer
    fields="__all__"

