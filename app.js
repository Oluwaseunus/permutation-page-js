let text = document.querySelector("#inputty");
let btn = document.querySelector("#button-addon2");
let finalString = "";
let textValue = document.querySelector("#permtext");

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
        var i;
        for (i = startIndex; i <= endIndex; i++) {
            swap(alphabets, startIndex, i);
            permute(alphabets, startIndex + 1, endIndex);
            swap(alphabets, i, startIndex); // backtrack
            textValue.innerHTML = finalString;
        }
    }
}

function perm() {
    finalString = "The permutations of your string include:</br>";
    let alphabets = text.value.split(" ");
    permute(alphabets, 0, alphabets.length - 1);
}

btn.addEventListener("click", perm);

document.addEventListener("keypress", () => {
    if (event.key === "Enter")  perm();
})