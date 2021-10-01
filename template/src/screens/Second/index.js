import React, { useRef } from 'react'
import { TextInput, SafeAreaView } from 'react-native'
import styles from './styles'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import Input from '@components/Input'
import TextInputMask from 'react-native-text-input-mask'
import Button from '@components/Button'

const Second = () => {
  return (
    <Formik
      initialValues={{ email: '', phone: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <SafeAreaView style={{ marginHorizontal: 20 }}>
          <Input label="Email" fieldName="email" formik={formik} />
          <Input
            label="Номер телефона"
            fieldName="phone"
            formik={formik}
            render={(props) => (
              <TextInputMask {...props} mask="+996 [000] [000] [000]" />
            )}
          />
          <Button handlePress={formik.handleSubmit} text="Текст кнопки" />
        </SafeAreaView>
      )}
    </Formik>
  )
}

export default Second
