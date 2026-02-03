function validate() {
    let p = document.forms["dndForm"]["pName"].value;
    let c = document.forms["dndForm"]["cName"].value;
    if (p == "" && c == "") {
        alert("Please provide your name and a name for your character.");
        return false;
    }
    else if (p == "") {
        alert("Please provide your name.");
        return false;
    }
    else if (c == "") {
        alert("Please provide a name for your character.");
        return false;
    }
}