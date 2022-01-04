import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

:root {
    --ivory: #FFFFF0;
    --blue: #8AC6D1;
    --green: #BBDED6;
    --pastel: #FAE3D9;
    --salmon: #FFB6B9;

body {
    font-family: 'Spline Sans', sans-serif; 
    margin: 0;
}

`

export default GlobalStyles
