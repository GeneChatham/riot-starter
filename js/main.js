
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k' }
];

var itemTemplate = $('#templates .video-list-item').html();

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
  var formVideo = {title: formTitle, youtubeId: formID};
  videos.push(formVideo);
  var newItemHtml = $.render(itemTemplate, formVideo);
  $('#video-list').append(newItemHtml);
  this.reset();

});

renderVideoList();
