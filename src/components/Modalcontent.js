import React, { useState } from "react"
import "../Style/Modalcontent.css"

const Modalcontent =({rowSelected, handleModalcontent,setData,type})=>{
    const initValue ={
        aeTitle : rowSelected.aeTitle,
        name : rowSelected.name,
        ipAddress : rowSelected.ipAddress,
        port : rowSelected.port,
        configJSON : rowSelected.configJSON
    }
    const [dataDemo, setDatademo] = useState(initValue)
    const handleAddinfor=(e)=>{
        e.preventDefault();
        console.log("dataDemo", dataDemo)
       
    }
    const updateData = e =>{
        console.log("_________1_________")
        setDatademo({
            ...dataDemo,
            [e.target.name]: e.target.value
        })
        console.log("_________2_________")
    }
    console.log('check data aeTitle', dataDemo.aeTitle)
    return(
        <div className="modal">
          <div className="overlay">
          <div className="modal-content" onClick={ (e) => e.stopPropagation()}>
            <div className="modal-header">
                <span>Tạo mới PACS</span>
            </div>
            <div className="modal-body">
                <form className="modal-body__form" onSubmit={handleAddinfor}>
                    <div>
                        <label>AE Title*</label>
                        <input type="text" name="title" value={dataDemo.aeTitle} onChange={updateData} />
                    </div>
                    <div>
                        <label>Tên pacs*</label>
                        <input value={dataDemo.name} name="name" onChange={updateData} />
                    </div>
                    <div>
                        <label>IP*</label>
                        <input name="ip" value={dataDemo.ipAddress}  onChange={updateData}/>
                    </div>
                    <div>
                        <label>Port*</label>
                        <input name="number" value={dataDemo.port} onChange={updateData} type="number" />
                    </div>
                    <div>
                        <label>configJSON</label>
                        <textarea name="configJSON" value={dataDemo.configJSON}  onChange={updateData}/>
                    </div>
                    <div >
                    <button >Lưu</button>
                </div>
                    
                </form>
            </div>
            <div className="modal-footer">
                <div>
                    <button onClick={handleModalcontent}>Quay lại</button>
                </div>
            </div>
           
            </div>
          </div>
        </div>
    )
}
export default Modalcontent