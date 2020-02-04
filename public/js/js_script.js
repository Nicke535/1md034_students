// --- Main block for code running --- //

/*
let btn = document.getElementById("submit_button");
btn.onclick = clickFunc;

let formData = {};

function clickFunc () {
    updateFormData();
    console.log(formData);
}
*/


/**
 * Updates the form data so that it's up-to-date with the newest values
 */
function updateFormData() {
    formData.name = document.getElementById("name").value;
    formData.street = document.getElementById("street").value;
    formData.email = document.getElementById("email").value;
    formData.house = document.getElementById("house").value;
    formData.payment_option = document.getElementById("payment_options").value;
    formData.gender = getRadioButtonValue(document.getElementsByName("gender_selection"));
}

/**
 * Utility function for getting the selected value from a series of radio buttons (which are assumed to be linked)
 * @param {HTMLElement[]} listOfRadioButtons 
 * @returns null if no button was selected, or the value of the selected button otherwise
 */
function getRadioButtonValue(listOfRadioButtons) {
    for (button of listOfRadioButtons) {
        if (button.checked) {
            return button.value;
        }
    }

    return null;
}


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
 function createAndAppendElem(toAppendTo, elemType) {
    let newElem = document.createElement(elemType);
    toAppendTo.append(newElem);
    return newElem;
}