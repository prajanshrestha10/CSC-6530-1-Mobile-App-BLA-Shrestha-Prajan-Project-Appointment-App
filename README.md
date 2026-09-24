# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.





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
    ├── index.js              # Onboarding / Index Landing Screen
    ├── signin.js             # Patient Authentication Screen
    ├── signup.js             # Patient Account Registration Screen
    └── home.js               # Main Dashboard & Doctor Directory Screen
```

---



