const currentYear = document.querySelector("#currentYear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = "Last Modification: " + document.lastModified;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 12",
        area: 41010,
        imageUrl:
            "https://newsroom.churchofjesuschrist.org/media/960x540/rome-italy-temple-rendering.jpg"
    },
    {
        templeName: "Laie, Hawaii",
        location: "Laie Hawaii",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/bcff33b8702e7490b7fb8d097a70859b4d6d14d0/full/500%2C/0/default"
    },
    {
        templeName: "Meridian Idaho",
        location: "Meridian, Idaho",
        dedicated: "2017, November, 19",
        area: 67331,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/da976c8bd5fd8e28fc1b7af0c5d0b08d70358027/full/500%2C/0/default"
    },
];

const album = document.querySelector(".album");
const pageHeading = document.querySelector("h1");

function displayTemples(templeList) {
    album.innerHTML = "";
    templeList.forEach((temple) => {
        const card = document.createElement("section");
        const templeName = document.createElement("h2");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        templeName.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Size:</strong> ${temple.area} sq feet`;

        image.src = temple.imageUrl;
        image.alt = `${temple.TempleName} Temple`;
        image.loading = "lazy";

        card.appendChild(templeName);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        album.appendChild(card);
    });
}

displayTemples(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    pageHeading.textContent = "Home";
    displayTemples(temples);
});

oldLink.addEventListener("click", (event) => {
    event.preventDefault();
    const oldTemples = temples.filter((temple) => {
        const dedicationYear = parseInt(temple.dedicated);
        return dedicationYear < 1900;
    });

    pageHeading.textContent = "Old Temples";
    displayTemples(oldTemples);
});

newLink.addEventListener("click", (event) => {
    event.preventDefault();
    const newTemples = temples.filter((temple) => {
        const dedicationYear = parseInt(temple.dedicated);
        return dedicationYear > 2000;
    });

    pageHeading.textContent = "New Temples";
    displayTemples(newTemples);
});

largeLink.addEventListener("click", (event) => {
    event.preventDefault();
    const largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });
    pageHeading.textContent = "Large Temples";
    displayTemples(largeTemples);
});

smallLink.addEventListener("click", (event) => {
    event.preventDefault();
    const smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });
    pageHeading.textContent = "Small Temples";
    displayTemples(smallTemples);
});