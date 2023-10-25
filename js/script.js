const shoppingList = ["mela", "pane", "latte", "miele", "caffé"];

let listString = "";

let i = 0

while (i < shoppingList.length) {
    const curElem = shoppingList[i];
    listString += `<li>${curElem}</li>`
    i++
}

document.querySelector(".list").innerHTML = listString;


