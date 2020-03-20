
/**
 * From Deli-Very : starts a socket and instantiates in Strict mode
 */
'use strict';
const socket = io();

/**
 * Converts a FormData into a nicely-printable string
 * @param {FormData} dataToConvert 
 */
function formDataToString (dataToConvert) {
    let returnString = "\n\tName : " + dataToConvert.name + "\n";
    returnString += "\tE-Mail : " + dataToConvert.email + "\n";
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
            gender: "other",
            payment_option: "Dogecoin"
        },
        order: {
            id: -1,
            details: {
                x: -12345,
                y: -12345
            },
            items: []
        },
        lastOrderID: 0,
        submitted: false
    },
    methods: {
        submitFunc: () => {
            let orderedBurgers = [];
            let i = 0;
            //Gets all burger checkbox elements, and add them to the list if they are actually checked
            for (let burger of vm.menu) {
                //Gets the checkbox itself
                let checkbox = document.getElementById("burger-selection-checkbox-" + burger.itemName);
                //If it had a checkbox, and it was checked, add the text
                if (checkbox !== undefined && checkbox.checked == true) {
                    orderedBurgers[i] = burger.itemName;
                    i++;
                } else if (checkbox === undefined) {
                    console.log("Missing checkbox for " + burger.itemName + "!");
                }
            }
            console.log(orderedBurgers);
            vm.addOrder(orderedBurgers);
        },
        getNext: function() {
          /* This function returns the next available key (order number) in
           * the orders object, it works under the assumptions that all keys
           * are integers. */
          vm.lastOrderID++;
          return vm.lastOrderID;
        },
        addOrder: function(listOfBurgers) {
          /* When you click in the map, a click event object is sent as parameter
           * to the function designated in v-on:click (i.e. this one).
           * The click event object contains among other things different
           * coordinates that we need when calculating where in the map the click
           * actually happened. */
          this.order.items = listOfBurgers;
          socket.emit('addOrder', {
            orderId: this.getNext(),
            details: vm.order.details,
            orderItems: listOfBurgers,
            personalInfo: vm.formData
          });
          this.submitted = true;
        },
        displayOrder: function(event) {
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            vm.order.details.x = event.clientX - 10 - offset.x;
            vm.order.details.y = event.clientY - 10 - offset.y;
        }
    }
})
