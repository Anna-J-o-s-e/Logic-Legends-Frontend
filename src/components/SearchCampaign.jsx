// import React, { useState } from "react";
// import axios from "axios";
// import NavBarUser from "./NavbarUser";

// const SearchCampaigns = () => {
//   const [data, setData] = useState({ query: "" });
//   const [result, setResult] = useState([]);

//   const inputHandler = (event) => {
//     setData({ ...data, [event.target.name]: event.target.value });
//   };

//   const searchCampaigns = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/searchCampaigns", { query: data.query });
//       if (response.data && response.data.length > 0) {
//         setResult(response.data);
//       } else {
//         alert("No campaigns found for the given query");
//       }
//     } catch (error) {
//       console.error("Error fetching campaigns:", error);
//       alert("An error occurred while searching for campaigns.");
//     }
//   };

//   return (
//     <div>
//       <NavBarUser />
//       <br />
//       <br />
//       <center>
//         <h1>SEARCH CAMPAIGNS</h1>
//       </center>
//       <br />
//       <br />
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <center>
//               <div className="row g-3">
//                 <div className="col-12">
//                   <label htmlFor="query" className="form-label">
//                     Search Campaigns by Title or Description
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="query"
//                     value={data.query}
//                     onChange={inputHandler}
//                   />
//                 </div>
//                 <div className="col-12">
//                   <button className="btn btn-warning" onClick={searchCampaigns}>
//                     Search
//                   </button>
//                 </div>
//               </div>
//             </center>
//           </div>
//         </div>
//         <br />
//         <br />
//         <div className="row">
//           <div className="col-12">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th scope="col">Title</th>
//                   <th scope="col">Description</th>
//                   <th scope="col">Start Date</th>
//                   <th scope="col">End Date</th>
//                   <th scope="col">Photos</th>
//                   <th scope="col">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//               {
//         result.map(
//         (value,index)=>{
//             return  <tr>
//             <td>{value.title}</td>
//             <td>{value.description}</td>
//             <td>{value.StartDate}</td>
//             <td>{value.endDate}</td>
//             <td>{value.image}</td>
//             <td>{value.status}</td>
//           </tr>
//         }
//         )
//     }
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchCampaigns;
