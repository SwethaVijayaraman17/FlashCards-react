import React from "react";

const FlashCards = (props) => {
    const { setJson, json } = props;
    return (
        <>
            <button id="backBtn" onClick={() => setJson([])}>Back</button>
            <div id="flashcards">
                {json.map((ele, idx) => (
                    <div id='categoryDiv' className={`flashcard${idx+1}`}>
                        <img id={`cardImg${idx+1}`} src={ele.img} />
                        <h2 id={`cardName${idx+1}`}>{ele.name}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FlashCards;