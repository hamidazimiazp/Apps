from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'qrcode', views.QRCodeViewSet, basename='qrcode')

app_name = "base"

urlpatterns = router.urls


