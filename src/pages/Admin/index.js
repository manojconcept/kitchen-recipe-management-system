import React from "react";

import Map from "../../components/Map";
import Splitscreen from "../../components/Splitscreen";

const Admin = () => {
    return(
        <>
        <Splitscreen
        leftpage={<Map/>}
        />
        </>
    );
}

export default Admin;
