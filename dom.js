  const items ={
	apple:{price:1000 , quantity:0 },
	banana:{price:2000 ,quantity:0},
	orange:{price:2000 ,quantity:0},
  };
 
  function adjustQuantity(item, change){
	items[item].quantity += change;
	if (items[item].quantity < 0){
		items[item].quantity = 0;
	}
	updateCart();
}
function updateCart(){
	document.getElementById("apple-quantity").textContent =
	items.apple.quantity;
	document.getElementById("banana-quantity").textContent =
	items.banana.quantity;
	document.getElementById("orange-quantity").textContent =
	items.orange.quantity;

let total = 0;
for (let item in items) {
	total += items[item].price * items[item].quantity;
   }
 document.getElementById("total-price").textContent = 
 "prix-total: FCFA" + total;
}

function changerCouleur(element){
	if (element.style.backgroundColor == 'red')
	element.style.backgroundColor ='white';
	else
	element.style.backgroundColor = 'red';
}

function supprimer(item){
	items[item].price ;
	if (items[item].quantity < 0){
		items[item].quantity = 0;
	}
}