import {displayError} from "../common.js"
document.getElementById("submit-button").onclick = e => {
    e.preventDefault();
    displayError("Looks like your Nickname, Email or Password is incorrect, please try again!");
}
