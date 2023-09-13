
const sections= document.querySelectorAll('section'); //We get the sections and store them. We will use them to create the menu and get their position relative to viewport, in the future.
console.log(sections); //testing
const ulElement=document.querySelector('ul'); //We get the UL element and store it. We will store our <li> menu items in it.
console.log(ulElement); //testing


//this for-loop loops around the sections to get their IDs, and create a menu based on the number of sections we have. its dynamic
for(let i=0; i<sections.length;i++){
	let headText="<li><a href=#>"+sections[i].getAttribute('id')+"</a></li>";
	ulElement.insertAdjacentHTML('beforeend',headText);
}

const menuItems=document.querySelectorAll('.page__header nav ul li a'); //now after creating the menu, lets store it because we want to activate a color to it when the section is in the viewport
//this function checks which section is in the viewport and then it enables a red color around the section and its nav-menu name
function activeState(){
	console.log("hello");
for (let i=0; i<sections.length;i++){
	const elementLocation=sections[i].getBoundingClientRect();
	console.log("ElementLocationTop "+elementLocation.top);
	console.log("ElementLocationBottom "+elementLocation.bottom);
	if(elementLocation.top<500&&elementLocation.bottom>500){
		//sections[i].classList.add("active-section");
		menuItems[i].classList.add("active-section");
	}
	else{
		//sections[i].classList.remove("active-section");
		menuItems[i].classList.remove("active-section");
	}
}


}
document.addEventListener('scroll', function() { activeState()}); //when a user scrolls up or down, this function 'activeState' is enabled once every scroll

//when a user clicks on a menu item, the default action is prevented and then we do our event in the function
ulElement.addEventListener('click', function(evt){
	evt.preventDefault(); 
	const menuTarget=evt.target.textContent;
	const elementToScrollTo=document.querySelector("#"+menuTarget);
	console.log(elementToScrollTo);
	elementToScrollTo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

})

