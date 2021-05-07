import { createContext, useState } from "react";

export const OpenContext = createContext();

const OpenProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [colorOpen, setColorOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    const toggleColorOpen = () => {
        setColorOpen(!colorOpen);
        if (colorOpen) {
            document.body.style.overflow = "unset";
        } else {
            document.body.style.overflow = "hidden";
        }
    };

    const values = {
        open,
        setOpen,
        toggleOpen,
        colorOpen,
        setColorOpen,
        toggleColorOpen,
    };

    return (
        <OpenContext.Provider value={values}>{children}</OpenContext.Provider>
    );
};

export default OpenProvider;
