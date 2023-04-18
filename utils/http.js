import axios from "axios"

export const storeExpense = (expenseData) => {
  axios.post(
    'https://react-native---expense-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
     expenseData
  );
}