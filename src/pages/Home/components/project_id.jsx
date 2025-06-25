import React, { useContext } from 'react';
import { MyContext } from "../../../utils/contextProvider";
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projects } = useContext(MyContext);
    const id = useParams().id;
    const project = projects.find((project) => project.id === id);
    return (
        <div>
            
        </div>
    );
};

export default ProjectDetails;