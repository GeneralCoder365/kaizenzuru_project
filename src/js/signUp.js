document.getElementById("usernameSelectAlert").style.visibility = "hidden";
document.getElementById("passwordSelectAlert").style.visibility = "hidden";
document.getElementById("colorSelectAlert").style.visibility = "hidden";
document.getElementById("avatarnameSelectAlert").style.visibility = "hidden";
document.getElementById("shapeSelectAlert").style.visibility = "hidden";

//fix problem with submitting form without entering all required fields 
//current testing solution: copy getting input like avatar color for all other fields and try to get to work

var e = document.getElementById("colorSelector");
var avatarColor = "";

function setColor(){
  avatarColor = e.options[e.selectedIndex].text;
  console.log("Color: "+ avatarColor);
}


var avatarShape = "";
var shapes = ["circle", "triangle", "square", "pentagon", "hexagon"];

//adds border to the selected shape
//deletes all borders first, then borders the correct image
function changeShape(shape){

    var buttonType;

    for (var j = 0; j < shapes.length; j++){
      buttonType = shapes[j] + "Button";
      console.log("Button Type: "+buttonType);
      document.getElementById(buttonType).style.border = "0px";
    }
    
    for (var i = 0; i < shapes.length; i++){
      if (shape == shapes[i]){
        buttonType = shapes[i] + "Button";
        avatarShape = shapes[i];
        document.getElementById(buttonType).style.border = "3px solid black";
      }
      
      /*for (var k = i; k < shapes.length; k++){
        buttonType = 
        document.getElementById(buttonType).style.border = "";
      }*/

    }
    console.log("Avatar Shape: "+avatarShape);

    /*if (shape == "circle"){
      avatarShape = "circle";
      document.getElementById("circleButton").style.border = "2px solid black"; 

    }
    else if (shape == "triangle"){
      avatarShape = "triangle";
    }
    else if (shape == "square"){
      avatarShape = "shape";
    }
    else if (shape == "pentagon"){
      avatarShape = "pentagon";
    }
    else if (shape == "hexagon"){
      avatarShape = "hexagon";
    }

    console.log(avatarShape);*/
}

/*function usernameRequired() {
  if(avatarShape=="") {
    stopSubmit();
  } else {
    return true;
  }
}

function passwordRequired() {
  if(avatarShape=="") {
    stopSubmit();
  } else {
    return true;
  }
}

function colorRequired() {
  if(avatarShape=="") {
    stopSubmit();
  } else {
    return true;
  }
}

function avatarnameRequired() {
  if(avatarShape=="") {
    stopSubmit();
  } else {
    return true;
  }
}*/


function shapeRequired() {
    if(avatarShape=="") {
      document.getElementById("shapeSelectAlert").style.visibility = "visible";
      stopSubmit();
    } else {
      document.getElementById("shapeSelectAlert").style.visibility = "hidden";
      return true;
    }
}


function stopSubmit() {
  return false;
}
