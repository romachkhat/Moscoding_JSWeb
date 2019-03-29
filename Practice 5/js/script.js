let crypto = [
    {
      name : "Bitcoin",
      price: 1388.37
    },
    {
      name : "Ethereum",
      price: 716
    },
    {
      name : "Litecoin",
      price: 140
    }
]

const headings = document.getElementsByTagName("h2");
const prices = document.getElementsByTagName("p");
const divs = document.querySelectorAll(".coin div");

for (i = 0; i < crypto.length; i++) {
    headings[i].innerHTML = crypto[i].name;
    prices[i].innerHTML = crypto[i].price;
    divs[i].style.width = parseInt(crypto[i].price / 5) + "px";
}