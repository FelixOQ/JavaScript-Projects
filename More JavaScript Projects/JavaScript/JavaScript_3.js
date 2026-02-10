function showClass(char) {
    let charClass = char.getAttribute("data-character_class");
    alert(char.innerHTML + " is a " + charClass + "!");
}