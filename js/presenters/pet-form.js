(function () {


  $('.new-pet form').on('submit', function(e) {
    e.preventDefault();
    var title = $('.title').val();
    var imgSrc = $('.imgSrc').val();
    var newPet = {
      title: title,
      imgSrc: imgSrc
    };
    console.log('submitted', title, imgSrc);
  
    var pet = new PetPresenter(newPet);
  })


})();