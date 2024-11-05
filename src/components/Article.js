import React from "react"

function Article({title, date="January 1, 1970", preview, minutes }) {

    //Helper function 
    const getEmoji = () => {
        let emoji = ""
        if (minutes < 30) {
            const cups = Math.ceil(minutes /5)
            emoji = "☕️".repeat(cups)
        } else {
            const bentos = Math.ceil(minutes /10)
            emoji = "🍱".repeat(bentos)
        }
        return `${emoji} ${minutes} min read`
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {getEmoji()}</small>
            <p>{preview}</p>
        </article>

    )
}


export default Article;