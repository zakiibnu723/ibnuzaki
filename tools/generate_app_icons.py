import os
import math
from PIL import Image, ImageDraw, ImageFilter

OUT_DIR = r"c:\Startups\.IBNUZAKIAL\public\app-icons"
os.makedirs(OUT_DIR, exist_ok=True)

def create_care360_icon():
    size = 512
    # 1. Base image
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    
    pad = 20
    radius = 110
    
    # Create squircle gradient
    grad = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(grad)
    for y in range(size):
        t = y / size
        # Brand Indigo (4F46E5) to Electric Blue (2563EB)
        r = int(79 * (1 - t) + 37 * t)
        g = int(70 * (1 - t) + 99 * t)
        b = int(229 * (1 - t) + 235 * t)
        g_draw.line([(0, y), (size, y)], fill=(r, g, b, 255))
        
    mask = Image.new("L", (size, size), 0)
    m_draw = ImageDraw.Draw(mask)
    m_draw.rounded_rectangle([(pad, pad), (size - pad, size - pad)], radius=radius, fill=255)
    
    img = Image.composite(grad, img, mask)
    draw = ImageDraw.Draw(img)
    
    # Center coordinates
    cx, cy = size // 2, size // 2 - 10
    
    # Concentric 360 radar rings
    draw.ellipse([(cx - 160, cy - 160), (cx + 160, cy + 160)], outline=(255, 255, 255, 30), width=4)
    draw.ellipse([(cx - 110, cy - 110), (cx + 110, cy + 110)], outline=(255, 255, 255, 60), width=4)
    draw.ellipse([(cx - 65, cy - 65), (cx + 65, cy + 65)], outline=(16, 185, 129, 140), width=6) # Emerald Safe Ring
    
    # Protective Geofence Pin & Beacon
    # Pin Body: A crisp modern white location pin with an emerald safe core
    pin_y = cy - 20
    pin_r = 50
    # Head circle
    draw.ellipse([(cx - pin_r, pin_y - pin_r), (cx + pin_r, pin_y + pin_r)], fill=(255, 255, 255, 255))
    # Triangle bottom
    tri = [(cx - 44, pin_y + 16), (cx + 44, pin_y + 16), (cx, pin_y + 88)]
    draw.polygon(tri, fill=(255, 255, 255, 255))
    
    # Emerald safe dot in center of pin
    draw.ellipse([(cx - 22, pin_y - 22), (cx + 22, pin_y + 22)], fill=(16, 185, 129, 255))
    draw.ellipse([(cx - 10, pin_y - 10), (cx + 10, pin_y + 10)], fill=(255, 255, 255, 255))
    
    # Live Active Telemetry Pulse Orb (top-right of pin)
    px, py = cx + 115, cy - 115
    draw.ellipse([(px - 20, py - 20), (px + 20, py + 20)], fill=(16, 185, 129, 80))
    draw.ellipse([(px - 14, py - 14), (px + 14, py + 14)], fill=(16, 185, 129, 255))
    draw.ellipse([(px - 6, py - 6), (px + 6, py + 6)], fill=(255, 255, 255, 255))
    
    out_path = os.path.join(OUT_DIR, "care360-logo.png")
    img.save(out_path, "PNG")
    print("Saved", out_path)

create_care360_icon()
