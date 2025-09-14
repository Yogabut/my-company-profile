import React from "react";
import { useParams } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import OtherProject from "../Components/OtherProject";
import Contact from "../Components/Contact";

const AllProject = () => {
    return (
        <div>
            <OtherProject />
            <Contact />
        </div>
    )
}

export default AllProject;