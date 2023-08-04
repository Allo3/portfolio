// projects.jsx
'use client'
import {ProjectCard} from "./project-card";
import {fetchProjects} from "../../services/project";
import {useEffect, useState} from "react";
import Loading from "../loading/loading";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const projectsData = await fetchProjects()
                    .then(response => {
                        console.log(response.data.data)
                        return response.data.data;
                    });
                console.log("Projects data:", projectsData);
                setProjects(projectsData);

            } catch (error) {
                console.error("Erreur lors de la récupération des projets ou des tags :", error);
            }
        };
        getData();
    }, []);


    return (
        <div className="projects-component">
            <div className="project-grid">
                {projects?.length > 0 ? (
                    projects.map((project)  => (
                        <div className={project.attributes.slug + " project-card"} key={project.id}>
                            <ProjectCard project={project}/>
                        </div>
                    ))
                ) : (
                    <div className="loading">
                        <Loading/>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Projects;