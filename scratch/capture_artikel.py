import subprocess
import time
import os
from PIL import Image

def capture_url(url, output_path, width=1536, height=2306):
    cmd = [
        "/usr/bin/google-chrome",
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-software-rasterizer",
        "--disable-background-networking",
        "--disable-sync",
        "--hide-scrollbars",
        f"--window-size={width},{height}",
        f"--screenshot={output_path}",
        url
    ]
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    try:
        p.wait(timeout=10)
    except subprocess.TimeoutExpired:
        p.kill()
        time.sleep(1)
    print(f"Captured {output_path}: exists={os.path.exists(output_path)}")

def compare_images(actual_path, mockup_path, out_sidebyside):
    if not os.path.exists(actual_path) or not os.path.exists(mockup_path):
        print("Missing file for compare")
        return
    actual = Image.open(actual_path).convert("RGB")
    mockup = Image.open(mockup_path).convert("RGB")
    print(f"Actual size: {actual.size}, Mockup size: {mockup.size}")
    w = max(actual.width, mockup.width)
    h = max(actual.height, mockup.height)
    
    # Combined side by side
    combined = Image.new("RGB", (actual.width + mockup.width, max(actual.height, mockup.height)), (255, 255, 255))
    combined.paste(mockup, (0, 0))
    combined.paste(actual, (mockup.width, 0))
    combined.save(out_sidebyside, quality=85)
    print(f"Saved side-by-side to {out_sidebyside}")

if __name__ == "__main__":
    capture_url("http://127.0.0.1:5173/artikel", "screenshots/artikel-iterasi-4.png", 1536, 2306)
    compare_images("screenshots/artikel-iterasi-4.png", "design/artikel_1536.png", "screenshots/comp_artikel_iter4.jpg")
