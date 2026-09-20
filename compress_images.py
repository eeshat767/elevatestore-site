from PIL import Image
import glob
import os

TARGET_WIDTH = 1200
QUALITY = 80

files = glob.glob(os.path.join('images', '*-01.jpg'))
if not files:
    print('No images found to compress in images/*.jpg')

for path in files:
    try:
        img = Image.open(path)
        img = img.convert('RGB')
        w, h = img.size
        if w > TARGET_WIDTH:
            new_h = int(TARGET_WIDTH * h / w)
            img = img.resize((TARGET_WIDTH, new_h), Image.LANCZOS)
        img.save(path, 'JPEG', quality=QUALITY, optimize=True)
        print('Processed', path)
    except Exception as e:
        print('Error processing', path, e)
