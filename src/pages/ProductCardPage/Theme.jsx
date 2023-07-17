import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
      body1_medium: {
        fontFamily: "Roboto",
        letterSpacing: 0.1,
        lineHeight: 4,
        fontSize: 16,
        fontWeight: 700,
        
      },
      body_roboto: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.6,
       
      },
      title1_bold: {
        fontFamily: "ToledoTS",
        lineHeight: 2.6,
        fontSize: 30,
        fontStyle: "bold",
        fontWeight: 700,
        color:"#283455",

      },
    }
}
)
