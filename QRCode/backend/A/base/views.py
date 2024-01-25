from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import QRCode
from .serializers import QRCodeSerializer
from django.http import Http404


class QRCodeViewSet(viewsets.ViewSet):
    
    def list(self, request): 
        queryset = QRCode.objects.all()
        serializer = QRCodeSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def create(self, request):
        ser_data = QRCodeSerializer(data=request.data)
        if ser_data.is_valid():
            ser_data.save()
            return Response(ser_data.data, status=status.HTTP_201_CREATED)
        return Response(ser_data.errors, status=status.HTTP_400_BAD_REQUEST)


    def retrieve(self, request, pk=None): 
        queryset = QRCode.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = QRCodeSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def update(self, request, pk=None): 
        pass
    

    def partial_update(self, request, pk=None): 
        pass


    def destroy(self, request, pk=None):
        code = get_object_or_404(QRCode, pk=pk)
        code.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)