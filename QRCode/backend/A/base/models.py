from django.db import models
import qrcode as qr
from io import BytesIO
from django.core.files.base import ContentFile
from PIL import Image


class QRCode(models.Model):
    title = models.CharField(max_length = 120)
    description = models.CharField(max_length = 120)
    image = models.ImageField(blank=True, upload_to="qrcode/%Y/%m/%d/")
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    
    def __str__(self):
        return self.title
    
    
    class Meta:
        ordering=("title",)
    
    
    def save(self, *args, **kwargs):
        
        if not self.image:
            qrcode_img = qr.make(f"{self.title}\n{self.description}\n{self.created}")
            canvas = Image.new("RGB", (qrcode_img.pixel_size,qrcode_img.pixel_size), "white")
            canvas.paste(qrcode_img)
            fname = f"qr_code_{self.title}.png"
            buffer = BytesIO()
            canvas.save(buffer, "PNG")
            self.image.save(fname, ContentFile(buffer.getvalue()), save=False)
            
        super().save(*args, **kwargs)