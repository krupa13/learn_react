import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestuarantMenu = (resId) => {
    
    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {

        const data = await fetch(MENU_URL + resId);

        const json = await data.json();

        console.log(json);
        setResMenu(json.data);
    };
    
    return resMenu;
};

export default useRestuarantMenu;