import './AnimationBox.css';

import { useState } from 'react';

const AnimationBox = (props) => {
    let str = props.inputRef;
    let inputArray = str.split(',');
    console.log(inputArray);
    const [isPlay, setIsPlay] = useState(false);
    console.log('isPlay : ', isPlay);

    const startSort = () => {
        for (let i = 1; i < inputArray.length; i += 1) {
            for (let j = i; j > 0; j -= 1) {
                    if (inputArray[j - 1] > inputArray[j]) {
                        const temp = inputArray[j - 1];
                        inputArray[j - 1] = inputArray[j];
                        inputArray[j] = temp;
                    }
            }
        }
        console.log("input array : ", inputArray);
    }

    if(isPlay) {
        console.log("the sort started");
        startSort();
    }

    return (
        <div className="mainDiv">
            <div className="contentGroup">
                {inputArray.map((el, index) => (
                    <div style={{ height: el*50 }} className="inputBoxObj" key={index}>
                    </div>
                ))}
            </div>
            
            <div className="buttonGroup">
                <button className="buttonClass">
                    <span>{'<<'}</span>
                </button>
                <button className="buttonClass">
                    <span>{'<'}</span>
                </button>
                <button className="buttonClass" onClick={() => setIsPlay(!isPlay)}>
                    {!isPlay && <span>{'|>'}</span>}
                    {isPlay && <span>{'||'}</span>}
                </button>
                <button className="buttonClass">
                    <span>{'>'}</span>
                </button>
                <button className="buttonClass">
                    <span>{'>>'}</span>
                </button>
            </div>
        </div>
    )
}





export default AnimationBox
