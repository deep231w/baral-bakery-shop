import { Appbar } from "../components/Appbar";
import { ButtomWarning } from "../components/ButtomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading} from "../components/SubHeading";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signin=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return <> <div>
        <Appbar/>
    <div className="flex justify-center ">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"SignIn"}/>
        <SubHeading label={"Please enter your credentials to sign in"}/>
        <InputBox label={"Email"} placeholder={"eg. xyz@gmail.com"} onChange={(e)=>{
                setEmail(e.target.value);
        }}/>
        <InputBox label={"Password"} placeholder={"Enter Password"} onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
        <Button label={"Sign In"} onClick={async ()=>{
                const response = await axios.post('http://localhost:3000/api/users/signin',{
                    email,
                    password
                })
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
        }}/>
        <ButtomWarning label={"Alredy have an account? "} buttonText={"Signup"}to={'/signup'}/>
        </div>
    </div>
    </div>
    </>
}