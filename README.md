# RecomMind

A modern, full-stack Career Path Recommender for tech learners and professionals.

---

## 🚀 What is RecomMind?
**RecomMind** is an intelligent MERN stack application that helps users discover the best tech career paths, get personalized recommendations, and access curated learning resources (videos, docs, blogs) based on their interests, experience, and selected technologies. It features full user authentication, a beautiful UI, and a seamless experience from signup to actionable career advice.

---

## 🛠️ Tech Stack
- **Frontend:** React (TypeScript), Tailwind CSS, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, bcrypt
- **APIs:** YouTube Data API, Dev.to API

---

## ✨ Features
- **User Authentication:** Secure signup, login, and logout with JWT
- **Personalized Quiz:** Multi-step quiz to assess interests, experience, and tech stack
- **Career Recommendations:** Dynamic, domain-specific career and learning suggestions
- **Learning Resources:** Curated YouTube videos and Dev.to/blog articles for selected domains/technologies
- **Responsive UI:** Modern, mobile-friendly design
- **Smart Header:** Always shows RecomMind brand and correct auth options

---

## 🖥️ How to Run RecomMind

### 1. **Backend Setup**
- Go to the `backend` folder:
  ```bash
  cd backend
  npm install
  ```
- Start MongoDB locally (default: `mongodb://localhost:27017/project`).
  - If you use Docker: `docker run -d -p 27017:27017 mongo`
  - Or start your local mongod service.
- Start the backend server:
  ```bash
  node server.js
  # or for auto-reload
  # npx nodemon server.js
  ```

### 2. **Frontend Setup**
- In the project root:
  ```bash
  npm install
  npm start
  ```
- The app will open at [http://localhost:3000](http://localhost:3000)

### 3. **API Keys**
- For YouTube video recommendations, create a `.env` file in the root:
  ```env
  REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
  ```
- [How to get a YouTube API key](https://console.cloud.google.com/apis/credentials)

---

## 📝 Usage
1. **Sign Up / Login:** Use the top-right header to create an account or log in.
2. **Take the Quiz:** Click "Start Assessment" to begin the personalized quiz.
3. **Get Recommendations:** View career paths, learning suggestions, and curated resources for your chosen domains and technologies.
4. **Logout:** Use the header to log out at any time.

---

## 📂 Project Structure
```
backend/
  models/User.js
  routes/auth.js
  server.js
src/
  App.tsx
  Header.tsx
  Landing.tsx
  Signup.tsx
  Login.tsx
  ...
```

---

## 🤝 Contributing
PRs and suggestions are welcome! If you have ideas for new features or improvements, open an issue or submit a pull request.

---

## 📢 License
MIT
