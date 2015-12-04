/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
		"name": "Destino Dello",
		"role": "Web Developper",
		"contact": {
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
var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
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

$("#header").append(HTMLskillsStart);

for (var skill in bio.skills){
	var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
	$("#skills").append(formattedSkills);
}

//work section
var work = {};

work.employer = "QwickLink" ;
work.title = "Co Founder, Web Developer" ;
work.dates = "October 2015 - Future";
work.location = "Nairobi, KE";
work.description = "I am in charge of the developping the front end of the QwickLink social network. For now the project is still under work and i am comitted to it at part-time.I do everything client-side related and collaborate with our back end Developer to implement it."
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.title);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.description);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedWorkEmployer + formattedWorkTitle);
$(".work-entry").append(formattedWorkDates);
$(".work-entry").append(formattedWorkLocation);
$(".work-entry").append(formattedWorkDescription);

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
			"Title" : "JavaScript Programming: Learn by Making a Mobile Game",
			"School" : "Udemy",
			"Dates" : 2015,
			"URL" : "https://www.udemy.com/certificate/UC-BHKYRZV2/"
		}
	]
};

var formattedschoolName = HTMLschoolName.replace("%data%", education.schoolName);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schoolDegree);
var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schoolDates);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schoolLocation);
var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schoolMajor); 

$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedschoolName + formattedschoolDegree);
$(".education-entry").append();
$(".education-entry").append(formattedschoolDates);
$(".education-entry").append(formattedschoolLocation);
$(".education-entry").append(formattedschoolMajor);

education.onlineTitle = "JavaScript Programming: Learn by Making a Mobile Game";
education.onlineSchool = "Udemy";
education.onlineDates = "2015";
education.onlineURL = "https://www.udemy.com/certificate/UC-BHKYRZV2/";

var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineTitle);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineSchool);
var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineDates);
var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineURL);

$(".education-entry").append(HTMLonlineClasses);
$(".education-entry").append(formattedonlineTitle + formattedonlineSchool);
$(".education-entry").append(formattedonlineDates);
$(".education-entry").append(formattedonlineURL);