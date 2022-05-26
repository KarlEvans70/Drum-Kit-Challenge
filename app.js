let numberOfDrumButtons = document.querySelectorAll(".Btn").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
	document.querySelectorAll(".Btn")[i].addEventListener ("click", function () {

		let buttonInnerHTML = this.innerHTML;

		makeSound(buttonInnerHTML);
	});

}

document.addEventListener("keypress", function(e){

	makeSound(e.key);
});


function makeSound(key) {

	switch (key) {
		case "a":
		 let boom=new Audio("sounds/boom.wav");
		 boom.play();
		 break;

		 case "s":
		 let hihat=new Audio("sounds/hihat.wav");
		 hihat.play();
		 break;
		 
		 case "d":
		 let openhat=new Audio("sounds/openhat.wav");
		 openhat.play();
		 break;

		 case "f":
		 let clap=new Audio("sounds/clap.wav");
		 clap.play();
		 break;

		 case "g":
		 let kick=new Audio("sounds/kick.wav");
		 kick.play();
		 break;

		 case "h":
		 let ride=new Audio("sounds/ride.wav");
		 ride.play();
		 break;

		 case "j":
		 let snare=new Audio("sounds/snare.wav");
		 snare.play();
		 break;

		 case "k":
		 let tom=new Audio("sounds/tom.wav");
		 tom.play();
		 break;

		 case "l":
		 let tink=new Audio("sounds/tink.wav");
		 tink.play();
		 break;	
		
		 default:console.log(key);

	};
}


