import { database } from './firebase.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");

  const refSales = ref(database, "sales");
  const refExpenses = ref(database, "expenses");

  function renderTotals(totalSales, totalExpense) {
    root.innerHTML = `
      <h2>মোট বিক্রয়: ${totalSales} টাকা</h2>
      <h2>মোট খরচ: ${totalExpense} টাকা</h2>
      <h2>তহবিলে মোট অবশিষ্ট: ${totalSales - totalExpense} টাকা</h2>
    `;
  }

  let totalSales = 0;
  let totalExpense = 0;

  onValue(refSales, snapshot => {
    const data = snapshot.val();
    totalSales = 0;
    for (let key in data) {
      if (!data[key].isDeleted) {
        totalSales += data[key].totalSales || 0;
      }
    }
    renderTotals(totalSales, totalExpense);
  });

  onValue(refExpenses, snapshot => {
    const data = snapshot.val();
    totalExpense = 0;
    for (let key in data) {
      if (!data[key].isDeleted) {
        totalExpense += data[key].amount || 0;
      }
    }
    renderTotals(totalSales, totalExpense);
  });
});
