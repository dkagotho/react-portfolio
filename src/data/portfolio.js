const portfolioData = { 
	"imageUrl": 'http://localhost:3000/',
	"logo": "images/app-logo.svg",
	"logoWhite": "images/app-logo-white.svg",
	"name": 'Diana kagotho',
	"role": 'Full Stack Developer',
	"intro": "Never stop learning, because life never stops teaching.",
	"projects": [
		{
			"id": 0,
			"title": "Insta_Food_and_Booz",
			"imageUrl": "images/portfolio/instafood-and-booz.png",
			"link": "https://dkagotho.github.io/Insta_Food_and_Booz-prj1",
			"codeLink": "https://github.com/dkagotho/dkagotho.github.io/tree/master/Insta_Food_and_Booz-prj1",
			"description": "This is a food and booz website. It basically fetches data from a food and booz API that randomly combines food recipes and cocktails.",
			"technology": ["HTML/CSS", "JAVA SCRIPT", "API CALLS"],
		},	
		{
			"id": 1,
			"title": "The Pharmacy",
			"imageUrl": "images/portfolio/the-pharmacy.png",
			"link": "https://cryptic-hollows-33962.herokuapp.com",
			"codeLink": "https://github.com/dkagotho/project-2",
			"description": "The Pharmacy is an Ecommerce website that provides medicine and medical supplies.",
			"technology": ["HTML/CSS", "Javascript", "Handlebars JS", "Node.js", "MySQL", "express"],
		},
		{
			"id": 2,
			"title": "Workout-rockout",
			"imageUrl": "images/portfolio/workout_rockout.png",
			"link": "https://workout-rockout.herokuapp.com/?id=5ee425088ff50c0017f30b92",
			"codeLink": "https://github.com/dkagotho/Workout-tracker",
			"description": "Rockout work out is a work out app that is able to be able to view create and track daily workouts. It allows you to be able to log multiple exercises in a workout on a given day. It tracks the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, it tracks the distance traveled.",
			"technology": ["HTML/CSS", "CSS", "React", "Node.js", "MongoDB"],
		},
		{
			"id": 3,
			"title": "Hataw Ecommerce (Wap)",
			"imageUrl": "images/portfolio/hataw-wap.png",
			"link": "https://hataw.ph/wap/",
			"codeLink": "",
			"description": "Hataw Ecommerce (Wap) is a mobile web version.",
		},
		{
			"id": 4,			
			"title": "Paper Todo App using React",
			"imageUrl": "images/portfolio/react-todo-thumbnail.png",
			"link": "",
			"codeLink": "https://github.com/jrussumbrella/react-paper-todo",
			"description": "Simple to do app that uses local storage to save to do list.",
			"technology": ["HTML", "Paper CSS", "React"]			
		},
		{
			"id": 5,
			"title": "MHI 2K18 Web based Tabulation System Demo",
			"imageUrl": "images/portfolio/mhi-thumbnail.jpg",
			"link": "",
			"codeLink": "https://github.com/jrussumbrella/mhi-web-based-tabulation",
			"description": "It is a network based system that I developed to easily tabulate the scored of certain candidates per judge.",
			"technology": ["HTML/CSS", "Bootstrap", "Javascript/Jquery", "Mysql", "PHP" ]				
		},
		],
	"skills": [
		{
			"name": "HTML/CSS",
			"percentage": 80
		},
		{
			"name": "SASS/ SCSS",
			"percentage": 70
		},	
		{
			"name": "Javascript",
			"percentage": 80
		},							
		{
			"name": "Jquery",
			"percentage": 80
		},

		{
			"name": "REACT",
			"percentage": 50
		},
		{
			"name": "PHP (LARAVEL)",
			"percentage": 50
		},						
	],
	"workExp": [
		{
			"title": "Front-end Developer",
			"date" : 'June 2017- June 2019',
			"description": "Converting mockup designs into web pages, making sure it's mobile responsive and cross browser compatible. Maintaing and improving website.",
			"company": 'E-Creations Inc.'
		},
		{
			"title": "Junior Software Engineer (Intern)",
			"date" : 'January 2017 - May 2017',
			"company": 'Advanced Techinnovations Systems',
			"description": " Works as junior software engineer and help senior developer in developing the Hanap Trabaho web application."
		},				
	]	
 
}

export default portfolioData;