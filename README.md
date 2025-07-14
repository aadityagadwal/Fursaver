Sure! Here's the full **README content** (no formatting box, just copy-paste into your `README.md` file):

---

# 🐾 FurSaver AI

FurSaver is an AI-powered chatbot web app that helps pet owners better understand **skin diseases in cats and dogs**. It uses the **LLaMA 3 model via Groq API** to offer friendly, conversational answers about symptoms, remedies, and general pet care — right from your browser.

## 🌟 Features

* 🤖 Chatbot powered by **LLaMA 3 (Groq API)**
* 💬 Instant answers to questions about pet skin conditions
* 🎨 Beautiful UI with responsive fullscreen and popup modes
* 🐶 Friendly, empathetic assistant tuned for pet health
* 🔐 Secrets stored securely using `.env` file

## 🚀 Demo

https://fursaverai.netlify.app/

## 📂 Project Structure

```
fursaverai/
├── src/
│   ├── components/
│   │   ├── Chatbot.tsx
│   │   ├── ChatbotFullscreen.tsx
│   │   └── ...
│   ├── App.tsx
│   └── main.tsx
├── .env               <-- Groq API Key stored here (not pushed)
├── package.json
└── vite.config.ts
```

## 🧪 Local Setup

### 1. Clone the repo

git clone [https://github.com/aadityagadwal/Fursaver.git](https://github.com/aadityagadwal/Fursaver.git)
cd Fursaver

### 2. Install dependencies

npm install

### 3. Create `.env` file

Create a `.env` file in the root and add your Groq API key:

```
VITE_GROQ_API_KEY=your_groq_api_key_here
```

> 💡 Never share or commit your API key publicly!

### 4. Start the dev server

npm run dev

Open `http://localhost:5173` in your browser.

## 📦 Tech Stack

* **React + TypeScript**
* **Vite**
* **Tailwind CSS**
* **Lucide Icons**
* **Groq API (LLaMA 3)**

## 📄 License

This project is under the MIT License.

## 🙌 Acknowledgements

* [Groq](https://groq.com/) for blazing-fast inference
* [Meta LLaMA 3](https://ai.meta.com/llama/) — open source LLM
* Inspired by real needs of pet owners

## 👤 Author

Built with ❤️ by **Aaditya Gadwal**
Feel free to contribute, suggest, or collaborate!

---

