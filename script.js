

/* GLOBAL VARIABLES */
var listOfProducts;
// add more global variables when needed..

/* Get products from the json file and store it in a javascript variable */
fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
});

/** Uses the loaded products data to create a visible product list on the website */
function createUIFromLoadedProducts() {
    /* Check your console to see that the products are stored in the listOfProducts varible */
    console.log(listOfProducts);
    var header = document.querySelector("header");
    
       header.innerHTML = '<a href="index.html" id="menubar">TechStore</a><span></span><a href="kundvagn.html" id="menubar2"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>';

    var main = document.querySelector("#main");
    console.log(main);
  


/* iPhone nummer 1 */            
    var iPhoneX = document.createElement("h1")
    iPhoneX.innerText = (listOfProducts[0].title)
    
    main.appendChild(iPhoneX)

    var iPhoneXdescription = document.createElement("p")
    iPhoneXdescription.innerText = (listOfProducts[0].description)
    
    main.appendChild(iPhoneXdescription)

    var img = document.createElement("img");
    img.src = "assets/iPhoneX.png"

    main.appendChild(img)

    var iPhoneXPris = document.createElement("h2")
    iPhoneXPris.innerText = (listOfProducts[0].price) + "kr";
    
    main.appendChild(iPhoneXPris)


    /* Knapp 1 börjar */

    var buttoniPhone = document.createElement("button");
    buttoniPhone.innerHTML = `<i class="fa fa-shopping-cart fa-3x" aria-hidden="true"></i><h6>LÃ¤gg i kundvagnen<h6>`;
    
    var body = document.getElementsByTagName("#main")[0];
    main.appendChild(buttoniPhone);
    
   

    /* Knapp slut */
/* iPhone slutar */ 

console.log(listOfProducts[3])
console.log(listOfProducts[0].price)

/* Add your code here, remember to brake your code in to
smaller function blocks to reduce complexity and increase readability */

/* Each function must have an explainetory comment like the one for this function, see row 15 */

/* Feel free to remove these other comments */
}
/*
main.innerHTML = `<img src="assets/iPhoneX.png"/>
<h1>iphoneX</h1>
`
*/

/* Read the projects readme before you start! */
/* Good luck and have fun ðŸ¤“ */
