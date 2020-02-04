// --- Main block for code running --- //

/*
//Adds our burgers to our burger-selection element
let burgerCounter = 0;
for (let burger of menu) {
    //Base div class/config
    let newDiv = createAndAppendElem(document.getElementById("burger-selection-grid"), "div");
    newDiv.className = "burger-grid-piece";
    let column = burgerCounter % 3;
    let row = (burgerCounter - column) / 3;
    newDiv.style="grid-column: " + (column+1) + "; grid-row: " + (row+1) + ";"; // The "+1"s are because CSS grids start counting from 1 and not 0...

    //Adds the name of the burger
    let burgHeader = createAndAppendElem(newDiv, "h4");
    burgHeader.append(burger.itemName);

    //Adds the burger image
    let burgImage = createAndAppendElem(newDiv, "img");
    burgImage.src = burger.image;
    burgImage.className = "burger-image";
    burgImage.alt = "Image of the " + burger.itemName;

    //Adds the extra info list, starting with only Kcal
    let section = createAndAppendElem(newDiv, "section");
    section.id = "extra-info-" + burger.itemName;
    let infoUList = createAndAppendElem(section, "ul");
    infoUList.style = "text-align: left";

    let kcalItem = createAndAppendElem(infoUList, "li");
    kcalItem.append("Kcal : " + burger.calories);

    //Add all allergens to the list, with proper class-based highlights
    for (let allergen of burger.allergyList) {
        let newItem = createAndAppendElem(infoUList, "li");
        newItem.append("Contains ");
        newItem.className = "allergy";
        let highlight = createAndAppendElem(newItem, "span");
        highlight.append(allergen);
        highlight.className = "allergyHighlight";
    }
    
    burgerCounter++;
}
*/


/**
 * Creates and appends a new HTML element to an existing one.
 * @param {HTMLElement} toAppendTo HTML element to append the newly-created element to
 * @param {string} elemType Tag of the element type that should be created
 * @returns {HTMLElement} The newly-created element
 */
/*
 function createAndAppendElem(toAppendTo, elemType) {
    let newElem = document.createElement(elemType);
    toAppendTo.append(newElem);
    return newElem;
}
*/