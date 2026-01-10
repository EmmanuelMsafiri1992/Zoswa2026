# Zoswa - Interactive Coding Learning Platform

A premium interactive learning platform where users learn coding by **doing**, not watching videos. Features an embedded VS Code-style editor, gamification, and comprehensive learning paths.

![Zoswa Preview](https://via.placeholder.com/800x400/0a0a0f/00fff5?text=Zoswa+Learning+Platform)

## Features

### Learning Tracks
- **Frontend Developer** - HTML, CSS, JavaScript, React, TypeScript
- **Backend Developer** - Node.js, Express, MongoDB, REST APIs
- **Full Stack Developer** - Complete web development
- **DevOps & Cloud** - Docker, Kubernetes, AWS, Azure, CI/CD
- **AI Engineering** - Python, ML, TensorFlow, LLMs
- **Computer Basics** - Office, OS, typing, digital skills

### Platform Features
- **Interactive Code Editor** - Monaco Editor (VS Code engine) in browser
- **Live Preview** - See your code results instantly
- **Step-by-Step Instructions** - Guided learning experience
- **Gamification** - XP points, badges, streaks, leaderboards
- **Certificates** - Downloadable certificates on completion
- **7-Day Free Trial** - Full access, no credit card required
- **$7/Month Subscription** - PayPal only

## Tech Stack

### Frontend
- React 18 + Vite
- TailwindCSS with custom dark theme
- Monaco Editor (VS Code engine)
- Framer Motion (animations)
- React Router v6
- Zustand (state management)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- PayPal Subscription API

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- PayPal Developer Account (for subscriptions)

### Installation

1. **Clone the repository**
```bash
cd zoswa
```

2. **Install frontend dependencies**
```bash
cd client
npm install
```

3. **Install backend dependencies**
```bash
cd ../server
npm install
```

4. **Set up environment variables**

Create `.env` file in the `server` folder:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/zoswa
JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_EXPIRE=30d
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
NODE_ENV=development
```

5. **Start MongoDB** (if running locally)
```bash
mongod
```

6. **Run the development servers**

In one terminal (backend):
```bash
cd server
npm run dev
```

In another terminal (frontend):
```bash
cd client
npm run dev
```

7. **Open your browser**
Navigate to `http://localhost:3000`

## Project Structure

```
zoswa/
├── client/                    # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── layout/        # Layout components
│   │   │   ├── ui/            # UI components
│   │   │   ├── auth/          # Auth components
│   │   │   └── subscription/  # Subscription components
│   │   ├── pages/             # Page components
│   │   ├── store/             # Zustand stores
│   │   ├── services/          # API services
│   │   └── styles/            # Global styles
│   ├── package.json
│   └── vite.config.js
│
├── server/                    # Node.js Backend
│   ├── config/                # Configuration
│   ├── models/                # Mongoose models
│   ├── routes/                # Express routes
│   ├── middleware/            # Custom middleware
│   ├── server.js              # Entry point
│   └── package.json
│
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Progress
- `GET /api/progress` - Get user progress
- `POST /api/progress/xp` - Add XP
- `POST /api/progress/lesson` - Complete lesson
- `POST /api/progress/badge` - Award badge

### Subscription
- `GET /api/subscription/status` - Get subscription status
- `POST /api/subscription/activate` - Activate subscription
- `POST /api/subscription/cancel` - Cancel subscription
- `POST /api/subscription/webhook` - PayPal webhook

## Setting Up PayPal

1. Go to [PayPal Developer](https://developer.paypal.com/)
2. Create a new app
3. Get your Client ID and Secret
4. Create a subscription plan ($7/month)
5. Add the Plan ID to your frontend code

## Demo Account

For testing, use:
- **Email:** demo@zoswa.com
- **Password:** demo123

## Customization

### Adding New Lessons
Edit the lesson content in `client/src/pages/Learn.jsx`:

```javascript
const lessonContent = {
  'new-lesson-id': {
    title: 'Lesson Title',
    module: 'Module Name',
    track: 'Track Name',
    xp: 50,
    language: 'javascript',
    steps: [
      {
        instruction: 'What to learn',
        task: 'What to do',
        hint: 'Help text',
        validation: { type: 'contains', value: 'expected code' }
      }
    ],
    starterCode: '',
    expectedCode: 'final code'
  }
}
```

### Changing Theme Colors
Edit `client/tailwind.config.js`:

```javascript
colors: {
  neon: {
    cyan: '#00fff5',
    purple: '#bf00ff',
    // ... customize colors
  }
}
```

## Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy dist folder
```

### Backend (Railway/Render/DigitalOcean)
```bash
cd server
# Set environment variables
# Deploy server.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@zoswa.com or open an issue.

---

Made with ❤️ for learners worldwide
