import os
from PIL import Image, ImageDraw, ImageFilter

PUBLIC_DIR = r"c:\Startups\.IBNUZAKIAL\public"
MOCKUP_DIR = r"c:\Startups\.IBNUZAKIAL\asset\MOBILE MOCKUP"
ASSET_DIR = r"c:\Startups\.IBNUZAKIAL\asset"

def add_smooth_shadow(img, radius=36, shadow_blur=50, opacity=0.18, offset_y=24):
    w, h = img.size
    mask = Image.new("L", (w, h), 0)
    md = ImageDraw.Draw(mask)
    md.rounded_rectangle([(0, 0), (w, h)], radius=radius, fill=255)
    
    rounded = img.convert("RGBA")
    rounded.putalpha(mask)
    
    pad = shadow_blur * 2
    sw, sh = w + pad * 2, h + pad * 2
    shadow = Image.new("RGBA", (sw, sh), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    
    sd.rounded_rectangle([(pad, pad + offset_y), (pad + w, pad + h + offset_y)], radius=radius, fill=(15, 23, 42, int(255 * opacity)))
    sd.rounded_rectangle([(pad + 10, pad + offset_y//2), (pad + w - 10, pad + h + offset_y//2)], radius=radius, fill=(15, 23, 42, int(255 * opacity * 0.75)))
    
    shadow = shadow.filter(ImageFilter.GaussianBlur(shadow_blur))
    shadow.paste(rounded, (pad, pad), rounded)
    return shadow, pad

def create_horizontal_studio_bg(w, h, top_col, bottom_col, glow_col=None):
    bg = Image.new("RGBA", (w, h), top_col)
    draw = ImageDraw.Draw(bg)
    for y in range(h):
        t = y / h
        r = int(top_col[0] * (1 - t) + bottom_col[0] * t)
        g = int(top_col[1] * (1 - t) + bottom_col[1] * t)
        b = int(top_col[2] * (1 - t) + bottom_col[2] * t)
        draw.line([(0, y), (w, y)], fill=(r, g, b, 255))
        
    if glow_col:
        glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        g_draw = ImageDraw.Draw(glow)
        cx, cy = w // 2, h // 2
        max_r = int(w * 0.45)
        g_draw.ellipse([(cx - max_r, cy - int(h * 0.4)), (cx + max_r, cy + int(h * 0.4))], fill=glow_col)
        glow = glow.filter(ImageFilter.GaussianBlur(150))
        bg = Image.alpha_composite(bg, glow)
        
    return bg

# ==============================================================================
# 1. AIRDROP X - SLIDE 1 & SLIDE 2
# ==============================================================================
def build_airdrop_mockups():
    print("Building AeroDrop Mockups...")
    W, H = 1920, 1080
    
    p1 = os.path.join(MOCKUP_DIR, "AIRDROPX-LSITING.jpg")
    p2 = os.path.join(MOCKUP_DIR, "AIRDROPX-LSITING2.jpg")
    img1 = Image.open(p1)
    img2 = Image.open(p2)
    
    # Slide 1: Duo
    bg1 = create_horizontal_studio_bg(W, H, (244, 247, 252), (232, 238, 246), glow_col=(6, 182, 212, 28))
    target_h = 920
    s1 = target_h / img1.height
    w1 = int(img1.width * s1)
    img1_scaled = img1.resize((w1, target_h), Image.Resampling.LANCZOS)
    
    s2 = target_h / img2.height
    w2 = int(img2.width * s2)
    img2_scaled = img2.resize((w2, target_h), Image.Resampling.LANCZOS)
    
    card1, pad1 = add_smooth_shadow(img1_scaled, radius=36, shadow_blur=44, opacity=0.16, offset_y=22)
    card2, pad2 = add_smooth_shadow(img2_scaled, radius=36, shadow_blur=44, opacity=0.16, offset_y=22)
    
    gap = 70
    total_w = w1 + w2 + gap
    start_x = (W - total_w) // 2
    pos_y = (H - target_h) // 2
    bg1.paste(card1, (start_x - pad1, pos_y - pad1), card1)
    bg1.paste(card2, (start_x + w1 + gap - pad2, pos_y - pad2), card2)
    bg1.convert("RGB").save(os.path.join(PUBLIC_DIR, "airdrop-x.png"), "JPEG", quality=96)
    
    # Slide 2: Centered Radar Close-up presentation
    bg2 = create_horizontal_studio_bg(W, H, (242, 246, 252), (230, 236, 246), glow_col=(79, 70, 229, 25))
    th2 = 940
    sw1 = int(img1.width * (th2 / img1.height))
    card_radar, prad = add_smooth_shadow(img1.resize((sw1, th2), Image.Resampling.LANCZOS), radius=40, shadow_blur=48, opacity=0.18, offset_y=24)
    bg2.paste(card_radar, ((W - sw1)//2 - prad, (H - th2)//2 - prad), card_radar)
    bg2.convert("RGB").save(os.path.join(PUBLIC_DIR, "airdrop-x-2.png"), "JPEG", quality=96)

# ==============================================================================
# 2. SCROLLSNAP
# ==============================================================================
def build_scrollsnap_mockup():
    print("Building ScrollSnap Mockup...")
    W, H = 1920, 1080
    bg = create_horizontal_studio_bg(W, H, (241, 246, 250), (229, 238, 245), glow_col=(14, 165, 233, 26))
    
    p = os.path.join(MOCKUP_DIR, "SCROLLSNAP-LISTING.jpg")
    raw = Image.open(p)
    cropped = raw.crop((0, 230, raw.width, 2140))
    
    target_h = 940
    s = target_h / cropped.height
    tw = int(cropped.width * s)
    scaled = cropped.resize((tw, target_h), Image.Resampling.LANCZOS)
    
    card, pad = add_smooth_shadow(scaled, radius=40, shadow_blur=48, opacity=0.18, offset_y=24)
    bg.paste(card, ((W - tw) // 2 - pad, (H - target_h) // 2 - pad), card)
    bg.convert("RGB").save(os.path.join(PUBLIC_DIR, "scrollsnap.png"), "JPEG", quality=96)

# ==============================================================================
# 3. STICK.IT - SLIDE 1 & SLIDE 2
# ==============================================================================
def build_stickit_mockups():
    print("Building Stick.it Mockups...")
    W, H = 1920, 1080
    p_main = os.path.join(MOCKUP_DIR, "STICKIT-MAIN.jpg")
    p_list = os.path.join(MOCKUP_DIR, "STICKIT-LISTING.jpg")
    
    raw_main = Image.open(p_main)
    raw_list = Image.open(p_list)
    crop_main = raw_main.crop((0, 88, raw_main.width, 2280))
    crop_list = raw_list.crop((0, 230, 1080, 2140))
    
    # Slide 1: Duo
    bg1 = create_horizontal_studio_bg(W, H, (247, 244, 254), (237, 232, 250), glow_col=(168, 85, 247, 28))
    target_h = 920
    s1 = target_h / crop_main.height
    w1 = int(crop_main.width * s1)
    scaled1 = crop_main.resize((w1, target_h), Image.Resampling.LANCZOS)
    
    s2 = target_h / crop_list.height
    w2 = int(crop_list.width * s2)
    scaled2 = crop_list.resize((w2, target_h), Image.Resampling.LANCZOS)
    
    card1, pad1 = add_smooth_shadow(scaled1, radius=38, shadow_blur=46, opacity=0.16, offset_y=22)
    card2, pad2 = add_smooth_shadow(scaled2, radius=38, shadow_blur=46, opacity=0.16, offset_y=22)
    
    gap = 70
    total_w = w1 + w2 + gap
    start_x = (W - total_w) // 2
    pos_y = (H - target_h) // 2
    bg1.paste(card1, (start_x - pad1, pos_y - pad1), card1)
    bg1.paste(card2, (start_x + w1 + gap - pad2, pos_y - pad2), card2)
    bg1.convert("RGB").save(os.path.join(PUBLIC_DIR, "stickercapture.png"), "JPEG", quality=96)
    
    # Slide 2: Centered App collections focus
    bg2 = create_horizontal_studio_bg(W, H, (246, 243, 253), (236, 231, 249), glow_col=(217, 70, 239, 24))
    th2 = 940
    sw_main = int(crop_main.width * (th2 / crop_main.height))
    card_main_focus, pm = add_smooth_shadow(crop_main.resize((sw_main, th2), Image.Resampling.LANCZOS), radius=40, shadow_blur=48, opacity=0.18, offset_y=24)
    bg2.paste(card_main_focus, ((W - sw_main)//2 - pm, (H - th2)//2 - pm), card_main_focus)
    bg2.convert("RGB").save(os.path.join(PUBLIC_DIR, "stickercapture-2.png"), "JPEG", quality=96)

# ==============================================================================
# 4. JSONFLOW
# ==============================================================================
def build_jsonflow_mockup():
    print("Building JSONFlow Mockup...")
    p = os.path.join(ASSET_DIR, "1789616348793.png")
    raw = Image.open(p)
    w, h = raw.size
    target_ratio = 16 / 9
    new_h = int(w / target_ratio)
    top = (h - new_h) // 2 + 35
    cropped = raw.crop((0, top, w, top + new_h))
    scaled = cropped.resize((1920, 1080), Image.Resampling.LANCZOS)
    scaled.convert("RGB").save(os.path.join(PUBLIC_DIR, "jsonflow.png"), "JPEG", quality=96)

# ==============================================================================
# 5. CARE360
# ==============================================================================
def update_care360_mockup():
    print("Updating Care360 Mockup...")
    brain_file = r"C:\Users\ASUS\.gemini\antigravity-ide\brain\206bac50-02f2-407f-a7df-18113ddf58ac\care360_light_mockup_1791257479764.jpg"
    dest_file = os.path.join(PUBLIC_DIR, "care360.png")
    if os.path.exists(brain_file):
        img = Image.open(brain_file)
        img.convert("RGB").save(dest_file, "JPEG", quality=96)

build_airdrop_mockups()
build_scrollsnap_mockup()
build_stickit_mockups()
build_jsonflow_mockup()
update_care360_mockup()
print("All mockups generated!")
