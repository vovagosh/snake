function randomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function itemsGenerate(n) {
    items = [[], []];
    for (let i = 0; i < n; i++) {
        items.push([]);
        for (let j = 0; j < n; j++) {
            let item = document.createElement('div');
            item.className = "item";
            item.i = i;
            item.j = j;
            item.innerText = randomLetter();
            items[i].push(item);
            divParent.appendChild(item);
        }
    }
}

function colorChange(elements, classNew) {
    for (element of elements) {
        element.className = classNew;
    }
}

function itemsFind(item) {
    if (item.innerText == word[index]) {
        path.push(item);
        index++;
    }
    else {
        return;
    }
    if (index == word.length) {
        colorChange(path, "item item-selected")
        path.pop();
        index = path.length;
        return;
    }    
    nextItems = findNextItems(item);    
    for (nextItem of nextItems) {
        itemsFind(nextItem);
    }
    path.pop();
    index = path.length;
    return;
}

function findNextItems(item) {
    let tempItems = [];
    let nextItems = [];
    if (item.i > 0) {
        tempItems.push(items[item.i - 1][item.j]);
    }
    if (item.j > 0) {
        tempItems.push(items[item.i][item.j - 1]);
    }
    if (item.i < n - 1) {
        tempItems.push(items[item.i + 1][item.j]);
    }
    if (item.j < n - 1) {
        tempItems.push(items[item.i][item.j + 1]);
    }
    for (tempItem of tempItems) {
        if (!path.includes(tempItem)) {
            nextItems.push(tempItem);
        }
    }
    return nextItems;
}


