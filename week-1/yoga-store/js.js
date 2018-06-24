let shoppingCart = [];
let products = [{ referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }];

function addToCart() {
  let input = parseInt(document.getElementById('refNum').value);
  //I have to be sure that is a number, so I have to convert this input
  //to a number. I am doing that with parseInt
  let product = products.find(product => product.referenceNumber === input);
  console.log(product);
  //pitaj ovaj deo - poredjenje vrednosti razlicitog tipa -
  let shoppingList = shoppingCart.push(product);
  console.log(shoppingList);
  let shoppingCartPreview = document.getElementById('shoppingCart');
  //shoppingCartPreview.appendChild(shoppingList);
  //shoppingCartPreview.appendChild(shoppingCard);
};
