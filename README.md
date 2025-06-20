# 🐟 Fish Business Register (শ্রীউলা ঘেরের রেজিস্টার)

A simple, live, and cloud-synced fish sales and expense tracking web application, designed for daily business use in rural fisheries. Built with HTML, JavaScript, and Firebase Realtime Database.

---

## 📆 Features

- 📅 **Automatic Daily Record Tracking**
- 🌅 **Morning & Evening Sales Entry**:
  - Quantity in kg
  - Price per kg
  - Total selling price
- 💰 **Expense Tracking**:
  - Date, Reason & Amount
- 📊 **Live Totals Calculation**:
  - Total daily sales
  - Total expenses
  - Remaining fund balance
- ☁️ **Cloud Storage with Firebase**:
  - All data stored and synced in real-time

---

## 🚀 Live Preview

🌐 [https://abdullariaz.com/sr](https://abdullariaz.com/sr)

---

## 🔧 Technologies Used

| Tool           | Purpose                        |
|----------------|--------------------------------|
| **HTML/CSS**   | Web UI Structure & Styling     |
| **JavaScript** | Logic & DOM manipulation       |
| **Firebase**   | Realtime Database & Hosting    |

---

## 🧚S Firebase Configuration

The app uses Firebase Realtime Database to save all sales and expenses. Config is initialized with:

```js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "...firebaseapp.com",
  databaseURL: "https://...firebaseio.com",
  ...
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
```

> Make sure to secure your database with proper Firebase rules before going into production.

---

## 📁 Folder Structure

```
fish-business-app/
├── index.html
├── script.js
├── style.css
├── README.md
```
---

## 📜 License

This project is open-source and free to use.

---

## 👤 Author

**Md. Abdullah Al Riaz**  
🔗 [abdullariaz.com](https://abdullariaz.com)  
📧 hello@abdullariaz.com
*/
