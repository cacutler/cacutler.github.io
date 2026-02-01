'use strict';
const elementToggleFunc = function (elem) {// element toggle function
    elem.classList.toggle("active");
}
const sidebar = document.querySelector("[data-sidebar]");// sidebar variables
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });// sidebar toggle functionality for mobile
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");// testimonials variables
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");// modal variable
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const testimonialsModalFunc = function () {// modal toggle function
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}
for (let i = 0; i < testimonialsItem.length; i++) {// add click event to all modal items
    testimonialsItem[i].addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        testimonialsModalFunc();
    });
}
modalCloseBtn.addEventListener("click", testimonialsModalFunc);// add click event to modal close button
overlay.addEventListener("click", testimonialsModalFunc);
const select = document.querySelector("[data-select]");// custom select variables
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
select.addEventListener("click", function () { elementToggleFunc(this); });
for (let i = 0; i < selectItems.length; i++) {// add event in all select items
    selectItems[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}
const filterItems = document.querySelectorAll("[data-filter-item]");// filter variables
const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }
    }
}
let lastClickedBtn = filterBtn[0];// add event in all filter button items for large screen
for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);
        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
}
const form = document.querySelector("[data-form]");// contact form variables
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
for (let i = 0; i < formInputs.length; i++) {// add event to all form input field
    formInputs[i].addEventListener("input", function () {
        if (form.checkValidity()) {// check form validation
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
}
const navigationLinks = document.querySelectorAll("[data-nav-link]");// page navigation variables
const pages = document.querySelectorAll("[data-page]");
for (let i = 0; i < navigationLinks.length; i++) {// add event to all nav link
    navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
    });
}
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    try {
        const response = await fetch(form.action, {method: 'POST', body: formData, headers: {'Accept': 'application/json'}});
        if (response.ok) {
            alert('Thank you! Your message has been sent.');
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        alert('Sorry, there was an error. Please try again.');
    }
});