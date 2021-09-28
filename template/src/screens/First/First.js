import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import styles from './styles'

const First = () => {
  return (
    <SafeAreaView style={styles().container}>
      <Text style={styles().text}>App template</Text>
    </SafeAreaView>
  )
}

export default First
