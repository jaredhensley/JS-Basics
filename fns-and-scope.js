//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
  if (name === "Tyler") {
    return true;
  } else {
    return false;
  }
}

console.log(isTyler("Tyler"));
console.log(isTyler("Jared"));

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName() {
  var name = prompt();
  return name;
}

/*console.log(getName());*/

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome(getName) {
  alert('Welcome: ' + getName());
}

/*welcome(getName);*/
//Next problem




//What is the difference between arguments and parameters?



  //Answer Here
  //parameters are locally scopped variables of a function that are essentially set to undefine in memory until the function is invoked.

//arguments are what is passed into the function. arguments are values and take the place of the parameter placeholder inside the function. 

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //falsy values include false, 0, null, and undefined.  you can check for falsy values by. 

  //!testvarorobj is a great way to test for falsyness.  

  //Answer Here



//Next Problem



//Create a function called myName that returns your name

function myName(firstName, lastName) {
  return firstName + " " + lastName;
}

  //Code Here

var newMyName = function(firstName, lastName) {
    alert(firstName + ' ' + lastName);
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

//Now alert the result of invoking newMyName

/*newMyName('Jared', 'Hensley');*/

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn () {
  return function() {
    return 'jared hensley';
  }
}
  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();
  //Code Here

//Now invoke innerFn.

alert(innerFn());
