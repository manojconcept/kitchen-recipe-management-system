import React from 'react'

const NavLogo = () => {
    return (
        <>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                    id="MyPath"
                    fill="none"
                    stroke="red"
                    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />
                <text>
                    <textPath href="#MyPath"> Manojconcept kitchen recipe management -------------</textPath>
                </text>
            </svg>

        </>
    )
}

export default NavLogo