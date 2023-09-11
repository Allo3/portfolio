// projects/project-card.jsx
import {Tags} from "./tags";


import "../../assets/styles/project-card.css";
import React from "react";
import {Link} from "react-router-dom";

export function ProjectCard({project}) {
    console.log("process.env.REACT_APP_STRAPI_STATIC_FILE", process.env.REACT_APP_STRAPI_STATIC_FILE);
    console.log("process.env.REACT_APP_STRAPI_URL", process.env.REACT_APP_STRAPI_URL);
    console.log("project.attributes.media.data.attributes.url", project.attributes.media.data.attributes.url);
    console.log("project.attributes.media.data.attributes.name", project.attributes.media.data.attributes.name);
    return (
        <div key={project.id}>
            <div className="project-img">
                <Link to={'/project/' + project.attributes.slug} as="/project">
                    {
                        <img width={500} height={500}
                             src={process.env.REACT_APP_STRAPI_STATIC_FILE + project.attributes.media.data.attributes.url}
                             alt={project.attributes.media.data.attributes.name}
                        />
                    }
                </Link>
            </div>
            <Tags
                tags={project.attributes.tags}
            />
            <div className="project-desc">
                <p>{project.attributes.desc}</p>
                <div className="buttons-container">
                    <Link to={'/project/' + project.attributes.slug} target="_blank">
                        <button className="custom-btn btn-12"><span>Cliquez ici !</span><span>Détails</span>
                        </button>
                    </Link>
                    <Link to={"https://github.com/Allo3/" + project.attributes.slug} target="_blank">
                        <button className="custom-btn btn-12"><span>Cliquez ici !</span><span>GitHub</span></button>
                    </Link>
                </div>
            </div>

        </div>
    )
        ;
}
