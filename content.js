let isDarkModeEnabled = true;

// ฟังก์ชันสำหรับเปิด/ปิด Dark Mode
function setDarkMode(enabled) {
    isDarkModeEnabled = enabled;
    if (enabled) {
        document.documentElement.classList.add('dark-mode-on');
    } else {
        document.documentElement.classList.remove('dark-mode-on');
    }
    // ส่ง event เพื่อบอก main.js ให้รู้สถานะล่าสุด
    window.dispatchEvent(new CustomEvent('darkModeStateChange', { detail: { enabled } }));
}

// รับ message จาก popup/background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggleDarkMode") {
        setDarkMode(request.enabled);
    }
});

// ตรวจสอบสถานะเริ่มต้นเมื่อหน้าเว็บโหลด
chrome.storage.sync.get('enabled', (data) => {
    const enabled = typeof data.enabled === 'undefined' ? true : data.enabled;
    setDarkMode(enabled);
});