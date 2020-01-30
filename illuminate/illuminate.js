angular.module('myApp',[])
.controller('mainController',mainControllerFunction)
mainControllerFunction.$inject=['$scope'];
// MAIN FUNC
function mainControllerFunction($scope) {
// BULBs
    $scope.on = function(){document.getElementById('bulb').src = 'bulb_change.png';}
    $scope.off = function(){document.getElementById('bulb').src = 'bulb.png';}
    $scope.showNotifications = function(){
    }
// NOTIFICATIONS
    $scope.proof= false;
    $scope.proveIt = function(){
    $scope.proof=true;
  };
    // box close...
    $scope.closeNote = function(){
    $scope.proof = false;
  };
// SKILLS REPEAT
    $scope.skills = [
    "Painting",
    "Archery",
    "Brewing",
    "Computer Hardware",
    ]
    $scope.seeking = [
    "Playing Guitar",
    "Scuba Diving",
    "Taxes",
    "Strength Training",
    ]
    $scope.bHobbies = [
      'Backgammon',
      'Badminton',
      'Baseball',
      'Base Jumping',
      'Basketball',
      'Beach/Sun tanning',
      'Beachcombing',
      'Beadwork',
      'Beatboxing',
      'Becoming A Child Advocate',
      'Bell Ringing',
      'Belly Dancing',
      'Bicycling',
      'Bicycle Polo',
      'Bird watching',
      'Birding',
      'BMX',
      'Blacksmithing',
      'Blogging',
      'BoardGames',
      'Boating',
      'Body Building',
      'Bonsai Tree',
      'Bookbinding',
      'Boomerangs',
      'Bowling',
      'Brewing Beer',
      'Bridge Building',
      'Bringing Food To The Disabled',
      'Building A House For Habitat For Humanity',
      'Building Dollhouses',
      'Butterfly Watching',
      'Button Collecting',
    ]
  // END \\\\\\\\\\\\\\\\\\\\\\\\
};
