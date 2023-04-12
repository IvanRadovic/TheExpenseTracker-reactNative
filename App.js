import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return(
    <BottomTabs.Navigator>
        <BottomTabs.Screen name='RecentExpenses' component={RecentExpensesScreen} />
        <BottomTabs.Screen name='AllExpenses' component={AllExpensesScreen} />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='ExpensesOverview' component={ExpensesOverview} />
            <Stack.Screen name='ManageExpense' component={ManageExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
    </>
    
  );
}

