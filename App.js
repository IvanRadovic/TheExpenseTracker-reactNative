import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';


/* -- Components --  */
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';

/* -- Global css --  */
import { GlobalStyles } from './constats/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return(
    <BottomTabs.Navigator 
      screenOptions={{
        headerStyle:{ backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle:{ backgroundColor : GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500
      }}
    >
        <BottomTabs.Screen 
          name='RecentExpenses' 
          component={RecentExpensesScreen} 
          options={{
            title: 'Recent Expenses',
            tabBarLabel:'Recent',
            tabBarIcon: ({color, size}) => <Ionicons name='hourglass' size={size} color={color}  />
          }} 
        />
        <BottomTabs.Screen 
          name='AllExpenses' 
          component={AllExpensesScreen} 
          options={{
            title: 'All Expenses',
            tabBarLabel:'All expenses',
            tabBarIcon: ({color, size}) => <Ionicons name='calendar-outline' size={size} color={color} />
          }} 
        />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
              name='ExpensesOverview' 
              component={ExpensesOverview} 
              options={{headerShown:false}}
            />
            <Stack.Screen name='ManageExpense' component={ManageExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
    </>
    
  );
}

