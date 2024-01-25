from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import QRCode
from .serializers import QRCodeSerializer
from django.http import Http404

class QrcodeApi(APIView):
    
    def get_object(self, pk):
        try:
            return QRCode.objects.get(pk=pk)
        except QRCode.DoesNotExist:
            raise Http404

        
    def get(self, request):
        codes = QRCode.objects.all()
        ser_data = QRCodeSerializer(instance=codes, many=True).data
        
        return Response(ser_data, status=status.HTTP_200_OK)
    
    
    def post(self, request):
        ser_data = QRCodeSerializer(data=request.data)
        if ser_data.is_valid():
            ser_data.save()
            return Response(ser_data.data, status=status.HTTP_201_CREATED)
        return Response(ser_data.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def delete(self, request, pk):
        code = self.get_object(pk)
        code.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)