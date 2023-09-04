'use client'
import {useEffect, useState} from "react";
import "../../assets/styles/project-page.css";
import {fetchProjectBySlug} from "../../services/slug";
import Loading from "../../components/loading/loading";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";
import {useParams} from "react-router-dom";

function splitCodeAndText(content) {
    const codeRegex = /```([\w-]+)?\n([\s\S]*?)\n```/g;
    let lastIndex = 0;
    const blocks = [];
    if (typeof content !== "string") {
        throw new Error("The content passed to CodeAndText must be a string.");
    }
    let match;
    while ((match = codeRegex.exec(content)) !== null) {
        const textBefore = content.slice(lastIndex, match.index);
        if (textBefore) {
            blocks.push({type: "text", content: textBefore});
        }
        blocks.push({type: "code", language: match[1], content: match[2]});
        lastIndex = match.index + match[0].length;
    }

    const textAfter = content.slice(lastIndex);
    if (textAfter) {
        blocks.push({type: "text", content: textAfter});
    }

    return blocks;
}

export default function Project({params}) {
    const {slug} = useParams();
    console.log("slug", slug)
    const [project, setProject] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                setTimeout(async () => {
                    const projectsData = await fetchProjectBySlug(slug)
                        .then(response => {
                            console.log('response', response)
                            return response.data.data;
                        });
                    console.log("Projects data:", projectsData);
                    if (projectsData && projectsData.length > 0) {
                        setProject(projectsData[0]);
                    }
                }, 1000);
            } catch (error) {
                console.error("Erreur lors de la récupération des projets ou des tags :", error);
            }
        };

        getData();
    }, [slug]);

    console.log("project", project);
    console.log("params", params);

    const contentBlocks = project ? splitCodeAndText(project.attributes.info) : [];

    return (<>
        <>
            {project ? (<div className="info-logo">
                <div className="infos-desc">
                    {contentBlocks.map((block, index) => block.type === "code" ? (
                        <SyntaxHighlighter key={index} language={block.language} style={vscDarkPlus}>
                            {block.content}
                        </SyntaxHighlighter>) : (
                        <ReactMarkdown className="infos-container" key={index} remarkPlugins={[remarkGfm]}>
                            {block.content}
                        </ReactMarkdown>))}
                    {<img
                        src={process.env.REACT_APP_STRAPI_STATIC_FILE + project.attributes.screenMedia.data.attributes.url}
                        alt={project.attributes.title}
                    />}
                </div>
            </div>) : (<Loading/>)}
        </>
    </>);
}
