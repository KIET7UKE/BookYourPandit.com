import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Cookie from '../components/Molecules/Cookie/Cookie'
import Swal from 'sweetalert2'
import axios from 'axios';
import bg from '../assets/bg.jpg';
import logo from '../assets/logo.png';

export default function SignupHelper(){
  const cookie=Cookie();
    const navigate=useNavigate();
    const [formdata,setFormdata]=useState({

        fname:"",
        lname:"",
        dob:"",
        email:"",
        phoneno:"",
        password:"",
        userType:""
    })
    
      function handleFnameChange(e){
        setFormdata({
          ...formdata,
          fname: e.target.value,
        });
      };
      function handlePasswordChange(e){
        setFormdata({
          ...formdata,
          password: e.target.value,
        });
      };  
      function handleLnameChange(e){
        setFormdata({
          ...formdata,
          lname: e.target.value,
        });
      };  
      function handleDobChange(e){
        setFormdata({
          ...formdata,
          dob: e.target.value,
        });
      };  

      function handlePhonenoChange(e){
        setFormdata({
          ...formdata,
          phoneno: e.target.value,
        });
      };  
      function handleEmailChange(e){
        setFormdata({
          ...formdata,
          email: e.target.value,
        });
      };  
      function handleUsertypeChange(e){
        setFormdata({
          ...formdata,
          userType: e.target.value,
        });
      };  
      

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          let response = await axios.post('http://localhost:8080/api/user/register',formdata)
          response=await response.data;
          console.log(response)
          if(response.code===200){
          cookie.setUserCookie(response.user)
            // navigate('/profile')
          
            Swal.fire("signup up successfully")
            
          }
          else{
            Swal("some error in your signup")
            }
          }  
         catch (error) {
          console.log(error)
        }
      };

    return(<div style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPositionY: -90,
      backgroundSize: 'cover',
      height: 2140,
      width: 1520,
    }}>
      <img src={logo} alt='' width={200} />
        <div className='h-full flex justify-center'>
            
                <form className='flex gap-1 items-center flex-col justify-around	loginForm border-2 border-black shadow-lg p-3 mb-5 bg-body-tertiary w-96 h-fit mt-28 rounded-xl' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fname" 
                            >fname</label
                        >
                        <br/>
                        <input
                            name="fname"
                            className='form-control border-2 border-black rounded-md shadow-md bg-transparent'
                            value={formdata.fname}
                            onChange={handleFnameChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="lname" 
                            >lname</label
                        >
                        <br/>
                        <input
                            name="lname"
                            className='form-control border-2 border-black rounded-md shadow-md bg-transparent'
                            value={formdata.lname}
                            onChange={handleLnameChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="dob" 
                            >Date of Birth</label
                        >
                        <br/>
                        <input
                            name="dob"
                            type='date'
                            className='form-control border-2 border-black rounded-md shadow-md bg-transparent'
                            value={formdata.dob}
                            onChange={handleDobChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" 
                            >email</label
                        >
                        <br/>
                        <input
                            name="email"
                            type='email'
                            className='form-control border-2 border-black rounded-md shadow-md bg-transparent'
                            value={formdata.email}
                            onChange={handleEmailChange}
                        />
                    </div>
                   
                    <div>
                        <label htmlFor="phoneno" 
                            >Phone No.</label
                        >
                        <br/>
                        <input
                            name="phoneno"
                            pattern="[0-9]{10}"
                            className='form-control border-2 border-black rounded-md shadow-md bg-transparent'
                            value={formdata.phoneno}
                            onChange={handlePhonenoChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password" 
                            >Password</label
                        >
                        <br/>
                        <input
                            name="password"
                            className='form-control border-2 border-black rounded-md shadow-md bg-transparent'
                            value={formdata.password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                   
                    <div>
                    <label for="userType">Select Role:</label>
                    <br/>
                    <select 
                    className='form-control border-2 border-black rounded-md shadow-md bg-transparent'
                    id="userType" name="userType" onChange={handleUsertypeChange}>
                        <option value="user">User</option>
                        <option value="pandit">Pandit</option>
                    </select>
                    </div>
                    

                    <button type="submit" className="border border-black p-2 py-1.5 rounded text-white bg-black">SIGNUP</button>
                </form>
            
        </div>
        
        </div>
    );
}