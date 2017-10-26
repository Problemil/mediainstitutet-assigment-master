//Javascritinlämning till David//
/* GLOBAL VARIABLES */

var listOfProducts;
//Json information//
fetch("products.json")
.then(function(response){
    return response.json();
} )
.then(function(data) {
    productData = data;
    createListFromProductData();
    console.log(productData);
});
//Gör loop och skapar variabel från "main" diven från index.html//
    function createListFromProductData() {
        var main = document.getElementById("main");
        //loopar
        for(var index = 0; index < productData.length; index++) {
            //ringer den nya funktionen//
            var productCard = createProductCard(productData[index]);
            main.appendChild(productCard);
        }
        document.body.appendChild(main);
    }
//Helt ny funktion utanför den övre funktionen//
    function createProductCard (productData) {
        var productCard = document.createElement("div")
        productCard.className = "productCardClass";
//Title
        var getProductTitle = document.createElement("h2");
        getProductTitle.innerText = productData.title;
        productCard.appendChild(getProductTitle);
//Decepticon//
        var getProductsDescription = document.createElement("p");
        getProductsDescription.innerText = productData.description;
        productCard.appendChild(getProductsDescription);
//Price//
        var getProductImage = document.createElement("img");
        getProductImage.src = "assets/" + productData.image;
        productCard.appendChild(getProductImage);
//Button//
        var getProductPrice = document.createElement("h3");
        getProductPrice.innerText = productData.price + " kr";
        productCard.appendChild(getProductPrice);

        var buttonElement = document.createElement("button");
        buttonElement.onclick = function() {positive()};
        buttonElement.innerText = "Lägg till i kundvagn";
        productCard.appendChild(buttonElement);

   
        return productCard;
    }
    var count = 0;
    
    var step = 1;
    
    
    
    var span = document.querySelector("span");
    
    var positive;
    
    
    
    function positive (){
    
       count = count + step
    
       span.innerText = count;
    
       alert("1 produkt har lagts till");
    
     }

/** Uses the loaded products data to create a visible product list on the website */
function createUIFromLoadedProducts() {
    /* Check your console to see that the products are stored in the listOfProducts varible */
    console.log(listOfProducts);
}