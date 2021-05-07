import { createContext, useState } from "react";

export const OpenContext = createContext();

const OpenProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    const values = {
        open,
        setOpen,
        toggleOpen,
    };

    return (
        <OpenContext.Provider value={values}>{children}</OpenContext.Provider>
    );
};

export default OpenProvider;
