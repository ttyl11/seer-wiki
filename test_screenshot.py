from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 900})
    page.goto('http://localhost:4173/monsters/elite/mushroom_monster.html')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(3000)  # wait for mermaid to render
    page.screenshot(path='d:/slay/seer-wiki/mushroom_screenshot.png', full_page=True)
    print("Screenshot saved to d:/slay/seer-wiki/mushroom_screenshot.png")
    browser.close()
