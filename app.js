let text = document.querySelector("#inputty");
let btn = document.querySelector("#button-addon2");
let finalString = "";
let textValue = document.querySelector("#permtext");
let form = document.getElementById("ourForm");

function swap(alphabets, index1, index2) {
    var temp = alphabets[index1];
    alphabets[index1] = alphabets[index2];
    alphabets[index2] = temp;
    return alphabets;
}

function permute(alphabets, startIndex, endIndex) {
    if (startIndex === endIndex) {
        finalString += `${alphabets.join(' ')} </br>`;
    } else {
        for (let i = startIndex; i <= endIndex; i++) {
            swap(alphabets, startIndex, i);
            permute(alphabets, startIndex + 1, endIndex);
            swap(alphabets, i, startIndex); // backtrack
            textValue.innerHTML = finalString;
        }
    }
}

setTimeout(() => {
    form.classList.add("slide");
}, 500);

function perm() {
    finalString = "The permutations of your string include:</br>";
    let alphabets = text.value.split(" ");
    if (alphabets.length >= 6)  alert("Long string, page might become unresponsive.");
    else if (alphabets.length === 0)    textValue.innerHTML = "";
    permute(alphabets, 0, alphabets.length - 1);
    document.getElementById("permtext").classList.remove("show");
    document.getElementById("permtext").classList.add("show");
}

btn.addEventListener("click", perm);

document.addEventListener("keypress", () => {
    if (event.key === "Enter")  perm();
});