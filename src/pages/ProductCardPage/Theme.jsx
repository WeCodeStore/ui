import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
      body1_medium: {
        fontFamily: "Roboto",
        letterSpacing: 0.1,
        lineHeight: 4,
        fontSize: 12,
        fontWeight: 700,
        margin: 8,
       
        
      },
      body2_medium: {
        fontFamily: "Roboto",
        letterSpacing: 0.1,
        lineHeight: 4,
        fontWeight: 700,
        paddingLeft: 40,
        margin: 8,
       
      },
      title1_bold: {
        fontFamily: "ToledoTS",
        lineHeight: 2.6,
        fontSize: 30,
        fontStyle: "bold",
        fontWeight: 700,
        color:"#283455",
        margin: 8,
       
        
        
      },
    }
}
)
