'use client';
import { createTheme } from "@mui/material";


const theme = createTheme({
    breakpoints: {
        values: {
            sm: 375,
            xs: 0,
            md: 768,
            lg: 1440,
            xl: 2560,
        }
    },
    components: {
        MuiUseMediaQuery: {
            defaultProps: {
                noSsr: true
            }
        }
    }
})

export default theme;