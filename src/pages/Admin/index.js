import React from "react";

import Map from "../../components/Map";
import Splitscreen from "../../components/Splitscreen";
import RecipeReviewCard from "../../components/Card";

const Admin = () => {
    return(
        <>
        <Splitscreen
        leftpage={<Map/>}
        rightpage={<RecipeReviewCard/>}
        />

        </>
    );
}

export default Admin;
