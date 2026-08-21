export const locations = [
  {
    id: 'about',
    title: 'About Me',
    category: 'Castle',
    type: 'castle',
    icon: 'castle',
    position: { x: 50, y: 42 },
    hotspot: { left: 61, top: 55, width: 9, height: 13 },
    description: 'A glimpse into the developer behind the kingdom.',
    content: [
      'I am Sanjana Nagarajan',
      'I am a Computer Science and Engineering student at VIT Chennai, passionate about building practical software and exploring AI-powered solutions.',
      'I enjoy turning ideas into working products, from full-stack web applications to intelligent systems.',
      'Currently, I am strengthening my foundations in programming, problem solving, web development, and machine learning.'
    ],
  },

  {
    id: 'hobbies',
    title: 'Hobbies and Interests',
    category: 'Park',
    type: 'park',
    icon: 'trees',
    position: { x: 20, y: 58 },
    hotspot: { left: 32.5, top: 54, width: 9, height: 10 },
    description: 'The things I enjoy beyond academics and code.',
    content: [
      'Music — Carnatic and Western singing, keyboard, and guitar.',
      'Dance, drawing, painting, and other creative arts.',
      'Reading novels, writing poems, and creating videos.',
      'Basketball, badminton, throwball, and other sports.',
      'I also enjoy learning new creative skills and experimenting with ideas.'
    ],
  },

  {
    id: 'skills',
    title: 'Skills',
    category: 'Building 1',
    type: 'building',
    icon: 'code',
    position: { x: 28, y: 30 },
    hotspot: { left: 49, top: 39, width: 8, height: 10 },
    description: 'The technologies and foundations I use to build.',
    content: [
      'Programming: C, C++, Python, JavaScript',
      'Frontend: HTML, CSS, React.js',
      'Backend: Node.js and REST APIs',
      'Core: Object-Oriented Programming',
      'Tools: Git and GitHub',
      'Problem Solving: Data Structures and Algorithms, LeetCode'
    ],
  },

  {
    id: 'projects',
    title: 'Projects',
    category: 'Building 2',
    type: 'building',
    icon: 'folder-code',
    position: { x: 72, y: 30 },
    hotspot: { left: 68, top: 40, width: 9, height: 11 },
    description: 'Projects where ideas became working products.',
    content: [
      'LUMIÈRE CINEMAS — A luxury movie ticket booking platform built using C++ OOP with a responsive web interface.',
      'Features include interactive seat selection, PDF ticket generation, QR codes, occupancy analytics, and form validation.',
      'Employee Payroll System — A payroll management application with CRUD operations, automated salary and tax calculations, binary file handling, and downloadable payslips.',
      'Startup Success Dashboard — An AI and API-based startup analysis system developed during a hackathon.',
      'Student Notes Platform — A collaborative educational resource-sharing platform developed during a hackathon.'
    ],
  },

  {
    id: 'ongoing-projects',
    title: 'Ongoing Projects',
    category: 'Building 3',
    type: 'building',
    icon: 'hammer',
    position: { x: 83, y: 55 },
    hotspot: { left: 79, top: 60, width: 9, height: 11 },
    description: 'Ideas currently being transformed into intelligent systems.',
    content: [
      'AI Traffic Signal Optimizer',
      'A machine-learning based traffic management system that dynamically adjusts traffic signal timings according to changing traffic conditions.',
      'The system considers traffic density and the presence of emergency vehicles to improve traffic flow and prioritize faster emergency response.',
      'Mapless AI Navigation System',
      'An experimental AI-based navigation system exploring navigation without relying on conventional pre-built maps.',
      'The goal is to use environmental understanding and intelligent decision-making to determine suitable navigation paths.'
    ],
  },

  {
    id: 'achievements',
    title: 'School Achievements',
    category: 'Building 4',
    type: 'building',
    icon: 'trophy',
    position: { x: 63, y: 69 },
    hotspot: { left: 58, top: 77, width: 8, height: 9 },
    description: 'Milestones from my academic and extracurricular journey.',
    content: [
      'General Proficiency Award winner throughout school.',
      'Consistently ranked first across school tests and examinations.',
      'Second place in a national-level English Extempore competition conducted by VIT.',
      'Top 5 national winner in a fiction story-writing competition conducted by the Climate Reality India Project.',
      'Awards across inter-school and intra-school competitions in academics, arts, and cultural activities.',
      'Medals and achievements in Karate, Skating, Throwball, Kho-Kho, Badminton, and athletics.',
      'International Rank 9 in the International English Olympiad during the lower grades.',
      'Multiple Olympiad awards and medals across NSO, IEO, IMO, and NCO.'
    ],
  },

  {
    id: 'clubs',
    title: 'Clubs and Contributions',
    category: 'Building 5',
    type: 'building',
    icon: 'users',
    position: { x: 37, y: 72 },
    hotspot: { left: 40, top: 64, width: 8, height: 10 },
    description: 'Communities where I learn, collaborate, and contribute.',
    content: [
      'IEEE Computer Society — Technical Department',
      'Active member involved in technical initiatives and development activities.',
      'HackClub VIT Chennai — Web Development Department',
      'Selected through technical assignments and interviews focused on React.js.',
      'Proddino - Management department',
      'Actively contributing to the management and organization of events and activities.',
      'Hackathons',
      'Participated in 24-hour hackathons at VIT Chennai involving ideation, development, pitching, and rapid product building.'
    ],
  },

  {
    id: 'academics',
    title: 'Academics and CGPA',
    category: 'Building 6',
    type: 'building',
    icon: 'graduation-cap',
    position: { x: 15, y: 34 },
    hotspot: { left: 37, top: 29, width: 7, height: 10 },
    description: 'My academic journey from school to engineering.',
    content: [
      'B.Tech Computer Science and Engineering (Core)',
      'VIT Chennai | 2025–2029',
      'CGPA: 9.3',
      'Higher Secondary Education — Computer Science',
      'Score: 481/500 (96.2%)',
      'Secondary Education',
      'Score: 494/500 (98.8%)'
    ],
  },

  {
    id: 'certifications',
    title: 'Certifications',
    category: 'Building 7',
    type: 'building',
    icon: 'badge-check',
    position: { x: 88, y: 35 },
    hotspot: { left: 87, top: 47, width: 9, height: 11 },
    description: 'Certifications that strengthen my technical foundation.',
    content: [
      'Machine Learning — Coursera',
      'Completed the Machine Learning course by Andrew Ng.',
      'Built a foundation in machine learning concepts and practical approaches to developing ML models.',
      '',
      'Currently exploring additional certifications in areas such as Linux, cloud computing, web development, and AI.'
    ],
  },

  {
    id: 'learning',
    title: 'Current Learning',
    category: 'Mountain',
    type: 'mountain',
    icon: 'mountain',
    position: { x: 78, y: 12 },
    hotspot: { left: 62, top: 16, width: 42, height: 31 },
    description: 'The next peaks I am currently exploring.',
    content: [
      'Machine Learning & AI',
      'Applying ML concepts to practical projects such as traffic optimization and AI navigation.',
      'Full-Stack Development',
      'Deepening my understanding of React.js, backend development, APIs, and complete web applications.',
      'Data Structures & Algorithms',
      'Regularly practicing problem solving and DSA through LeetCode using C.',
      'Cloud & Systems',
      'Exploring Linux, cloud computing, operating systems, and modern software infrastructure.'
    ],
  },

  {
    id: 'contact',
    title: 'Contact',
    category: 'Harbor',
    type: 'harbor',
    icon: 'send',
    position: { x: 8, y: 82 },
    hotspot: { left: 11.5, top: 80, width: 16, height: 16 },
    description: 'A place to connect and start a conversation.',
    content: [
      'Email: sanjana.nagarajan2025@vitstudent.ac.in',
      'GitHub: github.com/sanjana-ngl',
      'LinkedIn: linkedin.com/in/sanjana-nagarajan-565b46380',
      'Based in Chennai, India.'
    ],
  },
];