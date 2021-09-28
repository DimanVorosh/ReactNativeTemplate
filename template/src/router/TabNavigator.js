import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import First from './../screens/First/First'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const getTabBarVisible = ({ route }) => {
    let tabBarVisible = true

    if (route.state && route.state.index > 0) {
      tabBarVisible = false
    }

    return tabBarVisible
  }

  return (
    <Tab.Navigator
      initialRouteName="First"
      screenOptions={{
        headerShown: false
      }}
      // tabBarOptions={{
      //   inactiveTintColor: '#A9AFBA',
      //   labelStyle: {
      //     fontSize: 12
      //   },
      //   keyboardHidesTabBar: true
      // }}
    >
      <Tab.Screen
        name="First"
        component={First}
        options={({ route }) => ({
          tabBarLabel: 'First'
          // tabBarVisible: getTabBarVisible({ route })
        })}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
