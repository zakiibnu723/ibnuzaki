import os
import math
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ASSET_DIR = r"c:\Startups\.IBNUZAKIAL\asset\MOBILE MOCKUP"
OUT_DIR = r"c:\Startups\.IBNUZAKIAL\public"
FONT_BOLD_PATH = r"C:\Startups\Care360\app\src\main\res\font\outfit_bold.ttf"
FONT_REG_PATH = r"C:\Startups\Care360\app\src\main\res\font\outfit_medium.ttf"

if not os.path.exists(FONT_BOLD_PATH):
    FONT_BOLD_PATH = "C:\\Windows\\Fonts\\segoeuib.ttf"
if not os.path.exists(FONT_REG_PATH):
    FONT_REG_PATH = "C:\\Windows\\Fonts\\segoeui.ttf"

def get_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except:
        return ImageFont.load_default()

def create_gradient_bg(width, height, color1, color2, direction="radial"):
    bg = Image.new("RGBA", (width, height), color1)
    draw = ImageDraw.Draw(bg)
    if direction == "horizontal":
        for x in range(width):
            t = x / width
            r = int(color1[0] * (1 - t) + color2[0] * t)
            g = int(color1[1] * (1 - t) + color2[1] * t)
            b = int(color1[2] * (1 - t) + color2[2] * t)
            draw.line([(x, 0), (x, height)], fill=(r, g, b, 255))
    elif direction == "vertical":
        for y in range(height):
            t = y / height
            r = int(color1[0] * (1 - t) + color2[0] * t)
            g = int(color1[1] * (1 - t) + color2[1] * t)
            b = int(color1[2] * (1 - t) + color2[2] * t)
            draw.line([(0, y), (width, y)], fill=(r, g, b, 255))
    return bg

def add_rounded_corners_with_shadow(img, radius=32, shadow_blur=40, shadow_color=(0, 0, 0, 70), shadow_offset=(0, 16)):
    # Round corners of image
    w, h = img.size
    mask = Image.new("L", (w, h), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([(0, 0), (w, h)], radius=radius, fill=255)
    
    rounded_img = img.convert("RGBA")
    rounded_img.putalpha(mask)
    
    # Shadow canvas
    pad = shadow_blur * 2
    shadow_w = w + pad * 2
    shadow_h = h + pad * 2
    shadow = Image.new("RGBA", (shadow_w, shadow_h), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    
    sx = pad + shadow_offset[0]
    sy = pad + shadow_offset[1]
    s_draw.rounded_rectangle([(sx, sy), (sx + w, sy + h)], radius=radius, fill=shadow_color)
    shadow = shadow.filter(ImageFilter.GaussianBlur(shadow_blur))
    
    # Paste image onto shadow
    shadow.paste(rounded_img, (pad, pad), rounded_img)
    return shadow, pad

def draw_pill_badge(draw, xy, text, font, bg_color=(255, 255, 255, 240), border_color=(220, 226, 235, 255), text_color=(15, 23, 42, 255)):
    x, y = xy
    bbox = font.getbbox(text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    pad_h = 24
    pad_v = 12
    rect = [(x, y), (x + tw + pad_h * 2, y + th + pad_v * 2)]
    draw.rounded_rectangle(rect, radius=24, fill=bg_color, outline=border_color, width=2)
    draw.text((x + pad_h, y + pad_v - 2), text, font=font, fill=text_color)
    return x + tw + pad_h * 2, y + th + pad_v * 2

print("Helper functions ready")
