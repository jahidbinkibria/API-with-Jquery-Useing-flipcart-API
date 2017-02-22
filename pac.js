$(document).ready(function(){
	$('ul li').click(function(){
		$('li').removeClass('foradd');
		$(this).addClass('foradd');

		let flickrapi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		let animal = $(this).text();
		let flickroption = {
			tags : animal,
			format: "json"
		};
		function displayphoto(data){
			let html = '<ul>';
			$.each(data.items, function(i , photo){
				html += '<li class="col-md-3">';
				html += '<a href=" ' + photo.link + ' " class="image">';
				html += '<img src=" ' + photo.media.m + ' " ></a></li>';
			})
			html+= '</ul>';
			$('.photo').html(html);
		}
		$.getJSON(flickrapi, flickroption, displayphoto);
	})
})