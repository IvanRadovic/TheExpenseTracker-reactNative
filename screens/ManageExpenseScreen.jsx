import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

/* --- Componenets --- */
import CustomButtons from '../components/UI/CustomButtons.component';
import IconButton from '../components/UI/IconButton.component';
import ExpenseForm from '../components/ManageExpense/ExpenseForm.component';
import LoadingOverlay from '../components/UI/LoadingOverlay.component';
import ErrorOverlay from '../components/UI/ErrorOverlay.component'
import { storeExpense, updateExpense, deleteExpense } from '../utils/http';
/* ---- Global styling ---- */
import { GlobalStyles } from '../constats/styles';
/* --- Context ---- */
import { ExpensesContext } from '../store/expenses-context';

function ManageExpense({ route, navigation }) {
  
  const expensesCtx = useContext(ExpensesContext);
  const [isSubmiting,setIsSubmiting] = useState(false);
  const [error, setError] = useState();

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  /* -- For selected Expense to show up on screen when we tap --- */
  const selectedExpense = expensesCtx.expenses.find((expense) => expense.id === editedExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);


  /* --- DELETE expense --- */
  async function deleteExpenseHandler() {
    setIsSubmiting(true);
    try {
      await deleteExpense(editedExpenseId);
      expensesCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense - please try again!');
      setIsSubmiting(false);
    }
  }

  /* --- CANCEL button --- */
  function cancelHandler() {
    navigation.goBack();
  }


  /* ---- ADD and UPDATE expense --- */
  async function confirmHandler(expenseData) {
    setIsSubmiting(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId,expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({...expenseData, id:id});
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not save data - Please try again later!');
      setIsSubmiting(false);
    }
    
  }



  /* ----Error handlers --- */
  if(error && !isSubmiting){
    return <ErrorOverlay message={error} />
  }
  if(isSubmiting) {
    return <LoadingOverlay />
  }
  /* -- END - error handlers */

  return (
    <View style={styles.container}>
      <ExpenseForm  
        onSubmit={confirmHandler} 
        submitButtonLabel={isEditing ? "Update" : "Add"} 
        onCancel={cancelHandler}
        defaultValues={selectedExpense} 
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});