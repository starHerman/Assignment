import React,{useState,useEffect} from 'react'
import axios from 'axios'

function HookDemo() {
    const[inputValue,setInputValue]=useState("");
    const[id,setId]=useState("")
    const[title,setTitle]=useState("")
    const handleInput=(e)=>{
        const inputValue=e.target.value;
        setInputValue(inputValue)
    }
    const handleClick=(id)=>{
       
       setId(id)
    }
    const fetchData=(id)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res=>{
                    const title=res.data.title;
                     console.log(title)
                    setTitle(title)
                })
                .catch(error=>{
                    console.error(error)
                }); 
        // console.log(id)
    }
    useEffect(
        ()=>fetchData(id),[id]
    )
    return (
        <div>
            <input type="text" onChange={handleInput} value={inputValue} />
            <button onClick={()=>handleClick(inputValue)}>setPost</button>
            <p>{title}</p>
        </div>
    )
}

export default HookDemo;
