import React from "react"

function ArticleList() {
    return (
        <main>
            {postMessage.map((post) =>(
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                />
            ))}
        </main>
    )

}


export default ArticleList;