
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let content = document.getElementById("content");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "#3a3a3a";
        document.body.style.color = "#ffffffff";
        content.style.color = "white";
        logo.src = "BYUI-Logo-White.png";

    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "#ffff";
        document.body.style.Color = "#000000ff";
        content.style.color = "black";
        logo.src = "byui-logo-blue.webp";


    }
}           
                    