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
      title: "Amazon Clone",
      imageUrl: "images/portfolio/amazon.png",
      link: "https://clone-b1a9e.firebaseapp.com",
      codeLink: "https://github.com/dkagotho/Amazon-clone",
      description:
        "This is a simple Amazon. It has user authentication and users are able to create accounts, log in and add items to cart.",
      technology: [
        "HTML/CSS",
        "Javascript",
        "React",
        "Node.js",
        "Firebase",
        "express",
        "React context API",
        "BEM",
        "Firebase Authentication",
        "React router",
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
      name: "Firebase",
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
      percentage: 80,
    },
  ],
  workExp: [
    {
      title: "Web Developer",
      date: "September 2021 - Current",
      description:
        "Writing well-designed, testable, efficient code by using web development best practices. Customizing websites according to objectives or user feedback and requirements.",
      company: "MIHOK SYSTEMS INC.",
    },
    {
      title: "Web Developer Intern",
      date: "April 2021 - September 2021",
      description:
        "Assisting the Development Manager with all aspects of software design and coding.Gathering information from clients about system functionality.",
      company: "MIHOK SYSTEMS INC.",
    },
  ],
  AboutMe: [
    {
      description:
        "I am a Full Stack Developer with industry experience building websites and web applications. I have experience working with JavaScript, TypeScript, Node.js, SASS, NextJs, React, Bootstrap, YARN, MVC, ORM, MERN Stack, JSON, Firebase, BEM, and Git among others. With my unique blend of communications skills, technical capabilities and leadership experience, I believe I would make an invaluable member of your project and team.",
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
