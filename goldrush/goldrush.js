//App/ModuleName...
angular.module('app', [])
// controllerDeclarations...
.controller('mainController', mainControllerFunction)
// "injector"...
mainControllerFunction.$inject = ['$scope'];

// Main func START =>>
function mainControllerFunction($scope) {


  // create DOM element function

  $scope.showCoords = function(){
    var x = event.pageX;
    var y = event.pageY;
    var box = document.createElement("DIV");
    var mark = document.createTextNode("X");
    box.className = 'marker';
    box.appendChild(mark);
    document.body.appendChild(box);
    box.style.position = "absolute";
    box.style.left = (x-10)+'px';
    box.style.top = (y-15)+'px';

    // message section

    var answer= confirm("Click OK to save a MESSAGE to this marker!");
    if(answer){
      var message = prompt("Save your message...");
      var box2 = document.createElement("DIV");
      var text = document.createElement("TEXTAREA");
      text.innerHTML=message;
      box2.className = 'otherBox';
      text.className = 'text';
      box2.appendChild(text);
      document.body.appendChild(box2);
      box2.style.position = "absolute";
      box2.style.visibility = "hidden";
      box2.style.left = (x-70)+'px';
      box2.style.top = y+'px';
    };
    box.onmouseover = function(){
      box2.style.visibility = 'visible';
    };
    var timeoutHide = function(){box2.style.visibility='hidden'};
    box.onmouseout = function (){
      setTimeout(timeoutHide, 2000);
    };

    // kill DIV function

    box.onclick = function (){
      this.parentElement.removeChild(this);
    };
  };

  // END \\\\\\\\\\\\\\\\\\\\\\\\
};
