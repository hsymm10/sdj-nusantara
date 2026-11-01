import subprocess
import time
import os
import json
from PIL import Image

def get_page_metrics(url, width=1536, height=2306):
    js_code = """
    (() => {
        const sections = [
            { name: "navbar", el: document.querySelector(".navbar, nav") },
            { name: "hero", el: document.querySelector(".hero-contact-section") },
            { name: "overlap", el: document.querySelector(".contact-overlap-section") },
            { name: "form_channels", el: document.querySelector(".contact-form-channels-section") },
            { name: "service_area", el: document.querySelector(".service-area-section") },
            { name: "location", el: document.querySelector(".location-3panel-section") },
            { name: "faq", el: document.querySelector(".contact-faq-section") },
            { name: "footer", el: document.querySelector("footer") }
        ];
        return JSON.stringify({
            scrollWidth: document.documentElement.scrollWidth,
            scrollHeight: document.documentElement.scrollHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            sections: sections.map(s => {
                if (!s.el) return { name: s.name, error: "not found" };
                const rect = s.el.getBoundingClientRect();
                return {
                    name: s.name,
                    top: Math.round(rect.top + window.scrollY),
                    height: Math.round(rect.height),
                    bottom: Math.round(rect.bottom + window.scrollY)
                };
            })
        });
    })()
    """
    cmd = [
        "/usr/bin/google-chrome",
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--hide-scrollbars",
        f"--window-size={width},{height}",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=3000",
        f"--crash-dumps-dir=/tmp",
        url
    ]
    return

def capture_url(url, output_path, width=1536, height=2306):
    cmd = [
        "/usr/bin/google-chrome",
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-software-rasterizer",
        "--hide-scrollbars",
        f"--window-size={width},{height}",
        f"--screenshot={output_path}",
        "--virtual-time-budget=4000",
        url
    ]
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    try:
        p.wait(timeout=15)
    except subprocess.TimeoutExpired:
        p.kill()
        time.sleep(1)
    print(f"Captured {output_path}: exists={os.path.exists(output_path)}")

if __name__ == "__main__":
    capture_url("http://127.0.0.1:5173/kontak", "screenshots/kontak-v3-tahap3.png", 1536, 2306)
