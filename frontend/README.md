# 🚀 Mini Local Business Dashboard – Frontend

This is the **frontend** of the Mini Local Business Dashboard built using **React**, **Vite**, and **Tailwind CSS**.  
It allows users to input a local business name and location, then view simulated Google ratings, reviews, and an AI-generated SEO headline.

---

### 🌐 Live Demo

👉 [https://minibusinesssetup.vercel.app](https://minibusinesssetup.vercel.app)


### 🖼️ Sample Preview

![Dashboard Screenshot](https://drive.google.com/uc?export=view&id=1CqrPaJpOqLBTSiNrvz-SxvNWi9mNOdPr)


---

### 📸 Features

- 🌍 Input form for business name and location
- ⭐ Display of simulated Google Rating and reviews
- 🧠 AI-style SEO headline generation
- 🔁 Regenerate SEO headline button
- 💅 Styled with Tailwind CSS
- 📱 Mobile responsive design
- 🔄 Spinner during data fetching
- ✅ Client-side form validation

---

### 🛠️ Tech Stack

- React
- Tailwind CSS
- Vite
- Context API (for state)
- Express backend (connected to this frontend)

---

### ⚙️ Getting Started Locally

```bash
# Clone the repo
git clone https://github.com/GThiruAishwarya/minibusinesssetup.git

# Go to frontend directory
cd minibusinesssetup/frontend

# Install dependencies
npm install

# Run the app locally
npm run dev
🌈 Folder Structure
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── BusinessForm.jsx
│   │   ├── DisplayCard.jsx
│   │   └── Spinner.jsx
│   ├── hooks/
│   │   └── useBusinessData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
