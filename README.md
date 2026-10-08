# 🤖 AI Help Desk Assistant

<p align="center">
  <strong>AI-Powered Help Desk Assistant built with React.js, Spring Boot, Spring AI and Google Gemini</strong>
</p>

<p align="center">
  <a href="https://help-desk-1-12kp.onrender.com">
    <img src="https://img.shields.io/badge/Live%20Demo-View%20Project-success?style=for-the-badge" alt="Live Demo"/>
  </a>
  <a href="https://github.com/shibuy01/Help_Desk">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub"/>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Java-17%2B-orange?style=for-the-badge&logo=openjdk" />
  <img src="https://img.shields.io/badge/Spring%20Boot-4.x-brightgreen?style=for-the-badge&logo=springboot" />
  <img src="https://img.shields.io/badge/React.js-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Spring%20AI-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker" />
</p>

---

## 🌐 Live Demo

### 🚀 Live Application

**[👉 Open AI Help Desk Assistant](https://help-desk-1-12kp.onrender.com)**

> The application is deployed on Render and provides an AI-powered chat interface for Help Desk assistance.

---

## 📌 Overview

**AI Help Desk Assistant** is a full-stack AI-powered customer support application designed to provide intelligent responses to user queries through a modern chat interface.

The application uses a **React.js frontend** for the user interface and a **Spring Boot REST API** on the backend. The backend integrates with **Google Gemini AI** through **Spring AI** to process user messages and generate helpful responses.

The project demonstrates practical experience with modern **Java backend development, REST APIs, AI integration, frontend-backend communication, Docker, cloud deployment and DevOps concepts**.

---

# ✨ Features

### 🤖 AI-Powered Assistance

* Conversational AI-powered Help Desk
* Google Gemini integration
* Spring AI integration
* Intelligent response generation
* Backend-based AI API integration
* API key protected through environment variables

### 💬 Conversational Chat

* Modern chat interface
* User and AI message separation
* Conversation ID support
* Loading state
* Error handling
* Responsive UI
* Mobile-friendly design

### ⚡ REST API

```http
POST /api/v1/helpdesk
```

Request headers:

```http
Content-Type: text/plain
ConversationId: <unique-conversation-id>
```

Example request:

```text
How can I reset my password?
```

---

# 🛠️ Technical Skills

## 💻 Programming Languages

* Java
* SQL
* JavaScript

## ⚙️ Backend Development

* Spring Boot
* Spring MVC
* Spring Security
* REST API Development
* Hibernate / JPA
* JWT Authentication
* Microservices
* Exception Handling
* Layered Architecture

## 🤖 AI & Event-Driven Technologies

* Spring AI
* Google Gemini
* Apache Kafka
* Redis
* AI API Integration

## 🎨 Frontend Development

* React.js
* HTML5
* CSS3
* Bootstrap
* Tailwind CSS
* Axios

## 🗄️ Databases

* MySQL
* PostgreSQL
* MongoDB

## ☁️ Cloud & DevOps

* AWS EC2
* Docker
* CI/CD
* Render
* Git
* GitHub
* Maven

## 🧰 Development & API Tools

* IntelliJ IDEA
* Postman
* Swagger
* GitHub
* Maven

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
                    │      Spring AI        │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │     Google Gemini     │
                    │       AI Model        │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   AI Generated        │
                    │      Response         │
                    └───────────────────────┘
```

---

# 🧰 Tech Stack

| Category         | Technologies                                 |
| ---------------- | -------------------------------------------- |
| Language         | Java, SQL, JavaScript                        |
| Backend          | Spring Boot, Spring MVC, Spring Security     |
| API              | REST API, Swagger                            |
| ORM              | Hibernate, JPA                               |
| Security         | JWT, Spring Security                         |
| AI               | Spring AI, Google Gemini                     |
| Messaging        | Apache Kafka                                 |
| Caching          | Redis                                        |
| Frontend         | React.js, HTML, CSS, Bootstrap, Tailwind CSS |
| Database         | MySQL, PostgreSQL, MongoDB                   |
| Build Tool       | Maven                                        |
| Containerization | Docker                                       |
| Cloud            | AWS EC2, Render                              |
| CI/CD            | CI/CD Pipelines                              |
| Version Control  | Git, GitHub                                  |
| Testing/API      | Postman                                      |

---

# 📸 Screenshots

> Add your actual screenshots inside the `screenshots` folder.

## 💬 Help Desk Chat

![Help Desk Chat](./screenshots/chat-screen.png)

## 🤖 AI Response

![AI Response](./screenshots/ai-response.png)

## 📱 Responsive UI

![Responsive UI](./screenshots/mobile-view.png)

## 🔌 API Testing

![API Testing](./screenshots/api-testing.png)

---

# 📁 Project Structure

```text
Help_Desk/
│
├── help-desk-backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   └── Dockerfile
│
├── helpdesk-frontend/
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

Install the following:

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

Go to backend:

```bash
cd Help_Desk/help-desk-backend
```

Set Gemini API key.

### Windows PowerShell

```powershell
$env:GEMINI_API_KEY="your_gemini_api_key"
```

Run:

```bash
mvn spring-boot:run
```

Backend:

```text
http://localhost:8080
```

---

# 🎨 Frontend Setup

```bash
cd Help_Desk/helpdesk-frontend
```

Install dependencies:

```bash
npm install
```

Start:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🔐 Environment Variables

Never commit secrets to GitHub.

```properties
GEMINI_API_KEY=your_gemini_api_key
```

For production, configure environment variables through the hosting platform.

---

# 🐳 Docker

Build backend:

```bash
docker build -t help-desk-backend ./help-desk-backend
```

Run:

```bash
docker run -p 8080:8080 \
  -e GEMINI_API_KEY=your_gemini_api_key \
  help-desk-backend
```

Build frontend:

```bash
docker build -t help-desk-frontend ./helpdesk-frontend
```

---

# 🔄 Application Flow

```text
User
  ↓
React Frontend
  ↓
Axios
  ↓
Spring Boot REST API
  ↓
Spring AI
  ↓
Google Gemini
  ↓
AI Response
  ↓
React Chat UI
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

### Request

```text
Hello, I am unable to access my account.
```

### cURL

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
* React frontend
* Swagger

Example:

```text
POST http://localhost:8080/api/v1/helpdesk
```

---

# ☁️ Deployment

## Live Application

**Frontend / Application:**

https://help-desk-1-12kp.onrender.com

The project is deployed using **Render** with Docker-based deployment.

### Deployment Architecture

```text
                   Internet
                      │
                      ▼
             ┌─────────────────┐
             │ React Frontend  │
             └────────┬────────┘
                      │
                   REST API
                      │
                      ▼
             ┌─────────────────┐
             │ Spring Boot API │
             └────────┬────────┘
                      │
                      ▼
                ┌───────────┐
                │ Spring AI │
                └─────┬─────┘
                      │
                      ▼
               Google Gemini
```

---

# 🚀 CI/CD & DevOps

The project is designed around modern development and deployment practices:

* Git version control
* GitHub repository management
* Docker containerization
* CI/CD concepts
* Render deployment
* AWS EC2 deployment knowledge
* Environment-based configuration
* Production deployment

---

# 🔥 Microservices & Distributed Systems Skills

Along with this Help Desk application, the developer has experience working with:

* Spring Boot Microservices
* Service-to-service communication
* API Gateway
* Service Discovery
* Apache Kafka
* Redis
* Spring Security
* JWT Authentication
* Docker
* AWS EC2
* CI/CD

---

# 🛡️ Security

* API keys stored using environment variables
* Spring Security
* JWT Authentication
* CORS configuration
* Request validation
* Secure backend API integration
* HTTPS recommended for production

---

# 🔮 Future Improvements

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
* Assign tickets
* Agent availability
* Ticket statistics

### 🤖 Advanced AI

* AI ticket classification
* Automatic priority detection
* AI-generated summaries
* Suggested solutions
* Sentiment analysis
* Automatic ticket routing
* FAQ-based responses

### 💾 Database

* Users
* Conversations
* Messages
* Tickets
* Agents
* AI responses

### 🔐 Authentication

* Spring Security
* JWT Authentication
* Role-Based Access Control
* Admin / Agent / Customer roles

### 📊 Analytics

* Total tickets
* Open tickets
* Resolved tickets
* Average response time
* Agent performance
* AI resolution rate

---

# 🎯 Why This Project?

This project demonstrates practical experience with:

* Full-stack development
* Java
* Spring Boot
* Spring Security
* REST API development
* Spring AI
* Google Gemini
* React.js
* Microservices
* Apache Kafka
* Redis
* MySQL / PostgreSQL
* Docker
* AWS EC2
* CI/CD
* Cloud deployment
* Git & GitHub
* Frontend-backend integration

This project is suitable as a portfolio project for:

**Java Backend Developer | Spring Boot Developer | Software Engineer | Full Stack Developer**

---

# 👨‍💻 Author

## Shibu Kumar

**Java Backend Developer | Spring Boot Developer**

### Skills

```text
Java
Spring Boot
Spring Security
Spring MVC
Spring Data JPA
Hibernate
REST APIs
JWT
Microservices
Spring AI
Google Gemini
Apache Kafka
Redis
MySQL
PostgreSQL
React.js
JavaScript
Docker
AWS EC2
CI/CD
Git & GitHub
Maven
Postman
Swagger
```

### GitHub

https://github.com/shibuy01

### Project Repository

https://github.com/shibuy01/Help_Desk

### Live Demo

https://help-desk-1-12kp.onrender.com

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  Built with ❤️ using Java, Spring Boot, React.js, Spring AI and Google Gemini
</p>
