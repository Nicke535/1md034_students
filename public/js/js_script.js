//Class for a burger menu item
class MenuItem {
    //Constructor
    constructor(itemName, image, calories, allergyList) {
        this.itemName = itemName;
        this.image = image;
        this.calories = calories;
        this.allergyList = allergyList;
    }

    // Gets the name of the menu item
    getName() {
        return this.itemName;
    }

    // Gets the calories of the menu item
    getCalories() {
        return this.calories;
    }

    getNameAndCalories() {
       return this.itemName + " : " + this.calories + " kcal";
    }
}

// --- Main block for code running --- //
//Creates our five burgers
let menu = [
    new MenuItem("Excessively Unhealthy Burger", "./img/excessoburger.jpg", 50000, ["Gluten", "Beef", "Everything else"]),
    new MenuItem("Squarely Burger", "./img/sqr_borgar.jpg", 2000, ["Beef", "Squares"]),
    new MenuItem("Squarely Burger (Veggie)", "./img/sqr_borgar.jpg", 1400, ["Squares", "Soy"]),
    new MenuItem("Teeny Tiny Borgar", "./img/tiny_borgar.jpg", 50, ["Gluten"]),
    new MenuItem("Teeny Tiny Borgar (Gluten Free)", "./img/tiny_borgar.jpg", 62, [])
];


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
    burgHeader.append(burger.getName());

    //Adds the burger image
    let burgImage = createAndAppendElem(newDiv, "img");
    burgImage.src = burger.image;
    burgImage.className = "burger-image";
    burgImage.alt = "Image of the " + burger.getName();

    //Adds the extra info list, starting with only Kcal
    let section = createAndAppendElem(newDiv, "section");
    section.id = "extra-info-" + burger.getName();
    let infoUList = createAndAppendElem(section, "ul");
    infoUList.style = "text-align: left";

    let kcalItem = createAndAppendElem(infoUList, "li");
    kcalItem.append("Kcal : " + burger.getCalories());

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