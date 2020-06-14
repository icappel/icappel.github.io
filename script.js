function hideOnClickOutside(element) {
    const outsideClickListener = event => {
        if (!element.contains(event.target) 
            && !document.querySelector("#mobile_menu_button").contains(event.target)
            && !element.classList.contains("hidden")) {
          element.classList.add("hidden")
          removeClickListener()
        }
    }

    const removeClickListener = () => {
        document.removeEventListener('click', outsideClickListener)
    }

    document.addEventListener('click', outsideClickListener)
}

function toggleMobileMenu () {
    console.log("toggle")
    const menu = document.querySelector("#main_nav ul")
    // menu.classList.toggle("hidden")
    if (menu.classList.contains("hidden")) {
        console.log("starts hidden")
        menu.classList.remove("hidden")
        hideOnClickOutside(menu)
    } else {
        menu.classList.add("hidden")
    }
}

document.querySelector("#mobile_menu_button").addEventListener("click", toggleMobileMenu)