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
 contrastText: '#263238',
 },
 secondary: {
 light: '#d15353',
 main: '#c62828',
 dark: '#8a1c1c',
 contrastText: '#263238',
 },
 openTitle: '#3f51b5',
 protectedTitle: pink['400'],
 type: 'light'
 }
 })
 export default theme
