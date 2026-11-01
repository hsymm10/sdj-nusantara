import os
from PIL import Image

def slice_sections():
    actual = Image.open("screenshots/artikel-iterasi-4.png").convert("RGB")
    mockup = Image.open("design/artikel_1536.png").convert("RGB")

    sections = [
        ("hero_cats", 0, 430),
        ("featured_popular", 430, 880),
        ("latest_grid", 880, 1915),
        ("cta_footer", 1915, 2306)
    ]

    for name, y1, y2 in sections:
        # crop actual
        a_crop = actual.crop((0, y1, 1536, min(y2, actual.height)))
        m_crop = mockup.crop((0, y1, 1536, min(y2, mockup.height)))
        
        comp = Image.new("RGB", (3072, y2 - y1))
        comp.paste(m_crop, (0, 0))
        comp.paste(a_crop, (1536, 0))
        out_path = f"screenshots/comp_artikel_iter4_{name}.jpg"
        comp.save(out_path, quality=85)
        print(f"Saved {out_path}")

if __name__ == "__main__":
    slice_sections()
