import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
 typography: {
 useNextVariants: true,
 },
 palette: {
 primary: {
 light: '#801313',
 main: '#b71c1c',
 dark: '#c54949',
 contrastText: '#fff',
 },
 secondary: {
 light: '#d15353',
 main: '#c62828',
 dark: '#8a1c1c',
 contrastText: '#000',
 },
 openTitle: '#3f4771',
 protectedTitle: pink['400'],
 type: 'light'
 }
 })
 export default theme
