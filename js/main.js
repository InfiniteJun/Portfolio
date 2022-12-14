const buttonDarkMode = document.querySelector(".dark-mode-button");

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    buttonDarkMode.classList.add("dark-mode-button--active");
	document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    buttonDarkMode.classList.add("dark-mode-button--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    buttonDarkMode.classList.remove("dark-mode-button--active");
    document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
			buttonDarkMode.classList.add("dark-mode-button--active");
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "dark");
		} else {
			buttonDarkMode.classList.remove("dark-mode-button--active");
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "light");
		}
    });

// Включение ночного режима по кнопке
buttonDarkMode.onclick = function () {
    buttonDarkMode.classList.toggle("dark-mode-button--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};