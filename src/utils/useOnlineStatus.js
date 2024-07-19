import { useEffect, useState } from "react"

const useOnlineStatus = () =>{

    const [onlineStatus, setOnlineStatus]  = useState(true);
    // Check if online
    useEffect(()=>{
        window.addEventListener("online",()=>{
                setOnlineStatus(true)
        })
        window.addEventListener("offline",()=>{
            setOnlineStatus(false)
    })
    },[])
    //boolean value
    return onlineStatus
}

export default useOnlineStatus