let isEnabled = true; // สถานะเริ่มต้น

// ฟังก์ชันสำหรับ apply dark mode styles (เหมือนเดิม)
function applyDarkModeStyles() {
    // ถ้า dark mode ปิดอยู่ ให้หยุดทำงานทันที
    if (!isEnabled) return;

    document.querySelectorAll('.KS5.hs0.un8.C9i.TB_ .X8m, .KS5.hs0.un8.C9i.TB_ .tiI').forEach(el => {
        let prev = el.previousElementSibling;
        if (prev) {
            const style = window.getComputedStyle(prev);
            if (style.color === 'rgb(255, 255, 255)') {
                el.style.filter = 'invert(1)';
            } else {
                el.style.filter = 'none';
            }
        }
    });
}

// ฟังก์ชันสำหรับล้างสไตล์ทั้งหมดที่เคยเพิ่มเข้าไป
function clearAllStyles() {
    document.querySelectorAll('.KS5.hs0.un8.C9i.TB_ .X8m, .KS5.hs0.un8.C9i.TB_ .tiI').forEach(el => {
        el.style.filter = ''; // ล้างค่า filter
    });
}

// ฟัง event จาก content.js
window.addEventListener('darkModeStateChange', (event) => {
    isEnabled = event.detail.enabled;
    if (!isEnabled) {
        clearAllStyles(); // ถ้าปิด dark mode ให้ล้างสไตล์ทันที
    } else {
        applyDarkModeStyles(); // ถ้าเปิด ให้ลอง apply สไตล์อีกครั้ง
    }
});


// ตรวจจับการเปลี่ยนแปลง DOM
const observer = new MutationObserver(() => {
    if (isEnabled) {
        // ใช้ timeout เล็กน้อยเพื่อให้ DOM render เสร็จก่อน
        setTimeout(applyDarkModeStyles, 100);
    }
});

// เริ่ม observe
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});