$("#NTSsubmit").on("click", function(event){
    event.preventDefault()
    console.log("buttonHit")
})

//Object
let coffeeShop = [];

//Array
var arrayOfCoffeeShops = [];

//Object
var coffeeShop2 = {name: "", comments: "", rating: "" };

function getUserValues() {
    var x = document.getElementById("userEntryBox");
    var shopName = document.getElementById("shop-name").value;
    var noteToSelf = document.getElementById("NTS").value;
    var ratingsStars = document.getElementById("stars").value;
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value ; //+ "<br>"
        
      }
    coffeeShop.name = shopName;
    coffeeShop.comments = noteToSelf;
    coffeeShop.rating = ratingsStars;

    coffeeShop.push({name: shopName, comments: noteToSelf, rating: ratingsStars});
    console.log(coffeeShop);
    document.getElementById("arrayTest2").innerHTML = ("Name: " + coffeeShop.name + " - comments: " + coffeeShop.comments + " - ratings: " + coffeeShop.rating);
    // document.querySelector(".card-header-title").innerHTML = (coffeeShop.name);
    // document.querySelector(".content").innerHTML = ("My Notes:" + coffeeShop.comments + "<br>" + "My Rating:" + coffeeShop.rating)

    //This for loop loops through the array.
    var text2 = "";
    for(i=0; i<coffeeShop.length; i++) {
      text2 += "Coffee Shop: " + coffeeShop[i].name + "<br>" + "Notes: " + coffeeShop[i].comments + "<br>" + "# Of Stars: " + coffeeShop[i].rating + "<br>";
    // document.querySelector(".card-header-title").innerHTML = (coffeeShop.name);
    // document.querySelector(".content").innerHTML = ("Notes: " + "<br>" + coffeeShop.comments + "<br>" + "Rating: " + coffeeShop.rating)
        
      }
      document.getElementById("arrayTest2").innerHTML = text2; 
    //   document.querySelector(".cardAppend").innerHTML = text2;  

    //   createCard();

}
 
// const createCard = function() {
//     var cardBox = document.querySelector(".cardAppend");
    
//     var outerDiv = document.createElement("div");
//     outerDiv.setAttribute("class", "card");

//     var header = document.createElement("header");
//     header.setAttribute("class", "card-header");

//     var p = document.createElement("p");
//     p.setAttribute("class", "card-header-title");
//     p.setAttribute("id", "shop-name");

//     var button = document.createElement("button");
//     button.setAttribute("class", "card-header-icon");
//     button.setAttribute("aria-label", "more options");

//     var span = document.createElement("span");
//     span.setAttribute("class", "icon");

//     var i = document.createElement("i");
//     i.setAttribute("class", "fas fa-angle-down");
//     i.setAttribute("aria-hidden", "true");

//     var innerDiv = document.createElement("div");
//     innerDiv.setAttribute("class", "card-content");
    
//     var innerDiv2 = document.createElement("div");
//     innerDiv2.setAttribute("class", "content");

//     var a = document.createElement("a");
//     a.setAttribute("href", "#");

//     var a2 = document.createElement("a");
//     a2.setAttribute("href", "#");

//     var a3 = document.createElement("a");
//     a3.setAttribute("href", "#");

//     var br = document.createElement("br");

//     var time = document.createElement("time");
//     time.setAttribute("datetime", "2016-1-1");

//     var a4 = document.createElement("a");
//     a4.setAttribute("href", "#");
//     a4.setAttribute("class", "card-footer-item");

//     var a5 = document.createElement("a");
//     a5.setAttribute("href", "#");
//     a5.setAttribute("class", "card-footer-item");

//     var a6 = document.createElement("a");
//     a6.setAttribute("href", "#");
//     a6.setAttribute("class", "card-footer-item");

 
//     var footer = document.createElement("footer");
//     footer.setAttribute("class", "card-footer");
//     outerDiv.append(footer);

//     cardBox.append(outerDiv);
//     outerDiv.append(header);
//     header.append(p);
//     header.append(button);
//     button.append(span);
//     span.append(i);
//     outerDiv.append(innerDiv);
//     innerDiv.append(innerDiv2);
//     innerDiv2.append(a);
//     innerDiv2.append(a2);
//     innerDiv2.append(a3);
//     innerDiv2.append(time);
//     outerDiv.append(footer);
//     footer.append(a4);
//     footer.append(a5);
//     footer.append(a6);

//     // document.querySelector(".card-header-title").innerHTML = (coffeeShop.name);
//     // document.querySelector(".content").innerHTML = ("My Notes: " + coffeeShop.comments + "<br>" + "My Rating: " + coffeeShop.rating)
// } 



//Creating elements.
//Place data inside elements.
//Put elements in HTML by appending the divs.
//append child elements to parent elements.
//

//DONE - **shopName** + inside of this onclick^, get the value of the input for the name ()
//DONE - **noteToSelf** + get the value for the input for the NTS
//DONE = **coffeeshop** **coffee.shop.name** ---- put these "name of shop" and nts" into an object
//DONE = push that object^ into an array (array because there are multiple shops that have notes) *each coffee shop will only have one note
// = Show all of the array. A For Loop. 

//store this array^ into localstorage

//when the page loads, if there is an array in localstorage, then the array will = that array, otherwise it will = an empty array
//dynamically create html for each item in the array
//for each item(shop) in the array, make a box and .append it to another box in reviews.html

//getting into localstorage, JSON.stringify. and getting out of local storage, JSON.parse.
