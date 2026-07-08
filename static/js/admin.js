// ==============================
// ANIIDCO ADMIN DASHBOARD
// admin.js
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------
    // Sidebar Active Menu
    // ------------------------------
    const menuItems = document.querySelectorAll(".sidebar li");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {

            menuItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");

        });
    });


    // ------------------------------
    // Logout Button
    // ------------------------------
    const logoutBtn = document.querySelector(".logout-btn");

    if (logoutBtn) {

        logoutBtn.addEventListener("click", () => {

            const confirmLogout = confirm("Are you sure you want to logout?");

            if (confirmLogout) {

                // Change this later to your Django login page
                window.location.href = "../index.html";

            }

        });

    }


    // ------------------------------
    // Search Box
    // ------------------------------
    const searchInput = document.querySelector(".search-box input");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            console.log("Searching:", this.value);

            // Later this will search banners,
            // announcements, users, etc.

        });

    }


    // ------------------------------
    // Dashboard Greeting
    // ------------------------------
    const hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning";
    }
    else if (hour < 18) {
        greeting = "Good Afternoon";
    }
    else {
        greeting = "Good Evening";
    }

    console.log(greeting + ", Admin");

});