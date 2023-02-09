// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

//  const Deleteitem = async (props) => {
//     const {data, setDatas} = props
//     const token = localStorage.getItem('token');

//     await fetch("http://27.72.147.196:28001/api/secured/ws/rest/v1/async/hospital/31313/pacs" + id, {
//       method: 'DELETE',
//       headers:{"content-type":"application/json", "authorization":`Bearer ${token}`},
//     })
//     .then(()=>setDatas(data.filter(data => data.id !== id)))
//     .catch((error)=> console.log(error))
//     return(
//       <button onClick={()=>Deleteitem(id)}>
//       <FontAwesomeIcon icon ={faTrash}/>
//      </button>
//     )
// };
// export default Deleteitem

