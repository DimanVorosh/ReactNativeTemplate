import { StyleSheet } from 'react-native'
import { Variables } from './Variables'

export const Font = (family, size, color) => {
  console.log(family, Variables().fonts.size[size], color)
  return {
    fontFamily: Variables().fonts.family[family],
    fontSize: Variables().fonts.size[size],
    color: color
  }
}
