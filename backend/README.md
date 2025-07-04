
## 🚀 GrowthProAI – Backend (Node.js + Express)

This is the backend API for the **Mini Local Business Dashboard** that returns simulated Google ratings and AI-generated SEO headlines.

---

### 📦 Tech Stack

* Node.js
* Express.js
* Hosted on [Render](https://render.com)

---

## 🔌 API Endpoints

### ✅ 1. `POST /business-data`

Returns fake Google Business data including rating, review count, and a generated headline.

* **Endpoint:**
  `https://minibusinesssetup-backend.onrender.com/business-data`

* **Method:** `POST`

* **Headers:**
  `Content-Type: application/json`

* **Body Example:**

```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

* **Sample Response:**

```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

---

### 🔁 2. `GET /regenerate-headline`

Generates a new SEO-style headline for a given business.

* **Endpoint Example:**
  [`https://minibusinesssetup-backend.onrender.com/regenerate-headline?name=Cake%20&%20Co&location=Mumbai`](https://minibusinesssetup-backend.onrender.com/regenerate-headline?name=Cake%20&%20Co&location=Mumbai)

* **Sample Response:**

```json
{
  "headline": "Cake : The Go-To Place for Locals in Mumbai"
}
```

---

## 🧪 Testing Using Microsoft PowerShell

You can test the POST API using PowerShell like this:

```powershell
curl -Uri "https://minibusinesssetup-backend.onrender.com/business-data" `
     -Method POST `
     -Headers @{ "Content-Type" = "application/json" } `
     -Body '{"name":"Cake & Co","location":"Mumbai"}'
```

📸 PowerShell Screenshot:
[View Image on Google Drive](https://drive.google.com/file/d/1JwxzQZgpTxMfJhw4Rq8Wqi5ozR4Mxl3n/view?usp=sharing)

---

## 🖥️ Local Development

### Step-by-step:

```bash
# Go to the backend directory
cd backend

# Install dependencies
npm install

# Start the server
node index.js
# OR if you have nodemon installed
npx nodemon index.js
```

Visit: [http://localhost:5000](http://localhost:5000)

---

## 🌍 Deployed URL

Live Backend:
🔗 [https://minibusinesssetup-backend.onrender.com](https://minibusinesssetup-backend.onrender.com)

---
