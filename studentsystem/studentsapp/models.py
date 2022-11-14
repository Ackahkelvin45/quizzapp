from django.db import models
from django.contrib.auth.models import User


class Course(models.Model):
  name=models.CharField(max_length=50)
  course_color=models.CharField(max_length=50)
  course_teacher=models.CharField(max_length=100)
  
  def __str__(self) :
     return self.name


class Quiz(models.Model):
  name=models.CharField(max_length=100,null=True)
  course=models.ForeignKey(Course,on_delete=models.CASCADE)
  number_of_questions=models.IntegerField()
  time=models.IntegerField()
  pass_score=models.IntegerField()
  completed=models.BooleanField(default=False)
  def __str__(self) :
     return self.course.name+ " " +self.name


class Question(models.Model):
  text=models.CharField(max_length=300)
  quiz=models.ForeignKey(Quiz,on_delete=models.CASCADE,name="quiz")
 
  def __str__(self) :
     return self.text

class  Answer(models.Model):
  text=models.CharField(max_length=300)
  correct=models.BooleanField(default=False)
  question=models.ForeignKey(Question,on_delete=models.CASCADE,name="questions")

  
  def __str__(self) :
     return self.text

