(function () {

  window.PetScorePresenter = function(options) {

    var $root = options.root;
    var likes = options.comments.likes;
    var comments = options.comments;
    var likeCounter = 0;


      // // // // // // //
     // Model Listeners /
    // // // // // // //

    comments.on('like', function(comment) {
      likeCounter += 1;
      $root.text("Total likes: " + likeCounter);
    });



  };



})();