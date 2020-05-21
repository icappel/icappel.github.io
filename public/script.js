function toggleMobileMenu () {
    const menu = document.querySelector("#main_nav ul")
    menu.classList.toggle("hidden")
}

document.querySelector("#mobile_menu_button").addEventListener("click", toggleMobileMenu)