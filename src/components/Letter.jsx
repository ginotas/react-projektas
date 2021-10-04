import { useContext } from "react";
import { ThemeSelect, ThemeContext  } from "../Providers";

export function Letter({letter}) {
    const th = useContext(ThemeContext);
    const ts = useContext(ThemeSelect)
    return (
        <span style={th[ts]}>{letter}</span>
    )
}