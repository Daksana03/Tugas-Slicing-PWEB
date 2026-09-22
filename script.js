// Menu 

const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach((card) => {
    card.addEventListener("click", function (event) {

        const menuName = this.querySelector("span").textContent;

        console.log("Menu dipilih:", menuName);
    });
});


// Logout

const logoutButton = document.querySelector(".logout");

logoutButton.addEventListener("click", function () {

    const confirmLogout = confirm(
        "Apakah anda yakin ingin logout?"
    );

    if (confirmLogout) {
        window.location.href = "https://sso.unej.ac.id/cas/login";
    }
});


// Profile

const profileName =
    document.querySelector(".profile > h2");

console.log(
    "User login:",
    profileName.textContent
);