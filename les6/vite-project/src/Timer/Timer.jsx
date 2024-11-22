import { useEffect, useState } from "react";

function Timer(){

    const [time, setTime] = useState(0)

    useEffect(() => {
        const timer = setInterval(() =>{
            setTime(time+5)
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [time]);

    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

export default Timer