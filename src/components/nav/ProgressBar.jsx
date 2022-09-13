import React, { useEffect, useState } from 'react'

const ProgressBar = () => {

    const [progressBar, setProgressBar] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setProgressBar(scrolled);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="progressbar">
            <div 
                className="progress" 
                style={{width: `${progressBar}%`}}
            ></div>
        </div>
    )
}

export default ProgressBar
