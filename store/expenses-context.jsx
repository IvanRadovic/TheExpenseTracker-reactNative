import { createContext, useReducer } from "react";

const DUMMY_EXPNESES = [
    {
        id: 'e1',
        description:'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e2',
        description:'A pair of trousers',
        amount: 89.99,
        date: new Date('2021-01-05'),
    },
    {
        id: 'e3',
        description:'A some dummy movie',
        amount: 5.99,
        date: new Date('2021-12-01'),
    },
    {
        id: 'e4',
        description:'Some book',
        amount: 9.99,
        date: new Date('2021-02-01'),
    },
    {
        id: 'e5',
        description:'Another letter',
        amount: 19.99,
        date: new Date('2021-08-10'),
    },  {
        id: 'e6',
        description:'A pair of trousers',
        amount: 89.99,
        date: new Date('2021-01-05'),
    },
    {
        id: 'e7',
        description:'A some dummy movie',
        amount: 5.99,
        date: new Date('2021-12-01'),
    },
    {
        id: 'e8',
        description:'Some book',
        amount: 9.99,
        date: new Date('2023-04-50'),
    },
    {
        id: 'e9',
        description:'Another letter',
        amount: 19.99,
        date: new Date('2023-04-10'),
    },
]


export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

    const expensesReducer = (state, action) => {
      switch(action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id:id}, ...state]
        case 'UPDATE':
            const updateExpenseIndx = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updateExpenseIndx];
            const updateItem = {...updatableExpense, ...action.payload.data}
            const updatedExpenses = [...state];
            updatedExpenses[updateExpenseIndx] = updateItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload.id);
        default:
            return state;
      }
    }

const ExpensesContextProvider = ({children}) => {

    const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPNESES);

    const addExpense = (expenseData) => {
      dispatch({ type:'ADD', payload: expenseData })
    }

    const deleteExpense = (id) => {
      dispatch({type:'DELETE', payload:id})
    }

    const updateExpense = (id, expenseData) => {
      dispatch({type:'UPDATE', payload:{id:id, data:expenseData}})
    }

    const value = {
        expenses:expenseState,
        addExpense: addExpense,
        deleteExpense:deleteExpense,
        updateExpense:updateExpense
    }

    return (
        <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
    )
  
}

export default ExpensesContextProvider;

