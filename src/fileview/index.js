// fileUtils.js
import { WebviewWindow } from '@tauri-apps/api/webviewWindow'
// Base64 encode function
export function base64Encode(input) {
    return btoa(input); 
}

// Function to view the file in a webview
export function viewFile(fileUrl) {
    const url = 'http://121.37.228.161:8012/onlinePreview?url=' + encodeURIComponent(base64Encode(fileUrl));
    
    const webview = new WebviewWindow('my-label', {
        url: url
    });

    // Event listener when the webview is created successfully
    webview.once('tauri://created', function () {
        // Webview successfully created
    });

    // Event listener for errors
    webview.once('tauri://error', function (e) {
        console.error('Error creating webview:', e);
    });
}
