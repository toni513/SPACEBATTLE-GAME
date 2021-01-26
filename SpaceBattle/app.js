$(() => {

  //Modal 

  // Grabbing "Mission" button. 
  const $openBtn = $('#openModal');

  // Grabbing modal element
  const $modal = $('#modal');

  // Grabbing close button
  const $closeBtn = $('#close');

  // Event handler to open the modal
  // Add event listener to About the Game button
  $openBtn.on('click', () => {
  $modal.css('display', 'block');
 });
  
  // Event handler to close the modal
  // Add event listener to Close button
  $closeBtn.on('click', () => {
    $modal.css('display', 'none');
  });
  
 
 //Input prompt to start the Battle to Save Earth!!!
 $("#close").click(function() {
   inputName = prompt("PLEASE ENTER YOUR NAME CAPTAIN: ")
   console.log('%cTHANK YOU CAPTAIN ' +inputName+ ' FOR YOUR SERVICE!!!','color:red;font-weight:bold;text-transform:capitalize;font-size:45px');
  });
}); 


//Reminder prompt after Mission Accepted button is clicked
setTimeout(function() {
    alert("HEAD TO THE CONSOLE CAPTAIN.....THE ALIENS HAVE ARRIVED!!!");
  }, 15000);


//Console Intro. message at the start of the game
console.log("%cYOUR WEAPONS ARE LOADED, LET'S GET STARTED!!!",'color:orange;font-weight:bold;font-size:30px');


//Create Battleship class 
class Battleship {
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

//New Object for Captain Battleship
let Captain = new Battleship('USS Schwarzenegger', 20, 5, .7)

//Alien Array for Alien Battleships
const alienArr = []
for(let i = 1; i <= 6; i++){
    let alienHull = Math.floor(Math.random() * 6) + 3;
    let alienFirePower = Math.floor(Math.random() * 4) + 2; 
    let alienAccuracy = Math.floor(Math.random() * .8) + .6; 
    let Alien = new Battleship('Dark Shield', alienHull, alienFirePower, alienAccuracy)
    alienArr.push(Alien);
};

//Battle Loop
while (alienArr.length > 0) {

    let alienForce = alienArr.pop();
    if (Math.random() < alienForce.accuracy) {
      console.log("%c CAPTAIN,YOU'VE BEEN HIT!","background:silver;border:4px dashed black;text-transform:capitalize;font-weight:bold;font-variant:small-caps;color:aqua;font-size: 18px");
      Captain.hull = Captain.hull - alienForce.firepower;
      Captain.firepower = Captain.firepower - alienForce.hull;
      Captain.accuracy = Captain.accuracy - alienForce.accuracy;
      console.log(`%cCAPTAIN'S HULL HEALTH: ${Captain.hull}`,"font-weight:bold;color:magenta");
      console.log(`%cCAPTAIN'S FIREPOWER: ${Captain.firepower}`,"font-weight:bold;color:blue");
      console.log(`%cCAPTAIN'S ACCURACY: ${Captain.accuracy}`,"font-weight:bold;color:gold");
    } else if (Math.random() > alienForce.accuracy) {
      console.log("%cCAPTAIN,YOU SCORED A DIRECT HIT!","font-weight:bold;font-size:15px;font-variant:small-caps;color:purple");
      alienForce.hull = alienForce.hull - Captain.firepower;
      alienForce.firepower = alienForce.firepower - Captain.hull;
      alienForce.accuracy = alienForce.accuracy - Captain.accuracy;
      console.log(`%cALIEN HULL HEALTH: ${alienForce.hull}`,"font-weight:bold;color:magenta");
      console.log(`%cALIEN FIREPOWER: ${alienForce.firepower}`,"font-weight:bold;color:blue");
      console.log(`%cALIEN ACCURACY: ${alienForce.accuracy}`,"font-weight:bold;color:gold");
    } console.log("%cALIEN BATTLESHIP DESTROYED!","background:silver;border:2px solid grey;text-transform:capitalize;font-weight:bold;font-style:italic;font-variant:small-caps;color:coral;font-size:16px");
    if (Captain.hull > 0 && alienArr.length == 0) {
    console.log("%cEARTH IS SAFE!!!","font-weight:bold;font-size:40px;font-variant:large-caps;color:green");
  };   
    if (Captain.hull <= 0) {
      console.log("%cALL IS LOST!!!","font-weight:bold;font-size:40px;font-variant:large-caps;color:red");
    }
  }
  
   

    








