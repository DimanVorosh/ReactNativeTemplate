import React from 'react'
import { Text, SafeAreaView, Button } from 'react-native'
import styles from './styles'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@theme'

const First = () => {
  const { t, i18n } = useTranslation()

  return (
    <SafeAreaView style={styles().container}>
      <Text style={styles().text}>App template</Text>
      <Text style={styles().subText}>
        {t('helloUser', { name: 'DarkKnight' })}
      </Text>
      <Button
        title="Сменить язык"
        onPress={() =>
          i18n.changeLanguage(i18n.language !== 'ru' ? 'ru' : 'en')
        }
      />
    </SafeAreaView>
  )
}

export default First
