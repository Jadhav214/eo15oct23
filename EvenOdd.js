import {useState,useRef} from "react";
import axios from "axios";

export default function EvenOdd(){

    const rNum = useRef();
    const [num , setNum] = useState("");
    const [msg, setMsg] = useState(""); 
    
    const submit = (event) =>{
        event.preventDefault();
        if (num === ""){
            alert("Please enter number");
            rNum.current.focus();
            setMsg("");
            setNum("");
            return;
        }
        // const url = "http://localhost:9000/check";
        const url = "https://evenoddv1.onrender.com/check";
        const data = {num};
        axios.post(url,data)
        .then(res=>{setMsg(res.data)})
        .catch(err=>{setMsg(err)});

    }
    return(
        <>
        <center>
            <h1>Even odd Project</h1>
            <form onSubmit={submit}>
            <input type="number" placeholder="Enter number" onChange={(event) =>{setNum(event.target.value);}} ref = {rNum} value={num}/>
            <br/><br/>
            <input type="submit" value="Even/Odd"/>
            <br/><br/>
            </form>
            <h3>{msg}</h3>
        </center>
        </>
    );
}