import React, { useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Style/Tablecontent.css";
import "../Style/Content.css";
import "../Style/Modalcontent.css"
import Edititem from './Edititem';
import Deleteitem from './Deleteltem';

const Listitem =()=>{
    const [datas, setDatas] = useState([]);
    const token = localStorage.getItem('token');
    const callapi = "http://27.72.147.196:28001/api/secured/ws/rest/v1/async/hospital/31313/pacs"
    useEffect(()=>{
        fetch( callapi ,{
            method:"GET",
            headers:{"content-type":"application/json", "authorization":`Bearer ${token}`},
        })
            .then(response => response.json())
            .then(data =>setDatas(data.body))
    },[])
    const deleteItem = async (id) => {
        await fetch(`http://27.72.147.196:28001/api/secured/ws/rest/v1/async/hospital/31313/pacs/${id}`, {
          method: 'DELETE',
          headers:{"content-type":"application/json", "authorization":`Bearer ${token}`},
        })
        .then(()=>setDatas(datas.filter(data => data.id !== id)))
        .catch((error)=> console.log(error))
      }
    return(
        <div>
          <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>AE Title</th>
                    <th>Tên pacs</th>
                    <th>IP</th>
                    <th>Port</th>
                    <th>Trạng thái</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {datas.map((data,index)=>{
                return(
                    <tr key={index}>
                        <th>{data.id}</th>
                        <th>{data.aeTitle}</th>
                        <th>{data.name}</th>
                        <th>{data.ipAddress}</th>
                        <th>{data.port}</th>
                        <th>Có</th>
                        <th>
                            <button onClick={()=>deleteItem(data.id)}>
                                <FontAwesomeIcon icon ={faTrash}/>
                            </button>
                                {/* <Deleteitem data={data}  setData={setDatas}/> */}
                                <Edititem type={1} rowSelected={data} setData={setDatas}/>
                        </th>
                    </tr>
                        )
                    })}
                </tbody>
         </table>
        </div>
    )
}
export default Listitem