import { globalStyles } from './global'

const font = (family, size, color) => {
  return {
    fontFamily: globalStyles().fonts.family[family],
    fontSize: size,
    color: globalStyles().colors[color]
  }
}

export default font
