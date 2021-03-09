import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypeAnimation = () => {
    return (
        <>
            {/* <ReactTypingEffect text=["Hello.", "World!"] /> */}



            <ReactTypingEffect
                text={["Tasty!", "Quality!!", "Delicious!!!", "Cheap!!!!"]}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                    return (
                        <h1>
                            {text.split(' ').map((char, i) => {
                                const key = `${i}`;
                                return (
                                    <span
                                        key={key}
                                        style={i % 2 === 0 ? { color: 'lime' } : {}}
                                    >{char}</span>
                                );
                            })}
                        </h1>
                    );
                }}
            />
        </>
    );
};

export default TypeAnimation;