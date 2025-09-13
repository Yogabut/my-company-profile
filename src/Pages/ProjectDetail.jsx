import React from "react";
import { useParams } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import ProjectDetail from "../Components/ProjectDetail";
import Contact from "../Components/Contact";

const ProjectDetailPage = () => {
    const { id } = useParams();
    
    return (
        <div>
            <ProjectDetail projectId={parseInt(id)} />
            <Contact />
        </div>
    )
}

export default ProjectDetailPage;