angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller("CalculatorController", function($scope, $ionicSideMenuDelegate, $calculatorFactory, $ionicSlideBoxDelegate) {


  $scope.$on('$ionicView.enter', function () {
  $ionicSideMenuDelegate.canDragContent(false);
  document.getElementById("gone0").style.display = 'none'; document.getElementById("gone1").style.display = 'none'; document.getElementById("gone2").style.display = 'none'; document.getElementById("gone3").style.display = 'none'; document.getElementById("gone4").style.display = 'none';
  document.getElementById("gone5").style.display = 'none'; document.getElementById("gone6").style.display = 'none'; document.getElementById("gone7").style.display = 'none'; document.getElementById("gone8").style.display = 'none'; document.getElementById("gone9").style.display = 'none';
  $scope.expression = [];
  });


  //$scope.slideHasChanged = function($index){
    //$scope.expression =


    //}


    $scope.calculate = function(expression) {
        var postfix = $calculatorFactory.infixToPostfix(expression);
        $scope.expression[$ionicSlideBoxDelegate.currentIndex()] = $calculatorFactory.solvePostfix(postfix.trim());
    }

    $scope.add = function(value) {
        if($scope.expression[$ionicSlideBoxDelegate.currentIndex()] === "" || $scope.expression[$ionicSlideBoxDelegate.currentIndex()] === undefined) {
            $scope.expression[$ionicSlideBoxDelegate.currentIndex()] = value;
        } else {
            $scope.expression[$ionicSlideBoxDelegate.currentIndex()] = $scope.expression[$ionicSlideBoxDelegate.currentIndex()] + " " + value;
        }
    }

    $scope.backspace = function(expression) {
        var toFix = $scope.expression[$ionicSlideBoxDelegate.currentIndex()];
        var afterFix = toFix.slice(0, toFix.length-2)
        $scope.expression[$ionicSlideBoxDelegate.currentIndex()] = afterFix;
    }

    $scope.clear = function(){
      $scope.expression[$ionicSlideBoxDelegate.currentIndex()] = "";
    }

})

.controller("TruthController", function($scope) {


  $scope.$on('$ionicView.enter', function () {
  $scope.conditional = [];
  });


})

.controller("VoteCtrl", function($scope) {

var str;

  if (str=="") {
    document.getElementById("voteCount").innerHTML="";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
   xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("voteCount").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","userinput.php",true);
  xmlhttp.send();

})


.controller("WelcomeCtrl", function($scope, $stateParams) {
});
