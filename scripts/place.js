const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windChill = document.querySelector("#windChill");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const temperature = 35;
const windSpeed = 8;

function calculateWindChill(temperature, windSpeed) {
    return (35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16).toFixed(1);
}

if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed)} °F`;
}

else {
    windChill.textContent = "N/A";
}