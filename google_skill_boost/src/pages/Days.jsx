import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "./Data";
import {getMail} from "./mail";
import axios from "axios";
import './Days.css'

function Days(){
    const mail=getMail();
    const data=Data;
    const {days}=useParams();
    const [stored,setstored]=useState({});
    const navigator=useNavigate();
    useEffect(() => {
        Getting();
      }, []);
    function Nav(index)
    {
        navigator(`/lab/${days}/${index}`);
    }
    function Getting()
    {
        axios.get(`http://localhost:9000/getting?username=${mail}`)
        .then((res)=>{
            setstored(res.data);
            // console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    function ModifyandGetting(event)
    {
        event.preventDefault();
        console.log(event.target.innerHTML);
        if(event.target.innerHTML=="submit")
        {
            axios.get(`http://localhost:9000/modifing?username=${mail}&value=${event.target.name}`)
            .then((res)=>{
                setstored(res.data);
                // console.log(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
    const a=data[days];
    const images=['https://gdg-genai.vercel.app/img/lab1.jpg','https://gdg-genai.vercel.app/img/lab2.png','https://gdg-genai.vercel.app/img/lab3.png','https://gdg-genai.vercel.app/img/test.png']
    return(
        <>
        {
          <div className="Days_container">
            <h1>Day : {parseInt(days)+1}</h1>
            {
               a.map((values,index)=>{
                return(
                    <>
                    <div className="Days">
                        <img src={images[index]} onClick={()=>Nav(index)}/>
                        <div className="buttons">
                        <button onClick={()=>Nav(index)}>open</button>
                        <button name={days+'_'+index} onClick={(event)=>ModifyandGetting(event)}>{stored[days+'_'+index] ? "submitted":"submit" }</button>
                        </div>
                    </div>
                    </>
                )
               })
            }
          </div>
        }
        </>
    )
}
export default Days;