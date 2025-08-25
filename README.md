# Pinterest Dark Mode (Extension)

A browser extension that applies a beautiful and eye-friendly dark theme to Pinterest. Perfect for night-time browsing and for those who prefer dark interfaces.

## Features

*   **Easy on the Eyes:** Toggles a clean, dark theme across the entire Pinterest website.
*   **Simple Controls:** Easily enable or disable the dark mode via the extension's popup menu.
*   **Persistent Settings:** Remembers your preference, so you don't have to re-enable it every time.
*   **Lightweight:** Built to be fast and efficient, ensuring no impact on browsing performance.

## Installation

**Manual Installation (For Developers):**

1.  Clone this repository to your local machine:
    ```bash
    https://github.com/PGC48/Pinterest-Darkmode.git
    ```
2.  Open your browser and navigate to the extensions management page (e.g., `chrome://extensions` for Chrome).
3.  Enable "Developer mode".
4.  Click on "Load unpacked" and select the directory where you cloned the repository.
5.  The extension will be installed and ready to use.

## Project Structure

*   `manifest.json`: The core configuration file for the extension.
*   `popup.html`, `popup.css`, `popup.js`: Files that control the user-facing popup menu.
*   `background.js`: The service worker that runs in the background.
*   `content.js`, `main.js`: Scripts injected into the Pinterest page to manage and apply the dark mode styles.
*   `main.css`: The primary stylesheet containing all the dark mode rules.

## Contributing

Contributions are welcome! If you have suggestions, find a bug, or want to improve the code, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). *(Note: Please replace with your actual license type if different.)*
