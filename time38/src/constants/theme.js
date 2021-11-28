import { createTheme }  from "@material-ui/core"
import { primaryColor, neutralColor } from "./colors"

const theme = createTheme({
    palette:{
        primary:{
            main: primaryColor,
            contrastext: "white",
        },
        text:{
            primary: neutralColor,
            secondary: "#D0D0D0", //gray
        }
    }
})

export default theme