# 🤖 AI Help Desk Assistant

<p align="center">
  <strong>An AI-powered Help Desk Assistant built with React.js, Spring Boot and Google Gemini AI</strong>
</p>

<p align="center">
  <a href="https://github.com/shibuy01/Help_Desk">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub Repository"/>
  </a>
  <img src="https://img.shields.io/badge/Java-17%2B-orange?style=for-the-badge&logo=openjdk" alt="Java"/>
  <img src="https://img.shields.io/badge/Spring%20Boot-4.x-brightgreen?style=for-the-badge&logo=springboot" alt="Spring Boot"/>
  <img src="https://img.shields.io/badge/React-JS-blue?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=for-the-badge&logo=google" alt="Google Gemini"/>
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker" alt="Docker"/>
</p>

---

## 📌 Overview

**AI Help Desk Assistant** is a full-stack AI-powered customer support application designed to provide intelligent responses to user queries through a modern chat interface.

The application uses a **React.js frontend** for the user interface and a **Spring Boot REST API** on the backend. The backend integrates with **Google Gemini AI** through Spring AI to process user messages and generate helpful responses.

The project demonstrates how modern frontend, backend, REST API, AI integration and containerized deployment technologies can be combined to build a real-world application.

---

## ✨ Features

### 🤖 AI-Powered Assistance

* Ask questions using a conversational chat interface.
* Generate intelligent responses using Google Gemini AI.
* Backend handles communication with the AI model.
* AI API key remains on the backend instead of being exposed to the frontend.

### 💬 Conversational Chat

* Clean and responsive chat interface.
* User and AI messages are visually separated.
* Conversation ID support for maintaining conversation context.
* Loading state while waiting for AI response.
* Error handling for failed API requests.

### ⚡ REST API

The backend exposes a REST endpoint for processing help-desk conversations.

```http
POST /api/v1/helpdesk
```

Request:

```http
Content-Type: text/plain
ConversationId: <unique-conversation-id>
```

Body:

```text
How can I reset my password?
```

Response:

```text
AI-generated help desk response
```

### 🎨 Modern Frontend

* React.js
* Responsive chat UI
* Axios API integration
* Component-based architecture
* Modern UI components
* Mobile-friendly design

### ☕ Spring Boot Backend

* Spring Boot REST API
* Layered backend architecture
* Exception handling
* Request processing
* AI service integration
* Environment-based configuration

### 🐳 Docker Support

The backend and frontend are prepared for containerized deployment using Docker.

### ☁️ Cloud Deployment

The project can be deployed using platforms such as:

* Render
* Docker-based hosting
* Other cloud platforms supporting Java and Node.js applications

---

# 🏗️ System Architecture

```text
                    ┌───────────────────────┐
                    │        USER           │
                    │      Web Browser      │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │    React Frontend     │
                    │   Help Desk Chat UI   │
                    └───────────┬───────────┘
                                │
                           REST API
                                │
                                ▼
                    ┌───────────────────────┐
                    │   Spring Boot API     │
                    │   Help Desk Backend   │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │      Spring AI       │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │    Google Gemini     │
                    │     AI Model         │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   AI Generated       │
                    │      Response        │
                    └───────────────────────┘
```

---

# 🛠️ Tech Stack

## Frontend

| Technology                   | Purpose             |
| ---------------------------- | ------------------- |
| React.js                     | User Interface      |
| Axios                        | API Communication   |
| JavaScript                   | Application Logic   |
| Tailwind CSS / UI Components | Styling             |
| Vite                         | Frontend Build Tool |

## Backend

| Technology  | Purpose                        |
| ----------- | ------------------------------ |
| Java        | Backend Development            |
| Spring Boot | REST API                       |
| Spring AI   | AI Integration                 |
| Maven       | Dependency Management          |
| REST API    | Frontend-Backend Communication |

## AI

| Technology             | Purpose                |
| ---------------------- | ---------------------- |
| Google Gemini          | AI Response Generation |
| Spring AI Google GenAI | Gemini Integration     |

## DevOps

| Technology | Purpose                |
| ---------- | ---------------------- |
| Docker     | Containerization       |
| Git        | Version Control        |
| GitHub     | Source Code Management |
| Render     | Cloud Deployment       |

---

# 📸 Screenshots

> Add your actual screenshots inside the `screenshots` folder.

## 💬 Help Desk Chat

![Help Desk Chat](./screenshots/chat-screen.png)

---

## 🤖 AI Response

![AI Response](./screenshots/ai-response.png)

---

## 📱 Responsive UI

![Responsive UI](./screenshots/mobile-view.png)

---

## 🔌 API Testing

![API Testing](./screenshots/api-testing.png)

---

# 📁 Project Structure

```text
Help_Desk/
│
├── help-desk-backend/
│   │
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   │
│   │   └── test/
│   │
│   ├── pom.xml
│   └── Dockerfile
│
├── helpdesk-frontend/
│   │
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
│
├── screenshots/
│   ├── chat-screen.png
│   ├── ai-response.png
│   ├── mobile-view.png
│   └── api-testing.png
│
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Before running the project, install:

* Java 17+
* Maven
* Node.js 18+
* npm
* Git
* Docker
* Google Gemini API Key

---

# ⚙️ Backend Setup

Clone the repository:

```bash
git clone https://github.com/shibuy01/Help_Desk.git
```

Go to the backend:

```bash
cd Help_Desk/help-desk-backend
```

Set your Gemini API key as an environment variable.

### Windows PowerShell

```powershell
$env:GEMINI_API_KEY="your_gemini_api_key"
```

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

Backend will run on:

```text
http://localhost:8080
```

---

# 🎨 Frontend Setup

Open another terminal:

```bash
cd Help_Desk/helpdesk-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend will normally run on:

