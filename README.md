# শ্রীউলা ঘেরের রেজিস্টার (Fish Business Register)

This is a web application designed to record and calculate daily fish sales and expenses for a fish business. The app uses **Firebase Realtime Database** to store live data accessible from multiple devices in real time.

## Features

- Daily records of fish sales (morning and evening quantities, rates, totals)
- Daily expense records with reasons and amounts
- Calculates total sales, total expenses, and remaining balance in the fund
- Real-time data syncing across devices using Firebase
- Simple Bengali language interface for local users

## Technologies Used

- **HTML5, CSS3, JavaScript (ES6 modules)**
- **Firebase Realtime Database** for backend data storage
- Firebase JavaScript SDK v9 (modular imports)
- Responsive design and modern web standards

## 📂 Project Structure

```
fish-business-app/
├── index.html
├── firebase.js
├── app.js
├── README.md
└── _assets/
    ├── *.css
    ├── *.js
    └── images/
```

## 🚀 Getting Started

1. Clone or download this repository to your local machine.
2. Replace the placeholder assets in the `_assets` folder with your actual CSS, JS, and image files (if necessary).
3. Update `firebase.js` with your Firebase project's configuration if you want to use your own backend.
4. Open `index.html` in a web browser or deploy the app on any static hosting service such as GitHub Pages, Netlify, or Firebase Hosting.
5. The app will connect to Firebase Realtime Database to fetch and display sales and expense data in real time.

## 🤝 Contributing

Contributions and suggestions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the MIT License © 2025 Abdullah Al Riaz.
