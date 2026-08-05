const fishingTips = [
    "Fish early in the morning or just before sunset when trout are most active.",
    "Use lighter fishing line in clear water to avoid spooking the fish.",
    "Match your lure or bait to the insects naturally found in the area.",
    "Cast upstream in rivers and retrieve your lure with the current.",
    "After a rain, trout often move closer to shore looking for food."
];

function displayFishingTip() {
    const randomNumber = Math.floor(Math.random() * fishingTips.length);
    document.querySelector("#fishingTip").textContent = fishingTips[randomNumber];
}

displayFishingTip();


const currentYear = document.querySelector("#currentYear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = "Last Modification: " + document.lastModified;