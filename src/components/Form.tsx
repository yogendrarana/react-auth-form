import { useState } from "react";
import toast from "react-hot-toast";

function Form() {
    const [variant, setVariant] = useState("LOGIN");

    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState({ emailError: '', passwordError: '' });

    const [registerData, setRegisterData] = useState({ email: '', password: '', confirmPassword: '' });
    const [registerError, setRegisterError] = useState({ emailError: '', passwordError: '', confirmPasswordError: '' });


    // handle toggle
    const handleToggle = () => {
        setVariant((prev) => prev === "LOGIN" ? "REGISTER" : "LOGIN");
    }

    // handle login data change
    const handleLoginDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    // handle register data change
    const handleRegisterDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }



    const handleSubmit = () => {
        if (variant === "LOGIN") {
            setLoginError({ emailError: '', passwordError: '' });

            if (loginData.email === "" || loginData.password === "") {
                if (loginData.email === "") {
                    setLoginError((prev) => ({ ...prev, emailError: "Email is required" }));
                }

                if (loginData.password === "") {
                    setLoginError((prev) => ({ ...prev, passwordError: "Password is required" }));
                }

                return;
            }


            toast.success("Logged in successfully!");
        }


        if (variant === "REGISTER") {
            setRegisterError({ emailError: '', passwordError: '', confirmPasswordError: '' });

            if (registerData.email === "" || registerData.password === "" || registerData.confirmPassword === "") {
                if (registerData.email === "") {
                    setRegisterError((prev) => ({ ...prev, emailError: "Email is required" }));
                }

                if (registerData.password === "") {
                    setRegisterError((prev) => ({ ...prev, passwordError: "Password is required" }));
                }

                if (registerData.confirmPassword === "") {
                    setRegisterError((prev) => ({ ...prev, confirmPasswordError: "Confirm password is required" }));
                }

                return;
            }

            if (registerData.password !== registerData.confirmPassword) {
                setRegisterError((prev) => ({ ...prev, confirmPasswordError: "Password do not match" }));
                return;
            }

            toast.success("Registered successfully!");
        }
    }

    return (
        <div 
            className="h-[100vh] w-[100vw] flex justify-center items-center bg-slate-300 md:p-[1rem]"
        >
            <div 
                className="
                    h-[55rem] w-[90rem] 
                    bg-white
                    relative overflow-hidden 

                    md:w-[50rem]
                    sm:h-full
                    sm:w-full 
                "
            >
                <form
                    className={`
                        h-full w-[60rem] 
                        px-[5rem]
                        relative 
                        flex flex-col justify-center items-center gap-[3rem]
                        transition-all ease-linear duration-[1s]
                        ${variant === "REGISTER" ? "transform translate-x-[60rem]" : "transform translate-x-0"}
                        
                        md:w-[50rem]
                        sm:w-full
                    `}
                >
                    <h2 className="text-[2.5rem]">Sign In</h2>

                    <label className="w-[31rem] sm:w-full flex flex-col items-center">
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={loginData.email}
                            onChange={handleLoginDataChange}
                            className="w-full p-[1rem] text-[1.25rem] text-center border-b outline-none placeholder:text-[1.5rem] focus:placeholder:opacity-0 linear duration-200"
                        />

                        <span className={`${loginError.emailError ? "h-[2rem]" : "h-0"} mt-[1rem] text-red-500 text-[1.25rem] duration-[0.25s]`}>{loginError.emailError}</span>
                    </label>

                    <label className="w-[31rem] sm:w-full flex flex-col items-center">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={loginData.password}
                            onChange={handleLoginDataChange}
                            className="w-full p-[1rem] text-[1.25rem] text-center border-b outline-none placeholder:text-[1.5rem] focus:placeholder:opacity-0 linear duration-200"
                        />

                        <span className={` ${loginError.passwordError ? "h-[2rem]" : "h-0"} mt-[1rem] text-red-500 text-[1.25rem] duration-[0.25s]`}>{loginError.passwordError}</span>
                    </label>

                    <button onClick={handleSubmit} type="button" className="w-[31rem] px-[3rem] py-[0.8rem] text-[1.5rem] bg-blue-500 text-white rounded-full">Sign In</button>

                    <p className="text-[1.5rem] text-blue-500">Forgot password?</p>

                    <p className="text-[1.5rem] cursor-pointer">New Here? Click to <u onClick={handleToggle}>register</u></p>
                </form>

                {/* sub container */}
                <div
                    className={`
                        h-full w-[90rem] 
                        pl-[30rem] 
                        overflow-hidden bg-white
                        absolute top-0 left-[60rem]
                        transition-all ease-linear duration-[1s]
                        ${variant === "REGISTER" ? "transform -translate-x-[60rem]" : "transform -translate-x-0"}

                        md:pl-0
                    sm:w-full
                    `}
                >

                    {/* image */}
                    <div
                        className={`
                            h-full w-[30rem] pt-[36rem]
                            overflow-hidden
                            absolute left-0 top-0
                            bg-[#f2f2f2]
                            z-[10]
                            flex flex-col items-center
                            
                            before:content-[''] 
                            before:absolute 
                            before:top-0 
                            before:left-0 
                            before:h-full
                            before:w-[90rem]
                            before:bg-formImage 
                            before:bg-cover 
                            before:bg-center 
                            before:bg-no-repeat
                            before:duration-[1s]
                            before:ease-linear
                            ${variant === "LOGIN" ? "before:transform before:-translate-x-[60rem]" : "before:transform before:-translate-x-0"}


                            md:hidden
                            md:before:hidden
                        `}
                    >
                        <div
                            className={`
                                w-full py-[2rem] 
                                text-center text-white 
                                absolute left-0 top-[5rem] 
                                flex flex-col gap-[1rem]
                                z-[10] 
                                transition-all ease-linear duration-[1s]
                                ${variant === "LOGIN" ? "transform translate-x-0" : "transform translate-x-[40rem]"}
                            `}
                        >
                            <h2 className="text-[2rem]">New here?</h2>
                            <p className="text-[1.5rem]">Sign up and discover the features!</p>
                        </div>
                        <div
                            className={`
                                w-full py-[2rem] 
                                text-center text-white
                                absolute left-0 top-[5rem] 
                                flex flex-col gap-[1rem]
                                z-[10] 
                                transition-all ease-linear duration-[1s]
                                ${variant === "LOGIN" ? "transform -translate-x-[40rem]" : "transform translate-x-0"}
                            `}
                        >
                            <h2 className="text-[2rem]">One of us?</h2>
                            <p className="text-[1.5rem]">Just sign in. We've missed you!</p>
                        </div>


                        <button
                            type="button"
                            onClick={handleToggle}
                            className="h-[3.5rem] w-[10rem] bg-transparent overflow-hidden relative border rounded-full"
                        >
                            <span className={`absolute left-0 top-0 right-0 bottom-0 text-[1.5rem] grid place-items-center text-white transition-all ease-linear duration-[1s] ${variant === "LOGIN" ? "transform translate-y-0" : "transform translate-y-[3rem]"}`}>SIGN UP</span>
                            <span className={`absolute left-0 top-0 right-0 bottom-0 text-[1.5rem] grid place-items-center text-white transition-all ease-linear duration-[1s] ${variant === "LOGIN" ? "transform -translate-y-[3rem]" : "transform translate-y-0"}`}>SIGN IN</span>
                        </button>
                    </div>


                    {/* register form */}
                    <form
                        className={`
                            h-full w-[60rem] 
                            px-[5rem] py-[3rem] 
                            relative 
                            flex flex-col justify-center items-center gap-[3rem] 
                            transition-all ease-linear duration-[1s]
                            ${variant === "LOGIN" ? "transform -translate-x-[90rem]" : "transform -translate-x-0"}
                            
                            md:w-[50rem]
                            sm:w-full
                        `}
                    >
                        <h2 className="text-[2.5rem]">Sign Up</h2>

                        <label className="w-[31rem] sm:w-full flex flex-col items-center">
                            <input
                                type="text"
                                placeholder="Email Address"
                                name="email"
                                value={registerData.email}
                                onChange={handleRegisterDataChange}
                                className="w-full p-[1rem] text-[1.25rem] text-center border-b outline-none placeholder:text-[1.5rem] focus:placeholder:opacity-0 linear duration-200"
                            />

                            <span className={` ${registerError.emailError ? "h-[2rem]" : "h-0"} mt-[1rem] text-red-500 text-[1.25rem] duration-[0.25s]`}>{registerError.emailError}</span>
                        </label>

                        <label className="w-[31rem] sm:w-full flex flex-col items-center">
                            <input
                                type="password"
                                placeholder="Create Password"
                                name="password"
                                value={registerData.password}
                                onChange={handleRegisterDataChange}
                                className="w-full p-[1rem] text-[1.25rem] text-center border-b outline-none placeholder:text-[1.5rem] focus:placeholder:opacity-0 linear duration-200"
                            />

                            <span className={` ${registerError.passwordError ? "h-[2rem]" : "h-0"} mt-[1rem] text-red-500 text-[1.25rem] duration-[0.25s]`}>{registerError.passwordError}</span>
                        </label>

                        <label className="w-[31rem] sm:w-full flex flex-col items-center">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={registerData.confirmPassword}
                                onChange={handleRegisterDataChange}
                                className="w-full p-[1rem] text-[1.25rem] text-center border-b outline-none placeholder:text-[1.5rem] focus:placeholder:opacity-0 linear duration-200"
                            />

                            <span className={` ${registerError.confirmPasswordError ? "h-[2rem]" : "h-0"} mt-[1rem] text-red-500 text-[1.25rem] duration-[0.25s]`}>{registerError.confirmPasswordError}</span>
                        </label>

                        <button onClick={handleSubmit} type="button" className="w-[31rem] px-[3rem] py-[0.8rem] text-[1.5rem] bg-blue-500 text-white rounded-full">Sign Up</button>

                        <p className="text-[1.5rem] cursor-pointer">One of us? Click to <u onClick={handleToggle}>login</u></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;
