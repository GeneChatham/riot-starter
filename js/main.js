
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM', genre: 'spoof' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k', genre: 'creepy'},
  { title: 'I Love Rocky Road', youtubeId: 'beTsDOBRs8I', genre: 'spoof'}

];

var itemTemplate = $('#templates .video-list-item').html();
var genreTemplate = $('#templates .genre-count').html();

var genres = ['spoof', 'creepy']
var stats = {};

var renderGenreStats = function() {
  window.stats = {};
  $('#genre-stats').empty();
  for(var i=0; i<genres.length; i++) {
    var genre = genres[i];
    if(stats[genre] === undefined) {
      stats[genre] = 0;
    }
    for(var j=0; j<videos.length; j++) {
      if(videos[j]['genre'] === genre){
        stats[genre] += 1;
      }
    }
    console.log(stats);
 
  var newGenreHtml = $.render(genreTemplate, { genre: genre, count: stats[genre] });
  console.log(newGenreHtml);
  $('#genre-stats').append(newGenreHtml);
  }
};



var renderVideoList = function () {
  for(var i=0; i<videos.length; i++) {
    var newItemHtml = $.render(itemTemplate, videos[i]);
    $('#video-list').append(newItemHtml);
  }
};

$('#new-video').on('submit', function() {
  event.preventDefault();
  var formTitle = document.forms["new-video"]["video_title"].value;
  var formID = document.forms["new-video"]["id"].value;
  var formGenre = document.forms["new-video"]["genre"].value;
  var formVideo = {title: formTitle, youtubeId: formID, genre: formGenre};
  videos.push(formVideo);
  var newItemHtml = $.render(itemTemplate, formVideo);
  $('#video-list').append(newItemHtml);
  this.reset();
  renderGenreStats();

});

renderVideoList();
renderGenreStats();
