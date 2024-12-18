import React, { useState } from "react";
import { flashCards, category } from './FlashcardsJson';
import FlashCards from "./FlashCards";

const FlashCardsCollection = () => {
    const [json, setJson] = useState([]);

    const handleSetJson = (ele) => {
        setJson(flashCards[ele.arr_name]);
    }

    return (
        <>
            <h1>Kids Learning Flashcards</h1>
            {json.length === 0 ? <div id="category">
                {category.map((ele, idx) => (
                    <div id='categoryDiv' className={`category${idx+1}`} onClick={() => handleSetJson(ele)}>
                        <img id={`categoryImg${idx+1}`} src={ele.img} />
                        <h2 id={`categoryName${idx+1}`}>{ele.name}</h2>
                    </div>
                ))}
            </div> : <FlashCards json={json} setJson={setJson} />}
        </>
    )
}

export default FlashCardsCollection;