// Comprehensive Course Data - Clean, Sequential, Easy to Follow

export const courses = {
  frontend: {
    id: 'frontend',
    title: 'Web Development Fundamentals',
    subtitle: 'HTML, CSS & JavaScript',
    description: 'Learn to build beautiful, interactive websites from scratch. Start with the basics and progress to creating real web applications.',
    icon: 'Monitor',
    color: '#00fff5',
    totalLessons: 24,
    totalDuration: '12 hours',
    level: 'Beginner',
    chapters: [
      {
        id: 1,
        title: 'Getting Started with HTML',
        description: 'Learn the foundation of every website',
        lessons: [
          {
            id: 'html-1',
            number: 1,
            title: 'What is HTML?',
            description: 'Understand what HTML is and why it matters',
            duration: '8 min',
            xp: 25,
            type: 'lesson',
            content: {
              instructions: [
                'HTML stands for HyperText Markup Language',
                'It is the standard language for creating web pages',
                'HTML describes the structure of a web page using elements'
              ],
              starterCode: '',
              task: 'Type <!DOCTYPE html> to declare this is an HTML5 document',
              validation: '<!DOCTYPE html>',
              expectedOutput: '<!DOCTYPE html>'
            }
          },
          {
            id: 'html-2',
            number: 2,
            title: 'Your First Web Page',
            description: 'Create a complete HTML document structure',
            duration: '12 min',
            xp: 50,
            type: 'lesson',
            content: {
              instructions: [
                'Every HTML page needs a basic structure',
                'The <html> tag wraps all content',
                'The <head> contains metadata, <body> contains visible content'
              ],
              starterCode: '<!DOCTYPE html>\n',
              task: 'Add <html>, <head>, and <body> tags to complete the structure',
              validation: '<html>',
              expectedOutput: '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>'
            }
          },
          {
            id: 'html-3',
            number: 3,
            title: 'Headings & Paragraphs',
            description: 'Add text content to your page',
            duration: '10 min',
            xp: 40,
            type: 'lesson',
            content: {
              instructions: [
                'Headings go from <h1> (largest) to <h6> (smallest)',
                'Paragraphs use the <p> tag',
                'Use headings to structure your content logically'
              ],
              starterCode: '<body>\n\n</body>',
              task: 'Add an <h1> heading and a <p> paragraph inside the body',
              validation: '<h1>',
              expectedOutput: '<body>\n<h1>Welcome</h1>\n<p>This is my first web page.</p>\n</body>'
            }
          },
          {
            id: 'html-4',
            number: 4,
            title: 'Links & Images',
            description: 'Connect pages and add visual content',
            duration: '15 min',
            xp: 60,
            type: 'lesson',
            content: {
              instructions: [
                'Links use <a href="url">text</a>',
                'Images use <img src="url" alt="description">',
                'The alt attribute describes the image for accessibility'
              ],
              starterCode: '<body>\n<h1>My Website</h1>\n\n</body>',
              task: 'Add a link to google.com and an image',
              validation: '<a href=',
              expectedOutput: '<body>\n<h1>My Website</h1>\n<a href="https://google.com">Visit Google</a>\n<img src="photo.jpg" alt="A photo">\n</body>'
            }
          },
          {
            id: 'html-5',
            number: 5,
            title: 'Chapter 1 Practice',
            description: 'Build a simple personal page',
            duration: '20 min',
            xp: 100,
            type: 'practice',
            content: {
              instructions: [
                'Combine everything you learned',
                'Create a personal introduction page',
                'Include heading, paragraph, link, and image'
              ],
              starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>About Me</title>\n</head>\n<body>\n\n</body>\n</html>',
              task: 'Create a complete "About Me" page with your name, bio, and a link',
              validation: '<h1>',
              expectedOutput: ''
            }
          }
        ]
      },
      {
        id: 2,
        title: 'Styling with CSS',
        description: 'Make your websites beautiful',
        lessons: [
          {
            id: 'css-1',
            number: 6,
            title: 'Introduction to CSS',
            description: 'Learn how CSS transforms HTML',
            duration: '10 min',
            xp: 30,
            type: 'lesson',
            content: {
              instructions: [
                'CSS stands for Cascading Style Sheets',
                'It controls colors, fonts, layout, and more',
                'CSS rules have a selector and declarations'
              ],
              starterCode: '<style>\n\n</style>',
              task: 'Write a CSS rule to make h1 elements blue',
              validation: 'h1',
              expectedOutput: '<style>\nh1 {\n  color: blue;\n}\n</style>'
            }
          },
          {
            id: 'css-2',
            number: 7,
            title: 'Colors & Backgrounds',
            description: 'Add color to your designs',
            duration: '12 min',
            xp: 45,
            type: 'lesson',
            content: {
              instructions: [
                'Use color names: red, blue, green',
                'Or hex codes: #ff0000, #00ff00',
                'Or RGB: rgb(255, 0, 0)'
              ],
              starterCode: '<style>\nbody {\n\n}\n</style>',
              task: 'Set a dark background color and white text',
              validation: 'background',
              expectedOutput: '<style>\nbody {\n  background-color: #1a1a2e;\n  color: white;\n}\n</style>'
            }
          },
          {
            id: 'css-3',
            number: 8,
            title: 'Fonts & Text',
            description: 'Control typography',
            duration: '12 min',
            xp: 45,
            type: 'lesson',
            content: {
              instructions: [
                'font-family changes the typeface',
                'font-size controls text size',
                'font-weight makes text bold or light'
              ],
              starterCode: '<style>\np {\n\n}\n</style>',
              task: 'Style paragraphs with a custom font and size',
              validation: 'font-family',
              expectedOutput: '<style>\np {\n  font-family: Arial, sans-serif;\n  font-size: 18px;\n  line-height: 1.6;\n}\n</style>'
            }
          },
          {
            id: 'css-4',
            number: 9,
            title: 'The Box Model',
            description: 'Understand spacing and borders',
            duration: '15 min',
            xp: 60,
            type: 'lesson',
            content: {
              instructions: [
                'Every element is a box',
                'Content → Padding → Border → Margin',
                'padding is inside, margin is outside'
              ],
              starterCode: '<style>\n.card {\n\n}\n</style>',
              task: 'Create a card with padding, border, and margin',
              validation: 'padding',
              expectedOutput: '<style>\n.card {\n  padding: 20px;\n  margin: 10px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n}\n</style>'
            }
          },
          {
            id: 'css-5',
            number: 10,
            title: 'Chapter 2 Practice',
            description: 'Style a profile card',
            duration: '25 min',
            xp: 120,
            type: 'practice',
            content: {
              instructions: [
                'Apply all CSS concepts learned',
                'Create a visually appealing profile card',
                'Use colors, fonts, and spacing'
              ],
              starterCode: '',
              task: 'Build a styled profile card component',
              validation: '',
              expectedOutput: ''
            }
          }
        ]
      },
      {
        id: 3,
        title: 'CSS Layout',
        description: 'Position and arrange elements',
        lessons: [
          {
            id: 'layout-1',
            number: 11,
            title: 'Display Property',
            description: 'Control how elements appear',
            duration: '10 min',
            xp: 40,
            type: 'lesson',
            content: {
              instructions: [
                'display: block - takes full width',
                'display: inline - flows with text',
                'display: none - hides element'
              ],
              starterCode: '',
              task: 'Change a span to display as block',
              validation: 'display',
              expectedOutput: ''
            }
          },
          {
            id: 'layout-2',
            number: 12,
            title: 'Flexbox Basics',
            description: 'The modern way to layout',
            duration: '15 min',
            xp: 70,
            type: 'lesson',
            content: {
              instructions: [
                'display: flex creates a flex container',
                'justify-content aligns items horizontally',
                'align-items aligns items vertically'
              ],
              starterCode: '<style>\n.container {\n\n}\n</style>',
              task: 'Create a flexbox container that centers its children',
              validation: 'display: flex',
              expectedOutput: '<style>\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n</style>'
            }
          },
          {
            id: 'layout-3',
            number: 13,
            title: 'Flexbox Direction',
            description: 'Control the flow of items',
            duration: '12 min',
            xp: 50,
            type: 'lesson',
            content: {
              instructions: [
                'flex-direction: row (default) - horizontal',
                'flex-direction: column - vertical',
                'gap adds space between items'
              ],
              starterCode: '',
              task: 'Create a vertical navigation menu with flexbox',
              validation: 'flex-direction',
              expectedOutput: ''
            }
          },
          {
            id: 'layout-4',
            number: 14,
            title: 'CSS Grid Introduction',
            description: 'Two-dimensional layouts',
            duration: '18 min',
            xp: 80,
            type: 'lesson',
            content: {
              instructions: [
                'display: grid creates a grid container',
                'grid-template-columns defines column sizes',
                'gap adds space between grid items'
              ],
              starterCode: '',
              task: 'Create a 3-column grid layout',
              validation: 'grid-template-columns',
              expectedOutput: ''
            }
          },
          {
            id: 'layout-5',
            number: 15,
            title: 'Chapter 3 Practice',
            description: 'Build a responsive layout',
            duration: '30 min',
            xp: 150,
            type: 'practice',
            content: {
              instructions: [
                'Combine flexbox and grid',
                'Create a page layout with header, sidebar, and content',
                'Make it look professional'
              ],
              starterCode: '',
              task: 'Build a complete page layout',
              validation: '',
              expectedOutput: ''
            }
          }
        ]
      },
      {
        id: 4,
        title: 'JavaScript Fundamentals',
        description: 'Add interactivity to your sites',
        lessons: [
          {
            id: 'js-1',
            number: 16,
            title: 'What is JavaScript?',
            description: 'The programming language of the web',
            duration: '8 min',
            xp: 30,
            type: 'lesson',
            content: {
              instructions: [
                'JavaScript makes websites interactive',
                'It can respond to user actions',
                'It can modify HTML and CSS dynamically'
              ],
              starterCode: '<script>\n\n</script>',
              task: 'Write an alert that says "Hello World"',
              validation: 'alert',
              expectedOutput: '<script>\nalert("Hello World");\n</script>'
            }
          },
          {
            id: 'js-2',
            number: 17,
            title: 'Variables & Data Types',
            description: 'Store and use information',
            duration: '15 min',
            xp: 60,
            type: 'lesson',
            content: {
              instructions: [
                'let creates a changeable variable',
                'const creates a constant (unchangeable)',
                'Types: string, number, boolean, array, object'
              ],
              starterCode: '',
              task: 'Create variables for name, age, and isStudent',
              validation: 'let',
              expectedOutput: ''
            }
          },
          {
            id: 'js-3',
            number: 18,
            title: 'Functions',
            description: 'Reusable blocks of code',
            duration: '18 min',
            xp: 75,
            type: 'lesson',
            content: {
              instructions: [
                'Functions group code that performs a task',
                'They can take inputs (parameters)',
                'They can return outputs'
              ],
              starterCode: '',
              task: 'Create a function that adds two numbers',
              validation: 'function',
              expectedOutput: ''
            }
          },
          {
            id: 'js-4',
            number: 19,
            title: 'DOM Manipulation',
            description: 'Change the page with code',
            duration: '20 min',
            xp: 90,
            type: 'lesson',
            content: {
              instructions: [
                'DOM = Document Object Model',
                'document.querySelector finds elements',
                'element.textContent changes text'
              ],
              starterCode: '',
              task: 'Select an element and change its text',
              validation: 'querySelector',
              expectedOutput: ''
            }
          },
          {
            id: 'js-5',
            number: 20,
            title: 'Event Handling',
            description: 'Respond to user actions',
            duration: '18 min',
            xp: 80,
            type: 'lesson',
            content: {
              instructions: [
                'Events: click, submit, keypress, etc.',
                'addEventListener attaches event handlers',
                'The callback function runs when event occurs'
              ],
              starterCode: '',
              task: 'Add a click event to a button',
              validation: 'addEventListener',
              expectedOutput: ''
            }
          },
          {
            id: 'js-6',
            number: 21,
            title: 'Chapter 4 Practice',
            description: 'Build an interactive component',
            duration: '30 min',
            xp: 150,
            type: 'practice',
            content: {
              instructions: [
                'Combine HTML, CSS, and JavaScript',
                'Create something interactive',
                'Handle user input and update the page'
              ],
              starterCode: '',
              task: 'Build a simple counter or to-do item',
              validation: '',
              expectedOutput: ''
            }
          }
        ]
      },
      {
        id: 5,
        title: 'Final Project',
        description: 'Put it all together',
        lessons: [
          {
            id: 'final-1',
            number: 22,
            title: 'Project Planning',
            description: 'Design your final project',
            duration: '15 min',
            xp: 50,
            type: 'lesson',
            content: {
              instructions: [
                'Choose a project: portfolio, landing page, or app',
                'Sketch out the layout',
                'List the features you need'
              ],
              starterCode: '',
              task: 'Write a project plan',
              validation: '',
              expectedOutput: ''
            }
          },
          {
            id: 'final-2',
            number: 23,
            title: 'Building Your Project',
            description: 'Code your final project',
            duration: '60 min',
            xp: 300,
            type: 'project',
            content: {
              instructions: [
                'Start with HTML structure',
                'Add CSS styling',
                'Implement JavaScript functionality'
              ],
              starterCode: '',
              task: 'Build your complete project',
              validation: '',
              expectedOutput: ''
            }
          },
          {
            id: 'final-3',
            number: 24,
            title: 'Course Complete!',
            description: 'Congratulations on finishing',
            duration: '5 min',
            xp: 200,
            type: 'completion',
            content: {
              instructions: [
                'You have completed Web Development Fundamentals!',
                'You can now build real websites',
                'Continue to the next course to level up'
              ],
              starterCode: '',
              task: 'Claim your certificate',
              validation: '',
              expectedOutput: ''
            }
          }
        ]
      }
    ]
  },

  backend: {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Node.js, Express & Databases',
    description: 'Learn to build server-side applications, APIs, and work with databases. Power the backend of modern web apps.',
    icon: 'Server',
    color: '#a855f7',
    totalLessons: 20,
    totalDuration: '14 hours',
    level: 'Intermediate',
    chapters: [
      {
        id: 1,
        title: 'Node.js Essentials',
        description: 'Server-side JavaScript runtime',
        lessons: [
          { id: 'node-1', number: 1, title: 'What is Node.js?', description: 'JavaScript outside the browser', duration: '10 min', xp: 35, type: 'lesson' },
          { id: 'node-2', number: 2, title: 'Node.js Modules', description: 'Organize your code', duration: '15 min', xp: 50, type: 'lesson' },
          { id: 'node-3', number: 3, title: 'NPM Package Manager', description: 'Use external libraries', duration: '12 min', xp: 45, type: 'lesson' },
          { id: 'node-4', number: 4, title: 'File System Operations', description: 'Read and write files', duration: '18 min', xp: 65, type: 'lesson' },
          { id: 'node-5', number: 5, title: 'Chapter Practice', description: 'Build a file manager', duration: '25 min', xp: 100, type: 'practice' }
        ]
      },
      {
        id: 2,
        title: 'Express.js Framework',
        description: 'Build web servers easily',
        lessons: [
          { id: 'express-1', number: 6, title: 'Express Setup', description: 'Create your first server', duration: '12 min', xp: 45, type: 'lesson' },
          { id: 'express-2', number: 7, title: 'Routes & Endpoints', description: 'Handle different URLs', duration: '15 min', xp: 55, type: 'lesson' },
          { id: 'express-3', number: 8, title: 'Middleware', description: 'Process requests', duration: '18 min', xp: 70, type: 'lesson' },
          { id: 'express-4', number: 9, title: 'Request & Response', description: 'Handle data flow', duration: '15 min', xp: 55, type: 'lesson' },
          { id: 'express-5', number: 10, title: 'Chapter Practice', description: 'Build a REST API', duration: '30 min', xp: 120, type: 'practice' }
        ]
      },
      {
        id: 3,
        title: 'Database Fundamentals',
        description: 'Store and retrieve data',
        lessons: [
          { id: 'db-1', number: 11, title: 'Database Concepts', description: 'SQL vs NoSQL', duration: '12 min', xp: 40, type: 'lesson' },
          { id: 'db-2', number: 12, title: 'MongoDB Basics', description: 'Document database', duration: '18 min', xp: 65, type: 'lesson' },
          { id: 'db-3', number: 13, title: 'CRUD Operations', description: 'Create, Read, Update, Delete', duration: '20 min', xp: 80, type: 'lesson' },
          { id: 'db-4', number: 14, title: 'Mongoose ODM', description: 'MongoDB with Node.js', duration: '18 min', xp: 70, type: 'lesson' },
          { id: 'db-5', number: 15, title: 'Chapter Practice', description: 'Build a data API', duration: '35 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 4,
        title: 'Authentication & Security',
        description: 'Secure your applications',
        lessons: [
          { id: 'auth-1', number: 16, title: 'Password Hashing', description: 'Secure password storage', duration: '15 min', xp: 60, type: 'lesson' },
          { id: 'auth-2', number: 17, title: 'JWT Authentication', description: 'Token-based auth', duration: '20 min', xp: 85, type: 'lesson' },
          { id: 'auth-3', number: 18, title: 'Protected Routes', description: 'Restrict access', duration: '15 min', xp: 60, type: 'lesson' },
          { id: 'auth-4', number: 19, title: 'Final Project', description: 'Complete backend app', duration: '60 min', xp: 250, type: 'project' },
          { id: 'auth-5', number: 20, title: 'Course Complete!', description: 'Claim your certificate', duration: '5 min', xp: 150, type: 'completion' }
        ]
      }
    ]
  },

  devops: {
    id: 'devops',
    title: 'DevOps & Cloud',
    subtitle: 'Docker, AWS & CI/CD',
    description: 'Master cloud infrastructure, containerization, and deployment automation. Deploy applications like a pro.',
    icon: 'Cloud',
    color: '#f97316',
    totalLessons: 18,
    totalDuration: '16 hours',
    level: 'Advanced',
    chapters: [
      {
        id: 1,
        title: 'Linux Command Line',
        description: 'Master the terminal',
        lessons: [
          { id: 'linux-1', number: 1, title: 'Terminal Basics', description: 'Navigate the command line', duration: '15 min', xp: 45, type: 'lesson' },
          { id: 'linux-2', number: 2, title: 'File Operations', description: 'Manage files and folders', duration: '18 min', xp: 55, type: 'lesson' },
          { id: 'linux-3', number: 3, title: 'Permissions & Users', description: 'Control access', duration: '20 min', xp: 70, type: 'lesson' },
          { id: 'linux-4', number: 4, title: 'Chapter Practice', description: 'Server administration', duration: '25 min', xp: 100, type: 'practice' }
        ]
      },
      {
        id: 2,
        title: 'Docker Containers',
        description: 'Package and run applications',
        lessons: [
          { id: 'docker-1', number: 5, title: 'What is Docker?', description: 'Container fundamentals', duration: '12 min', xp: 40, type: 'lesson' },
          { id: 'docker-2', number: 6, title: 'Dockerfiles', description: 'Build custom images', duration: '20 min', xp: 75, type: 'lesson' },
          { id: 'docker-3', number: 7, title: 'Docker Compose', description: 'Multi-container apps', duration: '22 min', xp: 85, type: 'lesson' },
          { id: 'docker-4', number: 8, title: 'Chapter Practice', description: 'Containerize an app', duration: '30 min', xp: 120, type: 'practice' }
        ]
      },
      {
        id: 3,
        title: 'AWS Cloud Services',
        description: 'Amazon Web Services essentials',
        lessons: [
          { id: 'aws-1', number: 9, title: 'AWS Overview', description: 'Cloud computing basics', duration: '15 min', xp: 50, type: 'lesson' },
          { id: 'aws-2', number: 10, title: 'EC2 Instances', description: 'Virtual servers', duration: '25 min', xp: 95, type: 'lesson' },
          { id: 'aws-3', number: 11, title: 'S3 Storage', description: 'Cloud file storage', duration: '18 min', xp: 65, type: 'lesson' },
          { id: 'aws-4', number: 12, title: 'RDS Databases', description: 'Managed databases', duration: '20 min', xp: 75, type: 'lesson' },
          { id: 'aws-5', number: 13, title: 'Chapter Practice', description: 'Deploy to AWS', duration: '40 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 4,
        title: 'CI/CD Pipelines',
        description: 'Automate deployments',
        lessons: [
          { id: 'cicd-1', number: 14, title: 'CI/CD Concepts', description: 'Continuous integration', duration: '12 min', xp: 45, type: 'lesson' },
          { id: 'cicd-2', number: 15, title: 'GitHub Actions', description: 'Automated workflows', duration: '25 min', xp: 95, type: 'lesson' },
          { id: 'cicd-3', number: 16, title: 'Deployment Strategies', description: 'Blue-green, rolling', duration: '18 min', xp: 70, type: 'lesson' },
          { id: 'cicd-4', number: 17, title: 'Final Project', description: 'Full pipeline setup', duration: '50 min', xp: 200, type: 'project' },
          { id: 'cicd-5', number: 18, title: 'Course Complete!', description: 'Claim your certificate', duration: '5 min', xp: 150, type: 'completion' }
        ]
      }
    ]
  },

  ai: {
    id: 'ai',
    title: 'AI & Machine Learning',
    subtitle: 'Python, TensorFlow & LLMs',
    description: 'Enter the world of artificial intelligence. Learn Python, build ML models, and work with Large Language Models.',
    icon: 'Brain',
    color: '#ec4899',
    totalLessons: 22,
    totalDuration: '20 hours',
    level: 'Advanced',
    chapters: [
      {
        id: 1,
        title: 'Python for AI',
        description: 'The language of data science',
        lessons: [
          { id: 'py-1', number: 1, title: 'Python Basics', description: 'Variables, types, syntax', duration: '20 min', xp: 60, type: 'lesson' },
          { id: 'py-2', number: 2, title: 'Data Structures', description: 'Lists, dicts, sets', duration: '25 min', xp: 80, type: 'lesson' },
          { id: 'py-3', number: 3, title: 'Functions & Classes', description: 'Object-oriented Python', duration: '22 min', xp: 75, type: 'lesson' },
          { id: 'py-4', number: 4, title: 'NumPy Arrays', description: 'Numerical computing', duration: '25 min', xp: 90, type: 'lesson' },
          { id: 'py-5', number: 5, title: 'Pandas DataFrames', description: 'Data manipulation', duration: '28 min', xp: 100, type: 'lesson' },
          { id: 'py-6', number: 6, title: 'Chapter Practice', description: 'Data analysis project', duration: '35 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 2,
        title: 'Machine Learning Basics',
        description: 'Teach computers to learn',
        lessons: [
          { id: 'ml-1', number: 7, title: 'What is ML?', description: 'Core concepts', duration: '15 min', xp: 50, type: 'lesson' },
          { id: 'ml-2', number: 8, title: 'Supervised Learning', description: 'Classification & regression', duration: '25 min', xp: 90, type: 'lesson' },
          { id: 'ml-3', number: 9, title: 'Training Models', description: 'Fit and predict', duration: '28 min', xp: 100, type: 'lesson' },
          { id: 'ml-4', number: 10, title: 'Model Evaluation', description: 'Accuracy and metrics', duration: '20 min', xp: 75, type: 'lesson' },
          { id: 'ml-5', number: 11, title: 'Chapter Practice', description: 'Build a classifier', duration: '40 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 3,
        title: 'Deep Learning',
        description: 'Neural networks and beyond',
        lessons: [
          { id: 'dl-1', number: 12, title: 'Neural Networks', description: 'Layers and neurons', duration: '25 min', xp: 90, type: 'lesson' },
          { id: 'dl-2', number: 13, title: 'TensorFlow Basics', description: 'Build your first model', duration: '30 min', xp: 110, type: 'lesson' },
          { id: 'dl-3', number: 14, title: 'Training Deep Models', description: 'Epochs and batches', duration: '28 min', xp: 100, type: 'lesson' },
          { id: 'dl-4', number: 15, title: 'CNNs for Images', description: 'Computer vision', duration: '35 min', xp: 130, type: 'lesson' },
          { id: 'dl-5', number: 16, title: 'Chapter Practice', description: 'Image classifier', duration: '45 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 4,
        title: 'Large Language Models',
        description: 'Work with AI like ChatGPT',
        lessons: [
          { id: 'llm-1', number: 17, title: 'Understanding LLMs', description: 'How they work', duration: '20 min', xp: 70, type: 'lesson' },
          { id: 'llm-2', number: 18, title: 'Prompt Engineering', description: 'Effective prompts', duration: '25 min', xp: 95, type: 'lesson' },
          { id: 'llm-3', number: 19, title: 'OpenAI API', description: 'Build AI apps', duration: '30 min', xp: 115, type: 'lesson' },
          { id: 'llm-4', number: 20, title: 'RAG Systems', description: 'Retrieval augmented generation', duration: '35 min', xp: 135, type: 'lesson' },
          { id: 'llm-5', number: 21, title: 'Final Project', description: 'Build an AI application', duration: '60 min', xp: 250, type: 'project' },
          { id: 'llm-6', number: 22, title: 'Course Complete!', description: 'Claim your certificate', duration: '5 min', xp: 150, type: 'completion' }
        ]
      }
    ]
  },

  basics: {
    id: 'basics',
    title: 'Computer Essentials',
    subtitle: 'Digital Skills for Everyone',
    description: 'Master essential computer skills. From typing to Microsoft Office, get comfortable with technology.',
    icon: 'Laptop',
    color: '#eab308',
    totalLessons: 16,
    totalDuration: '8 hours',
    level: 'Beginner',
    chapters: [
      {
        id: 1,
        title: 'Getting Started',
        description: 'Computer fundamentals',
        lessons: [
          { id: 'basic-1', number: 1, title: 'Computer Basics', description: 'Hardware and software', duration: '12 min', xp: 30, type: 'lesson' },
          { id: 'basic-2', number: 2, title: 'Operating System', description: 'Windows/Mac basics', duration: '15 min', xp: 40, type: 'lesson' },
          { id: 'basic-3', number: 3, title: 'Files & Folders', description: 'Organize your files', duration: '12 min', xp: 35, type: 'lesson' },
          { id: 'basic-4', number: 4, title: 'Chapter Practice', description: 'File management', duration: '20 min', xp: 60, type: 'practice' }
        ]
      },
      {
        id: 2,
        title: 'Typing Skills',
        description: 'Type faster and accurately',
        lessons: [
          { id: 'type-1', number: 5, title: 'Home Row Keys', description: 'Proper finger placement', duration: '15 min', xp: 40, type: 'lesson' },
          { id: 'type-2', number: 6, title: 'Top & Bottom Rows', description: 'Full keyboard coverage', duration: '18 min', xp: 50, type: 'lesson' },
          { id: 'type-3', number: 7, title: 'Speed Practice', description: 'Build typing speed', duration: '20 min', xp: 60, type: 'practice' },
          { id: 'type-4', number: 8, title: 'Typing Test', description: 'Measure your progress', duration: '15 min', xp: 80, type: 'practice' }
        ]
      },
      {
        id: 3,
        title: 'Microsoft Office',
        description: 'Essential productivity tools',
        lessons: [
          { id: 'office-1', number: 9, title: 'Word Basics', description: 'Create documents', duration: '20 min', xp: 55, type: 'lesson' },
          { id: 'office-2', number: 10, title: 'Excel Basics', description: 'Spreadsheets & formulas', duration: '25 min', xp: 70, type: 'lesson' },
          { id: 'office-3', number: 11, title: 'PowerPoint Basics', description: 'Create presentations', duration: '18 min', xp: 50, type: 'lesson' },
          { id: 'office-4', number: 12, title: 'Chapter Practice', description: 'Office project', duration: '30 min', xp: 100, type: 'practice' }
        ]
      },
      {
        id: 4,
        title: 'Internet & Email',
        description: 'Navigate the digital world',
        lessons: [
          { id: 'web-1', number: 13, title: 'Web Browsing', description: 'Use browsers effectively', duration: '12 min', xp: 35, type: 'lesson' },
          { id: 'web-2', number: 14, title: 'Email Essentials', description: 'Professional communication', duration: '15 min', xp: 45, type: 'lesson' },
          { id: 'web-3', number: 15, title: 'Online Safety', description: 'Stay secure online', duration: '18 min', xp: 55, type: 'lesson' },
          { id: 'web-4', number: 16, title: 'Course Complete!', description: 'Claim your certificate', duration: '5 min', xp: 100, type: 'completion' }
        ]
      }
    ]
  },

  fullstack: {
    id: 'fullstack',
    title: 'Full Stack Development',
    subtitle: 'Complete Web Applications',
    description: 'Combine frontend and backend skills to build complete web applications from start to finish.',
    icon: 'Code2',
    color: '#10b981',
    totalLessons: 26,
    totalDuration: '24 hours',
    level: 'Intermediate',
    chapters: [
      {
        id: 1,
        title: 'Full Stack Overview',
        description: 'Understanding the complete picture',
        lessons: [
          { id: 'fs-1', number: 1, title: 'What is Full Stack?', description: 'Frontend + Backend', duration: '10 min', xp: 30, type: 'lesson' },
          { id: 'fs-2', number: 2, title: 'Project Architecture', description: 'How apps are structured', duration: '15 min', xp: 50, type: 'lesson' },
          { id: 'fs-3', number: 3, title: 'Development Tools', description: 'VS Code, Git, npm', duration: '18 min', xp: 60, type: 'lesson' }
        ]
      },
      {
        id: 2,
        title: 'React Frontend',
        description: 'Modern UI development',
        lessons: [
          { id: 'react-1', number: 4, title: 'React Setup', description: 'Create React App', duration: '12 min', xp: 40, type: 'lesson' },
          { id: 'react-2', number: 5, title: 'Components', description: 'Building blocks of React', duration: '20 min', xp: 70, type: 'lesson' },
          { id: 'react-3', number: 6, title: 'State & Props', description: 'Data flow in React', duration: '25 min', xp: 90, type: 'lesson' },
          { id: 'react-4', number: 7, title: 'React Hooks', description: 'useState, useEffect', duration: '28 min', xp: 100, type: 'lesson' },
          { id: 'react-5', number: 8, title: 'React Router', description: 'Page navigation', duration: '18 min', xp: 65, type: 'lesson' },
          { id: 'react-6', number: 9, title: 'Chapter Practice', description: 'Build a React app', duration: '40 min', xp: 150, type: 'practice' }
        ]
      },
      {
        id: 3,
        title: 'Node.js Backend',
        description: 'Server-side development',
        lessons: [
          { id: 'be-1', number: 10, title: 'Express Setup', description: 'Create API server', duration: '15 min', xp: 50, type: 'lesson' },
          { id: 'be-2', number: 11, title: 'REST API Design', description: 'Endpoints and methods', duration: '22 min', xp: 80, type: 'lesson' },
          { id: 'be-3', number: 12, title: 'MongoDB Integration', description: 'Database connection', duration: '25 min', xp: 90, type: 'lesson' },
          { id: 'be-4', number: 13, title: 'User Authentication', description: 'JWT and sessions', duration: '30 min', xp: 110, type: 'lesson' },
          { id: 'be-5', number: 14, title: 'Chapter Practice', description: 'Build an API', duration: '40 min', xp: 150, type: 'practice' }
        ]
      },
      {
        id: 4,
        title: 'Connecting Frontend & Backend',
        description: 'Full stack integration',
        lessons: [
          { id: 'int-1', number: 15, title: 'API Calls from React', description: 'Fetch and Axios', duration: '20 min', xp: 70, type: 'lesson' },
          { id: 'int-2', number: 16, title: 'State Management', description: 'Managing app state', duration: '25 min', xp: 90, type: 'lesson' },
          { id: 'int-3', number: 17, title: 'Authentication Flow', description: 'Login/logout in React', duration: '28 min', xp: 100, type: 'lesson' },
          { id: 'int-4', number: 18, title: 'Error Handling', description: 'Graceful error states', duration: '18 min', xp: 65, type: 'lesson' },
          { id: 'int-5', number: 19, title: 'Chapter Practice', description: 'Connect your app', duration: '45 min', xp: 170, type: 'practice' }
        ]
      },
      {
        id: 5,
        title: 'Deployment & Production',
        description: 'Ship your application',
        lessons: [
          { id: 'dep-1', number: 20, title: 'Environment Variables', description: 'Config management', duration: '12 min', xp: 40, type: 'lesson' },
          { id: 'dep-2', number: 21, title: 'Building for Production', description: 'Optimize your app', duration: '18 min', xp: 65, type: 'lesson' },
          { id: 'dep-3', number: 22, title: 'Deploy Backend', description: 'Host your API', duration: '25 min', xp: 95, type: 'lesson' },
          { id: 'dep-4', number: 23, title: 'Deploy Frontend', description: 'Host your React app', duration: '20 min', xp: 75, type: 'lesson' },
          { id: 'dep-5', number: 24, title: 'Final Project', description: 'Complete full stack app', duration: '90 min', xp: 350, type: 'project' },
          { id: 'dep-6', number: 25, title: 'Course Complete!', description: 'Claim your certificate', duration: '5 min', xp: 200, type: 'completion' }
        ]
      }
    ]
  },

  python: {
    id: 'python',
    title: 'Python Programming',
    subtitle: 'From Zero to Hero',
    description: 'Master Python programming from basics to advanced concepts. Learn data structures, OOP, file handling, and build real projects.',
    icon: 'Code2',
    color: '#3776ab',
    totalLessons: 30,
    totalDuration: '15 hours',
    level: 'Beginner',
    chapters: [
      {
        id: 1,
        title: 'Python Basics',
        description: 'Get started with Python programming',
        lessons: [
          { id: 'py-1', number: 1, title: 'Introduction to Python', description: 'What is Python and why learn it', duration: '10 min', xp: 25, type: 'lesson', content: { instructions: ['Python is a high-level programming language', 'It is known for its simple and readable syntax', 'Python is used in web development, data science, AI, and more'], starterCode: '', task: 'Type: print("Hello, World!")', validation: 'print(', expectedOutput: 'Hello, World!' } },
          { id: 'py-2', number: 2, title: 'Variables & Data Types', description: 'Store and manage data', duration: '15 min', xp: 40, type: 'lesson', content: { instructions: ['Variables store data values', 'Python has types: str, int, float, bool', 'Use = to assign values'], starterCode: '', task: 'Create a variable called name with your name', validation: 'name =', expectedOutput: 'name = "John"' } },
          { id: 'py-3', number: 3, title: 'Numbers & Math', description: 'Perform calculations', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['Python supports +, -, *, /', 'Use ** for power, % for modulo', 'Integer division uses //'], starterCode: '', task: 'Calculate 10 + 5 * 2', validation: '10 + 5', expectedOutput: '20' } },
          { id: 'py-4', number: 4, title: 'Strings', description: 'Work with text data', duration: '18 min', xp: 50, type: 'lesson', content: { instructions: ['Strings are text in quotes', 'Use + to concatenate strings', 'f-strings allow variable insertion'], starterCode: '', task: 'Create an f-string with your name', validation: 'f"', expectedOutput: 'f"My name is {name}"' } },
          { id: 'py-5', number: 5, title: 'Chapter Practice', description: 'Practice basic Python', duration: '25 min', xp: 80, type: 'practice' }
        ]
      },
      {
        id: 2,
        title: 'Control Flow',
        description: 'Make decisions in your code',
        lessons: [
          { id: 'py-6', number: 6, title: 'If Statements', description: 'Conditional execution', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['if checks a condition', 'elif adds more conditions', 'else handles all other cases'], starterCode: 'age = 18\n', task: 'Write an if statement to check if age >= 18', validation: 'if age', expectedOutput: 'if age >= 18:\n    print("Adult")' } },
          { id: 'py-7', number: 7, title: 'For Loops', description: 'Repeat actions', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['for iterates over sequences', 'range() generates numbers', 'Use break to exit early'], starterCode: '', task: 'Print numbers 1 to 5 using a for loop', validation: 'for', expectedOutput: 'for i in range(1, 6):\n    print(i)' } },
          { id: 'py-8', number: 8, title: 'While Loops', description: 'Loop while condition is true', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['while loops until condition is false', 'Be careful of infinite loops', 'Use continue to skip iterations'], starterCode: '', task: 'Count down from 5 using while', validation: 'while', expectedOutput: 'while count > 0:\n    print(count)\n    count -= 1' } },
          { id: 'py-9', number: 9, title: 'List Comprehensions', description: 'Elegant list creation', duration: '20 min', xp: 70, type: 'lesson', content: { instructions: ['[expr for item in list]', 'Add conditions with if', 'More readable than loops'], starterCode: '', task: 'Create squares of 1-5 using comprehension', validation: '[', expectedOutput: 'squares = [x**2 for x in range(1, 6)]' } },
          { id: 'py-10', number: 10, title: 'Chapter Practice', description: 'Control flow exercises', duration: '30 min', xp: 100, type: 'practice' }
        ]
      },
      {
        id: 3,
        title: 'Data Structures',
        description: 'Organize your data efficiently',
        lessons: [
          { id: 'py-11', number: 11, title: 'Lists', description: 'Ordered collections', duration: '20 min', xp: 60, type: 'lesson', content: { instructions: ['Lists use square brackets []', 'Access items by index', 'Methods: append, remove, pop'], starterCode: '', task: 'Create a list of 3 fruits', validation: '[', expectedOutput: 'fruits = ["apple", "banana", "orange"]' } },
          { id: 'py-12', number: 12, title: 'Tuples', description: 'Immutable sequences', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['Tuples use parentheses ()', 'Cannot be modified after creation', 'Good for fixed data'], starterCode: '', task: 'Create a tuple with coordinates', validation: '(', expectedOutput: 'point = (10, 20)' } },
          { id: 'py-13', number: 13, title: 'Dictionaries', description: 'Key-value storage', duration: '22 min', xp: 75, type: 'lesson', content: { instructions: ['Dicts use curly braces {}', 'Access by key: dict["key"]', 'Methods: keys(), values(), items()'], starterCode: '', task: 'Create a dict with name and age', validation: '{', expectedOutput: 'person = {"name": "John", "age": 25}' } },
          { id: 'py-14', number: 14, title: 'Sets', description: 'Unique collections', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['Sets have no duplicates', 'Use set() or {}', 'Support union, intersection'], starterCode: '', task: 'Create a set of numbers', validation: 'set', expectedOutput: 'numbers = {1, 2, 3, 4, 5}' } },
          { id: 'py-15', number: 15, title: 'Chapter Practice', description: 'Data structure exercises', duration: '35 min', xp: 120, type: 'practice' }
        ]
      },
      {
        id: 4,
        title: 'Functions & Modules',
        description: 'Write reusable code',
        lessons: [
          { id: 'py-16', number: 16, title: 'Defining Functions', description: 'Create reusable code blocks', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['def keyword defines functions', 'Parameters pass data in', 'return sends data back'], starterCode: '', task: 'Create a function that adds two numbers', validation: 'def add', expectedOutput: 'def add(a, b):\n    return a + b' } },
          { id: 'py-17', number: 17, title: 'Function Arguments', description: 'Default and keyword args', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['Default values: def fn(x=10)', '*args for variable args', '**kwargs for keyword args'], starterCode: '', task: 'Create a greet function with default name', validation: 'def greet', expectedOutput: 'def greet(name="World"):\n    print(f"Hello, {name}!")' } },
          { id: 'py-18', number: 18, title: 'Lambda Functions', description: 'Anonymous functions', duration: '15 min', xp: 50, type: 'lesson', content: { instructions: ['lambda creates small functions', 'Syntax: lambda x: expression', 'Great with map, filter, sort'], starterCode: '', task: 'Create a lambda that doubles a number', validation: 'lambda', expectedOutput: 'double = lambda x: x * 2' } },
          { id: 'py-19', number: 19, title: 'Modules & Imports', description: 'Organize and reuse code', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['import brings in modules', 'from module import item', 'Create your own modules'], starterCode: '', task: 'Import the math module and use sqrt', validation: 'import math', expectedOutput: 'import math\nresult = math.sqrt(16)' } },
          { id: 'py-20', number: 20, title: 'Chapter Practice', description: 'Functions project', duration: '40 min', xp: 150, type: 'practice' }
        ]
      },
      {
        id: 5,
        title: 'Object-Oriented Programming',
        description: 'Master OOP in Python',
        lessons: [
          { id: 'py-21', number: 21, title: 'Classes & Objects', description: 'Create custom types', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['class defines a blueprint', '__init__ is the constructor', 'self refers to the instance'], starterCode: '', task: 'Create a Person class with name attribute', validation: 'class Person', expectedOutput: 'class Person:\n    def __init__(self, name):\n        self.name = name' } },
          { id: 'py-22', number: 22, title: 'Methods', description: 'Add behavior to classes', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['Methods are functions in classes', 'Always include self parameter', 'Call with object.method()'], starterCode: 'class Person:\n    def __init__(self, name):\n        self.name = name\n', task: 'Add a greet method', validation: 'def greet', expectedOutput: '    def greet(self):\n        print(f"Hello, I am {self.name}")' } },
          { id: 'py-23', number: 23, title: 'Inheritance', description: 'Extend existing classes', duration: '22 min', xp: 75, type: 'lesson', content: { instructions: ['class Child(Parent):', 'super() calls parent methods', 'Override methods to customize'], starterCode: '', task: 'Create a Student class that extends Person', validation: 'class Student(Person)', expectedOutput: 'class Student(Person):\n    def __init__(self, name, grade):\n        super().__init__(name)\n        self.grade = grade' } },
          { id: 'py-24', number: 24, title: 'Encapsulation', description: 'Protect your data', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['_single underscore is protected', '__double is private', 'Use properties for access'], starterCode: '', task: 'Create a class with private attribute', validation: 'self.__', expectedOutput: 'class BankAccount:\n    def __init__(self):\n        self.__balance = 0' } },
          { id: 'py-25', number: 25, title: 'Chapter Practice', description: 'OOP project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 6,
        title: 'Advanced Python',
        description: 'Level up your skills',
        lessons: [
          { id: 'py-26', number: 26, title: 'File Handling', description: 'Read and write files', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['open() opens files', 'with statement auto-closes', 'Modes: r, w, a, r+'], starterCode: '', task: 'Write text to a file', validation: 'with open', expectedOutput: 'with open("file.txt", "w") as f:\n    f.write("Hello!")' } },
          { id: 'py-27', number: 27, title: 'Exception Handling', description: 'Handle errors gracefully', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['try/except catches errors', 'finally always runs', 'raise creates exceptions'], starterCode: '', task: 'Handle a division by zero error', validation: 'try:', expectedOutput: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")' } },
          { id: 'py-28', number: 28, title: 'Decorators', description: 'Modify function behavior', duration: '25 min', xp: 85, type: 'lesson', content: { instructions: ['@decorator syntax', 'Functions that wrap functions', 'Common: @property, @staticmethod'], starterCode: '', task: 'Create a simple logging decorator', validation: 'def decorator', expectedOutput: 'def logger(func):\n    def wrapper(*args):\n        print(f"Calling {func.__name__}")\n        return func(*args)\n    return wrapper' } },
          { id: 'py-29', number: 29, title: 'Generators', description: 'Memory-efficient iteration', duration: '20 min', xp: 70, type: 'lesson', content: { instructions: ['yield instead of return', 'Lazy evaluation', 'Great for large datasets'], starterCode: '', task: 'Create a generator for even numbers', validation: 'yield', expectedOutput: 'def even_numbers(n):\n    for i in range(n):\n        if i % 2 == 0:\n            yield i' } },
          { id: 'py-30', number: 30, title: 'Final Project', description: 'Build a complete Python application', duration: '90 min', xp: 350, type: 'project' }
        ]
      }
    ]
  },

  java: {
    id: 'java',
    title: 'Java Programming',
    subtitle: 'Enterprise Development',
    description: 'Learn Java from fundamentals to advanced concepts. Master OOP, collections, multithreading, and build enterprise applications.',
    icon: 'Coffee',
    color: '#f89820',
    totalLessons: 30,
    totalDuration: '18 hours',
    level: 'Beginner',
    chapters: [
      {
        id: 1,
        title: 'Java Fundamentals',
        description: 'Start your Java journey',
        lessons: [
          { id: 'java-1', number: 1, title: 'Introduction to Java', description: 'What makes Java special', duration: '12 min', xp: 30, type: 'lesson', content: { instructions: ['Java is platform-independent', 'Write once, run anywhere', 'Used in enterprise, Android, web'], starterCode: '', task: 'Create a Hello World program', validation: 'public class', expectedOutput: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}' } },
          { id: 'java-2', number: 2, title: 'Variables & Data Types', description: 'Store data in Java', duration: '18 min', xp: 50, type: 'lesson', content: { instructions: ['Java is strongly typed', 'Primitives: int, double, boolean, char', 'Objects: String, Integer, etc.'], starterCode: '', task: 'Declare variables of different types', validation: 'int', expectedOutput: 'int age = 25;\ndouble price = 19.99;\nboolean isActive = true;\nString name = "John";' } },
          { id: 'java-3', number: 3, title: 'Operators', description: 'Perform operations', duration: '15 min', xp: 40, type: 'lesson', content: { instructions: ['Arithmetic: +, -, *, /, %', 'Comparison: ==, !=, <, >', 'Logical: &&, ||, !'], starterCode: '', task: 'Use different operators', validation: '&&', expectedOutput: 'int sum = 10 + 5;\nboolean result = (sum > 10) && (sum < 20);' } },
          { id: 'java-4', number: 4, title: 'Input & Output', description: 'Interact with users', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['System.out.println() for output', 'Scanner for input', 'Import java.util.Scanner'], starterCode: 'import java.util.Scanner;\n', task: 'Read user input', validation: 'Scanner', expectedOutput: 'Scanner scanner = new Scanner(System.in);\nString name = scanner.nextLine();' } },
          { id: 'java-5', number: 5, title: 'Chapter Practice', description: 'Java basics exercises', duration: '30 min', xp: 100, type: 'practice' }
        ]
      },
      {
        id: 2,
        title: 'Control Structures',
        description: 'Control program flow',
        lessons: [
          { id: 'java-6', number: 6, title: 'If-Else Statements', description: 'Make decisions', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['if (condition) { }', 'else if for multiple conditions', 'else for default case'], starterCode: 'int score = 85;\n', task: 'Grade a score (A/B/C/D/F)', validation: 'if (score', expectedOutput: 'if (score >= 90) {\n    System.out.println("A");\n} else if (score >= 80) {\n    System.out.println("B");\n}' } },
          { id: 'java-7', number: 7, title: 'Switch Statement', description: 'Multiple choice selection', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['switch (variable)', 'case value:', 'break to exit, default for else'], starterCode: '', task: 'Create a day-of-week switch', validation: 'switch', expectedOutput: 'switch (day) {\n    case 1: System.out.println("Monday"); break;\n    case 2: System.out.println("Tuesday"); break;\n    default: System.out.println("Unknown");\n}' } },
          { id: 'java-8', number: 8, title: 'For Loops', description: 'Count-controlled loops', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['for (init; condition; update)', 'Enhanced for-each loop', 'break and continue'], starterCode: '', task: 'Print numbers 1 to 10', validation: 'for (int', expectedOutput: 'for (int i = 1; i <= 10; i++) {\n    System.out.println(i);\n}' } },
          { id: 'java-9', number: 9, title: 'While & Do-While', description: 'Condition-controlled loops', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['while checks before loop', 'do-while runs at least once', 'Careful of infinite loops'], starterCode: '', task: 'Count down using while', validation: 'while', expectedOutput: 'int count = 5;\nwhile (count > 0) {\n    System.out.println(count);\n    count--;\n}' } },
          { id: 'java-10', number: 10, title: 'Chapter Practice', description: 'Control flow exercises', duration: '35 min', xp: 120, type: 'practice' }
        ]
      },
      {
        id: 3,
        title: 'Arrays & Collections',
        description: 'Work with data collections',
        lessons: [
          { id: 'java-11', number: 11, title: 'Arrays', description: 'Fixed-size collections', duration: '20 min', xp: 60, type: 'lesson', content: { instructions: ['type[] name = new type[size]', 'Access by index: arr[0]', 'Arrays have fixed size'], starterCode: '', task: 'Create an array of 5 integers', validation: 'int[]', expectedOutput: 'int[] numbers = new int[5];\nnumbers[0] = 10;' } },
          { id: 'java-12', number: 12, title: 'ArrayList', description: 'Dynamic arrays', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['ArrayList<Type> grows dynamically', 'Methods: add, get, remove, size', 'Import java.util.ArrayList'], starterCode: 'import java.util.ArrayList;\n', task: 'Create an ArrayList of strings', validation: 'ArrayList<String>', expectedOutput: 'ArrayList<String> names = new ArrayList<>();\nnames.add("John");\nnames.add("Jane");' } },
          { id: 'java-13', number: 13, title: 'HashMap', description: 'Key-value storage', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['HashMap<K,V> stores pairs', 'Methods: put, get, containsKey', 'Keys must be unique'], starterCode: 'import java.util.HashMap;\n', task: 'Create a HashMap for student grades', validation: 'HashMap<String', expectedOutput: 'HashMap<String, Integer> grades = new HashMap<>();\ngrades.put("John", 95);\ngrades.put("Jane", 88);' } },
          { id: 'java-14', number: 14, title: 'Iterating Collections', description: 'Loop through data', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Enhanced for loop', 'Iterator pattern', 'forEach with lambdas'], starterCode: '', task: 'Iterate over an ArrayList', validation: 'for (String', expectedOutput: 'for (String name : names) {\n    System.out.println(name);\n}' } },
          { id: 'java-15', number: 15, title: 'Chapter Practice', description: 'Collections project', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 4,
        title: 'Object-Oriented Programming',
        description: 'Master OOP in Java',
        lessons: [
          { id: 'java-16', number: 16, title: 'Classes & Objects', description: 'Create blueprints', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['class defines structure', 'new creates objects', 'Fields store state, methods define behavior'], starterCode: '', task: 'Create a Car class', validation: 'class Car', expectedOutput: 'class Car {\n    String brand;\n    int year;\n    \n    void start() {\n        System.out.println("Starting...");\n    }\n}' } },
          { id: 'java-17', number: 17, title: 'Constructors', description: 'Initialize objects', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Same name as class', 'No return type', 'Called with new'], starterCode: 'class Car {\n    String brand;\n    int year;\n', task: 'Add a constructor', validation: 'Car(String', expectedOutput: '    Car(String brand, int year) {\n        this.brand = brand;\n        this.year = year;\n    }' } },
          { id: 'java-18', number: 18, title: 'Encapsulation', description: 'Hide implementation', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['private fields', 'public getters/setters', 'Protect data integrity'], starterCode: '', task: 'Create getters and setters', validation: 'private String', expectedOutput: 'private String name;\n\npublic String getName() {\n    return name;\n}\n\npublic void setName(String name) {\n    this.name = name;\n}' } },
          { id: 'java-19', number: 19, title: 'Inheritance', description: 'Extend classes', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['extends keyword', 'super() calls parent constructor', 'Override methods with @Override'], starterCode: '', task: 'Create ElectricCar extending Car', validation: 'extends Car', expectedOutput: 'class ElectricCar extends Car {\n    int batteryCapacity;\n    \n    ElectricCar(String brand, int year, int battery) {\n        super(brand, year);\n        this.batteryCapacity = battery;\n    }\n}' } },
          { id: 'java-20', number: 20, title: 'Chapter Practice', description: 'OOP project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 5,
        title: 'Advanced OOP',
        description: 'Polymorphism, interfaces, abstracts',
        lessons: [
          { id: 'java-21', number: 21, title: 'Polymorphism', description: 'Many forms', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Method overloading: same name, different params', 'Method overriding: redefine in subclass', 'Runtime polymorphism'], starterCode: '', task: 'Override a method', validation: '@Override', expectedOutput: '@Override\nvoid start() {\n    System.out.println("Electric car starting silently...");\n}' } },
          { id: 'java-22', number: 22, title: 'Abstract Classes', description: 'Partial implementations', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['abstract class cannot be instantiated', 'abstract methods have no body', 'Subclasses must implement'], starterCode: '', task: 'Create an abstract Shape class', validation: 'abstract class', expectedOutput: 'abstract class Shape {\n    abstract double area();\n    \n    void display() {\n        System.out.println("Area: " + area());\n    }\n}' } },
          { id: 'java-23', number: 23, title: 'Interfaces', description: 'Define contracts', duration: '22 min', xp: 75, type: 'lesson', content: { instructions: ['interface defines behavior', 'implements keyword', 'A class can implement multiple'], starterCode: '', task: 'Create a Drawable interface', validation: 'interface', expectedOutput: 'interface Drawable {\n    void draw();\n}\n\nclass Circle implements Drawable {\n    public void draw() {\n        System.out.println("Drawing circle");\n    }\n}' } },
          { id: 'java-24', number: 24, title: 'Static & Final', description: 'Class-level members', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['static belongs to class', 'final cannot be changed', 'static final for constants'], starterCode: '', task: 'Create a counter with static', validation: 'static int', expectedOutput: 'class Counter {\n    static int count = 0;\n    \n    Counter() {\n        count++;\n    }\n}' } },
          { id: 'java-25', number: 25, title: 'Chapter Practice', description: 'Advanced OOP project', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 6,
        title: 'Exception Handling & I/O',
        description: 'Handle errors and files',
        lessons: [
          { id: 'java-26', number: 26, title: 'Try-Catch', description: 'Handle exceptions', duration: '20 min', xp: 60, type: 'lesson', content: { instructions: ['try contains risky code', 'catch handles specific errors', 'finally always executes'], starterCode: '', task: 'Handle NumberFormatException', validation: 'try {', expectedOutput: 'try {\n    int num = Integer.parseInt("abc");\n} catch (NumberFormatException e) {\n    System.out.println("Invalid number");\n}' } },
          { id: 'java-27', number: 27, title: 'Throwing Exceptions', description: 'Signal errors', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['throw new Exception()', 'throws in method signature', 'Custom exceptions extend Exception'], starterCode: '', task: 'Create a method that throws', validation: 'throws', expectedOutput: 'void validateAge(int age) throws IllegalArgumentException {\n    if (age < 0) {\n        throw new IllegalArgumentException("Age cannot be negative");\n    }\n}' } },
          { id: 'java-28', number: 28, title: 'File I/O', description: 'Read and write files', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['FileReader/FileWriter for text', 'BufferedReader for efficiency', 'Try-with-resources auto-closes'], starterCode: 'import java.io.*;\n', task: 'Read a file line by line', validation: 'BufferedReader', expectedOutput: 'try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {\n    String line;\n    while ((line = reader.readLine()) != null) {\n        System.out.println(line);\n    }\n}' } },
          { id: 'java-29', number: 29, title: 'Streams API', description: 'Functional data processing', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['stream() starts pipeline', 'filter, map, reduce operations', 'collect to gather results'], starterCode: 'import java.util.stream.*;\n', task: 'Filter and transform a list', validation: '.stream()', expectedOutput: 'List<String> filtered = names.stream()\n    .filter(n -> n.length() > 3)\n    .map(String::toUpperCase)\n    .collect(Collectors.toList());' } },
          { id: 'java-30', number: 30, title: 'Final Project', description: 'Build a Java application', duration: '90 min', xp: 350, type: 'project' }
        ]
      }
    ]
  },

  php: {
    id: 'php',
    title: 'PHP Development',
    subtitle: 'Web Backend Mastery',
    description: 'Learn PHP for web development. Master server-side programming, databases, sessions, and build dynamic web applications.',
    icon: 'Server',
    color: '#777bb4',
    totalLessons: 28,
    totalDuration: '14 hours',
    level: 'Beginner',
    chapters: [
      {
        id: 1,
        title: 'PHP Basics',
        description: 'Get started with PHP',
        lessons: [
          { id: 'php-1', number: 1, title: 'Introduction to PHP', description: 'Server-side scripting', duration: '10 min', xp: 25, type: 'lesson', content: { instructions: ['PHP runs on the server', 'Code goes between <?php ?>', 'Generates HTML for browsers'], starterCode: '', task: 'Write your first PHP script', validation: '<?php', expectedOutput: '<?php\necho "Hello, World!";\n?>' } },
          { id: 'php-2', number: 2, title: 'Variables & Types', description: 'Store data in PHP', duration: '15 min', xp: 40, type: 'lesson', content: { instructions: ['Variables start with $', 'No type declaration needed', 'Types: string, int, float, bool, array'], starterCode: '<?php\n', task: 'Create different variable types', validation: '$name', expectedOutput: '$name = "John";\n$age = 25;\n$price = 19.99;\n$isActive = true;' } },
          { id: 'php-3', number: 3, title: 'Strings & Interpolation', description: 'Work with text', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['Double quotes allow variables', 'Concatenate with .', 'String functions: strlen, substr, str_replace'], starterCode: '<?php\n$name = "John";\n', task: 'Create an interpolated string', validation: '"Hello, $', expectedOutput: 'echo "Hello, $name! Welcome.";' } },
          { id: 'php-4', number: 4, title: 'Arrays', description: 'Store multiple values', duration: '20 min', xp: 60, type: 'lesson', content: { instructions: ['Indexed: [1, 2, 3]', 'Associative: ["key" => "value"]', 'Functions: count, array_push, in_array'], starterCode: '<?php\n', task: 'Create an associative array', validation: '=>', expectedOutput: '$person = [\n    "name" => "John",\n    "age" => 25,\n    "city" => "NYC"\n];' } },
          { id: 'php-5', number: 5, title: 'Chapter Practice', description: 'PHP basics exercises', duration: '25 min', xp: 80, type: 'practice' }
        ]
      },
      {
        id: 2,
        title: 'Control Flow',
        description: 'Make decisions and repeat',
        lessons: [
          { id: 'php-6', number: 6, title: 'If-Else Statements', description: 'Conditional logic', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['if (condition) { }', 'elseif for more conditions', 'else for default'], starterCode: '<?php\n$age = 20;\n', task: 'Check if user is adult', validation: 'if ($age', expectedOutput: 'if ($age >= 18) {\n    echo "Adult";\n} else {\n    echo "Minor";\n}' } },
          { id: 'php-7', number: 7, title: 'Switch Statement', description: 'Multiple choices', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['switch ($var)', 'case value:', 'break to exit'], starterCode: '<?php\n$day = "Monday";\n', task: 'Create a day switch', validation: 'switch', expectedOutput: 'switch ($day) {\n    case "Monday":\n        echo "Start of week";\n        break;\n    case "Friday":\n        echo "Weekend soon!";\n        break;\n    default:\n        echo "Regular day";\n}' } },
          { id: 'php-8', number: 8, title: 'For & Foreach Loops', description: 'Iterate over data', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['for ($i = 0; $i < 10; $i++)', 'foreach ($arr as $item)', 'foreach ($arr as $key => $val)'], starterCode: '<?php\n$fruits = ["apple", "banana", "orange"];\n', task: 'Loop through fruits', validation: 'foreach', expectedOutput: 'foreach ($fruits as $fruit) {\n    echo $fruit . "\\n";\n}' } },
          { id: 'php-9', number: 9, title: 'While Loops', description: 'Condition-based loops', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['while (condition) { }', 'do { } while (condition)', 'Remember to update condition'], starterCode: '<?php\n', task: 'Count down from 5', validation: 'while', expectedOutput: '$count = 5;\nwhile ($count > 0) {\n    echo $count . "\\n";\n    $count--;\n}' } },
          { id: 'php-10', number: 10, title: 'Chapter Practice', description: 'Control flow exercises', duration: '30 min', xp: 100, type: 'practice' }
        ]
      },
      {
        id: 3,
        title: 'Functions',
        description: 'Create reusable code',
        lessons: [
          { id: 'php-11', number: 11, title: 'Defining Functions', description: 'Create your own functions', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['function name() { }', 'Parameters pass data in', 'return sends data back'], starterCode: '<?php\n', task: 'Create an add function', validation: 'function add', expectedOutput: 'function add($a, $b) {\n    return $a + $b;\n}' } },
          { id: 'php-12', number: 12, title: 'Default Parameters', description: 'Optional arguments', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['function fn($x = default)', 'Default params must be last', 'Allows flexible calling'], starterCode: '<?php\n', task: 'Create greet with default', validation: '= "World"', expectedOutput: 'function greet($name = "World") {\n    return "Hello, $name!";\n}' } },
          { id: 'php-13', number: 13, title: 'Variable Scope', description: 'Where variables live', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['Local: inside function only', 'Global: use global keyword', 'Static: persists between calls'], starterCode: '<?php\n', task: 'Use static variable', validation: 'static $', expectedOutput: 'function counter() {\n    static $count = 0;\n    $count++;\n    return $count;\n}' } },
          { id: 'php-14', number: 14, title: 'Anonymous Functions', description: 'Closures in PHP', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['$fn = function() { }', 'use ($var) to capture variables', 'Arrow functions: fn($x) => $x * 2'], starterCode: '<?php\n', task: 'Create an anonymous function', validation: 'function(', expectedOutput: '$multiply = function($a, $b) {\n    return $a * $b;\n};\necho $multiply(3, 4);' } },
          { id: 'php-15', number: 15, title: 'Chapter Practice', description: 'Functions exercises', duration: '30 min', xp: 100, type: 'practice' }
        ]
      },
      {
        id: 4,
        title: 'Object-Oriented PHP',
        description: 'Classes and objects',
        lessons: [
          { id: 'php-16', number: 16, title: 'Classes & Objects', description: 'Create blueprints', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['class Name { }', 'new creates objects', 'Properties and methods'], starterCode: '<?php\n', task: 'Create a Person class', validation: 'class Person', expectedOutput: 'class Person {\n    public $name;\n    public $age;\n    \n    public function greet() {\n        return "Hello, I am $this->name";\n    }\n}' } },
          { id: 'php-17', number: 17, title: 'Constructors', description: 'Initialize objects', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['__construct() method', 'Called automatically on new', 'Set initial values'], starterCode: '<?php\nclass Person {\n    public $name;\n', task: 'Add a constructor', validation: '__construct', expectedOutput: '    public function __construct($name) {\n        $this->name = $name;\n    }' } },
          { id: 'php-18', number: 18, title: 'Visibility', description: 'Public, private, protected', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['public: accessible everywhere', 'private: only in class', 'protected: class and children'], starterCode: '<?php\n', task: 'Create private property with getter', validation: 'private $', expectedOutput: 'class BankAccount {\n    private $balance = 0;\n    \n    public function getBalance() {\n        return $this->balance;\n    }\n}' } },
          { id: 'php-19', number: 19, title: 'Inheritance', description: 'Extend classes', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['class Child extends Parent', 'parent:: calls parent methods', 'Override methods to customize'], starterCode: '<?php\n', task: 'Create Student extending Person', validation: 'extends Person', expectedOutput: 'class Student extends Person {\n    public $grade;\n    \n    public function __construct($name, $grade) {\n        parent::__construct($name);\n        $this->grade = $grade;\n    }\n}' } },
          { id: 'php-20', number: 20, title: 'Chapter Practice', description: 'OOP exercises', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 5,
        title: 'Web Development',
        description: 'Build dynamic websites',
        lessons: [
          { id: 'php-21', number: 21, title: 'GET & POST', description: 'Handle form data', duration: '20 min', xp: 60, type: 'lesson', content: { instructions: ['$_GET for URL parameters', '$_POST for form submissions', 'Always validate input'], starterCode: '<?php\n', task: 'Handle a POST form', validation: '$_POST', expectedOutput: 'if ($_SERVER["REQUEST_METHOD"] == "POST") {\n    $name = $_POST["name"];\n    echo "Hello, $name!";\n}' } },
          { id: 'php-22', number: 22, title: 'Sessions', description: 'Track user state', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['session_start() first', '$_SESSION stores data', 'session_destroy() to clear'], starterCode: '<?php\nsession_start();\n', task: 'Store user in session', validation: '$_SESSION', expectedOutput: '$_SESSION["user"] = "John";\necho "Welcome, " . $_SESSION["user"];' } },
          { id: 'php-23', number: 23, title: 'Cookies', description: 'Store data in browser', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['setcookie(name, value, expiry)', '$_COOKIE to read', 'Set before any output'], starterCode: '<?php\n', task: 'Set and read a cookie', validation: 'setcookie', expectedOutput: 'setcookie("username", "John", time() + 86400);\nif (isset($_COOKIE["username"])) {\n    echo "Hello, " . $_COOKIE["username"];\n}' } },
          { id: 'php-24', number: 24, title: 'File Uploads', description: 'Handle file uploads', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['$_FILES contains uploads', 'Check file type and size', 'move_uploaded_file() to save'], starterCode: '<?php\n', task: 'Handle an image upload', validation: '$_FILES', expectedOutput: 'if ($_FILES["image"]["error"] == 0) {\n    $target = "uploads/" . $_FILES["image"]["name"];\n    move_uploaded_file($_FILES["image"]["tmp_name"], $target);\n}' } },
          { id: 'php-25', number: 25, title: 'Chapter Practice', description: 'Web development project', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 6,
        title: 'Database & MySQL',
        description: 'Connect to databases',
        lessons: [
          { id: 'php-26', number: 26, title: 'PDO Connection', description: 'Connect to MySQL', duration: '20 min', xp: 60, type: 'lesson', content: { instructions: ['PDO is secure and flexible', 'Use try-catch for errors', 'Set error mode to exceptions'], starterCode: '<?php\n', task: 'Create a PDO connection', validation: 'new PDO', expectedOutput: 'try {\n    $pdo = new PDO("mysql:host=localhost;dbname=test", "user", "pass");\n    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n} catch (PDOException $e) {\n    die("Connection failed: " . $e->getMessage());\n}' } },
          { id: 'php-27', number: 27, title: 'CRUD Operations', description: 'Create, Read, Update, Delete', duration: '30 min', xp: 100, type: 'lesson', content: { instructions: ['prepare() for safety', 'execute() runs query', 'fetch() gets results'], starterCode: '<?php\n// Assume $pdo is connected\n', task: 'Insert and select data', validation: 'prepare(', expectedOutput: '// Insert\n$stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");\n$stmt->execute(["John", "john@email.com"]);\n\n// Select\n$stmt = $pdo->query("SELECT * FROM users");\n$users = $stmt->fetchAll(PDO::FETCH_ASSOC);' } },
          { id: 'php-28', number: 28, title: 'Final Project', description: 'Build a complete PHP web app', duration: '90 min', xp: 350, type: 'project' }
        ]
      }
    ]
  },

  csharp: {
    id: 'csharp',
    title: 'C# Programming',
    subtitle: '.NET Development',
    description: 'Master C# and .NET development. Build Windows apps, web APIs, games with Unity, and enterprise applications.',
    icon: 'Cpu',
    color: '#68217a',
    totalLessons: 30,
    totalDuration: '16 hours',
    level: 'Beginner',
    chapters: [
      {
        id: 1,
        title: 'C# Fundamentals',
        description: 'Start with C# basics',
        lessons: [
          { id: 'cs-1', number: 1, title: 'Introduction to C#', description: 'What is C# and .NET', duration: '12 min', xp: 30, type: 'lesson', content: { instructions: ['C# is a modern, object-oriented language', 'Runs on .NET framework/Core', 'Used for Windows, web, games, mobile'], starterCode: '', task: 'Create Hello World program', validation: 'Console.WriteLine', expectedOutput: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine("Hello, World!");\n    }\n}' } },
          { id: 'cs-2', number: 2, title: 'Variables & Data Types', description: 'Store and type data', duration: '18 min', xp: 50, type: 'lesson', content: { instructions: ['C# is strongly typed', 'Common types: int, double, string, bool', 'var for type inference'], starterCode: '', task: 'Declare different variables', validation: 'int', expectedOutput: 'int age = 25;\ndouble price = 19.99;\nstring name = "John";\nbool isActive = true;\nvar count = 10;' } },
          { id: 'cs-3', number: 3, title: 'Operators & Expressions', description: 'Perform operations', duration: '15 min', xp: 40, type: 'lesson', content: { instructions: ['Arithmetic: +, -, *, /, %', 'Comparison: ==, !=, <, >', 'Logical: &&, ||, !'], starterCode: '', task: 'Use various operators', validation: '&&', expectedOutput: 'int sum = 10 + 5;\nbool result = (sum > 10) && (sum < 20);\nstring greeting = "Hello" + " World";' } },
          { id: 'cs-4', number: 4, title: 'User Input & Output', description: 'Interact with users', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['Console.WriteLine() for output', 'Console.ReadLine() for input', 'Convert.ToInt32() to parse'], starterCode: '', task: 'Read user input', validation: 'Console.ReadLine', expectedOutput: 'Console.Write("Enter name: ");\nstring name = Console.ReadLine();\nConsole.WriteLine($"Hello, {name}!");' } },
          { id: 'cs-5', number: 5, title: 'Chapter Practice', description: 'C# basics exercises', duration: '25 min', xp: 80, type: 'practice' }
        ]
      },
      {
        id: 2,
        title: 'Control Flow',
        description: 'Direct program execution',
        lessons: [
          { id: 'cs-6', number: 6, title: 'If-Else Statements', description: 'Make decisions', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['if (condition) { }', 'else if for alternatives', 'else for default'], starterCode: 'int score = 85;\n', task: 'Grade a score', validation: 'if (score', expectedOutput: 'if (score >= 90)\n    Console.WriteLine("A");\nelse if (score >= 80)\n    Console.WriteLine("B");\nelse\n    Console.WriteLine("C or below");' } },
          { id: 'cs-7', number: 7, title: 'Switch & Patterns', description: 'Pattern matching', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['switch with case', 'Pattern matching in C# 8+', 'switch expressions'], starterCode: '', task: 'Use switch expression', validation: 'switch', expectedOutput: 'string result = day switch\n{\n    1 => "Monday",\n    2 => "Tuesday",\n    _ => "Other"\n};' } },
          { id: 'cs-8', number: 8, title: 'For & Foreach Loops', description: 'Iterate collections', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['for (init; condition; step)', 'foreach (var item in collection)', 'break and continue'], starterCode: '', task: 'Loop through an array', validation: 'foreach', expectedOutput: 'string[] names = {"John", "Jane", "Bob"};\nforeach (string name in names)\n{\n    Console.WriteLine(name);\n}' } },
          { id: 'cs-9', number: 9, title: 'While & Do-While', description: 'Conditional loops', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['while checks first', 'do-while runs once minimum', 'Good for unknown iterations'], starterCode: '', task: 'Create a countdown', validation: 'while', expectedOutput: 'int count = 5;\nwhile (count > 0)\n{\n    Console.WriteLine(count);\n    count--;\n}' } },
          { id: 'cs-10', number: 10, title: 'Chapter Practice', description: 'Control flow exercises', duration: '30 min', xp: 100, type: 'practice' }
        ]
      },
      {
        id: 3,
        title: 'Arrays & Collections',
        description: 'Work with data structures',
        lessons: [
          { id: 'cs-11', number: 11, title: 'Arrays', description: 'Fixed-size collections', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['type[] name = new type[size]', 'Access by index', 'Array.Sort, Array.Reverse'], starterCode: '', task: 'Create and use an array', validation: 'int[]', expectedOutput: 'int[] numbers = new int[5];\nnumbers[0] = 10;\nnumbers[1] = 20;\n// Or initialize directly\nint[] scores = {85, 92, 78, 95};' } },
          { id: 'cs-12', number: 12, title: 'Lists', description: 'Dynamic arrays', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['List<T> grows dynamically', 'Add, Remove, Contains', 'using System.Collections.Generic'], starterCode: 'using System.Collections.Generic;\n', task: 'Create and manipulate a List', validation: 'List<', expectedOutput: 'List<string> names = new List<string>();\nnames.Add("John");\nnames.Add("Jane");\nnames.Remove("John");\nConsole.WriteLine(names.Count);' } },
          { id: 'cs-13', number: 13, title: 'Dictionaries', description: 'Key-value pairs', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['Dictionary<TKey, TValue>', 'Add, ContainsKey, TryGetValue', 'Access by key'], starterCode: 'using System.Collections.Generic;\n', task: 'Create a dictionary', validation: 'Dictionary<', expectedOutput: 'Dictionary<string, int> ages = new Dictionary<string, int>();\nages["John"] = 25;\nages["Jane"] = 30;\nif (ages.ContainsKey("John"))\n    Console.WriteLine(ages["John"]);' } },
          { id: 'cs-14', number: 14, title: 'LINQ Basics', description: 'Query collections', duration: '25 min', xp: 85, type: 'lesson', content: { instructions: ['using System.Linq', 'Where, Select, OrderBy', 'Method and query syntax'], starterCode: 'using System.Linq;\n', task: 'Filter and transform data', validation: '.Where(', expectedOutput: 'int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nvar evens = numbers.Where(n => n % 2 == 0).ToList();\nvar doubled = numbers.Select(n => n * 2).ToList();' } },
          { id: 'cs-15', number: 15, title: 'Chapter Practice', description: 'Collections project', duration: '35 min', xp: 120, type: 'practice' }
        ]
      },
      {
        id: 4,
        title: 'Object-Oriented Programming',
        description: 'Master OOP in C#',
        lessons: [
          { id: 'cs-16', number: 16, title: 'Classes & Objects', description: 'Create blueprints', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['class defines structure', 'Fields, properties, methods', 'new creates instances'], starterCode: '', task: 'Create a Person class', validation: 'class Person', expectedOutput: 'class Person\n{\n    public string Name { get; set; }\n    public int Age { get; set; }\n    \n    public void Greet()\n    {\n        Console.WriteLine($"Hi, I am {Name}");\n    }\n}' } },
          { id: 'cs-17', number: 17, title: 'Constructors', description: 'Initialize objects', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Same name as class', 'Can have multiple (overloading)', 'this keyword refers to instance'], starterCode: 'class Person\n{\n    public string Name { get; set; }\n', task: 'Add a constructor', validation: 'public Person(', expectedOutput: '    public Person(string name)\n    {\n        Name = name;\n    }\n    \n    public Person(string name, int age) : this(name)\n    {\n        Age = age;\n    }' } },
          { id: 'cs-18', number: 18, title: 'Properties', description: 'Controlled access', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['Auto-properties: { get; set; }', 'Full properties with backing field', 'init for immutable'], starterCode: '', task: 'Create properties', validation: '{ get;', expectedOutput: 'class Product\n{\n    public string Name { get; set; }\n    public decimal Price { get; private set; }\n    \n    private int _stock;\n    public int Stock\n    {\n        get => _stock;\n        set => _stock = value >= 0 ? value : 0;\n    }\n}' } },
          { id: 'cs-19', number: 19, title: 'Inheritance', description: 'Extend classes', duration: '22 min', xp: 75, type: 'lesson', content: { instructions: ['class Child : Parent', 'base() calls parent constructor', 'virtual/override for polymorphism'], starterCode: '', task: 'Create Employee extending Person', validation: ': Person', expectedOutput: 'class Employee : Person\n{\n    public string Position { get; set; }\n    \n    public Employee(string name, string position) : base(name)\n    {\n        Position = position;\n    }\n}' } },
          { id: 'cs-20', number: 20, title: 'Chapter Practice', description: 'OOP project', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 5,
        title: 'Advanced OOP',
        description: 'Interfaces, abstracts, generics',
        lessons: [
          { id: 'cs-21', number: 21, title: 'Interfaces', description: 'Define contracts', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['interface IName { }', 'Members are implicitly public', 'Classes can implement multiple'], starterCode: '', task: 'Create and implement interface', validation: 'interface I', expectedOutput: 'interface IDrawable\n{\n    void Draw();\n}\n\nclass Circle : IDrawable\n{\n    public void Draw()\n    {\n        Console.WriteLine("Drawing circle");\n    }\n}' } },
          { id: 'cs-22', number: 22, title: 'Abstract Classes', description: 'Partial implementations', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['abstract class cannot be instantiated', 'abstract methods must be implemented', 'Can have concrete methods too'], starterCode: '', task: 'Create abstract Shape class', validation: 'abstract class', expectedOutput: 'abstract class Shape\n{\n    public abstract double Area();\n    \n    public void Display()\n    {\n        Console.WriteLine($"Area: {Area()}");\n    }\n}' } },
          { id: 'cs-23', number: 23, title: 'Generics', description: 'Type-safe flexibility', duration: '25 min', xp: 85, type: 'lesson', content: { instructions: ['class Name<T>', 'Type constraints: where T : class', 'Generic methods too'], starterCode: '', task: 'Create a generic class', validation: '<T>', expectedOutput: 'class Box<T>\n{\n    public T Content { get; set; }\n    \n    public Box(T content)\n    {\n        Content = content;\n    }\n}\n\nvar intBox = new Box<int>(42);\nvar strBox = new Box<string>("Hello");' } },
          { id: 'cs-24', number: 24, title: 'Extension Methods', description: 'Add methods to types', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['static class with static methods', 'this keyword on first parameter', 'Appears as instance method'], starterCode: '', task: 'Create a string extension', validation: 'this string', expectedOutput: 'static class StringExtensions\n{\n    public static bool IsNullOrEmpty(this string str)\n    {\n        return string.IsNullOrEmpty(str);\n    }\n    \n    public static string Reverse(this string str)\n    {\n        return new string(str.ToCharArray().Reverse().ToArray());\n    }\n}' } },
          { id: 'cs-25', number: 25, title: 'Chapter Practice', description: 'Advanced OOP exercises', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 6,
        title: 'Async & Exception Handling',
        description: 'Modern C# patterns',
        lessons: [
          { id: 'cs-26', number: 26, title: 'Exception Handling', description: 'Handle errors gracefully', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['try-catch-finally', 'Specific exceptions first', 'throw to re-throw'], starterCode: '', task: 'Handle divide by zero', validation: 'try', expectedOutput: 'try\n{\n    int result = 10 / 0;\n}\ncatch (DivideByZeroException ex)\n{\n    Console.WriteLine("Cannot divide by zero");\n}\nfinally\n{\n    Console.WriteLine("Cleanup code");\n}' } },
          { id: 'cs-27', number: 27, title: 'Custom Exceptions', description: 'Create your own exceptions', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['Inherit from Exception', 'Add custom properties', 'throw new CustomException()'], starterCode: '', task: 'Create ValidationException', validation: ': Exception', expectedOutput: 'class ValidationException : Exception\n{\n    public string Field { get; }\n    \n    public ValidationException(string field, string message) \n        : base(message)\n    {\n        Field = field;\n    }\n}' } },
          { id: 'cs-28', number: 28, title: 'Async/Await', description: 'Asynchronous programming', duration: '28 min', xp: 95, type: 'lesson', content: { instructions: ['async marks method', 'await pauses for result', 'Task<T> is the return type'], starterCode: 'using System.Threading.Tasks;\n', task: 'Create an async method', validation: 'async Task', expectedOutput: 'async Task<string> FetchDataAsync()\n{\n    await Task.Delay(1000); // Simulate network call\n    return "Data loaded";\n}\n\n// Usage\nstring result = await FetchDataAsync();' } },
          { id: 'cs-29', number: 29, title: 'File I/O', description: 'Read and write files', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['File.ReadAllText/WriteAllText', 'StreamReader/StreamWriter', 'async versions available'], starterCode: 'using System.IO;\n', task: 'Read and write a file', validation: 'File.', expectedOutput: '// Write\nFile.WriteAllText("test.txt", "Hello, World!");\n\n// Read\nstring content = File.ReadAllText("test.txt");\nConsole.WriteLine(content);\n\n// Async\nstring asyncContent = await File.ReadAllTextAsync("test.txt");' } },
          { id: 'cs-30', number: 30, title: 'Final Project', description: 'Build a complete C# application', duration: '90 min', xp: 350, type: 'project' }
        ]
      }
    ]
  }
}

// Helper function to get all lessons flat
export const getAllLessons = (courseId) => {
  const course = courses[courseId]
  if (!course) return []
  return course.chapters.flatMap(chapter => chapter.lessons)
}

// Get next lesson
export const getNextLesson = (courseId, currentLessonId) => {
  const lessons = getAllLessons(courseId)
  const currentIndex = lessons.findIndex(l => l.id === currentLessonId)
  return lessons[currentIndex + 1] || null
}

// Get previous lesson
export const getPrevLesson = (courseId, currentLessonId) => {
  const lessons = getAllLessons(courseId)
  const currentIndex = lessons.findIndex(l => l.id === currentLessonId)
  return lessons[currentIndex - 1] || null
}

export default courses
