export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Sophia Lin',
      position: 'Product Manager at Qimeng Tech',
      img: '/Portfolio/assets/review1.png',
      review:
        'Winnie Yao is one of the most dependable developers I\'ve had the pleasure to work with. Her calm, solutions-oriented mindset brought clarity even during high-pressure sprints.',
    },
    {
      id: 2,
      name: 'Brenton Xie',
      position: 'UOW Computer Science Member',
      img: '/Portfolio/assets/Brenton_Xie.jpg',
      review:
        'Working alongside Winnie at the UOW Computing Society was truly inspiring. She\'s the kind of person who makes everyone feel heard, seen, and motivated. ',
    },
    {
      id: 3,
      name: 'Jennifer Fan',
      position: 'Product Manager, TidyTeddy Pty Ltd ',
      img: '/Portfolio/assets/Jennifer_Fan.jpg',
      review:
        'Winnie joined our team as a software developer and quickly proved herself to be a standout contributor. She took full ownership of complex frontend tasks and consistently delivered high-quality code on tight deadlines. Her attention to user experience and proactive problem-solving made a real impact on our booking system. We were lucky to have her, and I’d gladly work with her again.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'UOW Classmate',
      img: '/Portfolio/assets/review4.png',
      review:
        'Winnie has that rare balance of technical competence and team-first attitude. In every group project, she naturally took the initiative — not just by delivering clean, scalable code, but by keeping the entire team organized and motivated. She\'s both technically sharp and deeply considerate — a rare combination.'}
  ];
  
  export const myProjects = [
    
    {
      title: 'TidyTeddy-Cleaning',
      desc: 'As a core developer of the TidyTeddy platform, I was responsible for building a responsive, user-centric web application that allows individuals and businesses in Sydney to book organizing, cleaning, and moving services. I developed a wide range of reusable and scalable components to support key features such as multi-step booking flows, dynamic pricing display, service selection, user authentication, and form validation.'
,
      subdesc:
        "The platform is fully responsive across desktop and mobile devices, providing a seamless experience for all users. In addition to frontend development, I contributed to backend integration using Node.js, ensuring smooth data flow between the client and server. I also collaborated closely with the product team to iterate quickly, implement design feedback, and deliver features within tight timelines.",

      texture: '/Portfolio/textures/project/tidyTeddy.mp4',
      logo: '/Portfolio/assets/tidyTeddy.jpg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/Portfolio/assets/spotlight2.png',
      href: 'https://tidyteddy.com.au/',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/Portfolio/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/Portfolio//tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/Portfolio/assets/typescript.png',
        },
      ],
    },
    {
      title: 'UOW Computer Science Society',
      desc:"I designed and developed the official website for the UOW Computing Society to support student engagement and streamline society operations. The site allows students to easily join the society through a custom membership registration system, view upcoming events, and stay connected with ongoing activities. "
,
      subdesc:
        'I also built a dynamic announcement section, contact interface, and integrated form submissions to support internal communication and management. The platform was designed to be scalable and maintainable, ensuring future committee members can easily update content or extend its functionality. ',
      href: 'https://www.ucscomputing.club/',
      texture: '/textures/project/uow.mp4',
      logo: '/Portfolio/assets/uow_logo.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/Portfolio/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/Portfolio/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/Portfolio/assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/Portfolio/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/Portfolio/assets/framer.png',
        },
      ],
    },
   
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Qimeng Zhizao Information Technology Co., Ltd',
      pos: 'Full Stack Development',
      duration: '1/2023 – 1/2024',
      title: "Built interactive front-end UI with React and Tailwind CSS, ensuring smooth voice playback and mobile responsiveness. Integrated cloned voice previews using Web Audio API, improving user engagement through real-time audio rendering.",
      icon: '/Portfolio/assets/qimeng.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'UOW Computing Society',
      pos: 'Co-founder & Chairperson',
      duration: '2024 - 2025 ',
      title: "Designed and launched the official UCS website using React + TypeScript, deployed via Vercel with domain management and CI/CD integration.",
      icon: '/Portfolio/assets/uow_logo.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'TidyTeddy Pty Ltd, Australia',
      pos: 'Software Developer',
      duration: '11/2024 - 05/2025',
      title: " Collaborated with agile team and delivered responsive multi-platform booking system using React and Node.js. Guided team members in implementing reusable React components, improving development efficiency and code consistency. ",
      icon: '/Portfolio/assets/tidyTeddy.jpg',
      animation: 'salute',
    },
  ];