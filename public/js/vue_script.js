/**
 * Converts a FormData into a nicely-printable string
 * @param {FormData} dataToConvert 
 */
function formDataToString (dataToConvert) {
    let returnString = "\n\tName : " + dataToConvert.name + "\n";
    returnString += "\tE-Mail : " + dataToConvert.email + "\n";
    returnString += "\tStreet : " + dataToConvert.street + "\n";
    returnString += "\tHouse : " + dataToConvert.house + "\n";
    returnString += "\tGender : " + dataToConvert.gender + "\n";
    returnString += "\tPayment Option : " + dataToConvert.payment_option + "\n";

    return returnString;
}

const vm = new Vue({
    el: '#main_body',
    data: {
        menu : menu,
        formData : {
            name: "",
            email: "",
            street: "",
            house: "",
            gender: "other",
            payment_option: "Dogecoin"
        }
    },
    methods: {
        submitFunc: () => {
            let printedString = formDataToString(vm.formData);
            let orderString = "\n\tOrders : ";
            //Gets all burger checkbox elements, and add their text if they are actually checked
            for (let burger of vm.menu) {
                //Gets the checkbox itself
                let checkbox = document.getElementById("burger-selection-checkbox-" + burger.itemName);
                //If it had a checkbox, and it was checked, add the text
                if (checkbox && checkbox.checked == true) {
                    orderString += "\n\t\t" + burger.itemName + "";
                } else if (!checkbox) {
                    console.log("Missing checkbox for " + burger.itemName + "!");
                }
            }
            if (orderString != "\n\tOrders : ") {
                printedString += orderString;
            }
            printedString += "\n\n";
            console.log(printedString);
            document.getElementById("submit-display").append(printedString);
        }
    }
})
