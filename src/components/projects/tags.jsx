// tags/tags.jsx
import React from "react";
import "../../assets/styles/tags.css";

export function Tags({tags}) {
    return (
        <div className="tags-container">
            {tags.data && tags.data.length > 0 ? (
                <>
                    {tags.data.map((tag) => {
                        return (
                            <div className="tag-form" key={tag.id}>
                                <a href={tag.attributes.link ? (
                                    tag.attributes.link
                                ) : (
                                    "//www.google.com/search?q=" + tag.attributes.name
                                )
                                }>
                                    {process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? (
                                        <img width={40} height={40}
                                             src={process.env.REACT_APP_STRAPI_STATIC_FILE + tag.attributes.logo.data.attributes.url}
                                             alt={tag.attributes.slug}
                                        />
                                    ) : (
                                        <img width={40} height={40}
                                             src={tag.attributes.logo.data.attributes.url}
                                             alt={tag.attributes.slug}
                                        />
                                    )}
                                </a>
                            </div>
                        );
                    })}
                </>
            ) : (
                <p>Aucun tag à afficher pour le moment.</p>
            )}
        </div>
    );
}
