document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('dark-mode-toggle');
    const statusText = document.getElementById('status-text');

    // Function to update the popup's appearance
    function updateUI(enabled) {
        toggle.checked = enabled;
        if (enabled) {
            statusText.textContent = '🌙 Dark mode is active';
            statusText.classList.add('status-on');
            statusText.classList.remove('status-off');
        } else {
            statusText.textContent = '☀️ Light mode is active';
            statusText.classList.add('status-off');
            statusText.classList.remove('status-on');
        }
    }

    // Load the saved state and update the UI when the popup is opened
    chrome.storage.sync.get('enabled', (data) => {
        const isEnabled = typeof data.enabled === 'undefined' ? true : data.enabled;
        updateUI(isEnabled);
    });

    // Listen for clicks on the toggle switch
    toggle.addEventListener('change', () => {
        const isEnabled = toggle.checked;
        updateUI(isEnabled);
        
        // Save the new state
        chrome.storage.sync.set({ enabled: isEnabled });

        // Send a message to the background script to apply/remove the styles
        chrome.runtime.sendMessage({ action: "toggleDarkMode", enabled: isEnabled });
    });
});