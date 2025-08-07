# 🎓 EduChat AI - Student-Focused AI Assistant

An intelligent ChatGPT-like interface powered by Google's Gemini AI, specifically designed for students with enhanced learning features and academic tools.

## 🌟 Features

### Core Chat Functionality
- Real-time AI conversations using Google Gemini
- Clean, intuitive chat interface
- Conversation history management
- Dark/Light theme support

### Student-Focused Features (Planned)
- 📝 **Academic Tools**: Code execution, LaTeX rendering, citation generator
- 📚 **Study Assistance**: Flashcard creator, quiz generator, note-taking
- 📊 **Progress Tracking**: Learning analytics and study scheduler
- 🔬 **Subject Specialists**: AI tutors for different subjects
- 📄 **Document Analysis**: Upload and analyze PDFs, images, assignments
- 👥 **Collaboration**: Study groups and peer learning features

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **Google Generative AI** (Gemini API)
- **Environment Variables** with dotenv
- **CORS** enabled for cross-origin requests

### Frontend (Coming Soon)
- **React.js** with TypeScript
- **Material-UI** for components
- **Socket.io** for real-time features
- **React Query** for state management

## 📁 Project Structure

```
Chatgpt_Clone/
├── Backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── Frontend/             # (Coming Soon)
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Chatgpt_Clone
   ```

2. **Setup Backend**
   ```bash
   cd Backend
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the Backend directory:
   ```env
   GEMINI_API_KEY='your-gemini-api-key-here'
   ```

4. **Get Gemini API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Replace `your-gemini-api-key-here` with your actual key

5. **Run the Server**
   ```bash
   node server.js
   ```

## 📚 API Endpoints (Planned)

```
POST   /api/chat          # Send message to AI
GET    /api/history       # Get conversation history
POST   /api/auth/login    # User authentication
POST   /api/files/upload  # Upload documents
GET    /api/analytics     # Learning analytics
```

## 🔧 Current Dependencies

```json
{
  "@google/generative-ai": "^0.24.1",
  "axios": "^1.11.0",
  "cors": "^2.8.5",
  "dotenv": "^17.2.1",
  "express": "^5.1.0",
  "nodemon": "^3.1.10"
}
```

## 🎯 Roadmap

### Phase 1: Core Backend ✅
- [x] Gemini AI integration
- [x] Basic server setup
- [ ] Express routes and middleware
- [ ] Database integration

### Phase 2: Frontend Development
- [ ] React.js chat interface
- [ ] Real-time messaging
- [ ] User authentication
- [ ] Responsive design

### Phase 3: Student Features
- [ ] Code execution sandbox
- [ ] LaTeX math rendering
- [ ] Document upload/analysis
- [ ] Study tools integration

### Phase 4: Advanced Features
- [ ] Collaboration tools
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Offline capabilities

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key | ✅ |
| `JWT_SECRET` | JWT token secret | 🔄 |
| `DATABASE_URL` | Database connection string | 🔄 |
| `PORT` | Server port (default: 3000) | ❌ |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎓 For Students

This AI assistant is designed specifically with students in mind. Whether you're:
- 💻 Learning to code
- 📐 Solving math problems  
- 📖 Writing essays
- 🔬 Conducting research
- 📝 Taking notes

EduChat AI aims to be your comprehensive learning companion!

## 🆘 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the documentation
- Contact the development team

## 🙏 Acknowledgments

- Google Gemini AI for providing the language model
- The open-source community for amazing tools and libraries
- Students worldwide who inspire educational innovation

---

**Made with ❤️ for students, by developers who care about education**