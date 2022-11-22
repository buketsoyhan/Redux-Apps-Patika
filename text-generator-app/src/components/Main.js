import { useState, useEffect } from 'react'
import axios from "axios"
import "./style.css"
function Main() {
    const [number, setNumber] = useState(4);
    const [type, setType] = useState("text");
    const [text, setText] = useState("");

    useEffect(() => {
        updateText();
    }, []);

    useEffect(() => {
        updateText();
    }, [number, type]);
    const updateText = async () => {
        await axios
            .get(
                `https://baconipsum.com/api/?type=all-meat&paras=${number}&format=${type}`
            )
            .then((res) => setText(res.data));
    };

    const handleChangeNum = (e) => {
        setNumber(e.target.value);
    }

    const handleChangeType = (e) => {
        setType(e.target.value)
    }

    return (
        <div>
            <header className='header'>
                <br />
                <p>Text Generator App</p>
                <hr></hr>
            </header>

            <div className="form">
                <div className="form-header">
                    <div className="paragraph">
                        <p >Paragraphs</p>
                        <input onChange={(e) => handleChangeNum(e)} value={number} className="input" type={"number"} min={1} />
                    </div>
                    <div className="include">
                        <p >Include HTML</p>
                        <select onChange={(e) => handleChangeType(e)}>
                            <option value="text">No</option>
                            <option value="html">Yes</option>
                        </select>
                    </div>
                </div>
                <div className="text">{text}</div>
            </div>
        </div>
    )
}

export default Main