// import Context from './Context';
// import React, {Fragment} from "react";
// import Provider from '../JobProfile/Provider';

// const Alldata = () =>{
//     return(
//         <Context.Consumer>
//             {
//                 (context)=>(
//                     // console.log('context',context)
//                     <Fragment>
//                             <thead>
//                                 <tr>
//                                     <td className='space'>{context.data.name}</td>
//                                     <td className='space'>{context.data.email}</td>
//                                     <td className='space'>{context.data.password}</td>
//                                     <td className='space'>{context.data.gender}</td>
//                                     <td className='space'>{context.data.state}</td>
//                                     <td className='space'>{context.data.districts}</td>
//                                     <td className='space'>{context.data.pincode}</td>
//                                     <td className='space'>{context.data.fulladdress}</td>
//                                 </tr>
//                             </thead>
//                             {/* <button onClick={() => context.submitData('cfhfgfg')}>submit</button> */}
//                     </Fragment>
//                 )
//             }
//         </Context.Consumer>
//     );
// }

// const Consumer =()=>{
//     return (
//             <div className="container">
//                 <h1 className='mt-5'>Final Table</h1>
//                 <Provider>
//                     <table className="table container mt-3">
//                         <thead>
//                             <tr>
//                                 <th>id</th>
//                                 <th scope='col'>Name</th>
//                                 <th scope="col">Email</th>
//                                 <th scope="col">Password</th>
//                                 <th scope="col">Gender</th>
//                                 <th scope="col">States</th>
//                                 <th scope="col">Districts</th>
//                                 <th scope="col">Pincode</th>
//                                 <th scope="col">Fulladdress</th>
//                             </tr>
//                         </thead> 
//                     <Alldata/>
//                   </table> 
//                 </Provider>
//             </div>
//     )
// }
// export default Consumer;