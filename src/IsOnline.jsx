import { useEffect, useState } from "react";

function useIsOnline() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return isOnline;
}

function CheckOnline() {
    const isOnline = useIsOnline();

    return (
        <div>
            {isOnline ? (
                <button>Yay, You are <b>online</b>....!</button>
            ) : (
                <button>Ooops... You are <b>offline</b>!</button>
            )}
        </div>
    );
}

export default CheckOnline;