```text
http://localhost:5173
```

---

# 🔐 Environment Variables

Never commit API keys or passwords to GitHub.

Example:

```properties
GEMINI_API_KEY=your_gemini_api_key
```

For production deployment, configure secrets through the hosting platform's environment-variable settings.

> ⚠️ Do not put your real Gemini API key directly inside `application.properties`, Java source code or React code.

---

# 🐳 Running with Docker

Build the backend:

```bash
docker build -t help-desk-backend ./help-desk-backend
```

Run:

```bash
docker run -p 8080:8080 \
  -e GEMINI_API_KEY=your_gemini_api_key \
  help-desk-backend
```

For the frontend:

```bash
docker build -t help-desk-frontend ./helpdesk-frontend
```

---

# 🔄 Application Flow

```text
1. User opens Help Desk
          ↓
2. React application loads
          ↓
3. User enters a question
          ↓
4. Axios sends POST request
          ↓
5. Spring Boot receives request
          ↓
6. Backend sends prompt to Gemini
          ↓
7. Gemini generates response
          ↓
8. Backend returns AI response
          ↓
9. React displays response
```

---

# 🔌 API Documentation

## Send Help Desk Message

### Endpoint

```http
POST /api/v1/helpdesk
```

### Headers

```http
Content-Type: text/plain
ConversationId: 123456
```

### Request Body

```text
Hello, I am unable to access my account.
```

### Example cURL

```bash
curl -X POST http://localhost:8080/api/v1/helpdesk \
  -H "Content-Type: text/plain" \
  -H "ConversationId: 123456" \
  -d "Hello, I am unable to access my account."
```

---

# 🧪 Testing

The backend API can be tested using:

* Postman
* cURL
* Browser-based frontend

Example:

```text
POST http://localhost:8080/api/v1/helpdesk
```

Headers:

```text
Content-Type: text/plain
ConversationId: test-123
```

---

# 🚀 Deployment

The application can be deployed as separate frontend and backend services.

```text
                 Production
                     │
          ┌──────────┴──────────┐
          │                     │
          ▼                     ▼
   React Frontend         Spring Boot Backend
          │                     │
          │                     ▼
          │                Spring AI
          │                     │
          │                     ▼
          │               Google Gemini
          │
          └────── REST API ─────┘
```

### Frontend

Deploy the React application as a static site or Docker service.

### Backend

Deploy the Spring Boot application as a Docker/Web Service.

Configure:

```text
GEMINI_API_KEY
```

in the backend hosting environment.

---

# 🛡️ Security Considerations

* API keys should be stored as environment variables.
* Never expose the Gemini API key in React.
* Never commit `.env` files containing secrets.
* Configure CORS for trusted frontend domains.
* Validate incoming API requests.
* Add rate limiting before production use.
* Use HTTPS in production.

---

# 🔮 Future Improvements

The current project can be extended into a complete enterprise Help Desk platform.

### 🎫 Ticket Management

* Create support tickets
* Ticket ID generation
* Open / In Progress / Resolved status
* Ticket priority
* Ticket categories
* Ticket history

### 👨‍💼 Agent Dashboard

* Admin dashboard
* Support agent dashboard
* Assign tickets to agents
* Agent availability
* Ticket statistics

### 🤖 Advanced AI

* AI-based ticket classification
* Automatic priority detection
* AI-generated ticket summaries
* Suggested solutions
* Sentiment analysis
* Automatic ticket routing
* FAQ-based responses

### 💾 Database

Add persistent storage for:

* Users
* Conversations
* Messages
* Tickets
* Agents
* AI responses

### 🔐 Authentication

Add:

* Spring Security
* JWT Authentication
* Role-Based Access Control
* Admin / Agent / Customer roles

### 📧 Notifications

Add:

* Email notifications
* Ticket assignment emails
* Ticket resolution emails
* Password reset emails

### 📊 Analytics

Add dashboard charts for:

* Total tickets
* Open tickets
* Resolved tickets
* Average response time
* Agent performance
* AI resolution rate

---

# 📈 Future Architecture

```text
                         ┌─────────────────┐
                         │  React Frontend │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │  API Gateway    │
                         └────────┬────────┘
                                  │
                 ┌────────────────┼────────────────┐
                 │                │                │
                 ▼                ▼                ▼
          User Service      Ticket Service    AI Service
                 │                │                │
                 │                ▼                ▼
                 │             MySQL          Gemini AI
                 │
                 ▼
             MySQL DB

                         ┌─────────────────┐
                         │ Notification    │
                         │ Service         │
                         └─────────────────┘
```

---

# 🎯 Why This Project?

This project demonstrates practical experience with:

* Full-stack development
* React.js
* Java
* Spring Boot
* REST API development
* Spring AI
* Google Gemini integration
* API integration
* Error handling
* Docker
* Cloud deployment
* Frontend-backend integration

It can be used as a portfolio project for **Java Backend Developer / Spring Boot Developer / Full Stack Developer** roles.

---

# 👨‍💻 Author

## Shibu Kumar

Java Backend Developer | Spring Boot Developer

### Skills

```text
Java
Spring Boot
Spring Security
Spring Data JPA
Hibernate
REST APIs
MySQL
React.js
JavaScript
Docker
Git & GitHub
AI Integration
Google Gemini
```

### GitHub

[github.com/shibuy01](https://github.com/shibuy01)

### Project Repository

[github.com/shibuy01/Help_Desk](https://github.com/shibuy01/Help_Desk)

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  Built with ❤️ using Java, Spring Boot, React.js and Google Gemini AI
</p>
