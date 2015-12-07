/*
This is empty on purpose! Your code to build the resume will go here.
 */
//bio section
var bio = {
    "name": 'Destino Dello',
    "role": 'Web Developper',
    "contacts": {
        "mobile": '+254708797070',
        "email": 'destinodello@gmail.com',
        "github": 'destino92',
        "twitter": 'https://twitter.com/Destimoniak',
        "location": 'Nairobi, KE'
    },
    "welcomeMessage": 'Hoye I\'m Destino, a Front End Developper and this is my online resume',
    "skills": ['html5', 'css3', 'twitter bootstrap', 'grunt', 'JavaScript', 'jQuery', 'Git', 'github', 'photoshop'],
    "biopic": 'images/me.jpg'
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName);
    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);
    $("#header").append(formattedBioPic).append(formattedWelcomeMessage);

    if (bio.skills.length !== 0) {
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(element) {
            var formattedSkills = HTMLskills.replace("%data%", element);
            $("#skills").append(formattedSkills);
        });
    }

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);
};

bio.display();

//work section
var work = {
    "jobs": [{
        "employer": 'QwickLink',
        "title": 'Co Founder, Web Developer',
        "location": 'Nairobi, KE',
        "dates": 'October 2015 - Future',
        "description": 'I am in charge of the developping the front end of the QwickLink social network. For now the project is still under work and i am comitted to it at part-time.I do everything client-side related and collaborate with our back end Developer to implement it.'
    }]
};

work.display = function() {
    work.jobs.forEach(function(element) {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", element.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", element.title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", element.dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", element.location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", element.description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    });
};

work.display();

//project section
var projects = {
    "projects": [{
        "title": 'SYDNEY LIRA website',
        "dates": '2015',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        "images": ['images/17.jpg']
    }]
};

projects.display = function() {
    projects.projects.forEach(function(element) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", element.title);
        var formattedDates = HTMLprojectDates.replace("%data%", element.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", element.description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (element.images.length !== 0) {
            element.images.forEach(function(element) {
                var formattedImage = HTMLprojectImage.replace("%data%", element);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};

projects.display();

//education section
var education = {
    "schools": [{
        "name": 'Eastern Mediteranean University',
        "location": 'Gasimagusa, TRNC',
        "degree": 'Bsc',
        "majors": ['Computer Engineering'],
        "dates": 2011,
        "url": 'http://ww1.emu.edu.tr/en/programs/computer-engineering-undergraduate-program/c/907'
    }],
    "onlineCourses": [{
        "title": 'JavaScript Programming: Learn by Making a Mobile Game',
        "school": 'Udemy',
        "dates": 2015,
        "url": 'https://www.udemy.com/certificate/UC-BHKYRZV2/'
    }]
};

education.display = function() {
    education.schools.forEach(function(element) {
        var formattedschoolName = HTMLschoolName.replace("%data%", element.name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", element.degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", element.dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", element.location);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolLocation);

        element.majors.forEach(function(element) {
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", element);
            $(".education-entry:last").append(formattedschoolMajor);
        });
    });

    $(".education-entry").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(element, index, array) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", element.title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", element.school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", element.dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", element.url);

        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineURL);
    });
};

education.display();

//add a map
$("#mapDiv").append(googleMap);