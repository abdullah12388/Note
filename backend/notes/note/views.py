from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import NoteSerializer
from .models import Note
from django.http import Http404


# Create your views here.

class NotePost(APIView):
    def get(self, request, format=None):
        notes_obj = Note.objects.all()
        serializer_obj = NoteSerializer(notes_obj, many=True)
        return Response(serializer_obj.data)

    def post(self, request, format=None):
        serializer_obj = NoteSerializer(data=request.data)
        if serializer_obj.is_valid():
            serializer_obj.save()
            return Response(serializer_obj.data)
        return Response(serializer_obj.errors, status=status.HTTP_400_BAD_REQUEST)


class NoteDetails(APIView):
    def get_object(self, pk):
        try:
            return Note.objects.get(id=pk)
        except Note.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        note_obj = self.get_object(pk)
        serializer_obj = NoteSerializer(note_obj)
        return Response(serializer_obj.data)

    def put(self, request, pk):
        note_obj = self.get_object(pk)
        serializer_obj = NoteSerializer(note_obj, data=request.data)
        if serializer_obj.is_valid():
            serializer_obj.save()
            return Response(serializer_obj.data)
        return Response(serializer_obj.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        note_obj = self.get_object(pk)
        note_obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
