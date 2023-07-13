var MoonIcon = document.querySelectorAll("[data-toggle-icon='moon']")[0];
var SunIcon = document.querySelectorAll("[data-toggle-icon='sun']")[0];

if (localStorage.getItem("theme") === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-theme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    MoonIcon.classList.add("hidden");
    SunIcon.classList.remove("hidden");
} else {
    document.documentElement.classList.remove("dark");
    SunIcon.classList.add("hidden");
    MoonIcon.classList.remove("hidden");
}

document.getElementById("theme-toggle").addEventListener("click", function() {
    console.log("clicked");

    MoonIcon.classList.add("hidden");
    SunIcon.classList.add("hidden");

    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            //MoonIcon.classList.add("hidden");
            SunIcon.classList.remove("hidden");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            MoonIcon.classList.remove("hidden");
            //SunIcon.classList.add("hidden");
        }
    } else {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            MoonIcon.classList.remove("hidden");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            SunIcon.classList.remove("hidden");
        }
    }
});