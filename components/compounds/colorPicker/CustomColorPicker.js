import { CustomPicker } from "react-color";
import {
    EditableInput,
    Hue,
    Saturation,
} from "react-color/lib/components/common";

import { HueWrapper, SaturationWrapper, Swatch } from "./Styles";
import { withTheme } from "styled-components";

const CustomColorPicker = ({ hex, hsl, hsv, onChange, theme }) => {
    const styles = {
        input: {
            width: "100%",
            height: 34,
            paddingLeft: 10,
            borderRadius: "0.2rem",
            boxShadow:
                "inset 1px 1px 2px 0px rgba(0,0,0,0.5), inset -1px -1px 2px 0px rgba(255,255,255,0.5)",
            border: "none",
            backgroundColor: theme.backgroundColor.primary,
            color: theme.textColor.primary,
            outline: "none",
        },
    };

    return (
        <>
            <SaturationWrapper>
                <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
            </SaturationWrapper>
            <div style={{ display: "flex", marginBottom: "0.4rem" }}>
                <div>
                    <HueWrapper>
                        <Hue hsl={hsl} onChange={onChange} />
                    </HueWrapper>
                    <EditableInput
                        style={{ input: styles.input }}
                        value={hex}
                        onChange={onChange}
                    />
                </div>
                <Swatch
                    hex={hex}
                    onClick={() => {
                        navigator.clipboard.writeText(hex);
                    }}
                />
            </div>
        </>
    );
};

export default CustomPicker(withTheme(CustomColorPicker));
