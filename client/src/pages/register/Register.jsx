// import "./register.css";
// // import Sidebar from "../../components/sidebar/Sidebar";
// // import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useContext, useState } from "react";
// import axios from "axios";
// import { userInputs } from "../login/formSource";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../components/context/AuthContext";

// const Register = () => {
//   const [file, setFile] = useState("");
//   const [info,setInfo] = useState({});
//   const navigate = useNavigate();

//   const {user,loading,error} = useContext(AuthContext);
  
//   const handleChange = (e)=>{
//     setInfo((prev)=>({...prev, [e.target.id]: e.target.value}));
//   };

//   const handleClick = async (e)=>{
//     e.preventDefault();
//     const newUser = {
//       ...info,
//     };
//     try {
//       await axios.post("/auth/register",newUser);
//       navigate('/login')
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="new">
//       {/* <Sidebar /> */}
//       <div className="newContainer">
//         {/* <Navbar /> */}
//         <div className="top">
//           <h1>Add New User</h1>
//         </div>
//         {/* <div className="bottom"> */}
//           {/* <div className="left">
//             <img
//               src={
//                 file
//                   ? URL.createObjectURL(file)
//                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//               }
//               alt=""
//               className=".lImage"
//             />
//           </div> */}
//           <div className="right">
//             <form className=".lForm">
//               {/* <div className="formInput">
//                 <label htmlFor="file">
//                   Image: <DriveFolderUploadOutlinedIcon className="icon" />
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   style={{ display: "none" }}
//                 />
//               </div> */}

//               {userInputs.map((input) => (
//                 <div className="formInput" key={input.id}>
//                   <label className="lLabel">{input.label}</label>
//                   <input className="lInput" onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id}/>
//                 </div>
//               ))}
              
//             </form>
//             <button onClick={handleClick} className='lButton'>Send</button>
//             {error && <span>{error.message}</span>}
//           </div>
//         {/* </div> */}
//        </div>
//     </div>
//   );
// };

// export default Register;
