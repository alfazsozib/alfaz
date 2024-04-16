import React,{useState,useEffect} from 'react'
import paginationIcon from "../assets/icons/Polygon 1.png"

function Pagination({activePage}) {
    const [icons, setIcons] = useState([false, false, false, false, false]); // Array to track active state

    useEffect(() => {
        // Determine which index should be active based on the current activePage
        const pageIndex = {
            '/': 0,
            '/about': 1,
            '/contact': 2,
            '/mastery': 3,
            '/reviews': 4
        }[activePage];

        if (pageIndex !== undefined) {
            // Update the icons array to set the corresponding index to true (active)
            const updatedIcons = icons.map((_, index) => index === pageIndex);
            setIcons(updatedIcons);
        }
    }, [activePage]); // Update whenever activePage changes

    return (
        <div className='icons flex flex-col gap-4 items-center'>
            {icons.map((isActive, index) => (
                <div key={index} className={`bg-white w-2 h-2 ${isActive ? 'active' : ''}`}>
                    {isActive && <img width={25} src={paginationIcon} alt="paginationIcon" />}
                </div>
            ))}
        </div>
    );
}

export default Pagination