import { useState } from "react"

export const useToggleDrawer = (initState: boolean) => {
    const [isToggled, setIsToggled] = useState(initState);
    const toggleDrawer = () => {
        setIsToggled(prev => !prev);
    }
    return { isToggled, toggleDrawer }
}