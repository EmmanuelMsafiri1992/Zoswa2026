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
    subtitle: 'Complete Python Mastery',
    description: 'The most comprehensive Python course. Master everything from basics to advanced topics including web development, data science, automation, testing, and real-world projects.',
    icon: 'Code2',
    color: '#3776ab',
    totalLessons: 85,
    totalDuration: '45 hours',
    level: 'Beginner to Advanced',
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
          { id: 'py-30', number: 30, title: 'Chapter Practice', description: 'Advanced Python exercises', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 7,
        title: 'String Manipulation',
        description: 'Master string operations',
        lessons: [
          { id: 'py-31', number: 31, title: 'String Methods', description: 'Built-in string functions', duration: '20 min', xp: 60, type: 'lesson', content: { instructions: ['upper(), lower(), title()', 'strip(), split(), join()', 'replace(), find(), count()'], starterCode: 'text = "  Hello World  "', task: 'Use strip and split methods', validation: '.strip()', expectedOutput: 'text.strip().split()' } },
          { id: 'py-32', number: 32, title: 'String Formatting', description: 'Format strings professionally', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['f-strings: f"Hello {name}"', 'format(): "Hello {}".format(name)', 'Format specifiers: {:.2f}'], starterCode: 'price = 19.99\nname = "Widget"', task: 'Format a price with 2 decimals', validation: 'f"', expectedOutput: 'f"The {name} costs ${price:.2f}"' } },
          { id: 'py-33', number: 33, title: 'String Slicing', description: 'Extract parts of strings', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['str[start:end:step]', 'Negative indices from end', 'Reverse with [::-1]'], starterCode: 'text = "Python Programming"', task: 'Get first 6 characters and reverse', validation: '[:6]', expectedOutput: 'first_six = text[:6]\nreversed_text = text[::-1]' } },
          { id: 'py-34', number: 34, title: 'Chapter Practice', description: 'String manipulation exercises', duration: '30 min', xp: 100, type: 'practice' }
        ]
      },
      {
        id: 8,
        title: 'Regular Expressions',
        description: 'Pattern matching with regex',
        lessons: [
          { id: 'py-35', number: 35, title: 'Regex Basics', description: 'Introduction to patterns', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['import re', 're.search() finds first match', 're.findall() finds all matches'], starterCode: 'import re\ntext = "Call me at 123-456-7890"', task: 'Find a phone number pattern', validation: 're.search', expectedOutput: 'match = re.search(r"\\d{3}-\\d{3}-\\d{4}", text)' } },
          { id: 'py-36', number: 36, title: 'Pattern Metacharacters', description: 'Special regex characters', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['\\d digit, \\w word, \\s space', '. any char, * zero+, + one+', '[] char class, () groups'], starterCode: 'import re', task: 'Match an email pattern', validation: 're.findall', expectedOutput: 'emails = re.findall(r"[\\w.-]+@[\\w.-]+\\.\\w+", text)' } },
          { id: 'py-37', number: 37, title: 'Search and Replace', description: 'Find and modify text', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['re.sub() replaces matches', 're.split() splits on pattern', 'Use groups for complex replacements'], starterCode: 'import re\ntext = "Date: 2024-01-15"', task: 'Reformat a date', validation: 're.sub', expectedOutput: 'new_text = re.sub(r"(\\d{4})-(\\d{2})-(\\d{2})", r"\\3/\\2/\\1", text)' } },
          { id: 'py-38', number: 38, title: 'Chapter Practice', description: 'Regex exercises', duration: '35 min', xp: 120, type: 'practice' }
        ]
      },
      {
        id: 9,
        title: 'Working with Files',
        description: 'File operations mastery',
        lessons: [
          { id: 'py-39', number: 39, title: 'Reading Files', description: 'Load file contents', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['read() entire file', 'readline() one line', 'readlines() list of lines'], starterCode: '', task: 'Read file line by line', validation: 'with open', expectedOutput: 'with open("data.txt", "r") as f:\n    for line in f:\n        print(line.strip())' } },
          { id: 'py-40', number: 40, title: 'Writing Files', description: 'Save data to files', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['write() writes string', 'writelines() writes list', 'Mode "a" appends'], starterCode: 'data = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]', task: 'Write multiple lines to file', validation: '.writelines', expectedOutput: 'with open("output.txt", "w") as f:\n    f.writelines(data)' } },
          { id: 'py-41', number: 41, title: 'CSV Files', description: 'Work with spreadsheet data', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['import csv', 'csv.reader() and csv.writer()', 'csv.DictReader for headers'], starterCode: 'import csv', task: 'Read and write CSV', validation: 'csv.reader', expectedOutput: 'with open("data.csv", "r") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(row["name"])' } },
          { id: 'py-42', number: 42, title: 'JSON Files', description: 'Handle JSON data', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['import json', 'json.load() reads file', 'json.dump() writes file'], starterCode: 'import json', task: 'Parse and create JSON', validation: 'json.load', expectedOutput: 'with open("data.json", "r") as f:\n    data = json.load(f)\nwith open("output.json", "w") as f:\n    json.dump(data, f, indent=2)' } },
          { id: 'py-43', number: 43, title: 'Chapter Practice', description: 'File handling project', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 10,
        title: 'Error Handling & Debugging',
        description: 'Write robust code',
        lessons: [
          { id: 'py-44', number: 44, title: 'Try-Except Blocks', description: 'Catch and handle errors', duration: '20 min', xp: 60, type: 'lesson', content: { instructions: ['try/except catches errors', 'except SpecificError:', 'Multiple except blocks'], starterCode: '', task: 'Handle multiple error types', validation: 'except ValueError', expectedOutput: 'try:\n    num = int(input("Number: "))\nexcept ValueError:\n    print("Invalid number")\nexcept KeyboardInterrupt:\n    print("Cancelled")' } },
          { id: 'py-45', number: 45, title: 'Finally and Else', description: 'Complete error handling', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['finally always runs', 'else runs if no error', 'Use for cleanup'], starterCode: '', task: 'Use try-except-else-finally', validation: 'finally:', expectedOutput: 'try:\n    f = open("file.txt")\nexcept FileNotFoundError:\n    print("Not found")\nelse:\n    print(f.read())\nfinally:\n    f.close() if "f" in dir() else None' } },
          { id: 'py-46', number: 46, title: 'Raising Exceptions', description: 'Create custom errors', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['raise ValueError("msg")', 'Create custom exceptions', 'Re-raise with raise'], starterCode: '', task: 'Create and raise custom exception', validation: 'class.*Exception', expectedOutput: 'class ValidationError(Exception):\n    pass\n\ndef validate_age(age):\n    if age < 0:\n        raise ValidationError("Age cannot be negative")' } },
          { id: 'py-47', number: 47, title: 'Logging', description: 'Professional debugging', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['import logging', 'Levels: DEBUG, INFO, WARNING, ERROR', 'Configure file output'], starterCode: 'import logging', task: 'Set up logging', validation: 'logging.basicConfig', expectedOutput: 'logging.basicConfig(level=logging.DEBUG, format="%(asctime)s - %(levelname)s - %(message)s")\nlogging.info("Application started")' } },
          { id: 'py-48', number: 48, title: 'Chapter Practice', description: 'Error handling exercises', duration: '35 min', xp: 120, type: 'practice' }
        ]
      },
      {
        id: 11,
        title: 'Working with APIs',
        description: 'Connect to web services',
        lessons: [
          { id: 'py-49', number: 49, title: 'HTTP Requests', description: 'Make API calls', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['import requests', 'requests.get() for GET', 'requests.post() for POST'], starterCode: 'import requests', task: 'Make a GET request', validation: 'requests.get', expectedOutput: 'response = requests.get("https://api.github.com/users/octocat")\ndata = response.json()\nprint(data["name"])' } },
          { id: 'py-50', number: 50, title: 'API Authentication', description: 'Secure API access', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['API keys in headers', 'Bearer token auth', 'Basic authentication'], starterCode: 'import requests', task: 'Make authenticated request', validation: 'headers=', expectedOutput: 'headers = {"Authorization": "Bearer YOUR_TOKEN"}\nresponse = requests.get(url, headers=headers)' } },
          { id: 'py-51', number: 51, title: 'POST Requests', description: 'Send data to APIs', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Send JSON with json=', 'Form data with data=', 'Check response status'], starterCode: 'import requests', task: 'POST JSON data', validation: 'requests.post', expectedOutput: 'data = {"name": "John", "email": "john@email.com"}\nresponse = requests.post(url, json=data)\nprint(response.status_code)' } },
          { id: 'py-52', number: 52, title: 'Error Handling for APIs', description: 'Handle API failures', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Check status codes', 'Handle timeouts', 'Retry logic'], starterCode: 'import requests', task: 'Handle API errors gracefully', validation: 'response.raise_for_status', expectedOutput: 'try:\n    response = requests.get(url, timeout=5)\n    response.raise_for_status()\nexcept requests.RequestException as e:\n    print(f"API Error: {e}")' } },
          { id: 'py-53', number: 53, title: 'Chapter Practice', description: 'Build an API client', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 12,
        title: 'Database Programming',
        description: 'Store data in databases',
        lessons: [
          { id: 'py-54', number: 54, title: 'SQLite Basics', description: 'Embedded database', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['import sqlite3', 'connect() creates/opens db', 'cursor() for queries'], starterCode: 'import sqlite3', task: 'Create a database and table', validation: 'sqlite3.connect', expectedOutput: 'conn = sqlite3.connect("app.db")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)")\nconn.commit()' } },
          { id: 'py-55', number: 55, title: 'CRUD Operations', description: 'Create, Read, Update, Delete', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['INSERT INTO for create', 'SELECT for read', 'UPDATE and DELETE'], starterCode: 'import sqlite3\nconn = sqlite3.connect("app.db")\ncursor = conn.cursor()', task: 'Perform CRUD operations', validation: 'INSERT INTO', expectedOutput: 'cursor.execute("INSERT INTO users (name) VALUES (?)", ("John",))\ncursor.execute("SELECT * FROM users")\nusers = cursor.fetchall()' } },
          { id: 'py-56', number: 56, title: 'Parameterized Queries', description: 'Prevent SQL injection', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Use ? placeholders', 'Pass tuple of values', 'Never use string formatting'], starterCode: '', task: 'Write safe parameterized query', validation: '?, ?', expectedOutput: 'cursor.execute("SELECT * FROM users WHERE name = ? AND age > ?", (name, min_age))' } },
          { id: 'py-57', number: 57, title: 'MySQL with Python', description: 'Connect to MySQL', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['pip install mysql-connector-python', 'Similar to sqlite3', 'Use connection pooling'], starterCode: 'import mysql.connector', task: 'Connect to MySQL', validation: 'mysql.connector.connect', expectedOutput: 'conn = mysql.connector.connect(\n    host="localhost",\n    user="root",\n    password="password",\n    database="mydb"\n)' } },
          { id: 'py-58', number: 58, title: 'Chapter Practice', description: 'Database project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 13,
        title: 'Web Scraping',
        description: 'Extract data from websites',
        lessons: [
          { id: 'py-59', number: 59, title: 'BeautifulSoup Basics', description: 'Parse HTML content', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['pip install beautifulsoup4', 'Parse with BeautifulSoup()', 'Find elements with find/find_all'], starterCode: 'from bs4 import BeautifulSoup\nimport requests', task: 'Parse a webpage', validation: 'BeautifulSoup', expectedOutput: 'response = requests.get(url)\nsoup = BeautifulSoup(response.text, "html.parser")\ntitles = soup.find_all("h2")' } },
          { id: 'py-60', number: 60, title: 'CSS Selectors', description: 'Select elements precisely', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['select() uses CSS selectors', 'Class: .classname', 'ID: #idname, nested: div > p'], starterCode: 'from bs4 import BeautifulSoup', task: 'Use CSS selectors', validation: '.select', expectedOutput: 'links = soup.select("div.content > a.link")\nfor link in links:\n    print(link.get("href"))' } },
          { id: 'py-61', number: 61, title: 'Handling Pagination', description: 'Scrape multiple pages', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Loop through pages', 'Find next page link', 'Respect rate limits'], starterCode: 'import time', task: 'Scrape paginated content', validation: 'while', expectedOutput: 'page = 1\nwhile page <= 5:\n    response = requests.get(f"{url}?page={page}")\n    # process page\n    page += 1\n    time.sleep(1)' } },
          { id: 'py-62', number: 62, title: 'Ethical Scraping', description: 'Best practices and rules', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['Check robots.txt', 'Add delays between requests', 'Use proper User-Agent'], starterCode: '', task: 'Set up ethical scraping headers', validation: 'User-Agent', expectedOutput: 'headers = {\n    "User-Agent": "MyBot/1.0 (contact@example.com)",\n}\nresponse = requests.get(url, headers=headers)' } },
          { id: 'py-63', number: 63, title: 'Chapter Practice', description: 'Build a web scraper', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 14,
        title: 'Testing in Python',
        description: 'Write reliable tests',
        lessons: [
          { id: 'py-64', number: 64, title: 'Unit Testing Basics', description: 'Test individual functions', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['import unittest', 'Create test classes', 'Methods start with test_'], starterCode: 'import unittest', task: 'Write a unit test', validation: 'unittest.TestCase', expectedOutput: 'class TestCalculator(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2, 3), 5)\n\nif __name__ == "__main__":\n    unittest.main()' } },
          { id: 'py-65', number: 65, title: 'Pytest Framework', description: 'Modern testing with pytest', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['pip install pytest', 'Simple assert statements', 'Run with: pytest'], starterCode: '', task: 'Write pytest tests', validation: 'def test_', expectedOutput: 'def test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0\n\ndef test_multiply():\n    assert multiply(3, 4) == 12' } },
          { id: 'py-66', number: 66, title: 'Test Fixtures', description: 'Setup and teardown', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['@pytest.fixture decorator', 'setUp and tearDown methods', 'Reusable test data'], starterCode: 'import pytest', task: 'Create test fixtures', validation: '@pytest.fixture', expectedOutput: '@pytest.fixture\ndef sample_data():\n    return {"name": "John", "age": 30}\n\ndef test_user(sample_data):\n    assert sample_data["name"] == "John"' } },
          { id: 'py-67', number: 67, title: 'Mocking', description: 'Test with fake objects', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['from unittest.mock import Mock', 'patch() replaces objects', 'Verify method calls'], starterCode: 'from unittest.mock import patch, Mock', task: 'Mock an API call', validation: '@patch', expectedOutput: '@patch("requests.get")\ndef test_fetch_data(mock_get):\n    mock_get.return_value.json.return_value = {"status": "ok"}\n    result = fetch_data()\n    assert result["status"] == "ok"' } },
          { id: 'py-68', number: 68, title: 'Chapter Practice', description: 'Testing project', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 15,
        title: 'Web Development with Flask',
        description: 'Build web applications',
        lessons: [
          { id: 'py-69', number: 69, title: 'Flask Basics', description: 'Your first web app', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['pip install flask', 'Create Flask app', 'Define routes with @app.route'], starterCode: 'from flask import Flask', task: 'Create a Hello World app', validation: 'Flask(__name__)', expectedOutput: 'app = Flask(__name__)\n\n@app.route("/")\ndef home():\n    return "Hello, World!"\n\nif __name__ == "__main__":\n    app.run(debug=True)' } },
          { id: 'py-70', number: 70, title: 'Routes and Views', description: 'Handle different URLs', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['Dynamic routes with <variable>', 'HTTP methods: GET, POST', 'Return JSON responses'], starterCode: 'from flask import Flask, jsonify', task: 'Create API endpoints', validation: '@app.route', expectedOutput: '@app.route("/user/<int:user_id>")\ndef get_user(user_id):\n    return jsonify({"id": user_id, "name": "John"})\n\n@app.route("/users", methods=["POST"])\ndef create_user():\n    return jsonify({"status": "created"}), 201' } },
          { id: 'py-71', number: 71, title: 'Templates', description: 'Render HTML pages', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Jinja2 template engine', 'render_template() function', 'Pass variables to templates'], starterCode: 'from flask import render_template', task: 'Render a template', validation: 'render_template', expectedOutput: '@app.route("/profile/<name>")\ndef profile(name):\n    return render_template("profile.html", username=name, posts=get_posts(name))' } },
          { id: 'py-72', number: 72, title: 'Forms and Input', description: 'Handle user input', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['request.form for POST data', 'request.args for GET params', 'Validate input'], starterCode: 'from flask import request, redirect', task: 'Process form submission', validation: 'request.form', expectedOutput: '@app.route("/login", methods=["GET", "POST"])\ndef login():\n    if request.method == "POST":\n        username = request.form["username"]\n        return redirect(f"/welcome/{username}")\n    return render_template("login.html")' } },
          { id: 'py-73', number: 73, title: 'Database Integration', description: 'Connect Flask to database', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Flask-SQLAlchemy extension', 'Define models as classes', 'Perform queries'], starterCode: 'from flask_sqlalchemy import SQLAlchemy', task: 'Set up database model', validation: 'db.Model', expectedOutput: 'db = SQLAlchemy(app)\n\nclass User(db.Model):\n    id = db.Column(db.Integer, primary_key=True)\n    name = db.Column(db.String(100), nullable=False)\n    email = db.Column(db.String(120), unique=True)' } },
          { id: 'py-74', number: 74, title: 'Chapter Practice', description: 'Build a Flask web app', duration: '60 min', xp: 220, type: 'practice' }
        ]
      },
      {
        id: 16,
        title: 'Data Analysis Basics',
        description: 'Introduction to data science',
        lessons: [
          { id: 'py-75', number: 75, title: 'NumPy Arrays', description: 'Numerical computing', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['pip install numpy', 'Create arrays with np.array()', 'Array operations and math'], starterCode: 'import numpy as np', task: 'Create and manipulate arrays', validation: 'np.array', expectedOutput: 'arr = np.array([1, 2, 3, 4, 5])\nprint(arr.mean())\nprint(arr * 2)\nmatrix = np.array([[1, 2], [3, 4]])' } },
          { id: 'py-76', number: 76, title: 'Pandas DataFrames', description: 'Work with tabular data', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['pip install pandas', 'DataFrame from dict/CSV', 'Select columns and rows'], starterCode: 'import pandas as pd', task: 'Create and query DataFrame', validation: 'pd.DataFrame', expectedOutput: 'df = pd.DataFrame({\n    "name": ["Alice", "Bob", "Charlie"],\n    "age": [25, 30, 35]\n})\nprint(df[df["age"] > 28])' } },
          { id: 'py-77', number: 77, title: 'Data Cleaning', description: 'Prepare data for analysis', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Handle missing values', 'Remove duplicates', 'Convert data types'], starterCode: 'import pandas as pd', task: 'Clean a messy dataset', validation: '.dropna()', expectedOutput: 'df = df.dropna()\ndf = df.drop_duplicates()\ndf["age"] = df["age"].astype(int)\ndf["name"] = df["name"].str.strip()' } },
          { id: 'py-78', number: 78, title: 'Data Visualization', description: 'Create charts and graphs', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['pip install matplotlib', 'plt.plot(), plt.bar()', 'Customize and save plots'], starterCode: 'import matplotlib.pyplot as plt', task: 'Create a simple chart', validation: 'plt.plot', expectedOutput: 'plt.figure(figsize=(10, 6))\nplt.plot([1, 2, 3, 4], [1, 4, 2, 3])\nplt.xlabel("X Axis")\nplt.ylabel("Y Axis")\nplt.title("My Chart")\nplt.savefig("chart.png")' } },
          { id: 'py-79', number: 79, title: 'Chapter Practice', description: 'Data analysis project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 17,
        title: 'Automation & Scripting',
        description: 'Automate repetitive tasks',
        lessons: [
          { id: 'py-80', number: 80, title: 'OS Module', description: 'System operations', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['import os', 'os.listdir(), os.path', 'os.makedirs(), os.remove()'], starterCode: 'import os', task: 'List and manage files', validation: 'os.listdir', expectedOutput: 'files = os.listdir(".")\nfor f in files:\n    if f.endswith(".txt"):\n        print(os.path.getsize(f))' } },
          { id: 'py-81', number: 81, title: 'Shutil Module', description: 'File operations', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['import shutil', 'Copy, move, delete files', 'Archive operations'], starterCode: 'import shutil', task: 'Copy and organize files', validation: 'shutil.copy', expectedOutput: 'shutil.copy("source.txt", "backup/")\nshutil.move("old.txt", "archive/")\nshutil.make_archive("backup", "zip", "backup_folder")' } },
          { id: 'py-82', number: 82, title: 'Subprocess Module', description: 'Run system commands', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['import subprocess', 'run() executes commands', 'Capture output'], starterCode: 'import subprocess', task: 'Run a system command', validation: 'subprocess.run', expectedOutput: 'result = subprocess.run(["ls", "-la"], capture_output=True, text=True)\nprint(result.stdout)' } },
          { id: 'py-83', number: 83, title: 'Scheduling Tasks', description: 'Run scripts automatically', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['schedule library', 'Cron jobs (Linux)', 'Task Scheduler (Windows)'], starterCode: 'import schedule\nimport time', task: 'Schedule a task', validation: 'schedule.every', expectedOutput: 'def job():\n    print("Running scheduled task")\n\nschedule.every(10).minutes.do(job)\nwhile True:\n    schedule.run_pending()\n    time.sleep(1)' } },
          { id: 'py-84', number: 84, title: 'Chapter Practice', description: 'Build an automation script', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 18,
        title: 'Final Projects',
        description: 'Apply everything you learned',
        lessons: [
          { id: 'py-85', number: 85, title: 'Project: CLI Todo App', description: 'Command-line task manager', duration: '60 min', xp: 250, type: 'project' },
          { id: 'py-86', number: 86, title: 'Project: Web Scraper', description: 'Extract and save data', duration: '60 min', xp: 250, type: 'project' },
          { id: 'py-87', number: 87, title: 'Project: REST API', description: 'Build a Flask API', duration: '75 min', xp: 300, type: 'project' },
          { id: 'py-88', number: 88, title: 'Project: Data Dashboard', description: 'Analyze and visualize data', duration: '75 min', xp: 300, type: 'project' },
          { id: 'py-89', number: 89, title: 'Course Complete!', description: 'Claim your Python certificate', duration: '5 min', xp: 500, type: 'completion' }
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
    totalLessons: 95,
    totalDuration: '48 hours',
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
        title: 'Exception Handling',
        description: 'Handle errors gracefully',
        lessons: [
          { id: 'java-26', number: 26, title: 'Try-Catch', description: 'Handle exceptions', duration: '20 min', xp: 60, type: 'lesson', content: { instructions: ['try contains risky code', 'catch handles specific errors', 'finally always executes'], starterCode: '', task: 'Handle NumberFormatException', validation: 'try {', expectedOutput: 'try {\n    int num = Integer.parseInt("abc");\n} catch (NumberFormatException e) {\n    System.out.println("Invalid number");\n}' } },
          { id: 'java-27', number: 27, title: 'Multiple Catch Blocks', description: 'Handle different errors', duration: '15 min', xp: 50, type: 'lesson', content: { instructions: ['Multiple catch blocks for different exceptions', 'Order from specific to general', 'Multi-catch with |'], starterCode: '', task: 'Handle multiple exception types', validation: 'catch (', expectedOutput: 'try {\n    int[] arr = new int[5];\n    arr[10] = 1;\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println("Index out of bounds");\n} catch (Exception e) {\n    System.out.println("General error");\n}' } },
          { id: 'java-28', number: 28, title: 'Throwing Exceptions', description: 'Signal errors', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['throw new Exception()', 'throws in method signature', 'Custom exceptions extend Exception'], starterCode: '', task: 'Create a method that throws', validation: 'throws', expectedOutput: 'void validateAge(int age) throws IllegalArgumentException {\n    if (age < 0) {\n        throw new IllegalArgumentException("Age cannot be negative");\n    }\n}' } },
          { id: 'java-29', number: 29, title: 'Custom Exceptions', description: 'Create your own exceptions', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['Extend Exception or RuntimeException', 'Add custom fields and messages', 'Use for business logic errors'], starterCode: '', task: 'Create InsufficientFundsException', validation: 'extends Exception', expectedOutput: 'class InsufficientFundsException extends Exception {\n    private double amount;\n    \n    public InsufficientFundsException(double amount) {\n        super("Insufficient funds: needed " + amount);\n        this.amount = amount;\n    }\n}' } },
          { id: 'java-30', number: 30, title: 'Chapter Practice', description: 'Exception handling exercises', duration: '35 min', xp: 120, type: 'practice' }
        ]
      },
      {
        id: 7,
        title: 'Generics',
        description: 'Type-safe programming',
        lessons: [
          { id: 'java-31', number: 31, title: 'Introduction to Generics', description: 'Why generics matter', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Generics provide type safety', 'Avoid runtime ClassCastException', 'Compile-time type checking'], starterCode: '', task: 'Create a generic Box class', validation: '<T>', expectedOutput: 'class Box<T> {\n    private T content;\n    \n    public void set(T content) {\n        this.content = content;\n    }\n    \n    public T get() {\n        return content;\n    }\n}' } },
          { id: 'java-32', number: 32, title: 'Generic Methods', description: 'Type parameters in methods', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['<T> before return type', 'Type inference in calls', 'Multiple type parameters'], starterCode: '', task: 'Create a generic swap method', validation: 'public static <T>', expectedOutput: 'public static <T> void swap(T[] arr, int i, int j) {\n    T temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n}' } },
          { id: 'java-33', number: 33, title: 'Bounded Type Parameters', description: 'Restrict type arguments', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['extends limits upper bound', 'Can require multiple interfaces', 'T extends Comparable<T>'], starterCode: '', task: 'Create bounded generic method', validation: 'extends Comparable', expectedOutput: 'public static <T extends Comparable<T>> T findMax(T[] arr) {\n    T max = arr[0];\n    for (T item : arr) {\n        if (item.compareTo(max) > 0) {\n            max = item;\n        }\n    }\n    return max;\n}' } },
          { id: 'java-34', number: 34, title: 'Wildcards', description: 'Unknown type arguments', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['? is unknown type', '? extends T for reading', '? super T for writing'], starterCode: '', task: 'Use wildcards with collections', validation: 'List<?', expectedOutput: 'public void printList(List<?> list) {\n    for (Object item : list) {\n        System.out.println(item);\n    }\n}\n\npublic void addNumbers(List<? super Integer> list) {\n    list.add(1);\n    list.add(2);\n}' } },
          { id: 'java-35', number: 35, title: 'Chapter Practice', description: 'Generics exercises', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 8,
        title: 'Lambda & Functional Programming',
        description: 'Modern Java features',
        lessons: [
          { id: 'java-36', number: 36, title: 'Lambda Expressions', description: 'Anonymous functions', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['(params) -> expression', 'Replace anonymous classes', 'Functional interface required'], starterCode: '', task: 'Create a lambda for sorting', validation: '->', expectedOutput: 'List<String> names = Arrays.asList("John", "Jane", "Bob");\nnames.sort((a, b) -> a.compareTo(b));' } },
          { id: 'java-37', number: 37, title: 'Functional Interfaces', description: 'Single abstract method', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['@FunctionalInterface annotation', 'Built-in: Predicate, Function, Consumer', 'Can have default methods'], starterCode: 'import java.util.function.*;\n', task: 'Use Predicate and Function', validation: 'Predicate<', expectedOutput: 'Predicate<Integer> isEven = n -> n % 2 == 0;\nFunction<String, Integer> getLength = s -> s.length();\n\nSystem.out.println(isEven.test(4)); // true\nSystem.out.println(getLength.apply("Hello")); // 5' } },
          { id: 'java-38', number: 38, title: 'Method References', description: 'Shorthand for lambdas', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['ClassName::method', 'object::method', 'ClassName::new for constructors'], starterCode: '', task: 'Replace lambdas with method references', validation: '::', expectedOutput: 'List<String> names = Arrays.asList("John", "Jane");\nnames.forEach(System.out::println);\n\nnames.stream()\n    .map(String::toUpperCase)\n    .forEach(System.out::println);' } },
          { id: 'java-39', number: 39, title: 'Optional Class', description: 'Handle null safely', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['Optional.of() wraps value', 'Optional.empty() for null', 'orElse, orElseGet, orElseThrow'], starterCode: 'import java.util.Optional;\n', task: 'Use Optional to avoid null', validation: 'Optional<', expectedOutput: 'Optional<String> name = Optional.ofNullable(getName());\nString result = name.orElse("Unknown");\n\nname.ifPresent(n -> System.out.println("Hello, " + n));' } },
          { id: 'java-40', number: 40, title: 'Chapter Practice', description: 'Functional programming exercises', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 9,
        title: 'Streams API',
        description: 'Functional data processing',
        lessons: [
          { id: 'java-41', number: 41, title: 'Introduction to Streams', description: 'Data pipelines', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['stream() creates from collection', 'Intermediate and terminal operations', 'Lazy evaluation for efficiency'], starterCode: 'import java.util.stream.*;\n', task: 'Create and use a stream', validation: '.stream()', expectedOutput: 'List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nList<Integer> doubled = numbers.stream()\n    .map(n -> n * 2)\n    .collect(Collectors.toList());' } },
          { id: 'java-42', number: 42, title: 'Filter & Map', description: 'Transform data', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['filter() keeps matching elements', 'map() transforms each element', 'Chain operations together'], starterCode: '', task: 'Filter and transform a list', validation: '.filter(', expectedOutput: 'List<String> filtered = names.stream()\n    .filter(n -> n.length() > 3)\n    .map(String::toUpperCase)\n    .collect(Collectors.toList());' } },
          { id: 'java-43', number: 43, title: 'Reduce & Collect', description: 'Aggregate results', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['reduce() combines elements', 'collect() gathers results', 'Collectors utility class'], starterCode: '', task: 'Sum and group elements', validation: '.reduce(', expectedOutput: 'int sum = numbers.stream()\n    .reduce(0, (a, b) -> a + b);\n\nMap<Integer, List<String>> grouped = names.stream()\n    .collect(Collectors.groupingBy(String::length));' } },
          { id: 'java-44', number: 44, title: 'FlatMap & Sorting', description: 'Flatten and order', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['flatMap() flattens nested streams', 'sorted() natural ordering', 'sorted(comparator) custom order'], starterCode: '', task: 'Flatten nested lists and sort', validation: '.flatMap(', expectedOutput: 'List<List<Integer>> nested = Arrays.asList(\n    Arrays.asList(1, 2), Arrays.asList(3, 4));\n\nList<Integer> flat = nested.stream()\n    .flatMap(List::stream)\n    .sorted()\n    .collect(Collectors.toList());' } },
          { id: 'java-45', number: 45, title: 'Parallel Streams', description: 'Concurrent processing', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['parallelStream() for parallel', 'Uses ForkJoinPool', 'Good for large datasets'], starterCode: '', task: 'Process data in parallel', validation: '.parallelStream()', expectedOutput: 'long count = numbers.parallelStream()\n    .filter(n -> isPrime(n))\n    .count();' } },
          { id: 'java-46', number: 46, title: 'Chapter Practice', description: 'Streams API project', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 10,
        title: 'File I/O',
        description: 'Read and write files',
        lessons: [
          { id: 'java-47', number: 47, title: 'File Basics', description: 'Work with File class', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['File represents path', 'exists(), isFile(), isDirectory()', 'Create, delete, rename'], starterCode: 'import java.io.*;\n', task: 'Check file properties', validation: 'new File', expectedOutput: 'File file = new File("data.txt");\nif (file.exists()) {\n    System.out.println("Size: " + file.length());\n    System.out.println("Can read: " + file.canRead());\n}' } },
          { id: 'java-48', number: 48, title: 'Reading Files', description: 'Read file content', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['BufferedReader for efficiency', 'Files.readAllLines() for simple use', 'Try-with-resources auto-closes'], starterCode: 'import java.io.*;\nimport java.nio.file.*;\n', task: 'Read a file line by line', validation: 'BufferedReader', expectedOutput: 'try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {\n    String line;\n    while ((line = reader.readLine()) != null) {\n        System.out.println(line);\n    }\n}' } },
          { id: 'java-49', number: 49, title: 'Writing Files', description: 'Write to files', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['BufferedWriter for text', 'PrintWriter for formatted', 'Files.write() for simple use'], starterCode: 'import java.io.*;\n', task: 'Write lines to a file', validation: 'BufferedWriter', expectedOutput: 'try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {\n    writer.write("Hello, World!");\n    writer.newLine();\n    writer.write("Second line");\n}' } },
          { id: 'java-50', number: 50, title: 'NIO.2 Paths', description: 'Modern file API', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Path represents file path', 'Files utility class', 'More powerful than File'], starterCode: 'import java.nio.file.*;\n', task: 'Use NIO.2 for file operations', validation: 'Paths.get', expectedOutput: 'Path path = Paths.get("data.txt");\nif (Files.exists(path)) {\n    List<String> lines = Files.readAllLines(path);\n    Files.write(Paths.get("copy.txt"), lines);\n}' } },
          { id: 'java-51', number: 51, title: 'Working with Directories', description: 'Navigate file system', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Files.walk() traverses tree', 'DirectoryStream for listing', 'Create and delete directories'], starterCode: 'import java.nio.file.*;\n', task: 'List and filter files', validation: 'Files.walk', expectedOutput: 'try (Stream<Path> walk = Files.walk(Paths.get("."))) {\n    walk.filter(p -> p.toString().endsWith(".java"))\n        .forEach(System.out::println);\n}' } },
          { id: 'java-52', number: 52, title: 'Chapter Practice', description: 'File I/O project', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 11,
        title: 'Multithreading',
        description: 'Concurrent programming',
        lessons: [
          { id: 'java-53', number: 53, title: 'Threads Basics', description: 'Create threads', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Extend Thread or implement Runnable', 'start() begins execution', 'run() contains thread logic'], starterCode: '', task: 'Create a thread with Runnable', validation: 'implements Runnable', expectedOutput: 'class MyTask implements Runnable {\n    public void run() {\n        System.out.println("Running in thread: " + Thread.currentThread().getName());\n    }\n}\n\nThread thread = new Thread(new MyTask());\nthread.start();' } },
          { id: 'java-54', number: 54, title: 'Thread Lifecycle', description: 'Manage thread states', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED', 'sleep() pauses execution', 'join() waits for completion'], starterCode: '', task: 'Control thread execution', validation: 'Thread.sleep', expectedOutput: 'Thread worker = new Thread(() -> {\n    try {\n        Thread.sleep(1000);\n        System.out.println("Task done");\n    } catch (InterruptedException e) {}\n});\nworker.start();\nworker.join(); // Wait for completion' } },
          { id: 'java-55', number: 55, title: 'Synchronization', description: 'Thread safety', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['synchronized keyword', 'Locks prevent race conditions', 'sync methods or blocks'], starterCode: '', task: 'Create a thread-safe counter', validation: 'synchronized', expectedOutput: 'class Counter {\n    private int count = 0;\n    \n    public synchronized void increment() {\n        count++;\n    }\n    \n    public synchronized int getCount() {\n        return count;\n    }\n}' } },
          { id: 'java-56', number: 56, title: 'ExecutorService', description: 'Thread pools', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Executors factory methods', 'submit() for tasks', 'shutdown() when done'], starterCode: 'import java.util.concurrent.*;\n', task: 'Use thread pool', validation: 'ExecutorService', expectedOutput: 'ExecutorService executor = Executors.newFixedThreadPool(4);\n\nfor (int i = 0; i < 10; i++) {\n    int taskNum = i;\n    executor.submit(() -> {\n        System.out.println("Task " + taskNum);\n    });\n}\n\nexecutor.shutdown();' } },
          { id: 'java-57', number: 57, title: 'Future & Callable', description: 'Get async results', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Callable returns a value', 'Future holds the result', 'get() blocks until ready'], starterCode: 'import java.util.concurrent.*;\n', task: 'Use Callable for results', validation: 'Future<', expectedOutput: 'ExecutorService executor = Executors.newSingleThreadExecutor();\nFuture<Integer> future = executor.submit(() -> {\n    Thread.sleep(1000);\n    return 42;\n});\nInteger result = future.get(); // Blocks until complete' } },
          { id: 'java-58', number: 58, title: 'Chapter Practice', description: 'Multithreading project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 12,
        title: 'JDBC - Database Connectivity',
        description: 'Connect to databases',
        lessons: [
          { id: 'java-59', number: 59, title: 'JDBC Basics', description: 'Connect to database', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Load JDBC driver', 'DriverManager.getConnection()', 'Connection, Statement, ResultSet'], starterCode: 'import java.sql.*;\n', task: 'Connect to MySQL database', validation: 'DriverManager.getConnection', expectedOutput: 'String url = "jdbc:mysql://localhost:3306/mydb";\nString user = "root";\nString password = "password";\n\ntry (Connection conn = DriverManager.getConnection(url, user, password)) {\n    System.out.println("Connected!");\n}' } },
          { id: 'java-60', number: 60, title: 'Executing Queries', description: 'Run SQL commands', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Statement for simple SQL', 'executeQuery() for SELECT', 'executeUpdate() for INSERT/UPDATE/DELETE'], starterCode: 'import java.sql.*;\n', task: 'Query and display data', validation: 'executeQuery', expectedOutput: 'try (Statement stmt = conn.createStatement();\n     ResultSet rs = stmt.executeQuery("SELECT * FROM users")) {\n    while (rs.next()) {\n        System.out.println(rs.getString("name"));\n    }\n}' } },
          { id: 'java-61', number: 61, title: 'PreparedStatement', description: 'Parameterized queries', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Prevents SQL injection', 'Use ? placeholders', 'setString, setInt, etc.'], starterCode: 'import java.sql.*;\n', task: 'Insert data with PreparedStatement', validation: 'PreparedStatement', expectedOutput: 'String sql = "INSERT INTO users (name, email) VALUES (?, ?)";\ntry (PreparedStatement pstmt = conn.prepareStatement(sql)) {\n    pstmt.setString(1, "John");\n    pstmt.setString(2, "john@email.com");\n    pstmt.executeUpdate();\n}' } },
          { id: 'java-62', number: 62, title: 'Transactions', description: 'Atomic operations', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['setAutoCommit(false) starts', 'commit() saves changes', 'rollback() undoes on error'], starterCode: 'import java.sql.*;\n', task: 'Implement a transaction', validation: 'setAutoCommit', expectedOutput: 'try {\n    conn.setAutoCommit(false);\n    // Multiple operations\n    stmt.executeUpdate("UPDATE accounts SET balance = balance - 100 WHERE id = 1");\n    stmt.executeUpdate("UPDATE accounts SET balance = balance + 100 WHERE id = 2");\n    conn.commit();\n} catch (SQLException e) {\n    conn.rollback();\n}' } },
          { id: 'java-63', number: 63, title: 'Connection Pooling', description: 'Efficient connections', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['HikariCP or Apache DBCP', 'Reuse connections', 'Configure pool size'], starterCode: '', task: 'Set up HikariCP pool', validation: 'HikariDataSource', expectedOutput: 'HikariConfig config = new HikariConfig();\nconfig.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");\nconfig.setUsername("root");\nconfig.setPassword("password");\nconfig.setMaximumPoolSize(10);\n\nHikariDataSource ds = new HikariDataSource(config);' } },
          { id: 'java-64', number: 64, title: 'Chapter Practice', description: 'Database project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 13,
        title: 'Networking',
        description: 'Network programming',
        lessons: [
          { id: 'java-65', number: 65, title: 'URL & URLConnection', description: 'HTTP requests', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['URL represents web address', 'URLConnection for HTTP', 'Read response as stream'], starterCode: 'import java.net.*;\nimport java.io.*;\n', task: 'Fetch web page content', validation: 'URLConnection', expectedOutput: 'URL url = new URL("https://api.example.com/data");\nURLConnection conn = url.openConnection();\ntry (BufferedReader reader = new BufferedReader(\n        new InputStreamReader(conn.getInputStream()))) {\n    String line;\n    while ((line = reader.readLine()) != null) {\n        System.out.println(line);\n    }\n}' } },
          { id: 'java-66', number: 66, title: 'HttpClient', description: 'Modern HTTP API', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Java 11+ HttpClient', 'Supports HTTP/2', 'Async with CompletableFuture'], starterCode: 'import java.net.http.*;\nimport java.net.URI;\n', task: 'Make GET request with HttpClient', validation: 'HttpClient', expectedOutput: 'HttpClient client = HttpClient.newHttpClient();\nHttpRequest request = HttpRequest.newBuilder()\n    .uri(URI.create("https://api.example.com/users"))\n    .GET()\n    .build();\n\nHttpResponse<String> response = client.send(request, \n    HttpResponse.BodyHandlers.ofString());\nSystem.out.println(response.body());' } },
          { id: 'java-67', number: 67, title: 'Socket Programming', description: 'Low-level networking', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['Socket for client', 'ServerSocket for server', 'Stream-based communication'], starterCode: 'import java.net.*;\nimport java.io.*;\n', task: 'Create client-server connection', validation: 'ServerSocket', expectedOutput: '// Server\nServerSocket server = new ServerSocket(8080);\nSocket client = server.accept();\nPrintWriter out = new PrintWriter(client.getOutputStream(), true);\nout.println("Hello, Client!");\n\n// Client\nSocket socket = new Socket("localhost", 8080);\nBufferedReader in = new BufferedReader(\n    new InputStreamReader(socket.getInputStream()));' } },
          { id: 'java-68', number: 68, title: 'Working with JSON', description: 'Parse JSON data', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Use Gson or Jackson library', 'fromJson() parses', 'toJson() serializes'], starterCode: 'import com.google.gson.*;\n', task: 'Parse and create JSON', validation: 'Gson', expectedOutput: 'Gson gson = new Gson();\n\n// Parse JSON\nString json = "{\"name\": \"John\", \"age\": 30}";\nUser user = gson.fromJson(json, User.class);\n\n// Create JSON\nUser newUser = new User("Jane", 25);\nString userJson = gson.toJson(newUser);' } },
          { id: 'java-69', number: 69, title: 'REST API Client', description: 'Consume REST APIs', duration: '30 min', xp: 100, type: 'lesson', content: { instructions: ['HTTP methods: GET, POST, PUT, DELETE', 'Set headers and body', 'Handle responses'], starterCode: 'import java.net.http.*;\n', task: 'Make POST request with JSON', validation: 'HttpRequest.newBuilder', expectedOutput: 'String jsonBody = "{\"name\": \"John\", \"email\": \"john@test.com\"}";\n\nHttpRequest request = HttpRequest.newBuilder()\n    .uri(URI.create("https://api.example.com/users"))\n    .header("Content-Type", "application/json")\n    .POST(HttpRequest.BodyPublishers.ofString(jsonBody))\n    .build();\n\nHttpResponse<String> response = client.send(request,\n    HttpResponse.BodyHandlers.ofString());' } },
          { id: 'java-70', number: 70, title: 'Chapter Practice', description: 'Networking project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 14,
        title: 'Unit Testing with JUnit',
        description: 'Write and run tests',
        lessons: [
          { id: 'java-71', number: 71, title: 'JUnit Basics', description: 'First unit tests', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['@Test annotation marks tests', 'assertEquals, assertTrue, assertFalse', 'Run tests with IDE or Maven'], starterCode: 'import org.junit.jupiter.api.*;\nimport static org.junit.jupiter.api.Assertions.*;\n', task: 'Write basic test', validation: '@Test', expectedOutput: 'class CalculatorTest {\n    @Test\n    void testAdd() {\n        Calculator calc = new Calculator();\n        assertEquals(5, calc.add(2, 3));\n    }\n}' } },
          { id: 'java-72', number: 72, title: 'Test Lifecycle', description: 'Setup and teardown', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['@BeforeEach runs before each test', '@AfterEach runs after each test', '@BeforeAll/@AfterAll for class'], starterCode: 'import org.junit.jupiter.api.*;\n', task: 'Use lifecycle methods', validation: '@BeforeEach', expectedOutput: 'class DatabaseTest {\n    private Connection conn;\n    \n    @BeforeEach\n    void setUp() {\n        conn = DriverManager.getConnection(...);\n    }\n    \n    @AfterEach\n    void tearDown() {\n        conn.close();\n    }\n}' } },
          { id: 'java-73', number: 73, title: 'Exception Testing', description: 'Test error conditions', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['assertThrows() checks exceptions', 'Verify exception type and message', 'Test edge cases'], starterCode: 'import org.junit.jupiter.api.*;\nimport static org.junit.jupiter.api.Assertions.*;\n', task: 'Test exception throwing', validation: 'assertThrows', expectedOutput: '@Test\nvoid testDivideByZero() {\n    Calculator calc = new Calculator();\n    ArithmeticException exception = assertThrows(\n        ArithmeticException.class,\n        () -> calc.divide(10, 0)\n    );\n    assertEquals("Cannot divide by zero", exception.getMessage());\n}' } },
          { id: 'java-74', number: 74, title: 'Parameterized Tests', description: 'Test with multiple inputs', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['@ParameterizedTest annotation', '@ValueSource, @CsvSource', 'Test many cases efficiently'], starterCode: 'import org.junit.jupiter.params.*;\nimport org.junit.jupiter.params.provider.*;\n', task: 'Create parameterized test', validation: '@ParameterizedTest', expectedOutput: '@ParameterizedTest\n@CsvSource({"1, 1, 2", "2, 3, 5", "10, 20, 30"})\nvoid testAdd(int a, int b, int expected) {\n    assertEquals(expected, calculator.add(a, b));\n}' } },
          { id: 'java-75', number: 75, title: 'Mocking with Mockito', description: 'Isolate unit tests', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['Mock dependencies', 'when().thenReturn() defines behavior', 'verify() checks interactions'], starterCode: 'import static org.mockito.Mockito.*;\n', task: 'Mock a dependency', validation: 'mock(', expectedOutput: '@Test\nvoid testUserService() {\n    UserRepository mockRepo = mock(UserRepository.class);\n    when(mockRepo.findById(1)).thenReturn(new User("John"));\n    \n    UserService service = new UserService(mockRepo);\n    User user = service.getUser(1);\n    \n    assertEquals("John", user.getName());\n    verify(mockRepo).findById(1);\n}' } },
          { id: 'java-76', number: 76, title: 'Chapter Practice', description: 'Testing project', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 15,
        title: 'Build Tools & Maven',
        description: 'Project management',
        lessons: [
          { id: 'java-77', number: 77, title: 'Maven Basics', description: 'Project structure', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['pom.xml defines project', 'Convention over configuration', 'src/main/java, src/test/java'], starterCode: '', task: 'Create a pom.xml', validation: '<project', expectedOutput: '<?xml version="1.0" encoding="UTF-8"?>\n<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <properties>\n        <maven.compiler.source>17</maven.compiler.source>\n        <maven.compiler.target>17</maven.compiler.target>\n    </properties>\n</project>' } },
          { id: 'java-78', number: 78, title: 'Dependencies', description: 'Manage libraries', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['<dependencies> section', 'groupId, artifactId, version', 'Maven Central repository'], starterCode: '', task: 'Add dependencies', validation: '<dependency>', expectedOutput: '<dependencies>\n    <dependency>\n        <groupId>com.google.gson</groupId>\n        <artifactId>gson</artifactId>\n        <version>2.10.1</version>\n    </dependency>\n    <dependency>\n        <groupId>org.junit.jupiter</groupId>\n        <artifactId>junit-jupiter</artifactId>\n        <version>5.10.0</version>\n        <scope>test</scope>\n    </dependency>\n</dependencies>' } },
          { id: 'java-79', number: 79, title: 'Maven Lifecycle', description: 'Build phases', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['mvn compile - compiles sources', 'mvn test - runs tests', 'mvn package - creates JAR'], starterCode: '', task: 'Build and test project', validation: 'mvn', expectedOutput: '# Compile\nmvn compile\n\n# Run tests\nmvn test\n\n# Package as JAR\nmvn package\n\n# Clean and build\nmvn clean install' } },
          { id: 'java-80', number: 80, title: 'Plugins', description: 'Extend Maven', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Plugins add functionality', 'Configure in <build> section', 'Common: compiler, surefire, shade'], starterCode: '', task: 'Configure Maven plugins', validation: '<plugin>', expectedOutput: '<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-shade-plugin</artifactId>\n            <version>3.5.0</version>\n            <executions>\n                <execution>\n                    <phase>package</phase>\n                    <goals><goal>shade</goal></goals>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>' } },
          { id: 'java-81', number: 81, title: 'Chapter Practice', description: 'Maven project setup', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 16,
        title: 'Design Patterns',
        description: 'Common solutions',
        lessons: [
          { id: 'java-82', number: 82, title: 'Singleton Pattern', description: 'Single instance', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['Only one instance exists', 'Private constructor', 'Static getInstance() method'], starterCode: '', task: 'Implement Singleton', validation: 'private static', expectedOutput: 'class DatabaseConnection {\n    private static DatabaseConnection instance;\n    \n    private DatabaseConnection() {}\n    \n    public static synchronized DatabaseConnection getInstance() {\n        if (instance == null) {\n            instance = new DatabaseConnection();\n        }\n        return instance;\n    }\n}' } },
          { id: 'java-83', number: 83, title: 'Factory Pattern', description: 'Object creation', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Abstracts object creation', 'Factory method returns interface', 'Decouples client from concrete classes'], starterCode: '', task: 'Implement Factory', validation: 'create', expectedOutput: 'interface Shape { void draw(); }\n\nclass ShapeFactory {\n    public static Shape createShape(String type) {\n        return switch (type) {\n            case "circle" -> new Circle();\n            case "rectangle" -> new Rectangle();\n            default -> throw new IllegalArgumentException();\n        };\n    }\n}' } },
          { id: 'java-84', number: 84, title: 'Builder Pattern', description: 'Complex object construction', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Step-by-step construction', 'Method chaining', 'Immutable objects'], starterCode: '', task: 'Implement Builder', validation: 'Builder', expectedOutput: 'class User {\n    private final String name;\n    private final int age;\n    \n    private User(Builder builder) {\n        this.name = builder.name;\n        this.age = builder.age;\n    }\n    \n    public static class Builder {\n        private String name;\n        private int age;\n        \n        public Builder name(String name) { this.name = name; return this; }\n        public Builder age(int age) { this.age = age; return this; }\n        public User build() { return new User(this); }\n    }\n}' } },
          { id: 'java-85', number: 85, title: 'Observer Pattern', description: 'Event notifications', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Subject notifies observers', 'Loose coupling', 'publish-subscribe model'], starterCode: '', task: 'Implement Observer', validation: 'Observer', expectedOutput: 'interface Observer {\n    void update(String message);\n}\n\nclass NewsAgency {\n    private List<Observer> observers = new ArrayList<>();\n    \n    public void subscribe(Observer o) { observers.add(o); }\n    public void unsubscribe(Observer o) { observers.remove(o); }\n    \n    public void publish(String news) {\n        observers.forEach(o -> o.update(news));\n    }\n}' } },
          { id: 'java-86', number: 86, title: 'Strategy Pattern', description: 'Interchangeable algorithms', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Define algorithm interface', 'Implement variations', 'Context uses strategy'], starterCode: '', task: 'Implement Strategy', validation: 'Strategy', expectedOutput: 'interface PaymentStrategy {\n    void pay(double amount);\n}\n\nclass CreditCardPayment implements PaymentStrategy {\n    public void pay(double amount) {\n        System.out.println("Paid " + amount + " via credit card");\n    }\n}\n\nclass PaymentProcessor {\n    private PaymentStrategy strategy;\n    public void setStrategy(PaymentStrategy s) { this.strategy = s; }\n    public void processPayment(double amount) { strategy.pay(amount); }\n}' } },
          { id: 'java-87', number: 87, title: 'Chapter Practice', description: 'Design patterns project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 17,
        title: 'Spring Framework Basics',
        description: 'Enterprise Java',
        lessons: [
          { id: 'java-88', number: 88, title: 'Spring Boot Introduction', description: 'Quick start', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Spring Boot simplifies setup', '@SpringBootApplication annotation', 'Embedded server'], starterCode: '', task: 'Create Spring Boot app', validation: '@SpringBootApplication', expectedOutput: '@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}' } },
          { id: 'java-89', number: 89, title: 'Dependency Injection', description: 'IoC container', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['@Component marks beans', '@Autowired injects dependencies', 'Constructor injection preferred'], starterCode: '', task: 'Use dependency injection', validation: '@Autowired', expectedOutput: '@Service\npublic class UserService {\n    private final UserRepository repository;\n    \n    @Autowired\n    public UserService(UserRepository repository) {\n        this.repository = repository;\n    }\n}' } },
          { id: 'java-90', number: 90, title: 'REST Controllers', description: 'Web endpoints', duration: '30 min', xp: 100, type: 'lesson', content: { instructions: ['@RestController for API', '@GetMapping, @PostMapping', 'Return JSON automatically'], starterCode: '', task: 'Create REST API', validation: '@RestController', expectedOutput: '@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n    \n    @GetMapping\n    public List<User> getAllUsers() {\n        return userService.findAll();\n    }\n    \n    @PostMapping\n    public User createUser(@RequestBody User user) {\n        return userService.save(user);\n    }\n}' } },
          { id: 'java-91', number: 91, title: 'Spring Data JPA', description: 'Database access', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['JpaRepository interface', '@Entity for models', 'Auto-generated queries'], starterCode: '', task: 'Create repository', validation: 'JpaRepository', expectedOutput: '@Entity\npublic class User {\n    @Id @GeneratedValue\n    private Long id;\n    private String name;\n    private String email;\n}\n\npublic interface UserRepository extends JpaRepository<User, Long> {\n    List<User> findByName(String name);\n    Optional<User> findByEmail(String email);\n}' } },
          { id: 'java-92', number: 92, title: 'Chapter Practice', description: 'Spring Boot project', duration: '60 min', xp: 220, type: 'practice' }
        ]
      },
      {
        id: 18,
        title: 'Final Projects',
        description: 'Complete applications',
        lessons: [
          { id: 'java-93', number: 93, title: 'Project: Task Manager CLI', description: 'Console application', duration: '90 min', xp: 300, type: 'project', content: { instructions: ['CRUD operations for tasks', 'File-based storage', 'User-friendly interface'], starterCode: '', task: 'Build task manager', validation: 'class Task', expectedOutput: 'A complete CLI task manager with:\n- Add/edit/delete tasks\n- Mark complete\n- Save/load from file\n- Filter by status' } },
          { id: 'java-94', number: 94, title: 'Project: REST API', description: 'Web service', duration: '120 min', xp: 400, type: 'project', content: { instructions: ['Spring Boot REST API', 'CRUD endpoints', 'JPA with H2/MySQL'], starterCode: '', task: 'Build REST API', validation: '@RestController', expectedOutput: 'A complete REST API with:\n- User registration/login\n- CRUD for resources\n- Validation\n- Error handling' } },
          { id: 'java-95', number: 95, title: 'Project: Chat Application', description: 'Networking project', duration: '150 min', xp: 500, type: 'project', content: { instructions: ['Socket-based chat', 'Multi-client support', 'Multithreaded server'], starterCode: '', task: 'Build chat application', validation: 'ServerSocket', expectedOutput: 'A complete chat app with:\n- Server handling multiple clients\n- Real-time messaging\n- User nicknames\n- Broadcast and private messages' } }
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
    totalLessons: 88,
    totalDuration: '42 hours',
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
          { id: 'php-7', number: 7, title: 'Ternary & Null Coalescing', description: 'Short conditionals', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['condition ? true : false', '?? for null fallback', '??: for null or empty'], starterCode: '<?php\n', task: 'Use ternary operator', validation: '?', expectedOutput: '$status = $age >= 18 ? "adult" : "minor";\n$name = $_GET["name"] ?? "Guest";\n$value = $data ?: "default";' } },
          { id: 'php-8', number: 8, title: 'Switch Statement', description: 'Multiple choices', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['switch ($var)', 'case value:', 'break to exit'], starterCode: '<?php\n$day = "Monday";\n', task: 'Create a day switch', validation: 'switch', expectedOutput: 'switch ($day) {\n    case "Monday":\n        echo "Start of week";\n        break;\n    case "Friday":\n        echo "Weekend soon!";\n        break;\n    default:\n        echo "Regular day";\n}' } },
          { id: 'php-9', number: 9, title: 'For & Foreach Loops', description: 'Iterate over data', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['for ($i = 0; $i < 10; $i++)', 'foreach ($arr as $item)', 'foreach ($arr as $key => $val)'], starterCode: '<?php\n$fruits = ["apple", "banana", "orange"];\n', task: 'Loop through fruits', validation: 'foreach', expectedOutput: 'foreach ($fruits as $fruit) {\n    echo $fruit . "\\n";\n}' } },
          { id: 'php-10', number: 10, title: 'While Loops', description: 'Condition-based loops', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['while (condition) { }', 'do { } while (condition)', 'Remember to update condition'], starterCode: '<?php\n', task: 'Count down from 5', validation: 'while', expectedOutput: '$count = 5;\nwhile ($count > 0) {\n    echo $count . "\\n";\n    $count--;\n}' } },
          { id: 'php-11', number: 11, title: 'Chapter Practice', description: 'Control flow exercises', duration: '30 min', xp: 100, type: 'practice' }
        ]
      },
      {
        id: 3,
        title: 'Functions',
        description: 'Create reusable code',
        lessons: [
          { id: 'php-12', number: 12, title: 'Defining Functions', description: 'Create your own functions', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['function name() { }', 'Parameters pass data in', 'return sends data back'], starterCode: '<?php\n', task: 'Create an add function', validation: 'function add', expectedOutput: 'function add($a, $b) {\n    return $a + $b;\n}' } },
          { id: 'php-13', number: 13, title: 'Type Declarations', description: 'Specify parameter types', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['function fn(int $x): string', 'Return type after :', 'strict_types for enforcement'], starterCode: '<?php\ndeclare(strict_types=1);\n', task: 'Create typed function', validation: 'int $', expectedOutput: 'function multiply(int $a, int $b): int {\n    return $a * $b;\n}\n\nfunction greet(string $name): string {\n    return "Hello, $name!";\n}' } },
          { id: 'php-14', number: 14, title: 'Default Parameters', description: 'Optional arguments', duration: '12 min', xp: 35, type: 'lesson', content: { instructions: ['function fn($x = default)', 'Default params must be last', 'Allows flexible calling'], starterCode: '<?php\n', task: 'Create greet with default', validation: '= "World"', expectedOutput: 'function greet($name = "World") {\n    return "Hello, $name!";\n}' } },
          { id: 'php-15', number: 15, title: 'Variable Scope', description: 'Where variables live', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['Local: inside function only', 'Global: use global keyword', 'Static: persists between calls'], starterCode: '<?php\n', task: 'Use static variable', validation: 'static $', expectedOutput: 'function counter() {\n    static $count = 0;\n    $count++;\n    return $count;\n}' } },
          { id: 'php-16', number: 16, title: 'Anonymous Functions', description: 'Closures in PHP', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['$fn = function() { }', 'use ($var) to capture variables', 'Arrow functions: fn($x) => $x * 2'], starterCode: '<?php\n', task: 'Create an anonymous function', validation: 'function(', expectedOutput: '$multiply = function($a, $b) {\n    return $a * $b;\n};\necho $multiply(3, 4);\n\n$double = fn($x) => $x * 2;' } },
          { id: 'php-17', number: 17, title: 'Chapter Practice', description: 'Functions exercises', duration: '30 min', xp: 100, type: 'practice' }
        ]
      },
      {
        id: 4,
        title: 'Object-Oriented PHP',
        description: 'Classes and objects',
        lessons: [
          { id: 'php-18', number: 18, title: 'Classes & Objects', description: 'Create blueprints', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['class Name { }', 'new creates objects', 'Properties and methods'], starterCode: '<?php\n', task: 'Create a Person class', validation: 'class Person', expectedOutput: 'class Person {\n    public $name;\n    public $age;\n    \n    public function greet() {\n        return "Hello, I am $this->name";\n    }\n}' } },
          { id: 'php-19', number: 19, title: 'Constructors & Destructors', description: 'Initialize and cleanup', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['__construct() method', '__destruct() for cleanup', 'Constructor promotion (PHP 8)'], starterCode: '<?php\n', task: 'Add a constructor', validation: '__construct', expectedOutput: 'class Person {\n    public function __construct(\n        public string $name,\n        public int $age = 0\n    ) {}\n    \n    public function __destruct() {\n        echo "Person destroyed";\n    }\n}' } },
          { id: 'php-20', number: 20, title: 'Visibility', description: 'Public, private, protected', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['public: accessible everywhere', 'private: only in class', 'protected: class and children'], starterCode: '<?php\n', task: 'Create private property with getter', validation: 'private $', expectedOutput: 'class BankAccount {\n    private float $balance = 0;\n    \n    public function getBalance(): float {\n        return $this->balance;\n    }\n    \n    public function deposit(float $amount): void {\n        $this->balance += $amount;\n    }\n}' } },
          { id: 'php-21', number: 21, title: 'Inheritance', description: 'Extend classes', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['class Child extends Parent', 'parent:: calls parent methods', 'Override methods to customize'], starterCode: '<?php\n', task: 'Create Student extending Person', validation: 'extends Person', expectedOutput: 'class Student extends Person {\n    public string $grade;\n    \n    public function __construct(string $name, int $age, string $grade) {\n        parent::__construct($name, $age);\n        $this->grade = $grade;\n    }\n}' } },
          { id: 'php-22', number: 22, title: 'Static Members', description: 'Class-level properties', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['static keyword', 'self:: to access', 'Shared across all instances'], starterCode: '<?php\n', task: 'Create static counter', validation: 'static $', expectedOutput: 'class User {\n    private static int $count = 0;\n    \n    public function __construct() {\n        self::$count++;\n    }\n    \n    public static function getCount(): int {\n        return self::$count;\n    }\n}' } },
          { id: 'php-23', number: 23, title: 'Chapter Practice', description: 'OOP exercises', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 5,
        title: 'Advanced OOP',
        description: 'Interfaces, traits, namespaces',
        lessons: [
          { id: 'php-24', number: 24, title: 'Abstract Classes', description: 'Base class templates', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['abstract class cannot be instantiated', 'abstract methods must be implemented', 'Can have concrete methods too'], starterCode: '<?php\n', task: 'Create abstract Shape', validation: 'abstract class', expectedOutput: 'abstract class Shape {\n    abstract public function area(): float;\n    \n    public function describe(): string {\n        return "Area: " . $this->area();\n    }\n}\n\nclass Circle extends Shape {\n    public function __construct(private float $radius) {}\n    \n    public function area(): float {\n        return pi() * $this->radius ** 2;\n    }\n}' } },
          { id: 'php-25', number: 25, title: 'Interfaces', description: 'Define contracts', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['interface defines methods', 'implements keyword', 'A class can implement multiple'], starterCode: '<?php\n', task: 'Create and implement interface', validation: 'interface', expectedOutput: 'interface Drawable {\n    public function draw(): void;\n}\n\ninterface Resizable {\n    public function resize(float $factor): void;\n}\n\nclass Square implements Drawable, Resizable {\n    public function draw(): void { echo "Drawing"; }\n    public function resize(float $factor): void { }\n}' } },
          { id: 'php-26', number: 26, title: 'Traits', description: 'Horizontal code reuse', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['trait defines reusable methods', 'use TraitName in class', 'Resolve conflicts with insteadof'], starterCode: '<?php\n', task: 'Create and use a trait', validation: 'trait', expectedOutput: 'trait Timestampable {\n    private ?DateTime $createdAt = null;\n    \n    public function setCreatedAt(): void {\n        $this->createdAt = new DateTime();\n    }\n    \n    public function getCreatedAt(): ?DateTime {\n        return $this->createdAt;\n    }\n}\n\nclass Post {\n    use Timestampable;\n    public string $title;\n}' } },
          { id: 'php-27', number: 27, title: 'Namespaces', description: 'Organize code', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['namespace App\\Models;', 'use to import', 'Avoid naming conflicts'], starterCode: '<?php\n', task: 'Use namespaces', validation: 'namespace', expectedOutput: 'namespace App\\Models;\n\nclass User {\n    public string $name;\n}\n\n// In another file:\nnamespace App\\Controllers;\n\nuse App\\Models\\User;\n\nclass UserController {\n    public function show(User $user) { }\n}' } },
          { id: 'php-28', number: 28, title: 'Magic Methods', description: 'Special class methods', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['__get, __set for property access', '__call for method calls', '__toString for string conversion'], starterCode: '<?php\n', task: 'Implement magic methods', validation: '__get', expectedOutput: 'class DynamicObject {\n    private array $data = [];\n    \n    public function __get(string $name): mixed {\n        return $this->data[$name] ?? null;\n    }\n    \n    public function __set(string $name, mixed $value): void {\n        $this->data[$name] = $value;\n    }\n    \n    public function __toString(): string {\n        return json_encode($this->data);\n    }\n}' } },
          { id: 'php-29', number: 29, title: 'Chapter Practice', description: 'Advanced OOP project', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 6,
        title: 'String & Array Functions',
        description: 'Master built-in functions',
        lessons: [
          { id: 'php-30', number: 30, title: 'String Functions', description: 'Manipulate text', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['strlen, strtoupper, strtolower', 'substr, str_replace, trim', 'explode, implode, sprintf'], starterCode: '<?php\n$text = "Hello World";\n', task: 'Use string functions', validation: 'strtoupper', expectedOutput: '$upper = strtoupper($text);  // "HELLO WORLD"\n$replaced = str_replace("World", "PHP", $text);\n$parts = explode(" ", $text);  // ["Hello", "World"]\n$trimmed = trim("  spaces  ");' } },
          { id: 'php-31', number: 31, title: 'Regular Expressions', description: 'Pattern matching', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['preg_match() for testing', 'preg_replace() for replacing', 'preg_match_all() for all matches'], starterCode: '<?php\n', task: 'Validate email with regex', validation: 'preg_match', expectedOutput: '$email = "test@example.com";\nif (preg_match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/", $email)) {\n    echo "Valid email";\n}\n\n$cleaned = preg_replace("/[^a-z]/i", "", "Hello123");' } },
          { id: 'php-32', number: 32, title: 'Array Functions', description: 'Work with arrays', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['array_map, array_filter, array_reduce', 'array_merge, array_slice', 'in_array, array_search, array_key_exists'], starterCode: '<?php\n$numbers = [1, 2, 3, 4, 5];\n', task: 'Use array functions', validation: 'array_map', expectedOutput: '$doubled = array_map(fn($n) => $n * 2, $numbers);\n$evens = array_filter($numbers, fn($n) => $n % 2 == 0);\n$sum = array_reduce($numbers, fn($carry, $n) => $carry + $n, 0);' } },
          { id: 'php-33', number: 33, title: 'Sorting Arrays', description: 'Order data', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['sort, rsort for values', 'asort, ksort preserve keys', 'usort for custom sorting'], starterCode: '<?php\n', task: 'Sort arrays', validation: 'usort', expectedOutput: '$users = [\n    ["name" => "John", "age" => 30],\n    ["name" => "Jane", "age" => 25]\n];\n\nusort($users, fn($a, $b) => $a["age"] <=> $b["age"]);\n// Jane (25) now comes before John (30)' } },
          { id: 'php-34', number: 34, title: 'Chapter Practice', description: 'String & array exercises', duration: '35 min', xp: 120, type: 'practice' }
        ]
      },
      {
        id: 7,
        title: 'File Handling',
        description: 'Read and write files',
        lessons: [
          { id: 'php-35', number: 35, title: 'Reading Files', description: 'Load file content', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['file_get_contents() reads all', 'file() reads into array', 'fopen/fread for streaming'], starterCode: '<?php\n', task: 'Read a file', validation: 'file_get_contents', expectedOutput: '// Read entire file\n$content = file_get_contents("data.txt");\n\n// Read as array of lines\n$lines = file("data.txt", FILE_IGNORE_NEW_LINES);\n\n// Read line by line\n$handle = fopen("large.txt", "r");\nwhile (($line = fgets($handle)) !== false) {\n    echo $line;\n}\nfclose($handle);' } },
          { id: 'php-36', number: 36, title: 'Writing Files', description: 'Save data to files', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['file_put_contents() writes all', 'FILE_APPEND to add content', 'fopen with "w" or "a" mode'], starterCode: '<?php\n', task: 'Write to a file', validation: 'file_put_contents', expectedOutput: '// Write content (overwrites)\nfile_put_contents("output.txt", "Hello World");\n\n// Append content\nfile_put_contents("log.txt", date("Y-m-d") . " Event\\n", FILE_APPEND);\n\n// Write JSON\n$data = ["name" => "John", "age" => 30];\nfile_put_contents("data.json", json_encode($data, JSON_PRETTY_PRINT));' } },
          { id: 'php-37', number: 37, title: 'CSV Files', description: 'Work with CSV data', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['fgetcsv() reads CSV lines', 'fputcsv() writes CSV lines', 'Handle headers properly'], starterCode: '<?php\n', task: 'Read and write CSV', validation: 'fgetcsv', expectedOutput: '// Read CSV\n$handle = fopen("users.csv", "r");\n$headers = fgetcsv($handle);\nwhile (($row = fgetcsv($handle)) !== false) {\n    $user = array_combine($headers, $row);\n    echo $user["name"];\n}\n\n// Write CSV\n$fp = fopen("export.csv", "w");\nfputcsv($fp, ["Name", "Email"]);\nfputcsv($fp, ["John", "john@email.com"]);' } },
          { id: 'php-38', number: 38, title: 'File System Operations', description: 'Manage files and folders', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['file_exists, is_file, is_dir', 'mkdir, rmdir, unlink', 'scandir, glob for listing'], starterCode: '<?php\n', task: 'Manage files', validation: 'file_exists', expectedOutput: 'if (!file_exists("uploads")) {\n    mkdir("uploads", 0755, true);\n}\n\n$files = glob("uploads/*.jpg");\nforeach ($files as $file) {\n    $size = filesize($file);\n    echo basename($file) . ": $size bytes\\n";\n}\n\nif (file_exists("old.txt")) {\n    unlink("old.txt"); // Delete\n}' } },
          { id: 'php-39', number: 39, title: 'Chapter Practice', description: 'File handling project', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 8,
        title: 'Error Handling',
        description: 'Handle errors gracefully',
        lessons: [
          { id: 'php-40', number: 40, title: 'Exception Basics', description: 'Throw and catch exceptions', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['try-catch blocks', 'throw new Exception()', 'Exception getMessage(), getCode()'], starterCode: '<?php\n', task: 'Handle exceptions', validation: 'try {', expectedOutput: 'function divide($a, $b) {\n    if ($b == 0) {\n        throw new Exception("Cannot divide by zero");\n    }\n    return $a / $b;\n}\n\ntry {\n    $result = divide(10, 0);\n} catch (Exception $e) {\n    echo "Error: " . $e->getMessage();\n}' } },
          { id: 'php-41', number: 41, title: 'Custom Exceptions', description: 'Create exception classes', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Extend Exception class', 'Add custom properties', 'Catch specific types'], starterCode: '<?php\n', task: 'Create custom exception', validation: 'extends Exception', expectedOutput: 'class ValidationException extends Exception {\n    private array $errors;\n    \n    public function __construct(array $errors) {\n        parent::__construct("Validation failed");\n        $this->errors = $errors;\n    }\n    \n    public function getErrors(): array {\n        return $this->errors;\n    }\n}\n\nthrow new ValidationException(["email" => "Invalid format"]);' } },
          { id: 'php-42', number: 42, title: 'Multiple Catch Blocks', description: 'Handle different exceptions', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['Multiple catch for different types', 'Order specific to general', 'finally always runs'], starterCode: '<?php\n', task: 'Use multiple catch', validation: 'catch (', expectedOutput: 'try {\n    $user = findUser($id);\n} catch (NotFoundException $e) {\n    echo "User not found";\n} catch (DatabaseException $e) {\n    echo "Database error";\n} catch (Exception $e) {\n    echo "General error";\n} finally {\n    closeConnection();\n}' } },
          { id: 'php-43', number: 43, title: 'Error Logging', description: 'Log errors properly', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['error_log() function', 'Custom log files', 'Monolog library'], starterCode: '<?php\n', task: 'Log errors', validation: 'error_log', expectedOutput: '// Log to default error log\nerror_log("Something went wrong");\n\n// Log to custom file\nfunction logError(string $message): void {\n    $timestamp = date("Y-m-d H:i:s");\n    $log = "[$timestamp] $message\\n";\n    file_put_contents("errors.log", $log, FILE_APPEND);\n}\n\nlogError("User login failed for ID: 123");' } },
          { id: 'php-44', number: 44, title: 'Chapter Practice', description: 'Error handling exercises', duration: '35 min', xp: 120, type: 'practice' }
        ]
      },
      {
        id: 9,
        title: 'Web Development',
        description: 'Build dynamic websites',
        lessons: [
          { id: 'php-45', number: 45, title: 'GET & POST', description: 'Handle form data', duration: '20 min', xp: 60, type: 'lesson', content: { instructions: ['$_GET for URL parameters', '$_POST for form submissions', 'Always validate input'], starterCode: '<?php\n', task: 'Handle a POST form', validation: '$_POST', expectedOutput: 'if ($_SERVER["REQUEST_METHOD"] === "POST") {\n    $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);\n    $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);\n    \n    if ($name && $email) {\n        echo "Valid submission";\n    }\n}' } },
          { id: 'php-46', number: 46, title: 'Input Validation', description: 'Validate user data', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['filter_input() for validation', 'filter_var() for variables', 'Custom validation functions'], starterCode: '<?php\n', task: 'Validate form data', validation: 'filter_var', expectedOutput: 'function validateUser(array $data): array {\n    $errors = [];\n    \n    if (empty($data["name"])) {\n        $errors["name"] = "Name is required";\n    }\n    \n    if (!filter_var($data["email"], FILTER_VALIDATE_EMAIL)) {\n        $errors["email"] = "Invalid email";\n    }\n    \n    if (strlen($data["password"]) < 8) {\n        $errors["password"] = "Min 8 characters";\n    }\n    \n    return $errors;\n}' } },
          { id: 'php-47', number: 47, title: 'Sessions', description: 'Track user state', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['session_start() first', '$_SESSION stores data', 'session_destroy() to clear'], starterCode: '<?php\nsession_start();\n', task: 'Implement login session', validation: '$_SESSION', expectedOutput: '// Login\nfunction login(int $userId): void {\n    $_SESSION["user_id"] = $userId;\n    $_SESSION["logged_in_at"] = time();\n}\n\n// Check auth\nfunction isLoggedIn(): bool {\n    return isset($_SESSION["user_id"]);\n}\n\n// Logout\nfunction logout(): void {\n    session_unset();\n    session_destroy();\n}' } },
          { id: 'php-48', number: 48, title: 'Cookies', description: 'Store data in browser', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['setcookie(name, value, expiry)', '$_COOKIE to read', 'Set before any output'], starterCode: '<?php\n', task: 'Remember me cookie', validation: 'setcookie', expectedOutput: '// Set cookie (7 days)\nsetcookie("remember_token", $token, [\n    "expires" => time() + (7 * 24 * 60 * 60),\n    "path" => "/",\n    "httponly" => true,\n    "secure" => true,\n    "samesite" => "Strict"\n]);\n\n// Read cookie\nif (isset($_COOKIE["remember_token"])) {\n    $token = $_COOKIE["remember_token"];\n}' } },
          { id: 'php-49', number: 49, title: 'File Uploads', description: 'Handle file uploads', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['$_FILES contains uploads', 'Check file type and size', 'move_uploaded_file() to save'], starterCode: '<?php\n', task: 'Secure file upload', validation: '$_FILES', expectedOutput: 'function uploadImage(array $file): ?string {\n    $allowed = ["image/jpeg", "image/png", "image/gif"];\n    $maxSize = 5 * 1024 * 1024; // 5MB\n    \n    if ($file["error"] !== UPLOAD_ERR_OK) return null;\n    if (!in_array($file["type"], $allowed)) return null;\n    if ($file["size"] > $maxSize) return null;\n    \n    $ext = pathinfo($file["name"], PATHINFO_EXTENSION);\n    $newName = uniqid() . "." . $ext;\n    $path = "uploads/" . $newName;\n    \n    move_uploaded_file($file["tmp_name"], $path);\n    return $path;\n}' } },
          { id: 'php-50', number: 50, title: 'Chapter Practice', description: 'Web development project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 10,
        title: 'Database & PDO',
        description: 'Work with databases',
        lessons: [
          { id: 'php-51', number: 51, title: 'PDO Connection', description: 'Connect to MySQL', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['PDO is secure and flexible', 'Use try-catch for errors', 'Set error mode to exceptions'], starterCode: '<?php\n', task: 'Create a PDO connection', validation: 'new PDO', expectedOutput: 'class Database {\n    private static ?PDO $pdo = null;\n    \n    public static function connect(): PDO {\n        if (self::$pdo === null) {\n            self::$pdo = new PDO(\n                "mysql:host=localhost;dbname=myapp;charset=utf8mb4",\n                "user", "password",\n                [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]\n            );\n        }\n        return self::$pdo;\n    }\n}' } },
          { id: 'php-52', number: 52, title: 'Prepared Statements', description: 'Safe queries', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['prepare() for safety', 'Positional ? or named :param', 'execute() runs query'], starterCode: '<?php\n', task: 'Use prepared statements', validation: 'prepare(', expectedOutput: '// Named parameters\n$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");\n$stmt->execute(["email" => $email]);\n$user = $stmt->fetch(PDO::FETCH_ASSOC);\n\n// Positional parameters\n$stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");\n$stmt->execute([$name, $email]);\n$id = $pdo->lastInsertId();' } },
          { id: 'php-53', number: 53, title: 'CRUD Operations', description: 'Create, Read, Update, Delete', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['INSERT for create', 'SELECT for read', 'UPDATE and DELETE'], starterCode: '<?php\n', task: 'Implement CRUD', validation: 'UPDATE', expectedOutput: 'class UserRepository {\n    private PDO $pdo;\n    \n    public function find(int $id): ?array {\n        $stmt = $this->pdo->prepare("SELECT * FROM users WHERE id = ?");\n        $stmt->execute([$id]);\n        return $stmt->fetch(PDO::FETCH_ASSOC) ?: null;\n    }\n    \n    public function update(int $id, array $data): bool {\n        $stmt = $this->pdo->prepare(\n            "UPDATE users SET name = ?, email = ? WHERE id = ?"\n        );\n        return $stmt->execute([$data["name"], $data["email"], $id]);\n    }\n}' } },
          { id: 'php-54', number: 54, title: 'Transactions', description: 'Atomic operations', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['beginTransaction() starts', 'commit() saves', 'rollBack() undoes on error'], starterCode: '<?php\n', task: 'Use transactions', validation: 'beginTransaction', expectedOutput: 'function transfer(PDO $pdo, int $from, int $to, float $amount): bool {\n    try {\n        $pdo->beginTransaction();\n        \n        $pdo->prepare("UPDATE accounts SET balance = balance - ? WHERE id = ?")\n            ->execute([$amount, $from]);\n        \n        $pdo->prepare("UPDATE accounts SET balance = balance + ? WHERE id = ?")\n            ->execute([$amount, $to]);\n        \n        $pdo->commit();\n        return true;\n    } catch (Exception $e) {\n        $pdo->rollBack();\n        return false;\n    }\n}' } },
          { id: 'php-55', number: 55, title: 'Query Builder Basics', description: 'Build dynamic queries', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Build SQL dynamically', 'Handle optional conditions', 'Prevent SQL injection'], starterCode: '<?php\n', task: 'Create query builder', validation: 'WHERE', expectedOutput: 'function findUsers(array $filters): array {\n    $sql = "SELECT * FROM users WHERE 1=1";\n    $params = [];\n    \n    if (!empty($filters["status"])) {\n        $sql .= " AND status = ?";\n        $params[] = $filters["status"];\n    }\n    \n    if (!empty($filters["search"])) {\n        $sql .= " AND name LIKE ?";\n        $params[] = "%" . $filters["search"] . "%";\n    }\n    \n    $stmt = $pdo->prepare($sql);\n    $stmt->execute($params);\n    return $stmt->fetchAll();\n}' } },
          { id: 'php-56', number: 56, title: 'Chapter Practice', description: 'Database project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 11,
        title: 'Security Best Practices',
        description: 'Secure your applications',
        lessons: [
          { id: 'php-57', number: 57, title: 'SQL Injection Prevention', description: 'Protect against SQLi', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Always use prepared statements', 'Never concatenate user input', 'Validate and sanitize'], starterCode: '<?php\n', task: 'Prevent SQL injection', validation: 'prepare(', expectedOutput: '// WRONG - Vulnerable\n$sql = "SELECT * FROM users WHERE id = " . $_GET["id"];\n\n// CORRECT - Safe\n$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");\n$stmt->execute([(int)$_GET["id"]]);\n\n// Also whitelist allowed columns\n$allowed = ["name", "email", "created_at"];\n$column = in_array($_GET["sort"], $allowed) ? $_GET["sort"] : "id";' } },
          { id: 'php-58', number: 58, title: 'XSS Prevention', description: 'Prevent cross-site scripting', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['htmlspecialchars() output', 'Content-Security-Policy header', 'Validate input types'], starterCode: '<?php\n', task: 'Prevent XSS', validation: 'htmlspecialchars', expectedOutput: '// WRONG - Vulnerable\necho $_GET["name"];\n\n// CORRECT - Safe\necho htmlspecialchars($_GET["name"], ENT_QUOTES, "UTF-8");\n\n// Helper function\nfunction e(string $text): string {\n    return htmlspecialchars($text, ENT_QUOTES, "UTF-8");\n}\n\n// In template\necho "Hello, " . e($user["name"]);' } },
          { id: 'php-59', number: 59, title: 'Password Hashing', description: 'Store passwords securely', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['password_hash() to create', 'password_verify() to check', 'Never store plain passwords'], starterCode: '<?php\n', task: 'Hash and verify passwords', validation: 'password_hash', expectedOutput: '// Registration - hash password\n$hash = password_hash($password, PASSWORD_DEFAULT);\n// Store $hash in database\n\n// Login - verify password\nfunction login(string $email, string $password): ?array {\n    $user = findUserByEmail($email);\n    \n    if ($user && password_verify($password, $user["password_hash"])) {\n        return $user;\n    }\n    return null;\n}' } },
          { id: 'php-60', number: 60, title: 'CSRF Protection', description: 'Prevent cross-site attacks', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Generate unique tokens', 'Validate on form submit', 'Use SameSite cookies'], starterCode: '<?php\nsession_start();\n', task: 'Implement CSRF protection', validation: 'csrf_token', expectedOutput: 'function generateCsrfToken(): string {\n    if (empty($_SESSION["csrf_token"])) {\n        $_SESSION["csrf_token"] = bin2hex(random_bytes(32));\n    }\n    return $_SESSION["csrf_token"];\n}\n\nfunction validateCsrfToken(string $token): bool {\n    return hash_equals($_SESSION["csrf_token"] ?? "", $token);\n}\n\n// In form\n$token = generateCsrfToken();\necho \'<input type="hidden" name="csrf_token" value="\' . e($token) . \'">\';' } },
          { id: 'php-61', number: 61, title: 'Chapter Practice', description: 'Security exercises', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 12,
        title: 'Working with APIs',
        description: 'Consume and build APIs',
        lessons: [
          { id: 'php-62', number: 62, title: 'JSON Handling', description: 'Encode and decode JSON', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['json_encode() to create', 'json_decode() to parse', 'Handle errors properly'], starterCode: '<?php\n', task: 'Work with JSON', validation: 'json_encode', expectedOutput: '$data = ["name" => "John", "age" => 30];\n$json = json_encode($data, JSON_PRETTY_PRINT);\n\n// Parse JSON\n$jsonString = \'{"name": "Jane", "age": 25}\';\n$decoded = json_decode($jsonString, true);\necho $decoded["name"]; // Jane\n\n// Handle errors\nif (json_last_error() !== JSON_ERROR_NONE) {\n    throw new Exception(json_last_error_msg());\n}' } },
          { id: 'php-63', number: 63, title: 'HTTP Requests with cURL', description: 'Call external APIs', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['curl_init() creates handle', 'CURLOPT for options', 'curl_exec() makes request'], starterCode: '<?php\n', task: 'Make API request', validation: 'curl_init', expectedOutput: 'function apiRequest(string $url, string $method = "GET", ?array $data = null): array {\n    $ch = curl_init($url);\n    curl_setopt_array($ch, [\n        CURLOPT_RETURNTRANSFER => true,\n        CURLOPT_HTTPHEADER => ["Content-Type: application/json"],\n    ]);\n    \n    if ($method === "POST") {\n        curl_setopt($ch, CURLOPT_POST, true);\n        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));\n    }\n    \n    $response = curl_exec($ch);\n    curl_close($ch);\n    return json_decode($response, true);\n}' } },
          { id: 'php-64', number: 64, title: 'Building REST APIs', description: 'Create API endpoints', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['Set JSON headers', 'Handle HTTP methods', 'Return proper status codes'], starterCode: '<?php\n', task: 'Create REST endpoint', validation: 'Content-Type: application/json', expectedOutput: 'header("Content-Type: application/json");\n\n$method = $_SERVER["REQUEST_METHOD"];\n$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);\n\nswitch ("$method $path") {\n    case "GET /api/users":\n        echo json_encode(getUsers());\n        break;\n    case "POST /api/users":\n        $data = json_decode(file_get_contents("php://input"), true);\n        $user = createUser($data);\n        http_response_code(201);\n        echo json_encode($user);\n        break;\n    default:\n        http_response_code(404);\n        echo json_encode(["error" => "Not found"]);\n}' } },
          { id: 'php-65', number: 65, title: 'API Authentication', description: 'Secure your APIs', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Bearer token authentication', 'Validate tokens', 'Rate limiting'], starterCode: '<?php\n', task: 'Implement API auth', validation: 'Bearer', expectedOutput: 'function authenticateRequest(): ?array {\n    $header = $_SERVER["HTTP_AUTHORIZATION"] ?? "";\n    \n    if (!preg_match("/Bearer\\s+(\\S+)/", $header, $matches)) {\n        return null;\n    }\n    \n    $token = $matches[1];\n    return validateToken($token);\n}\n\n$user = authenticateRequest();\nif (!$user) {\n    http_response_code(401);\n    echo json_encode(["error" => "Unauthorized"]);\n    exit;\n}' } },
          { id: 'php-66', number: 66, title: 'Chapter Practice', description: 'API project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 13,
        title: 'Composer & Packages',
        description: 'Dependency management',
        lessons: [
          { id: 'php-67', number: 67, title: 'Composer Basics', description: 'Install and use packages', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['composer init to start', 'composer require to add', 'composer.json defines deps'], starterCode: '', task: 'Set up Composer project', validation: 'composer', expectedOutput: '# Initialize project\ncomposer init\n\n# Install a package\ncomposer require guzzlehttp/guzzle\n\n# Install dev dependency\ncomposer require --dev phpunit/phpunit\n\n# Install all dependencies\ncomposer install\n\n# Update dependencies\ncomposer update' } },
          { id: 'php-68', number: 68, title: 'Autoloading', description: 'PSR-4 autoloading', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Autoload classes automatically', 'PSR-4 standard', 'composer dump-autoload'], starterCode: '', task: 'Set up autoloading', validation: 'autoload', expectedOutput: '// composer.json\n{\n    "autoload": {\n        "psr-4": {\n            "App\\\\": "src/"\n        }\n    }\n}\n\n// src/Models/User.php\nnamespace App\\Models;\n\nclass User {\n    // ...\n}\n\n// index.php\nrequire "vendor/autoload.php";\nuse App\\Models\\User;\n\n$user = new User();' } },
          { id: 'php-69', number: 69, title: 'Popular Packages', description: 'Essential PHP packages', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Guzzle for HTTP', 'Monolog for logging', 'Carbon for dates'], starterCode: '<?php\nrequire "vendor/autoload.php";\n', task: 'Use popular packages', validation: 'use GuzzleHttp', expectedOutput: 'use GuzzleHttp\\Client;\nuse Monolog\\Logger;\nuse Monolog\\Handler\\StreamHandler;\nuse Carbon\\Carbon;\n\n// HTTP client\n$client = new Client();\n$response = $client->get("https://api.example.com/users");\n\n// Logging\n$log = new Logger("app");\n$log->pushHandler(new StreamHandler("app.log"));\n$log->info("User logged in");\n\n// Dates\n$date = Carbon::now()->addDays(7)->format("Y-m-d");' } },
          { id: 'php-70', number: 70, title: 'Environment Variables', description: 'Configuration management', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Use .env files', 'vlucas/phpdotenv package', 'Never commit secrets'], starterCode: '<?php\n', task: 'Use dotenv', validation: 'Dotenv', expectedOutput: '// .env file\nDB_HOST=localhost\nDB_NAME=myapp\nDB_USER=root\nDB_PASS=secret\n\n// Load in PHP\nuse Dotenv\\Dotenv;\n\n$dotenv = Dotenv::createImmutable(__DIR__);\n$dotenv->load();\n\n$host = $_ENV["DB_HOST"];\n$dbName = $_ENV["DB_NAME"];' } },
          { id: 'php-71', number: 71, title: 'Chapter Practice', description: 'Composer project', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 14,
        title: 'MVC Architecture',
        description: 'Structure your application',
        lessons: [
          { id: 'php-72', number: 72, title: 'MVC Pattern', description: 'Understand MVC', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Model: data and logic', 'View: presentation', 'Controller: handles requests'], starterCode: '', task: 'Understand MVC structure', validation: 'Controller', expectedOutput: 'app/\n├── Controllers/\n│   └── UserController.php\n├── Models/\n│   └── User.php\n├── Views/\n│   └── users/\n│       ├── index.php\n│       └── show.php\n├── routes.php\n└── bootstrap.php' } },
          { id: 'php-73', number: 73, title: 'Simple Router', description: 'Route requests', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['Map URLs to controllers', 'Extract route parameters', 'Handle 404 errors'], starterCode: '<?php\n', task: 'Create basic router', validation: 'class Router', expectedOutput: 'class Router {\n    private array $routes = [];\n    \n    public function get(string $path, callable $handler): void {\n        $this->routes["GET"][$path] = $handler;\n    }\n    \n    public function dispatch(string $method, string $uri): mixed {\n        foreach ($this->routes[$method] ?? [] as $path => $handler) {\n            if (preg_match($this->pathToRegex($path), $uri, $matches)) {\n                return $handler(...array_slice($matches, 1));\n            }\n        }\n        throw new NotFoundException();\n    }\n}' } },
          { id: 'php-74', number: 74, title: 'Controllers', description: 'Handle requests', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['One controller per resource', 'Methods for CRUD actions', 'Return responses'], starterCode: '<?php\n', task: 'Create controller', validation: 'class UserController', expectedOutput: 'namespace App\\Controllers;\n\nclass UserController {\n    private UserRepository $users;\n    \n    public function __construct(UserRepository $users) {\n        $this->users = $users;\n    }\n    \n    public function index(): string {\n        $users = $this->users->all();\n        return view("users/index", ["users" => $users]);\n    }\n    \n    public function show(int $id): string {\n        $user = $this->users->find($id);\n        return view("users/show", ["user" => $user]);\n    }\n}' } },
          { id: 'php-75', number: 75, title: 'Views & Templates', description: 'Render HTML', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Separate logic from presentation', 'Pass data to views', 'Use includes for partials'], starterCode: '<?php\n', task: 'Create view system', validation: 'function view', expectedOutput: 'function view(string $template, array $data = []): string {\n    extract($data);\n    ob_start();\n    include __DIR__ . "/views/" . $template . ".php";\n    return ob_get_clean();\n}\n\n// views/users/index.php\n<?php foreach ($users as $user): ?>\n<div class="user">\n    <h2><?= e($user["name"]) ?></h2>\n    <p><?= e($user["email"]) ?></p>\n</div>\n<?php endforeach; ?>' } },
          { id: 'php-76', number: 76, title: 'Chapter Practice', description: 'MVC project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 15,
        title: 'Authentication System',
        description: 'User authentication',
        lessons: [
          { id: 'php-77', number: 77, title: 'Registration', description: 'Create new users', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Validate input', 'Hash password', 'Store in database'], starterCode: '<?php\n', task: 'Implement registration', validation: 'password_hash', expectedOutput: 'function register(array $data): array {\n    $errors = validateRegistration($data);\n    if (!empty($errors)) {\n        return ["success" => false, "errors" => $errors];\n    }\n    \n    $user = [\n        "name" => $data["name"],\n        "email" => $data["email"],\n        "password" => password_hash($data["password"], PASSWORD_DEFAULT),\n        "created_at" => date("Y-m-d H:i:s")\n    ];\n    \n    $id = insertUser($user);\n    return ["success" => true, "user_id" => $id];\n}' } },
          { id: 'php-78', number: 78, title: 'Login System', description: 'Authenticate users', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Verify credentials', 'Create session', 'Regenerate session ID'], starterCode: '<?php\nsession_start();\n', task: 'Implement login', validation: 'password_verify', expectedOutput: 'function login(string $email, string $password): bool {\n    $user = findUserByEmail($email);\n    \n    if (!$user || !password_verify($password, $user["password"])) {\n        return false;\n    }\n    \n    session_regenerate_id(true);\n    $_SESSION["user_id"] = $user["id"];\n    $_SESSION["user_name"] = $user["name"];\n    $_SESSION["logged_in"] = true;\n    \n    return true;\n}' } },
          { id: 'php-79', number: 79, title: 'Password Reset', description: 'Recover accounts', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['Generate secure token', 'Send reset email', 'Token expiration'], starterCode: '<?php\n', task: 'Implement password reset', validation: 'random_bytes', expectedOutput: 'function requestPasswordReset(string $email): bool {\n    $user = findUserByEmail($email);\n    if (!$user) return false;\n    \n    $token = bin2hex(random_bytes(32));\n    $expires = date("Y-m-d H:i:s", strtotime("+1 hour"));\n    \n    storeResetToken($user["id"], $token, $expires);\n    \n    $link = "https://site.com/reset?token=" . $token;\n    sendEmail($email, "Password Reset", "Click: $link");\n    \n    return true;\n}\n\nfunction resetPassword(string $token, string $newPassword): bool {\n    $reset = findValidResetToken($token);\n    if (!$reset) return false;\n    \n    updateUserPassword($reset["user_id"], $newPassword);\n    deleteResetToken($token);\n    return true;\n}' } },
          { id: 'php-80', number: 80, title: 'Middleware', description: 'Protect routes', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Check authentication', 'Redirect if not logged in', 'Role-based access'], starterCode: '<?php\n', task: 'Create auth middleware', validation: 'function requireAuth', expectedOutput: 'function requireAuth(): void {\n    if (empty($_SESSION["logged_in"])) {\n        $_SESSION["redirect_after_login"] = $_SERVER["REQUEST_URI"];\n        header("Location: /login");\n        exit;\n    }\n}\n\nfunction requireAdmin(): void {\n    requireAuth();\n    if ($_SESSION["role"] !== "admin") {\n        http_response_code(403);\n        echo "Access denied";\n        exit;\n    }\n}\n\n// Usage in controller\nrequireAuth();\n// Only authenticated users reach here' } },
          { id: 'php-81', number: 81, title: 'Chapter Practice', description: 'Auth system project', duration: '55 min', xp: 200, type: 'practice' }
        ]
      },
      {
        id: 16,
        title: 'Final Projects',
        description: 'Complete applications',
        lessons: [
          { id: 'php-82', number: 82, title: 'Project: Blog System', description: 'Full blog with CRUD', duration: '120 min', xp: 400, type: 'project', content: { instructions: ['User authentication', 'CRUD for posts', 'Comments system', 'Categories and tags'], starterCode: '', task: 'Build complete blog', validation: 'class Post', expectedOutput: 'A complete blog with:\n- User registration/login\n- Create/edit/delete posts\n- Rich text editor\n- Categories\n- Comments\n- Admin panel' } },
          { id: 'php-83', number: 83, title: 'Project: E-commerce API', description: 'REST API backend', duration: '120 min', xp: 400, type: 'project', content: { instructions: ['RESTful endpoints', 'Product catalog', 'Shopping cart', 'Order processing'], starterCode: '', task: 'Build e-commerce API', validation: '/api/', expectedOutput: 'A complete REST API with:\n- Products CRUD\n- Categories\n- Cart management\n- Order creation\n- User authentication\n- Payment integration' } },
          { id: 'php-84', number: 84, title: 'Project: Task Management', description: 'Kanban-style app', duration: '100 min', xp: 350, type: 'project', content: { instructions: ['Project boards', 'Task CRUD', 'Drag and drop', 'Team collaboration'], starterCode: '', task: 'Build task manager', validation: 'class Task', expectedOutput: 'A complete task manager with:\n- Multiple projects\n- Task boards\n- Status columns\n- Due dates\n- Assignees\n- Comments' } },
          { id: 'php-85', number: 85, title: 'Project: File Sharing', description: 'Upload and share files', duration: '90 min', xp: 300, type: 'project', content: { instructions: ['File uploads', 'Share links', 'Access control', 'Download tracking'], starterCode: '', task: 'Build file sharing app', validation: 'upload', expectedOutput: 'A file sharing app with:\n- Secure uploads\n- Shareable links\n- Expiring links\n- Password protection\n- Download statistics' } },
          { id: 'php-86', number: 86, title: 'Project: URL Shortener', description: 'Link shortening service', duration: '60 min', xp: 200, type: 'project', content: { instructions: ['Shorten URLs', 'Track clicks', 'Analytics', 'Custom aliases'], starterCode: '', task: 'Build URL shortener', validation: 'redirect', expectedOutput: 'A URL shortener with:\n- Generate short links\n- Custom aliases\n- Click tracking\n- Analytics dashboard\n- API access' } },
          { id: 'php-87', number: 87, title: 'Project: Chat Application', description: 'Real-time messaging', duration: '100 min', xp: 350, type: 'project', content: { instructions: ['User rooms', 'Message history', 'Long polling', 'User presence'], starterCode: '', task: 'Build chat app', validation: 'Message', expectedOutput: 'A chat application with:\n- Multiple rooms\n- Private messages\n- Message history\n- User online status\n- Notifications' } },
          { id: 'php-88', number: 88, title: 'Capstone: Full Stack App', description: 'Complete web application', duration: '180 min', xp: 600, type: 'project', content: { instructions: ['Choose your project', 'Apply all concepts', 'Deploy to production', 'Document your code'], starterCode: '', task: 'Build capstone project', validation: '', expectedOutput: 'A complete application demonstrating:\n- MVC architecture\n- Database design\n- Authentication\n- API integration\n- Security best practices\n- Production deployment' } }
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
    totalLessons: 92,
    totalDuration: '46 hours',
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
          { id: 'cs-14', number: 14, title: 'HashSet & Queue', description: 'Other collections', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['HashSet<T> unique values', 'Queue<T> FIFO', 'Stack<T> LIFO'], starterCode: 'using System.Collections.Generic;\n', task: 'Use HashSet and Queue', validation: 'HashSet<', expectedOutput: 'HashSet<string> uniqueNames = new HashSet<string>();\nuniqueNames.Add("John");\nuniqueNames.Add("John"); // Won\'t add duplicate\n\nQueue<string> tasks = new Queue<string>();\ntasks.Enqueue("Task 1");\nstring next = tasks.Dequeue();' } },
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
          { id: 'cs-20', number: 20, title: 'Static Members', description: 'Class-level members', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['static belongs to class', 'static constructor', 'Cannot access instance members'], starterCode: '', task: 'Create static counter', validation: 'static int', expectedOutput: 'class User\n{\n    private static int _count = 0;\n    public static int Count => _count;\n    \n    public User()\n    {\n        _count++;\n    }\n    \n    public static void ResetCount()\n    {\n        _count = 0;\n    }\n}' } },
          { id: 'cs-21', number: 21, title: 'Chapter Practice', description: 'OOP project', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 5,
        title: 'Advanced OOP',
        description: 'Interfaces, abstracts, generics',
        lessons: [
          { id: 'cs-22', number: 22, title: 'Interfaces', description: 'Define contracts', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['interface IName { }', 'Members are implicitly public', 'Classes can implement multiple'], starterCode: '', task: 'Create and implement interface', validation: 'interface I', expectedOutput: 'interface IDrawable\n{\n    void Draw();\n}\n\ninterface IResizable\n{\n    void Resize(double factor);\n}\n\nclass Circle : IDrawable, IResizable\n{\n    public void Draw() => Console.WriteLine("Drawing");\n    public void Resize(double factor) { }\n}' } },
          { id: 'cs-23', number: 23, title: 'Abstract Classes', description: 'Partial implementations', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['abstract class cannot be instantiated', 'abstract methods must be implemented', 'Can have concrete methods too'], starterCode: '', task: 'Create abstract Shape class', validation: 'abstract class', expectedOutput: 'abstract class Shape\n{\n    public abstract double Area();\n    \n    public void Display()\n    {\n        Console.WriteLine($"Area: {Area()}");\n    }\n}\n\nclass Rectangle : Shape\n{\n    public double Width { get; set; }\n    public double Height { get; set; }\n    \n    public override double Area() => Width * Height;\n}' } },
          { id: 'cs-24', number: 24, title: 'Generics', description: 'Type-safe flexibility', duration: '25 min', xp: 85, type: 'lesson', content: { instructions: ['class Name<T>', 'Type constraints: where T : class', 'Generic methods too'], starterCode: '', task: 'Create a generic class', validation: '<T>', expectedOutput: 'class Box<T>\n{\n    public T Content { get; set; }\n    \n    public Box(T content)\n    {\n        Content = content;\n    }\n}\n\nvar intBox = new Box<int>(42);\nvar strBox = new Box<string>("Hello");' } },
          { id: 'cs-25', number: 25, title: 'Generic Constraints', description: 'Limit type parameters', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['where T : class', 'where T : struct', 'where T : new()'], starterCode: '', task: 'Use generic constraints', validation: 'where T :', expectedOutput: 'class Repository<T> where T : class, new()\n{\n    private List<T> _items = new();\n    \n    public T Create()\n    {\n        var item = new T();\n        _items.Add(item);\n        return item;\n    }\n}\n\ninterface IComparable<T>\npublic static T Max<T>(T a, T b) where T : IComparable<T>\n    => a.CompareTo(b) > 0 ? a : b;' } },
          { id: 'cs-26', number: 26, title: 'Extension Methods', description: 'Add methods to types', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['static class with static methods', 'this keyword on first parameter', 'Appears as instance method'], starterCode: '', task: 'Create a string extension', validation: 'this string', expectedOutput: 'static class StringExtensions\n{\n    public static bool IsNullOrEmpty(this string str)\n        => string.IsNullOrEmpty(str);\n    \n    public static string Reverse(this string str)\n        => new string(str.ToCharArray().Reverse().ToArray());\n    \n    public static int WordCount(this string str)\n        => str.Split(\' \', StringSplitOptions.RemoveEmptyEntries).Length;\n}' } },
          { id: 'cs-27', number: 27, title: 'Chapter Practice', description: 'Advanced OOP exercises', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 6,
        title: 'Exception Handling',
        description: 'Handle errors gracefully',
        lessons: [
          { id: 'cs-28', number: 28, title: 'Try-Catch-Finally', description: 'Basic exception handling', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['try-catch-finally', 'Specific exceptions first', 'finally always runs'], starterCode: '', task: 'Handle divide by zero', validation: 'try', expectedOutput: 'try\n{\n    int result = 10 / 0;\n}\ncatch (DivideByZeroException ex)\n{\n    Console.WriteLine("Cannot divide by zero");\n}\ncatch (Exception ex)\n{\n    Console.WriteLine($"Error: {ex.Message}");\n}\nfinally\n{\n    Console.WriteLine("Cleanup code");\n}' } },
          { id: 'cs-29', number: 29, title: 'Custom Exceptions', description: 'Create your own exceptions', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Inherit from Exception', 'Add custom properties', 'throw new CustomException()'], starterCode: '', task: 'Create ValidationException', validation: ': Exception', expectedOutput: 'class ValidationException : Exception\n{\n    public string Field { get; }\n    public object Value { get; }\n    \n    public ValidationException(string field, object value, string message) \n        : base(message)\n    {\n        Field = field;\n        Value = value;\n    }\n}' } },
          { id: 'cs-30', number: 30, title: 'Exception Filters', description: 'Conditional catching', duration: '15 min', xp: 45, type: 'lesson', content: { instructions: ['catch when (condition)', 'Filter without catching', 'Preserve stack trace'], starterCode: '', task: 'Use exception filters', validation: 'when (', expectedOutput: 'try\n{\n    await httpClient.GetAsync(url);\n}\ncatch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)\n{\n    Console.WriteLine("Resource not found");\n}\ncatch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.Unauthorized)\n{\n    Console.WriteLine("Not authorized");\n}' } },
          { id: 'cs-31', number: 31, title: 'Using & Dispose', description: 'Resource management', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['using statement auto-disposes', 'IDisposable interface', 'using declaration (C# 8)'], starterCode: '', task: 'Use resource management', validation: 'using (', expectedOutput: '// Classic using statement\nusing (var reader = new StreamReader("file.txt"))\n{\n    string content = reader.ReadToEnd();\n}\n\n// Using declaration (C# 8+)\nusing var writer = new StreamWriter("output.txt");\nwriter.WriteLine("Hello");\n// Automatically disposed at end of scope' } },
          { id: 'cs-32', number: 32, title: 'Chapter Practice', description: 'Exception handling exercises', duration: '35 min', xp: 120, type: 'practice' }
        ]
      },
      {
        id: 7,
        title: 'LINQ Deep Dive',
        description: 'Advanced LINQ operations',
        lessons: [
          { id: 'cs-33', number: 33, title: 'LINQ Query Syntax', description: 'SQL-like queries', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['from x in collection', 'where, orderby, select', 'join for combining'], starterCode: 'using System.Linq;\n', task: 'Write LINQ query', validation: 'from', expectedOutput: 'var query = from user in users\n            where user.Age > 18\n            orderby user.Name\n            select new { user.Name, user.Email };\n\n// Equivalent method syntax\nvar result = users\n    .Where(u => u.Age > 18)\n    .OrderBy(u => u.Name)\n    .Select(u => new { u.Name, u.Email });' } },
          { id: 'cs-34', number: 34, title: 'Aggregation Methods', description: 'Sum, Count, Average', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['Count, Sum, Average, Min, Max', 'Aggregate for custom', 'First, Last, Single'], starterCode: 'using System.Linq;\n', task: 'Use aggregation methods', validation: '.Sum(', expectedOutput: 'var numbers = new[] { 1, 2, 3, 4, 5 };\n\nint sum = numbers.Sum();\ndouble avg = numbers.Average();\nint max = numbers.Max();\nint count = numbers.Count(n => n > 2);\n\n// Custom aggregation\nstring joined = names.Aggregate((a, b) => $"{a}, {b}");' } },
          { id: 'cs-35', number: 35, title: 'Grouping & Joining', description: 'Combine data', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['GroupBy for categories', 'Join for related data', 'SelectMany for flattening'], starterCode: 'using System.Linq;\n', task: 'Group and join data', validation: '.GroupBy(', expectedOutput: '// Group by category\nvar grouped = products\n    .GroupBy(p => p.Category)\n    .Select(g => new { Category = g.Key, Count = g.Count() });\n\n// Join orders with customers\nvar orderDetails = orders\n    .Join(customers,\n          o => o.CustomerId,\n          c => c.Id,\n          (o, c) => new { o.OrderId, c.Name });' } },
          { id: 'cs-36', number: 36, title: 'Deferred Execution', description: 'Lazy evaluation', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Queries execute when iterated', 'ToList() forces execution', 'Be aware of side effects'], starterCode: 'using System.Linq;\n', task: 'Understand deferred execution', validation: '.ToList()', expectedOutput: 'var query = numbers.Where(n => {\n    Console.WriteLine($"Checking {n}");\n    return n > 5;\n});\n\n// Nothing printed yet!\n\n// Force execution\nvar result = query.ToList(); // Now it runs\n\n// Or iterate\nforeach (var n in query) { } // Runs again!' } },
          { id: 'cs-37', number: 37, title: 'Chapter Practice', description: 'LINQ project', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 8,
        title: 'Async/Await & Tasks',
        description: 'Asynchronous programming',
        lessons: [
          { id: 'cs-38', number: 38, title: 'Async Basics', description: 'Async/await fundamentals', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['async marks method', 'await pauses for result', 'Task<T> is the return type'], starterCode: 'using System.Threading.Tasks;\n', task: 'Create an async method', validation: 'async Task', expectedOutput: 'async Task<string> FetchDataAsync(string url)\n{\n    using var client = new HttpClient();\n    string data = await client.GetStringAsync(url);\n    return data;\n}\n\n// Usage\nstring result = await FetchDataAsync("https://api.example.com");' } },
          { id: 'cs-39', number: 39, title: 'Task Parallel Library', description: 'Parallel operations', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Task.Run for background work', 'Task.WhenAll for parallel', 'Task.WhenAny for first'], starterCode: 'using System.Threading.Tasks;\n', task: 'Run tasks in parallel', validation: 'Task.WhenAll', expectedOutput: 'async Task<int[]> FetchAllAsync(string[] urls)\n{\n    var tasks = urls.Select(async url => {\n        using var client = new HttpClient();\n        var response = await client.GetStringAsync(url);\n        return response.Length;\n    });\n    \n    return await Task.WhenAll(tasks);\n}' } },
          { id: 'cs-40', number: 40, title: 'Cancellation Tokens', description: 'Cancel async operations', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['CancellationTokenSource creates', 'Pass token to async methods', 'ThrowIfCancellationRequested'], starterCode: 'using System.Threading;\n', task: 'Implement cancellation', validation: 'CancellationToken', expectedOutput: 'async Task LongRunningTask(CancellationToken token)\n{\n    for (int i = 0; i < 100; i++)\n    {\n        token.ThrowIfCancellationRequested();\n        await Task.Delay(100, token);\n        Console.WriteLine($"Step {i}");\n    }\n}\n\nvar cts = new CancellationTokenSource();\ncts.CancelAfter(TimeSpan.FromSeconds(5));\nawait LongRunningTask(cts.Token);' } },
          { id: 'cs-41', number: 41, title: 'Async Streams', description: 'IAsyncEnumerable', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['async IAsyncEnumerable<T>', 'yield return in async', 'await foreach to consume'], starterCode: 'using System.Collections.Generic;\n', task: 'Create async stream', validation: 'IAsyncEnumerable', expectedOutput: 'async IAsyncEnumerable<int> GenerateNumbersAsync(int count)\n{\n    for (int i = 0; i < count; i++)\n    {\n        await Task.Delay(100);\n        yield return i;\n    }\n}\n\nawait foreach (var number in GenerateNumbersAsync(10))\n{\n    Console.WriteLine(number);\n}' } },
          { id: 'cs-42', number: 42, title: 'Chapter Practice', description: 'Async programming project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 9,
        title: 'File I/O & Serialization',
        description: 'Work with files and data',
        lessons: [
          { id: 'cs-43', number: 43, title: 'File Operations', description: 'Read and write files', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['File.ReadAllText/WriteAllText', 'File.Exists, Delete, Copy', 'Directory operations'], starterCode: 'using System.IO;\n', task: 'Perform file operations', validation: 'File.', expectedOutput: '// Write and read text\nFile.WriteAllText("data.txt", "Hello World");\nstring content = File.ReadAllText("data.txt");\n\n// Write lines\nFile.WriteAllLines("list.txt", new[] { "a", "b", "c" });\nstring[] lines = File.ReadAllLines("list.txt");\n\n// Check and manage\nif (File.Exists("old.txt"))\n    File.Delete("old.txt");' } },
          { id: 'cs-44', number: 44, title: 'Streams', description: 'Streaming data', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['StreamReader/StreamWriter', 'FileStream for binary', 'MemoryStream for in-memory'], starterCode: 'using System.IO;\n', task: 'Work with streams', validation: 'StreamReader', expectedOutput: 'using (var reader = new StreamReader("large.txt"))\n{\n    string line;\n    while ((line = await reader.ReadLineAsync()) != null)\n    {\n        Console.WriteLine(line);\n    }\n}\n\nusing (var writer = new StreamWriter("output.txt"))\n{\n    await writer.WriteLineAsync("Line 1");\n    await writer.WriteLineAsync("Line 2");\n}' } },
          { id: 'cs-45', number: 45, title: 'JSON Serialization', description: 'System.Text.Json', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['JsonSerializer.Serialize/Deserialize', 'JsonPropertyName attribute', 'Configure with options'], starterCode: 'using System.Text.Json;\n', task: 'Serialize and deserialize JSON', validation: 'JsonSerializer', expectedOutput: 'var person = new Person { Name = "John", Age = 30 };\n\n// Serialize\nstring json = JsonSerializer.Serialize(person, new JsonSerializerOptions\n{\n    WriteIndented = true\n});\n\n// Deserialize\nvar loaded = JsonSerializer.Deserialize<Person>(json);\n\n// Async file operations\nawait File.WriteAllTextAsync("person.json", json);\nstring jsonContent = await File.ReadAllTextAsync("person.json");' } },
          { id: 'cs-46', number: 46, title: 'XML Handling', description: 'Work with XML', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['XDocument for LINQ to XML', 'XmlSerializer for objects', 'XPath queries'], starterCode: 'using System.Xml.Linq;\n', task: 'Parse and create XML', validation: 'XDocument', expectedOutput: 'var doc = new XDocument(\n    new XElement("users",\n        new XElement("user",\n            new XAttribute("id", 1),\n            new XElement("name", "John"),\n            new XElement("email", "john@test.com")\n        )\n    )\n);\n\ndoc.Save("users.xml");\n\n// Query\nvar names = doc.Descendants("name").Select(x => x.Value);' } },
          { id: 'cs-47', number: 47, title: 'Chapter Practice', description: 'File I/O project', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 10,
        title: 'Delegates & Events',
        description: 'Function references and events',
        lessons: [
          { id: 'cs-48', number: 48, title: 'Delegates', description: 'Function references', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['delegate keyword defines type', 'Func<> and Action<> built-in', 'Multicast delegates'], starterCode: '', task: 'Create and use delegates', validation: 'delegate', expectedOutput: '// Define delegate\ndelegate int MathOperation(int a, int b);\n\n// Use\nMathOperation add = (a, b) => a + b;\nMathOperation multiply = (a, b) => a * b;\n\nint result = add(5, 3); // 8\n\n// Built-in delegates\nFunc<int, int, int> subtract = (a, b) => a - b;\nAction<string> print = msg => Console.WriteLine(msg);' } },
          { id: 'cs-49', number: 49, title: 'Events', description: 'Publisher-subscriber pattern', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['event keyword', 'EventHandler<T> convention', 'Raise events safely'], starterCode: '', task: 'Implement events', validation: 'event', expectedOutput: 'class Button\n{\n    public event EventHandler<ClickEventArgs> Clicked;\n    \n    protected virtual void OnClicked(ClickEventArgs e)\n    {\n        Clicked?.Invoke(this, e);\n    }\n    \n    public void Click()\n    {\n        OnClicked(new ClickEventArgs { X = 100, Y = 50 });\n    }\n}\n\n// Subscribe\nbutton.Clicked += (sender, e) => Console.WriteLine($"Clicked at {e.X}, {e.Y}");' } },
          { id: 'cs-50', number: 50, title: 'Lambda Expressions', description: 'Anonymous functions', duration: '20 min', xp: 65, type: 'lesson', content: { instructions: ['(params) => expression', 'Statement lambdas with {}', 'Capture outer variables'], starterCode: '', task: 'Use lambda expressions', validation: '=>', expectedOutput: '// Expression lambda\nFunc<int, int> square = x => x * x;\n\n// Statement lambda\nFunc<int, int> factorial = n =>\n{\n    int result = 1;\n    for (int i = 2; i <= n; i++)\n        result *= i;\n    return result;\n};\n\n// In LINQ\nvar adults = people.Where(p => p.Age >= 18)\n                   .OrderBy(p => p.Name);' } },
          { id: 'cs-51', number: 51, title: 'Expression Trees', description: 'Code as data', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Expression<Func<T>>  ', 'Compile to execute', 'Used by ORMs like EF'], starterCode: 'using System.Linq.Expressions;\n', task: 'Create expression tree', validation: 'Expression<', expectedOutput: '// Expression tree\nExpression<Func<int, bool>> isEven = n => n % 2 == 0;\n\n// Compile to delegate\nFunc<int, bool> compiled = isEven.Compile();\nbool result = compiled(4); // true\n\n// Analyze the expression\nvar param = isEven.Parameters[0];\nvar body = isEven.Body;\nConsole.WriteLine($"Parameter: {param.Name}");\nConsole.WriteLine($"Body: {body}");' } },
          { id: 'cs-52', number: 52, title: 'Chapter Practice', description: 'Delegates & events project', duration: '40 min', xp: 140, type: 'practice' }
        ]
      },
      {
        id: 11,
        title: 'HTTP & Web APIs',
        description: 'Consume web services',
        lessons: [
          { id: 'cs-53', number: 53, title: 'HttpClient Basics', description: 'Make HTTP requests', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Use HttpClient for requests', 'GetAsync, PostAsync, etc.', 'Always dispose or use factory'], starterCode: 'using System.Net.Http;\n', task: 'Make HTTP GET request', validation: 'HttpClient', expectedOutput: 'using var client = new HttpClient();\nclient.DefaultRequestHeaders.Add("Accept", "application/json");\n\nvar response = await client.GetAsync("https://api.example.com/users");\nresponse.EnsureSuccessStatusCode();\n\nstring content = await response.Content.ReadAsStringAsync();\nvar users = JsonSerializer.Deserialize<List<User>>(content);' } },
          { id: 'cs-54', number: 54, title: 'POST & PUT Requests', description: 'Send data to APIs', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['StringContent for body', 'PostAsJsonAsync helper', 'Handle response codes'], starterCode: 'using System.Net.Http.Json;\n', task: 'POST JSON data', validation: 'PostAsJsonAsync', expectedOutput: 'using var client = new HttpClient();\n\nvar newUser = new User { Name = "John", Email = "john@test.com" };\n\n// Easy way\nvar response = await client.PostAsJsonAsync("https://api.example.com/users", newUser);\n\n// Manual way\nvar json = JsonSerializer.Serialize(newUser);\nvar content = new StringContent(json, Encoding.UTF8, "application/json");\nvar response2 = await client.PostAsync(url, content);' } },
          { id: 'cs-55', number: 55, title: 'HttpClientFactory', description: 'Best practices', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['IHttpClientFactory in DI', 'Named and typed clients', 'Manages connection pooling'], starterCode: '', task: 'Use HttpClientFactory', validation: 'IHttpClientFactory', expectedOutput: '// In Startup/Program.cs\nservices.AddHttpClient("github", client =>\n{\n    client.BaseAddress = new Uri("https://api.github.com");\n    client.DefaultRequestHeaders.Add("User-Agent", "MyApp");\n});\n\n// In service\npublic class GitHubService\n{\n    private readonly HttpClient _client;\n    \n    public GitHubService(IHttpClientFactory factory)\n    {\n        _client = factory.CreateClient("github");\n    }\n}' } },
          { id: 'cs-56', number: 56, title: 'Error Handling & Retry', description: 'Resilient HTTP calls', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Handle HttpRequestException', 'Polly for retry policies', 'Timeout handling'], starterCode: '', task: 'Add retry logic', validation: 'Polly', expectedOutput: '// With Polly NuGet package\nservices.AddHttpClient("api")\n    .AddTransientHttpErrorPolicy(p => \n        p.WaitAndRetryAsync(3, attempt => \n            TimeSpan.FromSeconds(Math.Pow(2, attempt))))\n    .AddTransientHttpErrorPolicy(p => \n        p.CircuitBreakerAsync(5, TimeSpan.FromSeconds(30)));\n\n// Manual retry\nint retries = 3;\nwhile (retries > 0)\n{\n    try { return await client.GetAsync(url); }\n    catch { retries--; await Task.Delay(1000); }\n}' } },
          { id: 'cs-57', number: 57, title: 'Chapter Practice', description: 'HTTP client project', duration: '45 min', xp: 160, type: 'practice' }
        ]
      },
      {
        id: 12,
        title: 'Entity Framework Core',
        description: 'Database access with EF',
        lessons: [
          { id: 'cs-58', number: 58, title: 'EF Core Setup', description: 'Configure DbContext', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Install EF Core packages', 'Create DbContext class', 'Configure connection string'], starterCode: '', task: 'Set up DbContext', validation: 'DbContext', expectedOutput: 'public class AppDbContext : DbContext\n{\n    public DbSet<User> Users { get; set; }\n    public DbSet<Post> Posts { get; set; }\n    \n    protected override void OnConfiguring(DbContextOptionsBuilder options)\n        => options.UseSqlServer(\n            "Server=localhost;Database=MyApp;Trusted_Connection=true;");\n    \n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n    {\n        modelBuilder.Entity<User>().HasMany(u => u.Posts);\n    }\n}' } },
          { id: 'cs-59', number: 59, title: 'CRUD Operations', description: 'Create, Read, Update, Delete', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['Add, Find, Update, Remove', 'SaveChangesAsync commits', 'AsNoTracking for reads'], starterCode: '', task: 'Implement CRUD', validation: 'SaveChangesAsync', expectedOutput: 'using var db = new AppDbContext();\n\n// Create\ndb.Users.Add(new User { Name = "John" });\nawait db.SaveChangesAsync();\n\n// Read\nvar user = await db.Users.FindAsync(1);\nvar users = await db.Users.Where(u => u.IsActive).ToListAsync();\n\n// Update\nuser.Name = "Jane";\nawait db.SaveChangesAsync();\n\n// Delete\ndb.Users.Remove(user);\nawait db.SaveChangesAsync();' } },
          { id: 'cs-60', number: 60, title: 'Migrations', description: 'Database versioning', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Add-Migration creates migration', 'Update-Database applies', 'Script-Migration for SQL'], starterCode: '', task: 'Create and apply migration', validation: 'Migration', expectedOutput: '# In Package Manager Console\nAdd-Migration InitialCreate\nUpdate-Database\n\n# Or with dotnet CLI\ndotnet ef migrations add InitialCreate\ndotnet ef database update\n\n# Generate SQL script\ndotnet ef migrations script\n\n# Rollback\nUpdate-Database PreviousMigrationName' } },
          { id: 'cs-61', number: 61, title: 'Relationships', description: 'Configure entity relations', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['One-to-many, many-to-many', 'Navigation properties', 'Fluent API configuration'], starterCode: '', task: 'Set up relationships', validation: 'HasMany', expectedOutput: 'public class User\n{\n    public int Id { get; set; }\n    public string Name { get; set; }\n    public ICollection<Post> Posts { get; set; }\n}\n\npublic class Post\n{\n    public int Id { get; set; }\n    public string Title { get; set; }\n    public int UserId { get; set; }\n    public User User { get; set; }\n}\n\n// Fluent API\nmodelBuilder.Entity<User>()\n    .HasMany(u => u.Posts)\n    .WithOne(p => p.User)\n    .HasForeignKey(p => p.UserId);' } },
          { id: 'cs-62', number: 62, title: 'Chapter Practice', description: 'EF Core project', duration: '55 min', xp: 200, type: 'practice' }
        ]
      },
      {
        id: 13,
        title: 'ASP.NET Core Web API',
        description: 'Build REST APIs',
        lessons: [
          { id: 'cs-63', number: 63, title: 'Web API Basics', description: 'Create API project', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['dotnet new webapi', 'Controllers handle requests', 'Attribute routing'], starterCode: '', task: 'Create first endpoint', validation: '[ApiController]', expectedOutput: '[ApiController]\n[Route("api/[controller]")]\npublic class UsersController : ControllerBase\n{\n    [HttpGet]\n    public IActionResult GetAll()\n    {\n        return Ok(new[] { "User1", "User2" });\n    }\n    \n    [HttpGet("{id}")]\n    public IActionResult GetById(int id)\n    {\n        return Ok(new { Id = id, Name = "John" });\n    }\n}' } },
          { id: 'cs-64', number: 64, title: 'CRUD Endpoints', description: 'RESTful operations', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['HttpGet, HttpPost, HttpPut, HttpDelete', 'FromBody, FromRoute, FromQuery', 'Return proper status codes'], starterCode: '', task: 'Implement CRUD endpoints', validation: '[HttpPost]', expectedOutput: '[HttpPost]\npublic async Task<IActionResult> Create([FromBody] CreateUserDto dto)\n{\n    var user = await _userService.CreateAsync(dto);\n    return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);\n}\n\n[HttpPut("{id}")]\npublic async Task<IActionResult> Update(int id, [FromBody] UpdateUserDto dto)\n{\n    await _userService.UpdateAsync(id, dto);\n    return NoContent();\n}\n\n[HttpDelete("{id}")]\npublic async Task<IActionResult> Delete(int id)\n{\n    await _userService.DeleteAsync(id);\n    return NoContent();\n}' } },
          { id: 'cs-65', number: 65, title: 'Dependency Injection', description: 'Service registration', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['AddScoped, AddSingleton, AddTransient', 'Constructor injection', 'IServiceCollection configuration'], starterCode: '', task: 'Register and inject services', validation: 'AddScoped', expectedOutput: '// Program.cs\nbuilder.Services.AddScoped<IUserRepository, UserRepository>();\nbuilder.Services.AddScoped<IUserService, UserService>();\nbuilder.Services.AddDbContext<AppDbContext>();\n\n// Controller\npublic class UsersController : ControllerBase\n{\n    private readonly IUserService _userService;\n    \n    public UsersController(IUserService userService)\n    {\n        _userService = userService;\n    }\n}' } },
          { id: 'cs-66', number: 66, title: 'Middleware & Filters', description: 'Request pipeline', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Custom middleware', 'Action filters', 'Exception handling middleware'], starterCode: '', task: 'Create custom middleware', validation: 'IMiddleware', expectedOutput: 'public class LoggingMiddleware : IMiddleware\n{\n    private readonly ILogger _logger;\n    \n    public async Task InvokeAsync(HttpContext context, RequestDelegate next)\n    {\n        _logger.LogInformation($"Request: {context.Request.Path}");\n        var sw = Stopwatch.StartNew();\n        \n        await next(context);\n        \n        _logger.LogInformation($"Response: {sw.ElapsedMilliseconds}ms");\n    }\n}\n\n// Register\napp.UseMiddleware<LoggingMiddleware>();' } },
          { id: 'cs-67', number: 67, title: 'Authentication & JWT', description: 'Secure your API', duration: '30 min', xp: 100, type: 'lesson', content: { instructions: ['JWT Bearer authentication', 'Generate tokens', 'Authorize attribute'], starterCode: '', task: 'Implement JWT auth', validation: '[Authorize]', expectedOutput: 'builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)\n    .AddJwtBearer(options =>\n    {\n        options.TokenValidationParameters = new TokenValidationParameters\n        {\n            ValidateIssuer = true,\n            ValidIssuer = "MyApp",\n            ValidateAudience = true,\n            ValidAudience = "MyApp",\n            IssuerSigningKey = new SymmetricSecurityKey(\n                Encoding.UTF8.GetBytes("your-secret-key"))\n        };\n    });\n\n[Authorize]\n[HttpGet("profile")]\npublic IActionResult GetProfile() { }' } },
          { id: 'cs-68', number: 68, title: 'Chapter Practice', description: 'Web API project', duration: '60 min', xp: 220, type: 'practice' }
        ]
      },
      {
        id: 14,
        title: 'Unit Testing',
        description: 'Test your code',
        lessons: [
          { id: 'cs-69', number: 69, title: 'xUnit Basics', description: 'First unit tests', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['[Fact] for simple tests', '[Theory] for data-driven', 'Assert methods'], starterCode: '', task: 'Write basic tests', validation: '[Fact]', expectedOutput: 'public class CalculatorTests\n{\n    [Fact]\n    public void Add_TwoNumbers_ReturnsSum()\n    {\n        var calculator = new Calculator();\n        \n        var result = calculator.Add(2, 3);\n        \n        Assert.Equal(5, result);\n    }\n    \n    [Theory]\n    [InlineData(1, 1, 2)]\n    [InlineData(5, 3, 8)]\n    public void Add_MultipleInputs_ReturnsSum(int a, int b, int expected)\n    {\n        Assert.Equal(expected, new Calculator().Add(a, b));\n    }\n}' } },
          { id: 'cs-70', number: 70, title: 'Mocking with Moq', description: 'Isolate dependencies', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Mock<T> creates mock', 'Setup defines behavior', 'Verify checks calls'], starterCode: '', task: 'Mock a dependency', validation: 'Mock<', expectedOutput: 'public class UserServiceTests\n{\n    [Fact]\n    public async Task GetUser_ExistingId_ReturnsUser()\n    {\n        var mockRepo = new Mock<IUserRepository>();\n        mockRepo.Setup(r => r.GetByIdAsync(1))\n                .ReturnsAsync(new User { Id = 1, Name = "John" });\n        \n        var service = new UserService(mockRepo.Object);\n        \n        var user = await service.GetUserAsync(1);\n        \n        Assert.Equal("John", user.Name);\n        mockRepo.Verify(r => r.GetByIdAsync(1), Times.Once);\n    }\n}' } },
          { id: 'cs-71', number: 71, title: 'Testing Controllers', description: 'Integration tests', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['WebApplicationFactory', 'HttpClient for requests', 'Test database'], starterCode: '', task: 'Test API endpoints', validation: 'WebApplicationFactory', expectedOutput: 'public class UsersControllerTests : IClassFixture<WebApplicationFactory<Program>>\n{\n    private readonly HttpClient _client;\n    \n    public UsersControllerTests(WebApplicationFactory<Program> factory)\n    {\n        _client = factory.CreateClient();\n    }\n    \n    [Fact]\n    public async Task GetUsers_ReturnsSuccess()\n    {\n        var response = await _client.GetAsync("/api/users");\n        \n        response.EnsureSuccessStatusCode();\n        var users = await response.Content.ReadFromJsonAsync<List<User>>();\n        Assert.NotEmpty(users);\n    }\n}' } },
          { id: 'cs-72', number: 72, title: 'Test Coverage', description: 'Measure coverage', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Install coverlet', 'Generate coverage reports', 'Aim for meaningful coverage'], starterCode: '', task: 'Generate coverage report', validation: 'coverlet', expectedOutput: '# Install coverlet\ndotnet add package coverlet.collector\n\n# Run with coverage\ndotnet test --collect:"XPlat Code Coverage"\n\n# Generate HTML report\nreportgenerator -reports:"coverage.cobertura.xml" -targetdir:"coveragereport"\n\n# With specific threshold\ndotnet test /p:CollectCoverage=true /p:Threshold=80' } },
          { id: 'cs-73', number: 73, title: 'Chapter Practice', description: 'Testing project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 15,
        title: 'Design Patterns',
        description: 'Common solutions',
        lessons: [
          { id: 'cs-74', number: 74, title: 'Singleton Pattern', description: 'Single instance', duration: '18 min', xp: 55, type: 'lesson', content: { instructions: ['Private constructor', 'Static instance', 'Thread-safe with Lazy<T>'], starterCode: '', task: 'Implement Singleton', validation: 'Lazy<', expectedOutput: 'public sealed class Logger\n{\n    private static readonly Lazy<Logger> _instance = \n        new Lazy<Logger>(() => new Logger());\n    \n    public static Logger Instance => _instance.Value;\n    \n    private Logger() { }\n    \n    public void Log(string message)\n    {\n        Console.WriteLine($"[{DateTime.Now}] {message}");\n    }\n}' } },
          { id: 'cs-75', number: 75, title: 'Factory Pattern', description: 'Object creation', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Abstract factory method', 'Return interface types', 'Decouple creation logic'], starterCode: '', task: 'Implement Factory', validation: 'IFactory', expectedOutput: 'public interface INotificationFactory\n{\n    INotification CreateNotification();\n}\n\npublic class EmailNotificationFactory : INotificationFactory\n{\n    public INotification CreateNotification() => new EmailNotification();\n}\n\npublic class SmsNotificationFactory : INotificationFactory\n{\n    public INotification CreateNotification() => new SmsNotification();\n}\n\n// Usage\npublic void SendNotification(INotificationFactory factory)\n{\n    var notification = factory.CreateNotification();\n    notification.Send("Hello!");\n}' } },
          { id: 'cs-76', number: 76, title: 'Repository Pattern', description: 'Data access abstraction', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Interface for data access', 'Generic repository', 'Unit of Work pattern'], starterCode: '', task: 'Implement Repository', validation: 'IRepository', expectedOutput: 'public interface IRepository<T> where T : class\n{\n    Task<T> GetByIdAsync(int id);\n    Task<IEnumerable<T>> GetAllAsync();\n    Task AddAsync(T entity);\n    void Update(T entity);\n    void Delete(T entity);\n}\n\npublic class Repository<T> : IRepository<T> where T : class\n{\n    private readonly DbContext _context;\n    private readonly DbSet<T> _dbSet;\n    \n    public Repository(DbContext context)\n    {\n        _context = context;\n        _dbSet = context.Set<T>();\n    }\n    \n    public async Task<T> GetByIdAsync(int id) => await _dbSet.FindAsync(id);\n}' } },
          { id: 'cs-77', number: 77, title: 'Strategy Pattern', description: 'Interchangeable algorithms', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['Define strategy interface', 'Implement variations', 'Context uses strategy'], starterCode: '', task: 'Implement Strategy', validation: 'IStrategy', expectedOutput: 'public interface IPaymentStrategy\n{\n    Task<bool> ProcessPaymentAsync(decimal amount);\n}\n\npublic class CreditCardPayment : IPaymentStrategy\n{\n    public async Task<bool> ProcessPaymentAsync(decimal amount)\n    {\n        // Process credit card\n        return true;\n    }\n}\n\npublic class PaymentProcessor\n{\n    private IPaymentStrategy _strategy;\n    \n    public void SetStrategy(IPaymentStrategy strategy) => _strategy = strategy;\n    \n    public Task<bool> ProcessAsync(decimal amount) => _strategy.ProcessPaymentAsync(amount);\n}' } },
          { id: 'cs-78', number: 78, title: 'Observer Pattern', description: 'Event notifications', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['IObservable<T> publisher', 'IObserver<T> subscriber', 'Or use events'], starterCode: '', task: 'Implement Observer', validation: 'IObserver', expectedOutput: 'public class StockTicker : IObservable<StockPrice>\n{\n    private List<IObserver<StockPrice>> _observers = new();\n    \n    public IDisposable Subscribe(IObserver<StockPrice> observer)\n    {\n        _observers.Add(observer);\n        return new Unsubscriber(_observers, observer);\n    }\n    \n    public void UpdatePrice(string symbol, decimal price)\n    {\n        foreach (var observer in _observers)\n            observer.OnNext(new StockPrice(symbol, price));\n    }\n}' } },
          { id: 'cs-79', number: 79, title: 'Chapter Practice', description: 'Design patterns project', duration: '50 min', xp: 180, type: 'practice' }
        ]
      },
      {
        id: 16,
        title: 'Final Projects',
        description: 'Complete applications',
        lessons: [
          { id: 'cs-80', number: 80, title: 'Project: Console App', description: 'CLI application', duration: '90 min', xp: 300, type: 'project', content: { instructions: ['Command-line interface', 'File operations', 'Configuration'], starterCode: '', task: 'Build task manager CLI', validation: 'class Program', expectedOutput: 'A console task manager with:\n- Add/edit/delete tasks\n- Mark as complete\n- Save to JSON file\n- Filter and sort\n- Color output' } },
          { id: 'cs-81', number: 81, title: 'Project: REST API', description: 'Web API application', duration: '120 min', xp: 400, type: 'project', content: { instructions: ['ASP.NET Core Web API', 'Entity Framework Core', 'JWT Authentication'], starterCode: '', task: 'Build blog API', validation: 'WebApplication', expectedOutput: 'A complete blog REST API with:\n- User registration/login\n- CRUD for posts\n- Comments system\n- JWT authentication\n- Role-based authorization' } },
          { id: 'cs-82', number: 82, title: 'Project: Desktop App', description: 'WPF or WinForms', duration: '120 min', xp: 400, type: 'project', content: { instructions: ['Windows desktop UI', 'MVVM pattern', 'Data binding'], starterCode: '', task: 'Build note-taking app', validation: 'Window', expectedOutput: 'A desktop notes app with:\n- Create/edit notes\n- Rich text formatting\n- Categories/tags\n- Search functionality\n- Local database storage' } },
          { id: 'cs-83', number: 83, title: 'Project: Library System', description: 'OOP showcase', duration: '100 min', xp: 350, type: 'project', content: { instructions: ['Class hierarchy', 'Interfaces', 'SOLID principles'], starterCode: '', task: 'Build library management', validation: 'class Book', expectedOutput: 'A library system with:\n- Books and members\n- Borrowing/returning\n- Fines calculation\n- Search and reports\n- Reservation system' } },
          { id: 'cs-84', number: 84, title: 'Project: E-commerce API', description: 'Full-featured API', duration: '150 min', xp: 500, type: 'project', content: { instructions: ['Product catalog', 'Shopping cart', 'Order processing', 'Payment integration'], starterCode: '', task: 'Build e-commerce backend', validation: 'Order', expectedOutput: 'An e-commerce API with:\n- Products and categories\n- Shopping cart\n- Checkout flow\n- Order management\n- Inventory tracking' } },
          { id: 'cs-85', number: 85, title: 'Project: Real-time Chat', description: 'SignalR application', duration: '100 min', xp: 350, type: 'project', content: { instructions: ['SignalR hub', 'Real-time messaging', 'User presence'], starterCode: '', task: 'Build chat application', validation: 'Hub', expectedOutput: 'A real-time chat with:\n- Multiple rooms\n- Private messaging\n- User presence\n- Message history\n- Typing indicators' } },
          { id: 'cs-86', number: 86, title: 'Project: Microservice', description: 'Distributed system', duration: '120 min', xp: 400, type: 'project', content: { instructions: ['Docker containers', 'API Gateway', 'Message queue'], starterCode: '', task: 'Build microservices', validation: 'Docker', expectedOutput: 'A microservices architecture with:\n- Multiple services\n- API Gateway\n- Message broker\n- Service discovery\n- Health checks' } },
          { id: 'cs-87', number: 87, title: 'Project: Game with Unity', description: 'Unity basics', duration: '150 min', xp: 500, type: 'project', content: { instructions: ['Unity fundamentals', 'C# scripting', 'Game mechanics'], starterCode: '', task: 'Build simple game', validation: 'MonoBehaviour', expectedOutput: 'A 2D game with:\n- Player movement\n- Enemies\n- Collision detection\n- Score system\n- Game over/restart' } },
          { id: 'cs-88', number: 88, title: 'Capstone: Full Stack', description: 'Complete application', duration: '180 min', xp: 600, type: 'project', content: { instructions: ['Choose your project', 'Apply all concepts', 'Production-ready'], starterCode: '', task: 'Build full application', validation: '', expectedOutput: 'A production-ready application:\n- Clean architecture\n- Unit tests\n- API documentation\n- Docker deployment\n- CI/CD pipeline' } }
        ]
      },
      {
        id: 17,
        title: 'Advanced Topics',
        description: 'Expert-level concepts',
        lessons: [
          { id: 'cs-89', number: 89, title: 'Records & Structs', description: 'Value types', duration: '22 min', xp: 70, type: 'lesson', content: { instructions: ['record for immutable data', 'struct for value types', 'record struct combination'], starterCode: '', task: 'Use records and structs', validation: 'record', expectedOutput: 'public record Person(string Name, int Age);\n\npublic record class PersonClass(string Name, int Age);\n\npublic readonly record struct Point(int X, int Y);\n\n// With expressions\nvar p1 = new Person("John", 30);\nvar p2 = p1 with { Age = 31 };\n\n// Deconstruction\nvar (name, age) = p1;' } },
          { id: 'cs-90', number: 90, title: 'Pattern Matching', description: 'Advanced patterns', duration: '25 min', xp: 80, type: 'lesson', content: { instructions: ['Type patterns', 'Property patterns', 'Relational patterns'], starterCode: '', task: 'Use pattern matching', validation: 'is', expectedOutput: 'string Describe(object obj) => obj switch\n{\n    int n when n < 0 => "negative",\n    int n => $"positive: {n}",\n    string { Length: > 10 } s => $"long string: {s[..10]}...",\n    string s => s,\n    Person { Age: >= 18 } p => $"adult: {p.Name}",\n    Person p => $"minor: {p.Name}",\n    null => "null",\n    _ => "unknown"\n};' } },
          { id: 'cs-91', number: 91, title: 'Span & Memory', description: 'High-performance code', duration: '28 min', xp: 90, type: 'lesson', content: { instructions: ['Span<T> for slicing', 'Memory<T> for async', 'Avoid allocations'], starterCode: '', task: 'Use Span for performance', validation: 'Span<', expectedOutput: 'void ProcessData(ReadOnlySpan<byte> data)\n{\n    var header = data[..4];\n    var body = data[4..];\n    // No allocation, just views into original data\n}\n\nint CountSpaces(ReadOnlySpan<char> text)\n{\n    int count = 0;\n    foreach (char c in text)\n        if (c == \' \') count++;\n    return count;\n}\n\nstring text = "Hello World";\nint spaces = CountSpaces(text.AsSpan());' } },
          { id: 'cs-92', number: 92, title: 'Source Generators', description: 'Compile-time code gen', duration: '30 min', xp: 100, type: 'lesson', content: { instructions: ['[Generator] attribute', 'Analyze syntax trees', 'Generate source code'], starterCode: '', task: 'Create source generator', validation: '[Generator]', expectedOutput: '[Generator]\npublic class AutoNotifyGenerator : ISourceGenerator\n{\n    public void Initialize(GeneratorInitializationContext context)\n    {\n        context.RegisterForSyntaxNotifications(() => \n            new SyntaxReceiver());\n    }\n    \n    public void Execute(GeneratorExecutionContext context)\n    {\n        // Generate INotifyPropertyChanged\n        // implementations at compile time\n    }\n}\n\n// Usage: [AutoNotify] auto-generates property change notifications' } }
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
