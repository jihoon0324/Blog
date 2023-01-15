import Newtap from "./hooks/NewTap";
import "../App.css";

export const PortfolioList = [
  {
    id: 1,
    type: "Group",
    title: "Medical-Appointment",
    language: "Java",

    img: require("../assets/img/portfolio/medical.png"),
    link: (
      <button
        className="w-btn button_Profile"
        style={{ color: "blue" }}
        onClick={() =>
          Newtap("https://github.com/jihoon0324/Medical-Appointment")
        }
      >
        Code Detail
      </button>
    ),
  },
  {
    id: 2,
    type: "Group",
    title: "Team_Collaboration_Tool",
    language: "React",

    img: require("../assets/img/portfolio/Ktc_collaboration.png"),
    link: (
      <button
        className="w-btn button_Profile"
        style={{ color: "blue" }}
        onClick={() => Newtap("https://github.com/Jonghan-park/KillTheCode")}
      >
        Code Detail
      </button>
    ),
  },

  {
    id: 3,
    type: "Personal",
    title: "Coffee Store",
    language: "React",
    img: require("../assets/img/portfolio/coff_main.png"),
    link: (
      <button
        className="w-btn button_Profile"
        style={{ color: "blue" }}
        onClick={() => Newtap("https://https://github.com/jihoon0324/cart ")}
      >
        Code Detail
      </button>
    ),

    link2: (
      <button
        className="w-btn button_Profile"
        style={{ color: "blue" }}
        onClick={() => Newtap(" https://jihoon-coffee.netlify.app/")}
      >
        Demo
      </button>
    ),
  },

  {
    id: 4,
    type: "Personal",
    title: "Instagram",
    language: "Python Django",

    img: require("../assets/img/portfolio/instagram.png"),
    link: (
      <button
        className="w-btn button_Profile"
        style={{ color: "blue" }}
        onClick={() => Newtap("https://github.com/jihoon0324/Instagram_clone")}
      >
        Code Detail
      </button>
    ),
  },
  {
    id: 5,
    type: "Personal",
    title: "Management System",
    language: "Python Django",

    img: require("../assets/img/portfolio/management_sys.png"),
    link: (
      <button
        className="w-btn button_Profile"
        style={{ color: "blue" }}
        onClick={() =>
          Newtap("https://github.com/jihoon0324/management_system")
        }
      >
        Code Detail
      </button>
    ),
  },
];

// last id 6
