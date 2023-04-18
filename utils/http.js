import axios from "axios"

const BACKEND_URL = 'https://react-native---expense-default-rtdb.europe-west1.firebasedatabase.app/expenses.json';

export const storeExpense = (expenseData) => {
  axios.post(
     BACKEND_URL + "/expenses.json",
     expenseData
  );
};

export async function fetchExpenses() {
    const response = await axios.get(BACKEND_URL + "/expenses.json");

    const expneses = [];
    console.log(response.data);
    for(const key in response.data) {
    const expoenseObj = {
        id:key,
        amount:response.data[key].amount,
        date: new Date(response.data[key].date),
        description:response.data[key].description
    };
    expneses.push(expoenseObj);
    }

    return expneses;
}