import './Main.css';

import React, {
  useRef,
  useState,
} from 'react';

import AnimationBox from './AnimationBox';

const Main = () => {
    const [input, setInput] = useState('');
    const inputNum = useRef(null);

    
    return (
        <div>
            <input
                className="inputBox"
                ref={inputNum}
                onChange={(el) => setInput(el.target.value)}
            />
            <AnimationBox 
                inputRef={input}
            />
        </div>
    )
}

export default Main
