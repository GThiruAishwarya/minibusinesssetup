
## 💼 GrowthProAI – Mini Local Business Dashboard

A responsive full-stack web app that simulates how small businesses might view their SEO content and Google Business data. Built as part of the Full Stack Intern Assignment.

---
## 📹 Project Walkthrough

🎥 **Watch the screen recording of the full project flow:**  
👉 [Click here to view on Google Drive](https://drive.google.com/file/d/1oxFSnmx3xzfVHOKwsVDYxX-jzA5PA6uv/view?usp=sharing)

---

## 🛠 Tech Stack

| Layer      | Tech Used                           |
| ---------- | ----------------------------------- |
| Frontend   | React, Vite, Tailwind CSS           |
| Backend    | Node.js, Express.js                 |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## ✨ Features

### ✅ Frontend

* Responsive form to input:

  * Business Name
  * Location
* Display:

  * Simulated Google Rating
  * Number of Reviews
  * SEO Headline
* Regenerate SEO Headline button
* Clean and mobile-friendly design using Tailwind CSS
* Loading spinner for API calls
* Basic client-side validation
* State management using React hooks

### ✅ Backend

* `POST /business-data` → returns fake business data
* `GET /regenerate-headline` → returns a randomized SEO headline
* No database used — data simulated via functions

---

## 🚀 Live Demo

| Type     | Link                                                                                                |
| -------- | --------------------------------------------------------------------------------------------------- |
| Frontend | 🔗 [https://minibusinesssetup.vercel.app](https://minibusinesssetup.vercel.app)                     |
| Backend  | 🔗 [https://minibusinesssetup-backend.onrender.com/regenerate-headline?name=FishFry%20&%20Co&location=Uppal](https://minibusinesssetup-backend.onrender.com/regenerate-headline?name=FishFry%20&%20Co&location=Uppal) |

---


### 🖼️ UI Sample Screenshot

![App Preview](https://drive.google.com/uc?export=view&id=1CqrPaJpOqLBTSiNrvz-SxvNWi9mNOdPr)


---

## 🔌 API Endpoints

### `POST /business-data`

**URL:**
`https://minibusinesssetup-backend.onrender.com/business-data`

**Method:** `POST`
**Headers:** `Content-Type: application/json`
**Body Example:**

```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

**Sample Response:**

```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

---

### `GET /regenerate-headline?name=...&location=...`

**Example URL:**
[https://minibusinesssetup-backend.onrender.com/regenerate-headline?name=Cake%20&%20Co\&location=Mumbai](https://minibusinesssetup-backend.onrender.com/regenerate-headline?name=Cake%20&%20Co&location=Mumbai)

**Sample Response:**

```json
{
  "headline": "Cake : The Go-To Place for Locals in Mumbai"
}
```

---

## 🧪 API Testing in Microsoft PowerShell

You can test backend API from PowerShell using `curl`:

```powershell
curl -Uri "https://minibusinesssetup-backend.onrender.com/business-data" `
     -Method POST `
     -Headers @{ "Content-Type" = "application/json" } `
     -Body '{"name":"Cake & Co","location":"Mumbai"}'
```

### 🖥️ PowerShell API Test Example

![PowerShell Example](https://drive.google.com/uc?export=view&id=1JwxzQZgpTxMfJhw4Rq8Wqi5ozR4Mxl3n)


---

## 🧑‍💻 Local Development

### 📂 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

### 📂 Backend Setup

```bash
cd backend
npm install
node index.js
# OR
npx nodemon index.js
```

Visit: [http://localhost:5000](http://localhost:5000)

---

## 📦 Folder Structure

```
minibusinesssetup/
├── backend/
│   ├── index.js
│   ├── headlines.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BusinessForm.jsx
│   │   │   ├── DisplayCard.jsx
│   │   │   └── Spinner.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
```

---

## ✅ Completed Bonus Tasks

* ✅ Deployed frontend on **Vercel**
* ✅ Deployed backend on **Render**
* ✅ Implemented loading spinner
* ✅ Used React state management
* ✅ Performed API tests using **PowerShell** and **Postman**
* ✅ Screenshot Proof attached
