from django.urls import path
from . import views

app_name = "base"

urlpatterns = [
    path("qrcode", views.QrcodeApi.as_view(), name="qrcode"),
]