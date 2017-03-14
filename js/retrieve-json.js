$(document).ready(function(){
	getJSON('http://s3-ap-southeast-2.amazonaws.com/racevic.test-static/fe-test/racing-data-sample-v1.json').then(function(data) {
		$(".loader").remove();
		$.each(data.Races, function(m)
		{
			/* loop to render each race */
			$.each(data.Races[m].raceCollection, function(n)
			{
				var raceElement = ' \
				<div class="race race-'+ n +'"> \
					<!-- header includes top header, image and zoom icon --> \
					<header> \
						<div class="top-header bg-black"> \
							<!-- left column top header --> \
							<div class="pull-left col-md-6 col-sm-6 col-xs-8"> \
								<h2 class="race-number pull-left circle">' + getRaceNumber(this)  + '</h2> \
								<div class="pull-left left20"> \
								<h4 class="track-name pull-left fg-lightgrey">'+ getTrackName(data.Races[m]) +'</h4> \
								<h4 class="date pull-left fg-darkgrey">' +  getDateRace(this) + '</h4> \
								<label class="race-description pull-left clear-left fg-lightgrey">' + getRaceDescription(this) + '</label> \
								</div> \
							</div> \
							<!-- right column top header --> \
							<div class="col-md-6 col-sm-6 col-xs-4 text-right"> \
								<label class="pull-right spacer-md fg-lightgrey">Track condition</label> \
								<label class="pull-right clear-right fg-lightgrey">Good 3</label> \
							</div> \
						</div> \
						<img src="http://s3-ap-southeast-2.amazonaws.com/racevic.static/2017-01-01/flemington/photofinishes/race-2.jpg" alt="racing-header" /> \
						<span class="icon-zoom glyphicon glyphicon-search" data-toggle="modal" data-target="#modal-racing" aria-hidden="true"></span> \
					</header> \
					<!-- list ranking --> \
					<div class="list-ranking"> \
						<!-- header, headings list ranking --> \
						<ul class="head container-fluid"> \
							<li class="pull-left fg-darkgrey col-md-9 col-sm-9 col-xs-12 strong">Win/Place</li> \
							<li class="pull-left fg-darkgrey col-md-1 col-sm-1 xs-hide strong text-right">Margin</li> \
							<li class="pull-left fg-darkgrey col-md-1 col-sm-1 xs-hide strong text-right">SP</li> \
							<li class="pull-left fg-darkgrey col-md-1 col-sm-1 xs-hide strong text-right">VIC</li> \
						</ul> \
						<!-- body, content list ranking --> \
						<ul class="body container-fluid"> \
							<!-- loop element <li> to load dynamically {1..N} --> \
						</ul> \
					</div> \
					<!-- anchor Full Results -->  \
					<a href="http://www.racing.com" target="_blank" id="full-results" class="pull-right container-fluid fg-darkgrey"> \
						Full Results \
						<span class="icon-arrow glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span> \
					</a> \
				</div>';
				$('.wrap-races').append(raceElement);
				
				/* loop to render each row ranking */
				$.each(data.Races[m].raceCollection[n].raceResultsCollection, function()
				{
					var rowListRanking = ' \
					<li class="col-md-12 col-sm-12 col-xs-12"> \
						<div class="pull-left fg-darkgrey col-md-9 col-sm-9 col-xs-12 strong"> \
							<label class="position col-md-1 col-sm-1 col-xs-1 vertical-centering">'+ getPosition(this) +'</label> \
							<div class="col-md-11 col-sm-11 col-xs-11"> \
								<img class="pull-left" src="http:'+ getSilkUrl(this) +'" alt="sinkle" /> \
								<div class="pull-left rider-name"> \
									<a class="strong pull-left fg-darkgrey" href="http://www.racing.com/horses/' + getUrlHorse(this) + '"target="_blank">'+ getHorseDetails(this) +'</a> \ \
									<label class="pull-left clear-left"> \
										<strong>T:</strong> \
										<a class="fg-darkgrey" href="http://www.racing.com/trainers/'+ getUrlTrainer(this) +'" target="_blank">'+ getNameTrainer(this) +'</a> \
										<strong>J:</strong><a class="fg-darkgrey" href="http://www.racing.com/jockeys/'+ getUrlJockey(this) +'" target="_blank">'+ getNameJockey(this) +'</a> \
									</label> \
								</div> \
							</div> \
						</div> \
						<div class="pull-left fg-darkgrey col-md-1 col-sm-1 col-xs-4 xs-wrap vertical-centering text-right"> \
							<label class="hide xs-show">Margin</label> \
							<label>'+ getMarginRider(this) +'</label> \
						</div> \
						<div class="pull-left fg-darkgrey col-md-1 col-sm-1 col-xs-4 xs-wrap vertical-centering text-right"> \
							<label class="hide xs-show">SP</label> \
							<label>'+ getPriceStart(this) +'</label> \
						</div> \
						<div class="pull-left fg-darkgrey col-md-1 col-sm-1 col-xs-4 xs-wrap text-right"> \
							<label class="hide xs-show col-xs-12 xs-label-vic">VIC</label> \
							<label class="fg-darkgrey pull-right col-xs-6 sm-nofloat strong">'+ getReturnWin(this)  +'</label> \
							<label class="fg-darkgrey pull-right col-xs-6 clear-right">'+ getReturnPlace(this) +'</label> \
						</div> \
					</li>';	
					$(".race-"+ n +" .list-ranking ul.body").append(rowListRanking);
				});
			});
		});
	}, /* error handling */ 
	function(status) {
		console.log('Something went wrong');
		var errorElement = '<h1 class="col-md-12 fg-darkgrey">Something went wrong. Try again.</h1>';
		$('.wrap-races').append(errorElement);
	});
});


var getJSON = function(url)
{
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('get', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
			//console.log("status loader");
			//var loader = "<div class='text-center'><img class='text-center' src='./img-loader/loader.gif' alt='loader' /></div>";
			//$("body").append(loader);
		};
		xhr.addEventListener('load', function(e) {
			//console.log("success");
			var status = xhr.status;
			if (status == 200) {
				resolve(xhr.response);
			} else {
				reject(status);
			}
		});	
		xhr.send();
	});
};