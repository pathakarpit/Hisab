import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import GroupScreen from './Screens/GroupScreen';

const Stack = createNativeStackNavigator();

const billsMenu = [{
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 23312
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 3123
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 1234345
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 123
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 1231
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 23312
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 3123
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 1234345
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 123
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 1231
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 23312
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 3123
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 1234345
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 123
}, {
  groupName: "Pakistan Trip",
  startDate: "22-23-2023",
  totalPersons: 6,
  totalExpense: 1231
},]

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Group" component={GroupScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26272d',
  },
  header: {
    flex: 0.2,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', //Centered horizontally
    backgroundColor: '#31304D',
    marginBottom: 30,
    paddingTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 32,
    flex: 1,
    textAlignVertical: 'center',
    backgroundColor: '#31304D',
  },
  billsHeader: {
    color: '#fff',
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#26272d'
  },
  recentBills: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600'
  },
  seeAll: {
    color: '#594887',
    fontSize: 24,
    fontWeight: '600'
  },
  recentBillsContainer: {
    flex: 0.7,
    paddingLeft: 20,
    paddingRight: 20,
  },
  groupContainer: {
    color: '#594887',
    backgroundColor: '#292b33',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 5,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topTextBills: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5
  },
  bottomTextBills: {
    color: '#61636b',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  textRight: {
    textAlign: 'right',
  }


});

