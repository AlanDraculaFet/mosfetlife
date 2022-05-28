export function displayError(message) {
    let error_bar = document.getElementById("error-bar");
    error_bar.style.display = "block"
    error_bar.textContent = message;
    window.scrollTo(0,0);
}
