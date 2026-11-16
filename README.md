# 🤖 Buddy AI – Your AI Language Teacher

Buddy AI is a language-learning web app built with Next.js, Firebase and the Google Gemini API. Upload your textbook, notes or a photo, then talk to an AI teacher in real time by voice. The teacher understands your material and adapts to your level. It works on phones like a native app and can be installed to your home screen.

🔗 **[Try the live demo](https://ai-teacher-umber-delta.vercel.app)**

> Original project by [mohamad-alaaeddine](https://github.com/mohamad-alaaeddine/ai-teacher) (README in German). This fork focuses on English-speaking users: English documentation, English interface text and installable-app support.

---

## 📸 Screenshots

| Setup screen | Classroom |
|:---:|:---:|
| ![Setup screen](public/screenshots/Setup.png) | ![Classroom](public/screenshots/Class%20Room.png) |
| API key, language, mode and file upload | Live voice chat, token counter and image panel |

---

## 💡 The gap Buddy AI fills

| Tool | Strength | Limitation |
|------|----------|------------|
| **Gemini Live** | Real-time voice conversation | Can't read your files |
| **NotebookLM** | Deep analysis of documents | No live conversation |

**Buddy AI does both:** upload your material, then have a live spoken lesson with a teacher who has read it.

---

## 🌟 Main features

### 📱 1. Feels like a native app
* **Responsive layout** built for phones and tablets, including landscape mode.
* **Installable (PWA):** add it to your home screen and it opens in its own window with its own icon.
* **Full immersion:** pick your native language and the language you want to learn. The whole interface (buttons, menus, messages) switches to the language you're learning, so you practise from the first second.

**20 supported languages:** English, German, Arabic, Spanish, French, Italian, Chinese, Hindi, Bengali, Portuguese, Russian, Urdu, Indonesian, Japanese, Turkish, Korean, Vietnamese, Dutch, Persian, Polish.

### 🧠 2. Automatic flashcards
* The AI follows the conversation in real time.
* When you don't know a word, use it wrongly or ask what it means, it's saved **automatically** as a flashcard with a translation into your native language (stored in Firebase Firestore).
* Open **Flashcards** at any time to review, edit or delete your words.

### 🏫 3. The classroom
* **Live voice mode:** real-time voice chat over WebSockets, with automatic reconnect if the connection drops.
* **Voice to text:** speak instead of typing and your words appear in the chat.
* **Image upload in the chat:** take a photo or upload an image and talk about it straight away.
* **Live token counter** at the top of the screen.
* **Session report:** one click on "Report" gives you an honest summary of the lesson, your mistakes and your progress.

### 📚 4. 10 learning modes

| Category | Modes |
|----------|-------|
| ⚙️ General | Open Tutor |
| 📚 Foundation | Vocabulary Driller, Grammar Tutor, Reading & Translation |
| 🎭 Simulation | Role-Play, Debate Room, Story Co-creation |
| 🎓 Specialised | Image Discussion, Exam Prep, Free Practice |

Highlights:
* **Vocabulary Driller:** photograph a vocabulary page from a school book, upload it, and the AI tests you on every word. A word only counts as mastered ✅ after **3 correct answers in a row**.
* **Free Practice:** speak or write freely without interruptions, then get a structured feedback report at the end.
* **Exam Prep:** practice tasks for IELTS, TOEFL, Goethe-Zertifikat, DELF and other exams.

Each mode works with 3 immersion levels:
* **Beginner:** 80% native language
* **Balanced:** 50% / 50%
* **Immersion:** 80% target language

### 🔒 5. Security and privacy ("bring your own key")
* **Your API key isn't stored on any server.** It's kept only in your browser's `sessionStorage` and is deleted when you close the tab or browser.
* **Direct connection to Google.** Voice, chat and file uploads go straight from your browser to Google. The developer's server never sees your API key or your conversations.
* **Google sign-in through Firebase.** Firebase is used only to save your flashcards.

---

## 🛠️ Tech stack

| Area | Technology |
|------|------------|
| **Frontend** | Next.js (App Router), Tailwind CSS |
| **Live voice** | Gemini Live API (`gemini-3.1-flash-live-preview`) over BidiGenerateContent WebSockets |
| **OCR and analysis** | Gemini REST API (`gemini-2.5-flash-lite`), Google AI File Manager (resumable uploads) |
| **Auth and database** | Firebase Auth (Google OAuth), Cloud Firestore |
| **Hosting** | Vercel |

---

## 💻 Run it locally

### 1. Clone the repository
```bash
git clone https://github.com/Ali-Alaedin/ai-teacher.git
cd ai-teacher
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your Firebase settings
Create a `.env.local` file in the project folder:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 🔑 4. Get a free Gemini API key
You need a Gemini API key from Google. Google's free tier currently covers normal use.

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Sign in with your Google account.
3. Click **"Create API key"**.
4. Copy the key. You paste it on the app's start screen. It does **not** go in the `.env` file.

### 5. Start the app
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), sign in, paste your API key and start your first lesson.

---

## ⚠️ Known limitations

* The Gemini Live model is a preview model, so the connection sometimes drops. The app reconnects automatically.
* Google's free tier has rate limits. Heavy use can cause short delays.
* Google's File Manager deletes uploaded files automatically 48 hours after analysis.
