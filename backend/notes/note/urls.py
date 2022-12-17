from django.urls import path
from . import views

urlpatterns = [
    path('note/', views.NotePost.as_view()),
    path('note/<int:pk>/', views.NoteDetails.as_view()),
]
