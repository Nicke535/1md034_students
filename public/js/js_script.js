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
}

// --- Main block for code running --- //
//Creates our five burgers
let burgerBig = new MenuItem("Excessively Unhealthy Burger", "./img/excessoburger.jpg", 50000, ["Gluten", "Beef", "Everything else"]);
let burgerSquare = new MenuItem("Squarely Burger", "./img/sqr_borgar.jpg", 2000, ["Beef", "Squares"]);
let burgerSquareAlternate = new MenuItem("Squarely Burger (Veggie)", "./img/sqr_borgar.jpg", 1400, ["Squares", "Soy"]);
let burgerTiny = new MenuItem("Teeny Tiny Borgar", "./img/tiny_borgar.jpg", 50, ["Gluten"]);
let burgerTinyAlternate = new MenuItem("Teeny Tiny Borgar (Gluten Free)", "./img/tiny_borgar.jpg", 62, []);

//Adds our five burgers to our burger-selection element
let burgerBigPara = document.createElement("p");
burgerBigPara.append(burgerBig.getName() + " : " + burgerBig.getCalories());
document.getElementById("burger-selection").append(burgerBigPara);
let burgerSquarePara = document.createElement("p");
burgerSquarePara.append(burgerSquare.getName() + " : " + burgerSquare.getCalories());
document.getElementById("burger-selection").append(burgerSquarePara);
let burgerSquareAlternatePara = document.createElement("p");
burgerSquareAlternatePara.append(burgerSquareAlternate.getName() + " : " +  burgerSquareAlternate.getCalories());
document.getElementById("burger-selection").append(burgerSquareAlternatePara);
let burgerTinyPara = document.createElement("p");
burgerTinyPara.append(burgerTiny.getName() + " : " + burgerTiny.getCalories());
document.getElementById("burger-selection").append(burgerTinyPara);
let burgerTinyAlternatePara = document.createElement("p");
burgerTinyAlternatePara.append(burgerTinyAlternate.getName() + " : " + burgerTinyAlternate.getCalories());
document.getElementById("burger-selection").append(burgerTinyAlternatePara);