// ตั้งค่าเริ่มต้นเมื่อติดตั้ง
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ enabled: true });
});

// รับ message จาก popup แล้วส่งต่อไปยัง content script ที่ active อยู่
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleDarkMode") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, request);
      }
    });
  }
});