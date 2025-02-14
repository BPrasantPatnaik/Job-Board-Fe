import React, { useState } from "react";
import FullLogo from "../../../assets/Logos/FullLogo.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CandidateSignup() {

  //${isMobile ? 'text-[5vw]' : 'text-[1.5vw]'}

  const isMobile = window.innerWidth <= 768;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const navigate = useNavigate();

  const CreateAccountClicked = async () => {

    console.log("Going inside backend of Employer signup to create the account.....");
    const res = await axios.post('/api/candidate/Signup', { username, email, password, confirmpassword, fname, lname });
    console.log("Results which came from backend", res.data);

    if (res.data.status === 422) {
      toast.warn(res.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else if (res.data.status === 407) {

      console.log("Status 407: Already an existing Candidate with email or username");

      toast.warn(res.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else if (res.data.status === 500) {
      toast.warn(res.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else if (res.data.status === 201) {
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/signin/candidate")
    }

    else {
      console.log("Error in creating the candidate account ")
    }


  }
  return (
    <>
      <div className={`flex ${isMobile ? 'text-[4vw]' : 'text-[1.5vw]'} `} >
        <div className={`left hidden md:block  `} >
          <img src={FullLogo} alt="logo" className={`min-w-[40vw] min-h-[150vh]`} />
        </div>
        <div className={` right bg-gray-400  min-w-[100vw] sm:min-w-0 `} >
          <div className={`my-[5vw] mx-[1vw] rounded-lg bg-white border-[0.2vw] border-green-400 max-h-[140vh] p-[1vw] shadow-2xl shadow-black `} >
            <div className={`flex justify-center align-middle ${isMobile ? 'text-[7vw]' : 'text-[3vw]'} font-serif font-bold text-green-500 m-[2vw] `} >Sign-up</div>

            <div className={` flex justify-center align-middle ${isMobile ? 'text-[3.5vw]' : 'text-[1.3vw]'} font-serif font-bold m-[2vw]`} >Providing opportunities you are searching for</div>

            <div className={` ml-[2vw] my-[1vw] ${isMobile ? 'text-[4vw]' : 'text-[1vw]'} text-green-600 font-serif font-semibold  `} >Fill to create account<ArrowForwardIcon style={{ fontSize: isMobile ? "5vw" : "2vw", marginLeft: "1vw" }} /></div>

            <form
              action="/"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent the default form submission behavior

                if (password === confirmpassword) {
                  CreateAccountClicked() // Call the function when passwords match

                } else {
                  setConfirmPassword(""); // Clear the confirm password field when passwords don't match
                  toast.error("Password & confirm Password not matching. Please try again.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
              }}
            >
              <div className={`content_to_be_filled flex justify-center align-middle flex-col gap-[1.5vw]  `} >
                <div className={` User Name`} >
                  <input type="text" name="" id="" className={` rounded-md border border-gray-600 px-[1vw] py-[0.5vw] min-w-[25vw] `}
                    onChange={(e) => setUsername(e.target.value)}
                    required pattern=".*\S+.*" placeholder='Username' />
                </div>

                <div className={` Candidate Email`} >
                  <input type="email" name="" id="" className={` rounded-md border border-gray-600 px-[1vw] py-[0.5vw] min-w-[25vw] `}
                    onChange={(e) => setEmail(e.target.value)}
                    required pattern=".*\S+.*" placeholder='Email i.e. xyz@email.com' />
                </div>

                <div className={`password `} >
                  <input type="password" name="" id="" className={` rounded-md border border-gray-600 px-[1vw] py-[0.5vw] min-w-[25vw] `}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    required placeholder='Create Password' />
                </div>

                <div className={`password `} >
                  <input type="password" name="" id="" className={` rounded-md border border-gray-600 px-[1vw] py-[0.5vw] min-w-[25vw] `}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    minLength={6}
                    required placeholder='Confirm Password' />
                </div>

                <div className={` First Name`} >
                  <input type="text" name="" id="" className={` rounded-md border border-gray-600 px-[1vw] py-[0.5vw] min-w-[25vw]`}
                    onChange={(e) => setFname(e.target.value)}
                    required pattern=".*\S+.*" placeholder='First Name' />
                </div>

                <div className={`Last Name `} >
                  <input type="text" name="" id="" className={` rounded-md border border-gray-600 px-[1vw] py-[0.5vw] min-w-[25vw]`}
                    onChange={(e) => setLname(e.target.value)}
                    required pattern=".*\S+.*" placeholder='Last Name' />
                </div>
              </div>

              <button type="submit" className={`m-[1vw] rounded-lg flex text-white font-semibold ${isMobile ? 'text-[4vw]' : 'text-[1vw]'} bg-green-500 p-[1vw] max-w-[30vw] justify-center align-middle relative left-[1.5vw] hover:bg-green-400 `} >Create Account</button>
            </form>

          </div>

          <div className={`flex font-serif  justify-evenly align-middle text-gray-700 ${isMobile ? 'p-[5vw]' : ''}`} >
            <div className={`${isMobile ? 'text-[4vw]' : 'text-[1vw]'} font-semibold `} >Already have an account ?</div>
            <NavLink to="/signin/candidate">
              <button className={`${isMobile ? 'text-[4vw]' : 'text-[1vw]'} rounded-lg font-semibold border-2 text-pink-600 border-pink-600 p-[1vw] hover:bg-gray-300  `} >Login</button>
            </NavLink>

          </div>
        </div>
      </div>
    </>
  )
}

export default CandidateSignup