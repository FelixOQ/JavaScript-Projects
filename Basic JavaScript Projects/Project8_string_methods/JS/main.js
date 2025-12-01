function combine() {
    let part1 = "Hu is a ";
    let part2 = "gender neutral pronoun ";
    let part3 = "that can be used by anyone ";
    let part4 = "regardless of their ";
    let part5 = "gender identity.";
    let allParts = part1.concat(part2, part3, part4, part5);
    document.getElementById("words").innerHTML = allParts;
}

function sliced() {
    let full = document.getElementById("slicer");
    let ninja = document.getElementById("sliced");
    ninja.innerHTML = full.innerHTML.slice(7, 12);
}