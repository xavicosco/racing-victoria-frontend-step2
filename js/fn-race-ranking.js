/* fn-race-ranking.js: fn related to header*/

/* function to retrieve position */
function getPosition(details)
{
	//add ordinal suffix number 
    var j = details.position % 10,
        k = details.position % 100;
    if (j == 1 && k != 11) {
        return details.position + "st";
    }
    if (j == 2 && k != 12) {
        return details.position + "nd";
    }
    if (j == 3 && k != 13) {
        return details.position + "rd";
    }
    return details.position + "th";
}
/* function to retrieve silk url */
function getSilkUrl(details)
{
	return details.horse.silkUrl;
}
/* function to retrieve horse details */
function getHorseDetails(details)
{
	return details.raceEntryNumber + ". " + details.horse.fullName + " (" + details.barrierNumber + ")";
}
/* function to retrieve url trainer */
function getUrlTrainer(details)
{
	return (details.trainer != null) ? details.trainer.urlSegment : '';
}
/* function to retrieve url horse */
function getUrlHorse(details)
{
	return details.horse.urlSegment;
}	
/* function to retrieve url jockey */
function getUrlJockey(details)
{
	return (details.jockey != null) ? details.jockey.urlSegment : '';
}
/* function to retrieve name trainer */
function getNameTrainer(details)
{
	return (details.trainer != null) ? details.trainer.urlSegment : '';
}
/* function to retrieve name jockey */
function getNameJockey(details)
{
	return (details.jockey != null) ? details.jockey.urlSegment : '';
}
/* function to retrieve margin rider */
function getMarginRider(details)
{
	if (parseInt(details.position) == 1)
		return toHHMMSS(details.winningTime);
	else
		return (details.margin == null) ? ' - ' : details.margin;
}
/* function to retrieve price start */
function getPriceStart(details)
{
	return details.odds.priceStart;
}
/* function to retrieve win */
function getReturnWin(details)
{
	var returnWin = ' - ';
	if (details.odds.parimutuel != null)
	{
		returnWin = details.odds.parimutuel.returnWin == null ? ' - ' : '$'+details.odds.parimutuel.returnWin;
	}
	return returnWin;
}
/* function to retrieve place */
function getReturnPlace(details)
{
	var returnPlace = ' - ';
	if (details.odds.parimutuel != null)
	{
		returnPlace = '$' + parseFloat(Math.round(details.odds.parimutuel.returnPlace * 100) / 100).toFixed(2);
	}
	return returnPlace;
}			
							/* function to render winner time */
function toHHMMSS(val)
{
	var sec_num = parseInt(val, 10); // don't forget the second param
	var hours   = Math.floor(sec_num / 6000);
	var minutes = Math.floor((sec_num - (hours * 6000)) / 60);
	var seconds = sec_num - (hours * 6000) - (minutes * 60);

	if (hours   < 10) {hours   = "0"+hours;}
	if (minutes < 10) {minutes = "0"+minutes;}
	if (seconds < 10) {seconds = "0"+seconds;}

	return hours + ':' + minutes + ':' + seconds;
}