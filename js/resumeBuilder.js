/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var bio = {"name" : "Lukasz",
 "role" : "GIS",
 "contacts" : {
	"mobile" : 123456789,
	"email" : "adres@domena",
	"github" : "lukaszkruk",
	"location" : "here"
	},
 "biopic" : "images/me.jpg",
 "welcomeMessage" : "Hello",
 "skills" : ["first", "second"]
 };
 
// formattedName = HTMLheaderName.replace("%data%", bio.name);
// formattedRole = HTMLheaderRole.replace("%data%", bio.role);

// var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
// var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
// var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
// var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
// var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
// var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
// var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

// formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
// formattedWelcome =  HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// formattedSkills =  HTMLskills.replace("%data%", bio.skills);
 
// $("#header").append(formattedName);
// $("#header").append(formattedRole);
// $("#header").append(formattedPic);
// $("#header").append(formattedWelcome);
// $("#header").append(formattedSkills);

var work = 
	[{
		"position": "GIS",
		"employer": "IOM",
		"years": "2016",
		"city": "Erbil"
	},
	{
		"position": "GIS",
		"employer": "REACH",
		"years": "2014",
		"city": "Duhok"
	}
	];


var education = {

	"one": {

		"name": "NOVA",
		"years": "2012",
		"city": "Lisbon"
	},

	"two": {
		"name": "WWU",
		"years": "2011",
		"city": "Munster"
	}
};

var projects = [
	{
		"title": "first project",
		"dates": "2016",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tincidunt nulla. Maecenas tortor ante, aliquam a metus sed, sollicitudin tincidunt quam.",
		"images": ["http://i.telegraph.co.uk/multimedia/archive/03589/Wellcome_Image_Awa_3589699k.jpg", "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4"]
	},
	{
		"title": "second project",
		"dates": "2018",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tincidunt nulla. Maecenas tortor ante, aliquam a metus sed, sollicitudin tincidunt quam.",
		"images": ["http://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/idcs1426.jpg?itok=Gc_-Q58L", "http://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"]
	}
];


// $("#main").append(work.position)
// $("#main").append(education["name"])