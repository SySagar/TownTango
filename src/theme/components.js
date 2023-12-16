/**
 * @type {import("@mui/material").Components}
 */
const componentOverrides = {
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        borderRadius: "6px",
        textTransform: "none",
      },
      text:{
        color:'#232946'
      },
      outlined:{
        color:'#232946'
      },
      contained:{
        ':hover':{
          backgroundColor:'#eebbc3'
        }
      }
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundImage: "none",
      },
    },
  },
};

export default componentOverrides;
