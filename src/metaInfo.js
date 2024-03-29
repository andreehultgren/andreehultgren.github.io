import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarsIcon from "@material-ui/icons/Stars";
import GithubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import DownloadIcon from "@material-ui/icons/GetApp";

const Info = {
  person: {
    firstName: "Andree",
    lastName: "Hultgren",
    phoneNumber: "+46736544491",
    imageSrc:
      "https://raw.githubusercontent.com/andreehultgren/cvpage/master/public/andree.jpg",
    title: "Fullstack Engineer",
    description:
      "I love complicated things. I am stubborn, therefore I find solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend dictum volutpat. Cras sed ultricies ipsum. In vulputate leo eget sem aliquet, quis aliquet enim fringilla. ",
    skills: [
      "AWS",
      "Azure",
      "Flask",
      "Javascript",
      "Linux",
      "Machine Learning",
      "PostgreSQL",
      "Python",
      "React",
    ],
    links: [
      {
        url: "http://www.github.com/andreehultgren",
        icon: GithubIcon,
      },
      {
        url: "mailto:andree_hultgren@hotmail.com",
        icon: MailIcon,
      },
      {
        url: "tel:+46736544491",
        icon: PhoneIcon,
      },
      {
        url: "https://github.com/andreehultgren/cvpage/raw/master/public/CV_Andree_Hultgren.pdf",
        icon: DownloadIcon,
      },
    ],
  },
  theme: {
    headerColor: "#E0F0FF",
    timelineCenterlineColor: "#ddd",
    filterButtonBackgroundColor: "#BB89ED",
    filterButtonTextColor: "#FFF",
  },
  timelineTypes: [
    {
      id: 1,
      title: "Education",
      backgroundColor: "#393",
      textColor: "#FFFFFF",
      icon: SchoolIcon,
    },
    {
      id: 2,
      title: "Work",
      backgroundColor: "#D33",
      textColor: "#FFFFFF",
      icon: WorkIcon,
    },
    {
      id: 3,
      title: "Other",
      backgroundColor: "#33A",
      textColor: "#FFFFFF",
      icon: StarsIcon,
    },
  ],
  timeline: [
    {
      title: "Senior Fullstack Developer",
      company: "Skyqraft",
      description:
        "I design, implement, test, monitor and maintaint the fullstack application at Skyqraft. I also manage the DevOps side of the service. I am the sole developer for the fullstack side of this tech-centered company with global reach.",
      time: "Jun 2020 - Present",
      type: 2,
    },
    {
      title: "Masters Degree in Machine Learning",
      company: "Royal Institute of Technology",
      description:
        "Masters degree in Machine Learning with a focus on deep learning and computer vision.",
      time: "Aug 2019 - Jun 2021",
      type: 1,
    },
    {
      title: "Fullstack Developer Consultant",
      company: "Hultan IT AB",
      description:
        "I ran a consultancy company where I sell technical services focused on fullstack development,",
      time: "Sep 2019 - May 2021",
      type: 2,
    },
    {
      title: "AI Trainer - Tech oriented",
      company: "Front AI",
      description:
        "I trained conversational AI with managing APIs as my main responsibility.",
      time: "Aug 2019 - Aug 2020",
      type: 2,
    },
    {
      title: "Teacher in religious studies",
      company: "The Church of Jesus Christ of Latter-day Saints",
      description:
        "I taught fundamental teachings of my beliefs to a class of approximately 15 students aged 14-18.",
      time: "Aug 2016 - Dec 2019",
      type: 3,
    },
    {
      title: "Connection Administrator",
      company: "Ellevio",
      description:
        "I managed incoming special orders and dispatched contractors to install a new electrical facility.",
      time: "Summer 2019",
      type: 2,
    },
    {
      title: "Bachelor Degree in Electrical Engineering",
      company: "Royal Institute of Technology",
      description:
        "Bachelor degree in Electrical Engineering. My bachelor thesis discussed a motion planning system for autonomous driving.",
      time: "Aug 2016 - Jun 2019",
      type: 1,
    },
    {
      title: "Supervisor",
      company: "Haninge municipality",
      description:
        "I guided and introduced teenagers to their first job as facility maintenance.",
      time: "Summer 2018",
      type: 2,
    },
    {
      title: "IT Support",
      company: "Brandskyddsföreningen",
      description: "I acted as on-site first-line IT support.",
      time: "Apr 2017 - Feb 2018",
      type: 2,
    },
    {
      title: "Senior Techbuddy",
      company: "TechBuddy",
      description:
        "I was responsible for providing technical assistance for high profile customers and support for other employees that got stuck when visiting a customer.",
      time: "Jan 2017 - Okt 2017",
      type: 2,
    },
    {
      title: "Missionary",
      company: "The Church of Jesus Christ of Latter day Saints",
      description:
        "Teaching and guiding people in the beliefs of the denomination",
      time: "Aug 2014 - Aug 2016",
      type: 3,
    },
    {
      title: "Natural Science",
      company: "Fredrika Bremergymnasiet",
      description:
        "High school was spent studying natural sciences with a very good result.",
      time: "2011 - 2014",
      type: 1,
    },
  ],
};
export default Info;
