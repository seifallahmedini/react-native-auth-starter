import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'

import { colors, fonts } from '../theme'
import SignIn from './SignIn'
import SignUp from './SignUp'

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})

const routes = {
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/signInButton.png')}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/signUpButton.png')}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  }
}

const routeConfig = {
  tabBarOptions: {
    activeTintColor: colors.primary,
    labelStyle: {
      fontFamily: fonts.base,
      fontSize: 9
    },
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      paddingBottom: 3
    },
  }
}

export default TabNavigator(routes, routeConfig)
