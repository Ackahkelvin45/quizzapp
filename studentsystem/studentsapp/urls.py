from django.urls import path,include
from . import views
urlpatterns=[
  path("courses/" ,views.getCourses,name="course",),
    path("quiz/" ,views.getQuizes,name="quiz"),
    path("coursequiz/<int:courseid>",views.getQuiz,name="getquiz"),
    path("questions/<int:quizid>",views.getQuestion,name="getquestion"),
      path("answers/<int:questionid>",views.getAnswer,name="getanswer"),
    path("correctanswers/<int:questionid>",views.getCorrectAnswer,name="getanswer"),
    path("login/",views.login,name="login")

]