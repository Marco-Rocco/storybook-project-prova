import reset from "../styles/reset.css";
import typography from "../styles/typography.css";

export const GlobalStyles = () => {
    return <style> {`${reset} ${typography}`} </style>
}

