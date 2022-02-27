document.addEventListener('DOMContentLoaded', function() {
	frontWheel.onclick = function(){
		let productId = 447400250;
		Ecwid.Cart.addProduct(productId);}
	backWheel.onclick = function(){
		let productId = 447338684;
		Ecwid.Cart.addProduct(productId);}
	frontDoor.onclick = function(){
		let productId = 447517585;
		Ecwid.Cart.addProduct(productId);}
	headlight.onclick = function(){
		let productId = 447498688;
		Ecwid.Cart.addProduct(productId);}
	rearHeadlight.onclick = function(){
		let productId = 447354893;
		Ecwid.Cart.addProduct(productId);}	
	Ecwid.OnCartChanged.add(function(cart) {
	var k=0;
    var arId=[447400250,447338684,447517585,447498688,447354893];
    for (var i=0;i<cart.items.length;i++){
    	if (arId.includes(cart.items[i].product.id)) 
    		k++;
    	else k--;
    	};
    console.log(k)	
    if (k==5) {
    	var car= document.querySelector('#car');
    	car.style.display="none";
    	var text = document.querySelector("#text");
    	text.style.display="block";}
        
    else {
    	var car= document.querySelector('#car');
    	car.style.display="block";
    	var text = document.querySelector("#text");
    	text.style.display="none";}

    });
    
}, false);


