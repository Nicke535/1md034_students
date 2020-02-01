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

//Adds our five burgers to our burger-selection element
for (burger in menu) {
    let newPara = document.createElement("p");
    newPara.append(burger.getNameAndCalories());

    if (burger.allergyList.length > 0) {
        let allergenUnorderedList = document.createElement("ul");
        for (allergen in burger.allergyList) {
            let newIndex = document.createElement("li");
            newIndex.append("Contains " + allergen);
            allergenUnorderedList.append(newIndex);
        }
        newPara.append(allergenUnorderedList);
    }
    
    document.getElementById("burger-selection").append(newPara);
}