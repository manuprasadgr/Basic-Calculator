import React, { useState } from "react";
export default function Calculator() {


    const container = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

    }

    const calculator = {
        width: "370px",
        borderRadius: "10px",
        height: "580px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, 0.929)",
        border: "rgb(180, 145, 145) solid 1px",


    }


    const head = {

        display: "flex",
        flexDirection: "row",
        height: "5%",
        paddingLeft: "20px",
        paddingTop: "10px",
        color: "white"

    }

    const resultContainer = {

        height: "20%",
        color: "white",
        display: "flex",
        flexDirection: " column",
        border: "solid black 1px",
        borderRadius: "5px",
        margin: "20px"

    }


    const ButtonContainer = {
        height: "60%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        border: "rgb(45, 43, 43) solid 1px",
        borderRadius: "5px",
        margin: "10px"




    }

    const row = {
        display: "flex",
        justifyContent: "space-evenly",
        textAlign: "center",
        marginTop: "6px",
        height: "17%",
        width: "100%"


    }



    const buttonKey = {

        width: "20%",
        border: "solid black 2px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "rgba(195, 180, 164, 0.981)"


    }


    const buttonNumber = {

        width: "20%",
        border: "solid black 2px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "rgba(195, 180, 164, 0.981)",
        backgroundColor: "rgba(199, 156, 125, 0.95)"


    }


    const buttonFunction = {

        width: "20%",
        border: "solid black 2px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "rgba(195, 180, 164, 0.981)",
        backgroundColor: " rgba(150, 211, 211, 0.879)"

    }

    const sum = {
        width: "45%",
        border: "solid black 2px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "rgba(195, 180, 164, 0.981)",
        backgroundColor: " rgba(150, 211, 211, 0.879)"

    }

    const results = {
        height: "80%",
        display: "flex",

        flexDirection: "row",
        justifyContent: "flex-end",
        padding: "10px",
       

    }

    const calculation = {
        height: "25%",
        fontsize: "25%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: "10px"
    }

    const allAction = {
        height: "25%",
        fontsize: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: "10px"
    }

    const [input, setInput] = useState("");


    const handleClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleclear = () =>
        setInput('');

    const handleResult = () => {
        setInput((prevInput) => eval(prevInput).toString());
    };


    return (
        <>


            <div style={container}>
                <div style={calculator} >

                    <div style={head} >

                        <div>
                            Basic Calculator
                        </div>



                    </div>




                    <div style={resultContainer} value={input} >
                        <div style={allAction}></div>
                        <div style={calculation}></div>
                        <div style={results} >{input}</div>

                    </div>



                    <div style={ButtonContainer}>

                        <div style={row}>
                            <div style={buttonKey} onClick={handleclear} >AC</div>
                            <div style={buttonKey}  >+/-</div>
                            <div style={buttonKey} onClick={() => handleClick('%')} >%</div>
                            <div style={buttonFunction} onClick={() => handleClick('/')} >/</div>
                        </div>

                        <div style={row} >
                            <div style={buttonNumber} onClick={() => handleClick('1')}  >1</div>
                            <div style={buttonNumber} onClick={() => handleClick('2')}  >2</div>
                            <div style={buttonNumber} onClick={() => handleClick('3')}  >3</div>
                            <div style={buttonFunction} onClick={() => handleClick('*')}  >*</div>
                        </div>

                        <div style={row}>
                            <div style={buttonNumber} onClick={() => handleClick('4')} >4</div>
                            <div style={buttonNumber} onClick={() => handleClick('5')}  >5</div>
                            <div style={buttonNumber} onClick={() => handleClick('6')} >6</div>
                            <div style={buttonFunction} onClick={() => handleClick('-')}  >-</div>
                        </div>

                        <div style={row} >
                            <div style={buttonNumber} onClick={() => handleClick('7')} >7</div>
                            <div style={buttonNumber} onClick={() => handleClick('8')}  >8</div>
                            <div style={buttonNumber} onClick={() => handleClick('9')}  >9</div>
                            <div style={buttonFunction} onClick={() => handleClick('+')} >+</div>
                        </div>

                        <div style={row}>
                            <div style={buttonNumber} onClick={() => handleClick('0')} >0</div>
                            <div style={buttonNumber} onClick={() => handleClick('.')} >.</div>
                            <div style={sum} onClick={handleResult} > = </div>

                        </div>

                    </div>

                </div>
            </div>







        </>
    )


}