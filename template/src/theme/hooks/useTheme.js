import { Font } from '../Font'
import { Variables } from '../Variables'
import { Layout } from '../Layout'

export const useTheme = () => {
  return {
    Font: Font,
    Layout: Layout(),
    Colors: Variables().colors
  }
}
