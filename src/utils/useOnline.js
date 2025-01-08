import { useState, useEffect } from 'react'
const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true)
    useEffect(() =>{
        const handleOffline = () => {
            setIsOnline(false)
        }
        const handleOnline = () => {
            setIsOnline(true)
        }
        addEventListener("online", handleOnline)
        addEventListener("online", handleOffline)
    
        return () => {
            removeEventListener('online', handleOnline)
            removeEventListener('offline', handleOffline)
        }
    },[])
    
    return isOnline;
}
export default useOnline;