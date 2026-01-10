// Complete track definitions with all modules and lessons

export const tracks = {
  frontend: {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Master the art of building beautiful, responsive user interfaces',
    icon: 'Monitor',
    color: 'cyan',
    gradient: 'from-neon-cyan to-blue-500',
    totalLessons: 45,
    estimatedHours: 40,
    difficulty: 'Beginner',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
    modules: [
      {
        id: 'html-basics',
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of the web',
        lessons: [
          { id: 'html-01', title: 'Your First HTML Page', duration: 10, xp: 50 },
          { id: 'html-02', title: 'Text Elements & Headings', duration: 12, xp: 50 },
          { id: 'html-03', title: 'Links and Images', duration: 15, xp: 60 },
          { id: 'html-04', title: 'Lists and Tables', duration: 15, xp: 60 },
          { id: 'html-05', title: 'Forms and Input', duration: 20, xp: 75 },
          { id: 'html-06', title: 'Semantic HTML', duration: 15, xp: 60 },
        ]
      },
      {
        id: 'css-basics',
        title: 'CSS Fundamentals',
        description: 'Style your web pages beautifully',
        lessons: [
          { id: 'css-01', title: 'Introduction to CSS', duration: 10, xp: 50 },
          { id: 'css-02', title: 'Colors and Typography', duration: 15, xp: 60 },
          { id: 'css-03', title: 'Box Model', duration: 15, xp: 60 },
          { id: 'css-04', title: 'Flexbox Layout', duration: 20, xp: 75 },
          { id: 'css-05', title: 'CSS Grid', duration: 20, xp: 75 },
          { id: 'css-06', title: 'Responsive Design', duration: 25, xp: 100 },
        ]
      },
      {
        id: 'js-basics',
        title: 'JavaScript Basics',
        description: 'Add interactivity to your websites',
        lessons: [
          { id: 'js-01', title: 'Variables and Data Types', duration: 15, xp: 60 },
          { id: 'js-02', title: 'Operators and Expressions', duration: 15, xp: 60 },
          { id: 'js-03', title: 'Control Flow', duration: 20, xp: 75 },
          { id: 'js-04', title: 'Functions', duration: 20, xp: 75 },
          { id: 'js-05', title: 'Arrays and Objects', duration: 20, xp: 75 },
          { id: 'js-06', title: 'DOM Manipulation', duration: 25, xp: 100 },
          { id: 'js-07', title: 'Events', duration: 20, xp: 75 },
          { id: 'js-08', title: 'Async JavaScript', duration: 30, xp: 125 },
        ]
      },
      {
        id: 'react-basics',
        title: 'React Fundamentals',
        description: 'Build modern user interfaces',
        lessons: [
          { id: 'react-01', title: 'Introduction to React', duration: 15, xp: 60 },
          { id: 'react-02', title: 'JSX Syntax', duration: 15, xp: 60 },
          { id: 'react-03', title: 'Components and Props', duration: 20, xp: 75 },
          { id: 'react-04', title: 'State and useState', duration: 25, xp: 100 },
          { id: 'react-05', title: 'useEffect Hook', duration: 25, xp: 100 },
          { id: 'react-06', title: 'Handling Events', duration: 20, xp: 75 },
          { id: 'react-07', title: 'Conditional Rendering', duration: 15, xp: 60 },
          { id: 'react-08', title: 'Lists and Keys', duration: 20, xp: 75 },
          { id: 'react-09', title: 'Forms in React', duration: 25, xp: 100 },
          { id: 'react-10', title: 'React Router', duration: 25, xp: 100 },
          { id: 'react-11', title: 'Building a Project', duration: 45, xp: 200 },
        ]
      }
    ]
  },
  backend: {
    id: 'backend',
    title: 'Backend Developer',
    description: 'Build powerful server-side applications and APIs',
    icon: 'Server',
    color: 'purple',
    gradient: 'from-neon-purple to-indigo-500',
    totalLessons: 42,
    estimatedHours: 45,
    difficulty: 'Intermediate',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Authentication'],
    modules: [
      {
        id: 'node-basics',
        title: 'Node.js Fundamentals',
        description: 'Server-side JavaScript',
        lessons: [
          { id: 'node-01', title: 'Introduction to Node.js', duration: 15, xp: 60 },
          { id: 'node-02', title: 'Modules and NPM', duration: 20, xp: 75 },
          { id: 'node-03', title: 'File System Operations', duration: 20, xp: 75 },
          { id: 'node-04', title: 'Creating HTTP Server', duration: 25, xp: 100 },
          { id: 'node-05', title: 'Environment Variables', duration: 15, xp: 60 },
        ]
      },
      {
        id: 'express-basics',
        title: 'Express.js',
        description: 'Build web servers easily',
        lessons: [
          { id: 'express-01', title: 'Express Setup', duration: 15, xp: 60 },
          { id: 'express-02', title: 'Routing Basics', duration: 20, xp: 75 },
          { id: 'express-03', title: 'Middleware', duration: 25, xp: 100 },
          { id: 'express-04', title: 'Request & Response', duration: 20, xp: 75 },
          { id: 'express-05', title: 'Error Handling', duration: 20, xp: 75 },
        ]
      },
      {
        id: 'mongodb-basics',
        title: 'MongoDB & Mongoose',
        description: 'NoSQL database essentials',
        lessons: [
          { id: 'mongo-01', title: 'Introduction to MongoDB', duration: 15, xp: 60 },
          { id: 'mongo-02', title: 'CRUD Operations', duration: 25, xp: 100 },
          { id: 'mongo-03', title: 'Mongoose Models', duration: 25, xp: 100 },
          { id: 'mongo-04', title: 'Queries and Aggregation', duration: 30, xp: 125 },
          { id: 'mongo-05', title: 'Indexing and Performance', duration: 20, xp: 75 },
        ]
      },
      {
        id: 'api-basics',
        title: 'REST API Development',
        description: 'Build professional APIs',
        lessons: [
          { id: 'api-01', title: 'REST Principles', duration: 15, xp: 60 },
          { id: 'api-02', title: 'API Routes Design', duration: 20, xp: 75 },
          { id: 'api-03', title: 'Authentication & JWT', duration: 30, xp: 125 },
          { id: 'api-04', title: 'Input Validation', duration: 20, xp: 75 },
          { id: 'api-05', title: 'API Testing', duration: 25, xp: 100 },
          { id: 'api-06', title: 'Building Complete API', duration: 45, xp: 200 },
        ]
      }
    ]
  },
  fullstack: {
    id: 'fullstack',
    title: 'Full Stack Developer',
    description: 'Become a complete web developer with end-to-end skills',
    icon: 'Code2',
    color: 'green',
    gradient: 'from-neon-green to-emerald-500',
    totalLessons: 80,
    estimatedHours: 85,
    difficulty: 'Intermediate',
    skills: ['Frontend', 'Backend', 'Databases', 'Deployment', 'Testing', 'Git'],
    modules: [] // Combines frontend + backend tracks
  },
  devops: {
    id: 'devops',
    title: 'DevOps & Cloud',
    description: 'Master cloud infrastructure and deployment automation',
    icon: 'Cloud',
    color: 'orange',
    gradient: 'from-neon-orange to-amber-500',
    totalLessons: 50,
    estimatedHours: 55,
    difficulty: 'Advanced',
    skills: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD'],
    modules: [
      {
        id: 'linux-basics',
        title: 'Linux Essentials',
        description: 'Command line mastery',
        lessons: [
          { id: 'linux-01', title: 'Introduction to Linux', duration: 15, xp: 60 },
          { id: 'linux-02', title: 'File System Navigation', duration: 20, xp: 75 },
          { id: 'linux-03', title: 'File Permissions', duration: 20, xp: 75 },
          { id: 'linux-04', title: 'Package Management', duration: 15, xp: 60 },
          { id: 'linux-05', title: 'Shell Scripting', duration: 30, xp: 125 },
        ]
      },
      {
        id: 'docker-basics',
        title: 'Docker',
        description: 'Containerization fundamentals',
        lessons: [
          { id: 'docker-01', title: 'Introduction to Docker', duration: 15, xp: 60 },
          { id: 'docker-02', title: 'Docker Images', duration: 25, xp: 100 },
          { id: 'docker-03', title: 'Containers', duration: 25, xp: 100 },
          { id: 'docker-04', title: 'Docker Compose', duration: 30, xp: 125 },
          { id: 'docker-05', title: 'Docker Networking', duration: 20, xp: 75 },
        ]
      },
      {
        id: 'aws-basics',
        title: 'AWS Fundamentals',
        description: 'Amazon Web Services essentials',
        lessons: [
          { id: 'aws-01', title: 'Introduction to AWS', duration: 15, xp: 60 },
          { id: 'aws-02', title: 'EC2 Instances', duration: 25, xp: 100 },
          { id: 'aws-03', title: 'S3 Storage', duration: 20, xp: 75 },
          { id: 'aws-04', title: 'RDS Databases', duration: 25, xp: 100 },
          { id: 'aws-05', title: 'Lambda Functions', duration: 30, xp: 125 },
          { id: 'aws-06', title: 'IAM Security', duration: 20, xp: 75 },
        ]
      },
      {
        id: 'cicd-basics',
        title: 'CI/CD Pipelines',
        description: 'Continuous Integration & Deployment',
        lessons: [
          { id: 'cicd-01', title: 'Introduction to CI/CD', duration: 15, xp: 60 },
          { id: 'cicd-02', title: 'GitHub Actions', duration: 25, xp: 100 },
          { id: 'cicd-03', title: 'Automated Testing', duration: 25, xp: 100 },
          { id: 'cicd-04', title: 'Deployment Strategies', duration: 20, xp: 75 },
          { id: 'cicd-05', title: 'Complete Pipeline', duration: 35, xp: 150 },
        ]
      }
    ]
  },
  ai: {
    id: 'ai',
    title: 'AI Engineering',
    description: 'Learn machine learning, deep learning, and AI development',
    icon: 'Brain',
    color: 'pink',
    gradient: 'from-neon-pink to-rose-500',
    totalLessons: 48,
    estimatedHours: 60,
    difficulty: 'Advanced',
    skills: ['Python', 'NumPy', 'TensorFlow', 'PyTorch', 'LLMs', 'Prompt Engineering'],
    modules: [
      {
        id: 'python-basics',
        title: 'Python for AI',
        description: 'Python fundamentals for data science',
        lessons: [
          { id: 'py-01', title: 'Python Basics', duration: 20, xp: 75 },
          { id: 'py-02', title: 'Data Structures', duration: 25, xp: 100 },
          { id: 'py-03', title: 'NumPy Arrays', duration: 25, xp: 100 },
          { id: 'py-04', title: 'Pandas DataFrames', duration: 30, xp: 125 },
          { id: 'py-05', title: 'Data Visualization', duration: 25, xp: 100 },
        ]
      },
      {
        id: 'ml-basics',
        title: 'Machine Learning',
        description: 'ML fundamentals and algorithms',
        lessons: [
          { id: 'ml-01', title: 'Introduction to ML', duration: 20, xp: 75 },
          { id: 'ml-02', title: 'Supervised Learning', duration: 30, xp: 125 },
          { id: 'ml-03', title: 'Unsupervised Learning', duration: 25, xp: 100 },
          { id: 'ml-04', title: 'Model Evaluation', duration: 25, xp: 100 },
          { id: 'ml-05', title: 'Feature Engineering', duration: 30, xp: 125 },
        ]
      },
      {
        id: 'llm-basics',
        title: 'LLMs & Prompt Engineering',
        description: 'Working with large language models',
        lessons: [
          { id: 'llm-01', title: 'Introduction to LLMs', duration: 20, xp: 75 },
          { id: 'llm-02', title: 'Prompt Engineering', duration: 25, xp: 100 },
          { id: 'llm-03', title: 'API Integration', duration: 30, xp: 125 },
          { id: 'llm-04', title: 'RAG Systems', duration: 35, xp: 150 },
          { id: 'llm-05', title: 'Building AI Apps', duration: 45, xp: 200 },
        ]
      }
    ]
  },
  basics: {
    id: 'basics',
    title: 'Computer Basics',
    description: 'Essential digital skills for the modern workplace',
    icon: 'Laptop',
    color: 'yellow',
    gradient: 'from-neon-yellow to-lime-500',
    totalLessons: 30,
    estimatedHours: 25,
    difficulty: 'Beginner',
    skills: ['Typing', 'Windows/Mac', 'Microsoft Office', 'Google Suite', 'Internet', 'Email'],
    modules: [
      {
        id: 'computer-intro',
        title: 'Computer Fundamentals',
        description: 'Understanding your computer',
        lessons: [
          { id: 'comp-01', title: 'Parts of a Computer', duration: 10, xp: 40 },
          { id: 'comp-02', title: 'Operating Systems', duration: 15, xp: 50 },
          { id: 'comp-03', title: 'File Management', duration: 15, xp: 50 },
          { id: 'comp-04', title: 'Keyboard Shortcuts', duration: 15, xp: 50 },
          { id: 'comp-05', title: 'Touch Typing', duration: 20, xp: 75 },
        ]
      },
      {
        id: 'office-basics',
        title: 'Microsoft Office',
        description: 'Essential productivity tools',
        lessons: [
          { id: 'office-01', title: 'Word Basics', duration: 20, xp: 75 },
          { id: 'office-02', title: 'Excel Basics', duration: 25, xp: 100 },
          { id: 'office-03', title: 'PowerPoint Basics', duration: 20, xp: 75 },
          { id: 'office-04', title: 'Outlook Email', duration: 15, xp: 50 },
        ]
      },
      {
        id: 'internet-basics',
        title: 'Internet Skills',
        description: 'Navigate the digital world',
        lessons: [
          { id: 'net-01', title: 'Web Browsers', duration: 10, xp: 40 },
          { id: 'net-02', title: 'Search Engines', duration: 15, xp: 50 },
          { id: 'net-03', title: 'Online Safety', duration: 20, xp: 75 },
          { id: 'net-04', title: 'Cloud Storage', duration: 15, xp: 50 },
        ]
      }
    ]
  }
}

export default tracks
