var n, word, index, path, items;

buttonGenerate.onclick = function () {
    n = inputNumber.value;
    n = n > 25 ? 25 : n;
    n = n < 3 ? 3 : n;
    n = Math.floor(n);
    inputNumber.value = n;
    divParent.hidden = divTale.hidden = false;
    divParent.innerText = inputText.value = "";
    divParent.style.width = divParent.style.height = 50 * inputNumber.value + "px";
    itemsGenerate(n);
}

buttonFind.onclick = function () {
    colorChange(divParent.children, "item");
    word = inputText.value.toUpperCase();
    index = 0;
    path = [];
    for (child of divParent.children) {
        itemsFind(child);
    }
}

document.addEventListener('keypress', function (event) {
    if (event.code == 'Enter') {
        buttonFind.click();
    }
});
