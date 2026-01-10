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
