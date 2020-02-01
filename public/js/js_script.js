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

// --- Main block for code running //
let burgerBig = new MenuItem("Excessively Unhealthy Burger", "./img/excessoburger.jpg", 50000, ["Gluten", "Beef", "Everything else"]);
let burgerSquare = new MenuItem("Squarely Burger", "./img/sqr_borgar.jpg", 2000, ["Beef", "Squares"]);
let burgerSquareAlternate = new MenuItem("Squarely Burger (Veggie)", "./img/sqr_borgar.jpg", 1400, ["Squares", "Soy"]);
let burgerTiny = new MenuItem("Teeny Tiny Borgar", "./img/tiny_borgar.jpg", 50, ["Gluten"]);
let burgerTinyAlternate = new MenuItem("Teeny Tiny Borgar (Gluten Free)", "./img/tiny_borgar.jpg", 62, []);

//Print block for testing
console.log(burgerBig.getName() + " : " + burgerBig.getCalories());
console.log(burgerSquare.getName() + " : " + burgerSquare.getCalories());
console.log(burgerSquareAlternate.getName() + " : " + burgerSquareAlternate.getCalories());
console.log(burgerTiny.getName() + " : " + burgerTiny.getCalories());
console.log(burgerTinyAlternate.getName() + " : " + burgerTinyAlternate.getCalories());