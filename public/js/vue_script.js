
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
    created: function() {
      /* When the page is loaded, get the current orders stored on the server.
       * (the server's code is in app.js) */
      socket.on('initialize', function(data) {
        this.orders = data.orders;
      }.bind(this));
  
      /* Whenever an addOrder is emitted by a client (every open map.html is
       * a client), the server responds with a currentQueue message (this is
       * defined in app.js). The message's data payload is the entire updated
       * order object. Here we define what the client should do with it.
       * Spoiler: We replace the current local order object with the new one. */
      socket.on('currentQueue', function(data) {
        this.orders = data.orders;
      }.bind(this));
    },
    data: {
        menu : menu,
        formData : {
            name: "",
            email: "",
            gender: "other",
            payment_option: "Dogecoin"
        },
        orders: {}
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
        },
        getNext: function() {
          /* This function returns the next available key (order number) in
           * the orders object, it works under the assumptions that all keys
           * are integers. */
          let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
            return Math.max(last, next);
          }, 0);
          return lastOrder + 1;
        },
        addOrder: function(event) {
          /* When you click in the map, a click event object is sent as parameter
           * to the function designated in v-on:click (i.e. this one).
           * The click event object contains among other things different
           * coordinates that we need when calculating where in the map the click
           * actually happened. */
          let offset = {
            x: event.currentTarget.getBoundingClientRect().left,
            y: event.currentTarget.getBoundingClientRect().top,
          };
          socket.emit('addOrder', {
            orderId: this.getNext(),
            details: {
              x: event.clientX - 10 - offset.x,
              y: event.clientY - 10 - offset.y,
            },
            orderItems: ['Beans', 'Curry'],
          });
        }
    }
})
