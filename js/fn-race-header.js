/* fn-race-header.js: fn related to header*/

/* function to retrieve position */
function getRaceNumber(details)
{
	return details.raceNumber;
}
/* function to retrieve track name */
function getTrackName(details)
{
	return details.meet.trackName;;
}
/* function to retrieve header race description */
function getRaceDescription(details)
{
	var dateRace = new Date(details.date);
	var raceTime = dateRace.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
	var raceDistance = details.distance + "m";
	var raceDescription = details.name;
	return raceTime + " " + raceDistance + " " + raceDescription;
}
/* function to retrieve date header race */
function getDateRace(details)
{
	var dateRace = new Date(details.date);
		
	var dd = dateRace.getDate();
	var mm = dateRace.getMonth()+1; //January is 0!
	var yyyy = dateRace.getFullYear();

	if(dd<10) {
		dd='0'+dd
	} 

	if(mm<10) {
		mm='0'+mm
	} 
	
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
	return dateHeaderRace = dd + ' ' + monthNames[parseInt(mm)-1] + ' ' + yyyy;
}