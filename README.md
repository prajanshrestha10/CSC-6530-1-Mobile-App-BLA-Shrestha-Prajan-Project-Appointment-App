# 🫁 BreatheWell — Pulmonology & Oncology Care Mobile App

[![React Native](https://img.shields.io/badge/React_Native-0.72+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK_49+-000000?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TailwindCSS](https://img.shields.io/badge/NativeWind-Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://www.nativewind.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore_%26_Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

**BreatheWell** is a specialized patient-facing React Native mobile application built with **Expo Router**, **NativeWind**, and **Firebase**. Designed with a modern, polished dark-mode interface (`#0F172A`), BreatheWell connects patients directly with leading pulmonology and oncology specialists, low-dose CT lung cancer screening diagnostic tools, and clinical consultation records.

---

## ✨ Features

- 🌙 **Dark-Mode UI/UX:** Built on a unified design system with Slate Navy (`#0F172A`) backgrounds, subtle border highlights, and Cyan (`#0284C7`) primary accents.
- 🔐 **Patient Authentication:** Secure registration and sign-in flows using **Formik** and **Yup** client-side validation paired with **Firebase Authentication**.
- 🩺 **Specialist Search & Catalog:** Dynamic, real-time doctor listings fetched from **Cloud Firestore**, displaying credentials, ratings, experience, consultation fees, and clinical sub-specialties.
- 🎗️ **Clinical Care Banners:** Highlighting specialized services such as early lung cancer screening, thoracic surgeon reviews, and diagnostic consultations.
- 📱 **Guest Access Mode:** Allows prospective patients to browse specialists and explore app capabilities without immediate account creation.
- ⚡ **Cross-Platform Responsive Design:** Custom-engineered layout components with strict text wrapping and boundary constraints (`numberOfLines`, `flexShrink`, and container scaling) ensuring multi-device readability.

---

## 🛠️ Tech Stack & Architecture

### **Frontend & Frameworks**
- **Mobile Framework:** [React Native](https://reactnative.dev/) (React Class Components)
- **App Routing & Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/)
- **Styling Engine:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- **Form Management:** [Formik](https://formik.org/) & [Yup Schema Validation](https://github.com/jquense/yup)

### **Backend & Cloud Infrastructure**
- **Database:** [Google Cloud Firestore](https://firebase.google.com/docs/firestore) (Realtime Specialist Directory)
- **Authentication:** [Firebase Auth](https://firebase.google.com/docs/auth)

---

## 📂 Project Structure

```text
├── assets/
│   ├── Colors.ts             # Global brand colors & theme constants
│   └── images/               # App branding logos & banner illustrations
├── config/
│   └── firebaseConfig.js     # Firebase SDK initialization & Firestore references
├── store/
│   └── doctors.ts            # Local mock data / fallback data models
├── utils/
│   └── signupSchema.js       # Formik / Yup validation schemas
└── app/                      # Expo Router File-Based Routing
```

---

## 📐 System UML Architecture

### **1. Core Component Class Diagram**
The core user flows are engineered around structured React Class Components to manage lifecycle events, client-side input validation, and asynchronous state updates cleanly:

```text
+-------------------------------------------------------------+
|                          SignIn                             |
+-------------------------------------------------------------+
| - state: { email, password }                                |
+-------------------------------------------------------------+
| + render(): JSX.Element                                     |
| + handleSignIn(values: Object): void                        |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                          Home                               |
+-------------------------------------------------------------+
| - state: { doctors: Array, loading: boolean, error: string }|
+-------------------------------------------------------------+
| + componentDidMount(): void                                 |
| + getDoctors(): Promise<void>                               |
| + getGreeting(): string                                     |
| + renderItem({ item }): JSX.Element                         |
| + render(): JSX.Element                                     |
+-------------------------------------------------------------+
```

### **2. Use Case Overview**
Below is the high-level system use case flow mapping patient interaction across the application:

```text
                      +------------------------------------------+
                      |         BreatheWell Mobile System        |
                      |                                          |
                      |   [ UC-1: Account Registration ]         |
                      |                   ^                      |
                      |                   | <<includes>>         |
    +-----------+     |   [ UC-2: Account Authentication ]       |
    |           |---->|                   ^                      |
    |  Patient  |     |                   | <<extends>>          |
    |  (User)   |---->|   [ UC-3: Explore Guest Browsing ]       |
    |           |     |                   ^                      |
    +-----------+     |                   | <<includes>>         |
                      |   [ UC-4: Fetch Specialist Directory ]   |
                      |                                          |
                      +------------------------------------------+
```

---

## 🚀 Getting Started

### **Prerequisites**
Make sure you have the following installed on your development machine:
- [Node.js](https://nodejs.org/) (v16.x or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go App](https://expo.dev/client) on your iOS/Android mobile device (or an emulator setup)

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prajanshrestha10/CSC-6530-1-Mobile-App-BLA-Shrestha-Prajan-Project-Appointment-App.git
   
   cd BreatheWell
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase Environment:**
   Create or update your `config/firebaseConfig.js` file with your Firebase credentials:
   ```javascript
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig = {
     apiKey: "AIzaSyBczD5Cl5Do1XlpVBzlIlm0qfIp5CUVpU8",
     authDomain: "appointment-app-bb16f.firebaseapp.com",
     projectId: "appointment-app-bb16f",
     storageBucket: "appointment-app-bb16f.firebasestorage.app",
     messagingSenderId: "515468830912",
     appId: "1:515468830912:web:4d435c2fb9c53bc14ee525",
     measurementId: "G-EDSHXSZ0R1"
   };

   export const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```

4. **Start the Expo development server:**
   ```bash
   npx expo start OR npm start
   ```

5. **Run on Device:**
   - Scan the QR code displayed in your terminal using the **Expo Go** app (Android) or **Camera app** (iOS).

---

## 👤 Author

**Prajan Shrestha**
* **Project:** BreatheWell Mobile App
* **Specialty Focus:** Pulmonology & Oncology Digital Healthcare Solutions

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
