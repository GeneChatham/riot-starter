// alert('hi');


var greetingHtml = $.render('<p>Welcome, { username }</p>', { username: "xXxDarkxAssassinxX" });
console.log("Result should be <p>Welcome, xXxDarkxAssassinxXx</p>", greetingHtml)


var giantButtonHtml = $.render('<a class="giant button {className}">Color is not {color}' , { color: 'pickle-green', className: 'not-green' });

console.log('Result should be <a class="giant button not-green">Color is not pickle-green</a>', giantButtonHtml);



var giantBoxTemplate = '<div id="{id}" class="giant">{content}</div>'

var giantBoxHtml = $.render(giantBoxTemplate, { id: 'loud', content: 'AHOY!'});

console.log('Result should be <div id="loud" class="giant">AHOY!</div>', giantBoxHtml);



var tastyItemTemplate = $('#templates .yummy').html();

var tastyItemHtml = $.render(tastyItemTemplate, { item: 'Creme Puff', tastiness: 'Oh so good', className: 'yummy'});

console.log('Result should be <div class="yummy box">The tasty thing is: Creme Puff. Its rating is: Oh so good</div>', tastyItemHtml);




var poultryRace = $.observable({});

poultryRace.on('turkey-run', function () {
  alert('gobble! gobble!');
});

poultryRace.on('chicken-waddle', function () {
  alert('kachirp kachirp!');
});


poultryRace.trigger('turkey-run');





var stuntMan = $.observable({});

stuntMan.on('10-story-jump', function() {
  alert("I beLIEVE!");
});

stuntMan.trigger('10-story-jump')




var makeItRain = {
  rainContent: 'dollar bills, yo'
};

console.log('Before:', makeItRain)
$.observable(makeItRain);
console.log('After:', makeItRain)

makeItRain.on('rain', function () {
  alert("It's raining " + makeItRain.rainContent + '.');
});

makeItRain.trigger('rain');




