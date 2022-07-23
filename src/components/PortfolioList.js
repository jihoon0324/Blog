import Newtap from "./hooks/NewTap";

export const PortfolioList = [
  {
    id: 1,
    type: "All",
    title: "",
    language: "JavaScript",

    img: require("../assets/img/portfolio/bubble_Game.png"),
    link: (
      <button
        className="w-btn"
        onClick={() => Newtap("Mailto:Jihoon0324@hotmail.com")}
      >
        Restaurant Code
      </button>
    ),
  },
  {
    id: 1,
    type: "All",
    title: "",
    language: "JavaScript",

    img: require("../assets/img/portfolio/bubble_Game.png"),
    link: (
      <button
        className="w-btn"
        onClick={() => Newtap("Mailto:Jihoon0324@hotmail.com")}
      >
        Restaurant Code
      </button>
    ),
  },

  {
    id: 5,
    type: "none",
    title: "Restaurant Menu",
    language: "React",
    img: require("../assets/img/portfolio/tetris.png"),
    link: (
      <button
        onClick={() => Newtap("https://github.com/jihoon0324/Tetris_javascrip")}
      >
        Restaurant Menu Code
      </button>
    ),
  },

  {
    id: 6,
    type: "none",
    title: "Restaurant Menu",
    language: "React",
    img: require("../assets/img/portfolio/tetris.png"),
    link: (
      <button
        onClick={() => Newtap("https://github.com/jihoon0324/Tetris_javascrip")}
      >
        Restaurant Menu Code
      </button>
    ),
  },
  {
    id: 2,
    type: "All",
    title: "Tetris",
    language: "Javascript",

    img: require("../assets/img/portfolio/tetris.png"),
    link: (
      <button
        className="w-btn"
        onClick={() => Newtap("https://github.com/jihoon0324/Tetris_javascrip")}
      >
        JS Code Link
      </button>
    ),

    link2: (
      <button
        className="w-btn"
        onClick={() => Newtap("https://github.com/jihoon0324/")}
      >
        React Code Link
      </button>
    ),
  },

  // {
  //   id: 3,
  //   type: "All",
  //   title: "Blog",
  //   language: "React",
  //   img: require("../assets/img/portfolio/blog.png"),
  //   link: (
  //     <button onClick={() => Newtap("https://github.com/jihoon0324/blog")}>
  //       Blog code
  //     </button>
  //   ),
  // },
  {
    id: 4,
    type: "All",
    title: "Bubble Game",
    language: "Java",
    img: require("../assets/img/portfolio/bubble_Game.png"),
    link: (
      <button
        onClick={() =>
          Newtap("https://github.com/jihoon0324/BubbleGame_Swing_Java")
        }
      >
        Bubble Game Code
      </button>
    ),
  },
];

// last id 6
