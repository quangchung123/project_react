import React, { useState } from 'react';
import Listitem from './Listitem';
import Modalcontent from './Modalcontent';
const Content =()=>{
    const[openModalcontent, setOpenModalcontent] = useState(false)
    const handleModalcontent =()=>{
        setOpenModalcontent(!openModalcontent)
    };
    return(
        <div className="content">
            <div className="content_heading">
                <h3>Cấu hình bệnh viện</h3>
            </div>
            <div className="content_table">
                <Listitem/>
            </div>
            <div className="content_footer">
                <button onClick={handleModalcontent}>Tạo mới</button>
                {openModalcontent && (<Modalcontent type={2} handleModalcontent={handleModalcontent} />)}
            </div>
        </div>
    )
}
export default Content;