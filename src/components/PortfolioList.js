import Newtap from './hooks/NewTap';
import '../App.css';

export const PortfolioList = [
  {
    id: 1,
    type: 'Group',
    title: 'Medical-Appointment',
    language: 'Java',

    img: require('../assets/img/portfolio/bubble_Game.png'),
    link: (
      <button
        className='w-btn button_Profile'
        style={{ color: 'blue' }}
        onClick={() =>
          Newtap('https://github.com/jihoon0324/Medical-Appointment')
        }
      >
        Code Detail
      </button>
    ),
  },
  {
    id: 2,
    type: 'Group',
    title: 'Team_Collaboration_Tool',
    language: 'React',

    img: require('../assets/img/portfolio/Ktc_collaboration.png'),
    link: (
      <button
        className='w-btn button_Profile'
        style={{ color: 'blue' }}
        onClick={() => Newtap('https://github.com/Jonghan-park/KillTheCode')}
      >
        Code Detail
      </button>
    ),
  },

  {
    id: 2,
    type: 'Personal',
    title: 'Kiosk',

    img: require('../assets/img/portfolio/tetris.png'),
    link: (
      <button
        className='w-btn button_Profile'
        style={{ color: 'blue' }}
        onClick={() => Newtap('https://github.com/jihoon0324/Tetris_javascrip')}
      >
        JS Code Link
      </button>
    ),

    link2: (
      <button
        className='w-btn button_Profile'
        style={{ color: 'blue' }}
        onClick={() => Newtap('https://github.com/jihoon0324/')}
      >
        React Code Link
      </button>
    ),
  },
];

// last id 6
