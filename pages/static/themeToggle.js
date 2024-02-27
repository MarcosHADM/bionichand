const themeToggleButton = $('#theme-toggle');

const moon = $('#moon');
const sun = $('#sun');

themeToggleButton.append(moon, sun);

if ("dark" === localStorage.getItem("theme") || !("theme" in localStorage) && window.matchMedia("(prefers-theme: dark)").matches) {
    $("html").addClass("dark").removeClass("light");
    moon.hide(), sun.show();
} else {
    $("html").addClass("light").removeClass("dark");
    moon.show(), sun.hide();
}

themeToggleButton.click(function() {
    moon.hide(), sun.hide();

    if(localStorage.getItem("theme")){
        if("light"==localStorage.getItem("theme")){
            $("html").addClass('dark').removeClass('light');
            localStorage.setItem("theme","dark");
            sun.show();
        }else{
            $("html").addClass('light').removeClass('dark');
            localStorage.setItem("theme","light");
            moon.show();
        }
    } else {
        if($("html").hasClass("dark")){
            $("html").addClass('light').removeClass('dark');
            localStorage.setItem("theme","light");
            moon.show();
        }else{
            $("html").addClass('dark').removeClass('light');
            localStorage.setItem("theme","dark");
            sun.show();
        }
    }
});