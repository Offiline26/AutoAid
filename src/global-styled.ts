import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

    *{
        font-family: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        color: white;
        font-style: normal;
        text-decoration: none;
        font-size: 250%;
        height: 100%;
    }
`
export default GlobalStyled