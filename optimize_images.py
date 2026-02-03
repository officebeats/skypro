from pathlib import Path
from PIL import Image
import sys

def optimize_images(directory):
    directory_path = Path(directory)
    if not directory_path.exists():
        print(f"Directory {directory} does not exist.")
        return

    images_processed = 0
    images_saved_size = 0

    print(f"Scanning {directory}...")

    # Recursive scan
    for img_path in directory_path.rglob('*'):
        if img_path.suffix.lower() in ['.jpg', '.jpeg', '.png']:
            # Skip if already optimized (check if .webp exists)
            webp_path = img_path.with_suffix('.webp')
            if webp_path.exists():
                print(f"Skipping {img_path.name} (WebP exists)")
                continue

            try:
                with Image.open(img_path) as img:
                    # Convert to RGB if necessary (e.g. PNG with alpha)
                    if img.mode in ('RGBA', 'LA'):
                        # For PNGs with transparency, we want to keep it, but WebP supports it.
                        # Simple conversion:
                        pass 
                    else:
                        img = img.convert('RGB')
                    
                    # Save as WebP
                    print(f"Optimizing {img_path.name}...")
                    img.save(webp_path, 'WEBP', quality=85)
                    
                    original_size = img_path.stat().st_size
                    new_size = webp_path.stat().st_size
                    saved = original_size - new_size
                    images_saved_size += saved
                    images_processed += 1
                    
                    print(f"  Saved {saved/1024:.2f} KB ({(saved/original_size)*100:.1f}%)")

            except Exception as e:
                print(f"Error processing {img_path}: {e}")

    print(f"\nDone! Processed {images_processed} images.")
    print(f"Total space saved: {images_saved_size/1024:.2f} KB")

if __name__ == "__main__":
    optimize_images("public/assets/images")
