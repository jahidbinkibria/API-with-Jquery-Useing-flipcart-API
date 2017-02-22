$(document).ready(function(){
	$('form').submit(function (evt){
		evt.preventDefault();

		let $searchfield = $('#animal-search');
		let $button = $('#serch-button');
		
		$searchfield.prop('disabled',true);
		$button.attr('disabled',true).val('searching......');

		let flickrapi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		let animal = $searchfield.val();
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

			$searchfield.prop('disabled',false);
			$button.attr('disabled',false).val('search');
		}
		$.getJSON(flickrapi, flickroption, displayphoto);
	})
})