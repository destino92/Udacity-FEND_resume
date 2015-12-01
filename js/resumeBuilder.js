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
	};

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

