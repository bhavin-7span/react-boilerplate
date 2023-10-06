import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2185d0',
      dark: '#1678c2'
    }
  },
  shape: {
    borderRadius: 3
  },
  components: {
    // Base Components
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    // Regular Components
    MuiButton: {
      defaultProps: {
        variant: 'contained'
      },
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '1rem',
          textTransform: 'none',
          ':hover': {
            boxShadow: theme.shadows[2]
          },
          ':active': {
            boxShadow: theme.shadows[0]
          }
        })
      }
    },
    MuiFormHelperText: {
      defaultProps: {
        variant: 'standard'
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small'
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor: theme.palette.common.white,
          color: 'rgba(0, 0, 0, 0.87)',
          boxShadow: theme.shadows[1],
          fontSize: 11
        })
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 2,
          paddingBottom: 2
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingY: 0.5,
          fontSize: 14
        })
      }
    }
  }
})

export default theme
