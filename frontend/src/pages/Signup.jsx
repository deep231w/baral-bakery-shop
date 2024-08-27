import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtomWarning } from "../components/ButtomWarning";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";



export const Signup=()=>{
    const navigate = useNavigate();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [firstName,setFirstname]= useState("");
    const [lastName,setLastname]= useState("");
    return(
        <>
        
        <div className="  bg-grey-200">
        <Appbar/>
            <div className="flex justify-center ">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your infromation to create an account"}/>
                    <InputBox placeholder={"Your first name"} label={"First Name"} onChange={(e)=>{
            setFirstname(e.target.value)
            }}/>
                    <InputBox placeholder={"Your last name"} label={"Last Name"} onChange={(e)=>{
            setLastname(e.target.value)
            }}/>
                     <InputBox placeholder={"ex: xyz@gmail.com"} label={"Email"} onChange={(e)=>{
            setEmail(e.target.value)
         }}/>
                    <InputBox placeholder={"Your password"} label={"Password"} type={"password"} onChange={(e)=>{
            setPassword(e.target.value)
            }}/>
                    <Button onClick={async()=>{
                const response= await axios.post('https://baral-bakery-shop.onrender.com/api/users/signup',{
                    firstName,
                    lastName,
                    email,
                    password
                })
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
            }} label={"Signup"}/>
             <ButtomWarning label={"Already have an account?"} buttonText={"Signin"} to={'/signin'}/>
        </div>
       
        </div>
    </div>
        </>
    )
}
