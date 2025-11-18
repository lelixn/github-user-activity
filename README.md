<h1 align="center">🔥 GitHub User Activity API</h1>

<p align="center">
  <img src="https://i.pinimg.com/originals/ad/8f/79/ad8f799a4fe1e7bc3eb333853f4ca1bb.gif" width="260" />
</p>
<p align="center">A backend project that fetches GitHub user activity, repos, and profile data using the GitHub API.</p>

---

## 📌 Overview

This is a **Node.js + Express** backend service that retrieves real-time GitHub data such as:

- Recent public events  
- Complete list of public repositories  
- User profile information  

The goal of this project is to help beginners learn how to build REST APIs, structure backend projects, and interact with third-party APIs.

---

## 🚀 Features

### ✅ Current Features (v1)
- Fetch profile information  
- Fetch all public repositories  
- Clean and safe JSON formatting  
- Error handling for:
  - User not found  
  - GitHub rate limits  
  - Missing data  

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Node.js** | Backend runtime |
| **Express.js** | API framework |
| **GitHub REST API** | External data source |
| **Postman** | API testing |
| **JavaScript** | Core language |

---


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/lelixn/github-user-activity.git
cd github-user-activity
```
###2️⃣ Install Dependencies
```
npm install
```
###3️⃣ Start the Server
```
node server.js
```
Server runs on:
```
http://localhost:5000
```


📡 API Endpoints
🧑‍💻 Get User Profile
```
GET /profile/:username
```


🧪 Testing With Postman

Use these URLs:
```
GET http://localhost:5000/profile/<username>
GET http://localhost:5000/repos/<username>
```


🤝 Contributing

Pull requests are welcome.
If you'd like to add a feature, feel free to open an issue.

⭐ Support
If you like this project:

```
⭐ Star the repo

🍴 Fork it
```
<p align="center"><b>Made with ❤️ by Lelixn</b></p>
