console.log("cookieConsent.js loaded");

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    console.log(`Cookie set: ${name}=${value}; expires=${expires}`);
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            console.log(`Cookie found: ${c.substring(nameEQ.length, c.length)}`);
            return c.substring(nameEQ.length, c.length);
        }
    }
    console.log(`Cookie not found: ${name}`);
    return null;
}

function acceptCookieConsent() {
    setCookie("CookieConsent", "true", 1);
    document.getElementById('cookie-consent').style.display = 'none';
    console.log("Cookie consent accepted");
}

function toggleTheme() {
    let currentTheme = getCookie("ThemeMode");
    let newTheme = currentTheme === "dark" ? "light" : "dark";
    setCookie("ThemeMode", newTheme, 365);
    document.body.className = newTheme;
    console.log(`Theme changed to ${newTheme}`);
    updateSwitchColor(newTheme);
}

function updateSwitchColor(theme) {
    const switchButton = document.querySelector('input[type="checkbox"]');
    if (switchButton) {
        if (theme === "dark") {
            switchButton.checked = true;
            switchButton.parentNode.style.backgroundColor = '#6366F1';
            console.log("Button set to dark mode color");
        } else {
            switchButton.checked = false;
            switchButton.parentNode.style.backgroundColor = '#565973';
            console.log("Button set to light mode color");
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    let theme = getCookie("ThemeMode");
    if (!theme) {
        theme = "light";
        setCookie("ThemeMode", theme, 365);
    }
    document.body.className = theme;
    console.log(`Theme set to ${theme}`);
    updateSwitchColor(theme);

    document.querySelector('input[type="checkbox"]').addEventListener('change', toggleTheme);
});





















//console.log("cookieConsent.js loaded");

//function setCookie(name, value, days) {
//    var expires = "";
//    if (days) {
//        var date = new Date();
//        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//        expires = "; expires=" + date.toUTCString();
//    }
//    document.cookie = name + "=" + (value || "") + expires + "; path=/";
//    console.log(`Cookie set: ${name}=${value}; expires=${expires}`);
//}

//function getCookie(name) {
//    var nameEQ = name + "=";
//    var ca = document.cookie.split(';');
//    for (var i = 0; i < ca.length; i++) {
//        var c = ca[i];
//        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//        if (c.indexOf(nameEQ) == 0) {
//            console.log(`Cookie found: ${c.substring(nameEQ.length, c.length)}`);
//            return c.substring(nameEQ.length, c.length);
//        }
//    }
//    console.log(`Cookie not found: ${name}`);
//    return null;
//}

//function acceptCookieConsent() {
//    setCookie("CookieConsent", "true", 1);
//    document.getElementById('cookie-consent').style.display = 'none';
//    console.log("Cookie consent accepted");
//}

//function toggleTheme() {
//    let currentTheme = getCookie("ThemeMode");
//    let newTheme = currentTheme === "dark" ? "light" : "dark";
//    setCookie("ThemeMode", newTheme, 365);
//    document.body.className = newTheme;
//    console.log(`Theme changed to ${newTheme}`);
//    document.querySelector('input[type="checkbox"]').addEventListener('change', function () {
//        if (this.checked) {
//            this.parentNode.style.backgroundColor = '#6366F1';
//            console.log("btn ligt");
//        } else {
//            this.parentNode.style.backgroundColor = '#565973';
//        }
//    });
//}

//document.addEventListener('DOMContentLoaded', (event) => {
//    let theme = getCookie("ThemeMode");
//    if (!theme) {
//        theme = "light";
//        setCookie("ThemeMode", theme, 365);
//    }
//    document.body.className = theme;
//    console.log(`Theme set to ${theme}`);
//});




























//console.log("cookieConsent.js loaded");

//function setCookie(name, value, days) {
//    var expires = "";
//    if (days) {
//        var date = new Date();
//        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//        expires = "; expires=" + date.toUTCString();
//    }
//    document.cookie = name + "=" + (value || "") + expires + "; path=/";
//    console.log(`Cookie set: ${name}=${value}; expires=${expires}`);
//}

//function getCookie(name) {
//    var nameEQ = name + "=";
//    var ca = document.cookie.split(';');
//    for (var i = 0; i < ca.length; i++) {
//        var c = ca[i];
//        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//        if (c.indexOf(nameEQ) == 0) {
//            console.log(`Cookie found: ${c.substring(nameEQ.length, c.length)}`);
//            return c.substring(nameEQ.length, c.length);
//        }
//    }
//    console.log(`Cookie not found: ${name}`);
//    return null;
//}

//function acceptCookieConsent() {
//    setCookie("CookieConsent", "true", 1);
//    document.getElementById('cookie-consent').style.display = 'none';
//    console.log("Cookie consent accepted");
//}


////theme  
//function setCookie(name, value, days) {
//    var expires = "";
//    if (days) {
//        var date = new Date();
//        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//        expires = "; expires=" + date.toUTCString();
//    }
//    document.cookie = name + "=" + (value || "") + expires + "; path=/";
//}

//function getCookie(name) {
//    var nameEQ = name + "=";
//    var ca = document.cookie.split(';');
//    for (var i = 0; i < ca.length; i++) {
//        var c = ca[i];
//        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//        if (c.indexOf(nameEQ) == 0) {
//            return c.substring(nameEQ.length, c.length);
//        }
//    }
//    return null;
//}

//function toggleTheme() {
//    let currentTheme = getCookie("ThemeMode");
//    let newTheme = currentTheme === "dark" ? "light" : "dark";
//    setCookie("ThemeMode", newTheme, 365);
//    document.body.className = newTheme;
//}

//document.addEventListener('DOMContentLoaded', (event) => {
//    let theme = getCookie("ThemeMode");
//    if (!theme) {
//        theme = "light";
//        setCookie("ThemeMode", theme, 365);
//    }
//    document.body.className = theme;
//});
