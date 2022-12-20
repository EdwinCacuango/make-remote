const featureBtn = document.getElementById("feature-btn")
const featureMenu = document.getElementById("feature-menu")
const companyMenu = document.getElementById("company-menu")
const companyBtn = document.getElementById("company-btn")

featureBtn.addEventListener("click", showFeatureMenu)

function showFeatureMenu() {
    featureMenu.classList.toggle("show-menu")
}

companyBtn.addEventListener("click", togleCompanyMenu)
function togleCompanyMenu() {
    companyMenu.classList.toggle("show-menu")
}