
from  rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import CourseSerializer,QuizSerializer,QuestionsSerializer,AnswerSerializer
from rest_framework.authtoken.serializers import  AuthTokenSerializer
from knox.auth import AuthToken


@api_view(["POST"])
def login(request):
  serializer=AuthTokenSerializer(data=request.data)
  serializer.is_valid(raise_exception=True)
  user=serializer.validated_data["user"]
  token=AuthToken.objects.create(user)[1]

  return Response({
    "user_info":{
      "id":user.id,
      "username":user.username
    },
    "token":token
  })



@api_view(["GET"])
def getCourses(request):
  user=request.user
  if user.is_authenticated:
    courses=Course.objects.all()
    serializer=CourseSerializer(courses,many=True)

    return Response (serializer.data)
 
  return Response(
    {
      "message":"User must login"
    }
  ) 


@api_view(["GET"])
def getQuizes(request):
  quizes=Quiz.objects.all()
  serializer=QuizSerializer(quizes,many=True)

  return Response (serializer.data)

@api_view(["GET"])
def getQuiz(request,courseid):
  quiz= Quiz.objects.filter(course=courseid)
  serializer=QuizSerializer(quiz,many=True)

  return Response (serializer.data)
  
@api_view(["GET"])
def getQuestion(request,quizid):
  questions= Question.objects.filter(quiz=quizid)
  serializer= QuestionsSerializer(questions,many=True)

  return Response (serializer.data)

@api_view(["GET"])
def getAnswer(request,questionid):
  answers= Answer.objects.filter(questions=questionid)
  serializer=AnswerSerializer(answers,many=True)

  return Response (serializer.data)


@api_view(["GET"])
def getCorrectAnswer(request,questionid):
  answers= Answer.objects.filter(questions=questionid,correct=True)
  serializer=AnswerSerializer(answers,many=True)

  return Response (serializer.data)