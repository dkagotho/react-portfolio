const portfolioData = {
  imageUrl: "http://localhost:3000/",
  logo: "app-logo.ico",
  logoWhite: "app-logo.ico",
  name: "Diana kagotho",
  role: "Full Stack Developer",
  intro: "Never stop learning, because life never stops teaching.",
  projects: [
    {
      id: 0,
      title: "Facebook Messenger Clone",
      imageUrl: "images/portfolio/Facebook-m-clone.png",
      link: "https://facebook-messenger-clone-bce12.firebaseapp.com",
      codeLink: "https://github.com/dkagotho/facebook-messenger-clone",
      description: "Facebook messenger clone app.",
      technology: [
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Javascript",
        "BEM",
        "Firebase",
      ],
    },
    {
      id: 1,
      title: "Netflix clone",
      imageUrl: "images/portfolio/netflix-pic.png",
      link: "https://netflix-clone-e8561.firebaseapp.com",
      codeLink: "https://github.com/dkagotho/Netflix-clone",
      description:
        "This is a simple Netflix clone that shows the trending movies, top rated movies, action movies, comedy movies, horror movies, romance movies and ducumentaries. The app also shows some trailers that have been grabbed from youtube.",
      technology: [
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Javascript",
        "BEM",
        "Firebase",
      ],
    },
    {
      id: 2,
      title: "The Pharmacy",
      imageUrl: "images/portfolio/the-pharmacy.png",
      link: "https://cryptic-hollows-33962.herokuapp.com",
      codeLink: "https://github.com/dkagotho/project-2",
      description:
        "The Pharmacy is an Ecommerce website that provides medicine and medical supplies.",
      technology: [
        "HTML/CSS",
        "Javascript",
        "Handlebars JS",
        "Node.js",
        "MySQL",
        "express",
        "API CALLS",
      ],
    },
    {
      id: 3,
      title: "Workout-rockout",
      imageUrl: "images/portfolio/workout_rockout.png",
      link:
        "https://workout-rockout.herokuapp.com/?id=5ee425088ff50c0017f30b92",
      codeLink: "https://github.com/dkagotho/Workout-tracker",
      description:
        "Rockout work out is a work out app that is able to be able to view create and track daily workouts. It allows you to be able to log multiple exercises in a workout on a given day. It tracks the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, it tracks the distance traveled.",
      technology: ["HTML/CSS", "CSS", "JQuery", "React", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      title: "Budget-pesa",
      imageUrl: "images/portfolio/budget-pesa.png",
      link: "https://budget-pesa.herokuapp.com",
      codeLink: "https://github.com/dkagotho/Online-Offline-Budget-Trackers",
      description:
        "Budget pesa, is an APP that gives users a fast and easy way to track their money, but also allows them to access that information anytime. This APP does this by having offline functionality.",
      technology: ["HTML", "CSS", "JQuery", "React", "Node.js", "MongoDB"],
    },
    {
      id: 5,
      title: "Personal react portfolio",
      imageUrl: "images/portfolio/homepage.png",
      link: "",
      codeLink: "https://github.com/dkagotho/react-portfolio",
      description: "This is my personal react portfolio.",
      technology: [
        "HTML",
        "CSS",
        "React",
        "Javascript",
        "Jquery",
        "JSON",
        "Node.js",
        "SAAS",
      ],
    },
  ],
  skills: [
    {
      name: "HTML5/CSS3",
      percentage: 80,
    },
    {
      name: "SASS/ SCSS",
      percentage: 80,
    },
    {
      name: "Javascript",
      percentage: 78,
    },
    {
      name: "Jquery",
      percentage: 78,
    },
    {
      name: "Bootstrap",
      percentage: 80,
    },
    {
      name: "Express.js",
      percentage: 80,
    },
    {
      name: "Node.js",
      percentage: 80,
    },
    {
      name: "REACT",
      percentage: 80,
    },
    {
      name: "MongoDB",
      percentage: 75,
    },
    {
      name: "MYSQL",
      percentage: 75,
    },
    {
      name: "AJAX",
      percentage: 70,
    },
    {
      name: "JSON",
      percentage: 80,
    },
    {
      name: "GIT",
      percentage: 75,
    },
  ],
  workExp: [
    {
      title: "Quality Assurance Analyst",
      date: "April 2020 - Current",
      description:
        "Guarantee the quality of new and existing features in the school accounting, payments, and donations suite.",
      company: "KEV Group",
    },
    {
      title: "Tech Support (PHD)",
      date: "January 2019 - March 2020",
      description:
        " Solving user issues throught the support portal. Writing documentation and ensuring customer sucess is at it's all time high.",
      company: "KEV Group",
    },
  ],
  AboutMe: [
    {
      description:
        "Hi, my name is Diana Kagotho. I am a fresh Graduate of the coding bootcamp at University of Toronto. I'm very passionate about coding and as a new Full Stack developer, I intend to keep on building new and cool stuff. I also want to learn more skills and computer languages to be more competitive in the job market.",
    },
    {
      description:
        "Outside of code, I like to create in other ways. From drawing to painting, baking to cooking and on to dancing, I'm always trying new ways of expressing myself through ways that bring people together.",
    },
    {
      description:
        "Please feel free to go through my resume to learn more about my skills.",
    },
  ],
};

export default portfolioData;
