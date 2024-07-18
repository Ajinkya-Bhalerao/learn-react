import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenu = (resID) =>{

    const [resInfo, setResInfo] = useState(null)
    const [menuInfo, setMenuInfo] = useState(null)
    //fetch Data
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        
        const data = await fetch(MENU_URL+resID).catch((e) => console.error(e));
        const menuData = await data.json()
        setResInfo(menuData.data)
        setMenuInfo(menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
                    3,
                    -2
                  ))
        
    }
    return [resInfo,menuInfo];
}

export default useRestaurantMenu;