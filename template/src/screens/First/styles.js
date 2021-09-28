import { StyleSheet } from 'react-native'
import font from '../../styles/font'
import { globalStyles } from '../../styles/global'

const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: globalStyles().colors.white
    },
    text: {
      ...font('regular', 40, 'black'),
      textAlign: 'center'
    }
  })

export default styles
