/*
This is empty on purpose! Your code to build the resume will go here.
 */

//bio section
var bio = {
		"name": "Destino Dello",
		"role": "Web Developper",
		"contacts": {
			"mobile": "+254708797070",
			"email": "destinodello@gmail.com",
			"github": "destino92",
			"location": "Nairobi, KE" 
		},
		"bioPic": "images/me.jpg",
		"welcomeMessage": "Hoye I'm Destino, a Front End Developper and this is my online resume",
		"skills": ["html5","css3","twitter bootstrap","grunt","JavaScript","jQuery","Git","github","photoshop"]
	}

var formattedName = HTMLheaderName.replace("%data%",bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%",bio["role"]);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

if(bio.skills.length != 0){
$("#header").append(HTMLskillsStart);

	for (var skill in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
};

//work section
var work = {
	"jobs" : [
	  {
		"employer" : "QwickLink",
		"title" : "Co Founder, Web Developer",
		"location" : "Nairobi, KE",
		"dates" : "October 2015 - Future",
		"description" : "I am in charge of the developping the front end of the QwickLink social network. For now the project is still under work and i am comitted to it at part-time.I do everything client-side related and collaborate with our back end Developer to implement it."
	  }
	]
};

function displayWork() {
	for(job in work.jobs) {
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

displayWork();

//project section
var projects = {
	"project" : [
		{
			"title" : "a simple js game",
			"dates" : "",
			"description": "",
			"images": []
		}
	]
}

//education section
var education = {
	"schools": [
		{
			"name" : "Eastern Mediteranean University",
			"degree" : "Bsc",
			"dates" : 2011,
			"location" : "Gasimagusa, TRNC",
			"major" : "Computer Engineering"
		}
	],
	"onlineCourses": [
		{
			"title" : "JavaScript Programming: Learn by Making a Mobile Game",
			"school" : "Udemy",
			"dates" : 2015,
			"url" : "https://www.udemy.com/certificate/UC-BHKYRZV2/"
		}
	]
};

var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major); 

$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedschoolName + formattedschoolDegree);
$(".education-entry").append();
$(".education-entry").append(formattedschoolDates);
$(".education-entry").append(formattedschoolLocation);
$(".education-entry").append(formattedschoolMajor);

var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates);
var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);

$(".education-entry").append(HTMLonlineClasses);
$(".education-entry").append(formattedonlineTitle + formattedonlineSchool);
$(".education-entry").append(formattedonlineDates);
$(".education-entry").append(formattedonlineURL);

//collecting click locations
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});