import React from 'react'
import './accordian.css'
import { useState } from 'react';

export default function Accordian({ question, answer }) {
    // Toggling functionality
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className="col-12 rounded">
            <div onClick={()=>setShowAnswer(!showAnswer)} className="heading border py-3 px-4 mb-3">
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <h3>{question}</h3>
                    <a href='#'><i className="bi bi-plus-circle-fill"></i></a>
                </div>
                {
                    showAnswer && <p className="text-start mt-2"> {answer}</p>
                }
            </div>
            
        </div>
    )
}
