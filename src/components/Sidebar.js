import React from "react";
import { useState } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRadiationAlt, faDatabase, faAngleDoubleLeft, faList, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
import "../Style/Sidebar.css"

const Sidebar=() =>{
    const [openSidebar, setopenSidebar] = useState(false)
    const handleSidebar=()=>{
        setopenSidebar(!openSidebar)
    }
    return(
        <div style={{height: "100%"}}>
            <div className={`${
                (openSidebar === true) ? 'sidebarClose': 'sidebar'
            }`}>
                <div className="sidebar__header">
                    <div className="sidebar__header_title">
                        <label>Quản trị</label>
                    </div>
                </div>
                <div className="sidebar__content" >
                    <div className="sidebar__conten_list">
                        <ul>
                            <li>
                                <div href='#'>
                                <FontAwesomeIcon icon={faRadiationAlt} className="icon"/>
                                <span>
                                    Quản lý cấu hình bệnh viện
                                </span>
                                </div>
                            
                                <ul >
                                    <li style={{paddingLeft :"26px"}} >
                                        <FontAwesomeIcon icon={faDatabase} className="icon"/>
                                        <span>
                                            Cấu hình bệnh viện
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar__footer"  onClick={handleSidebar}>
                    <div className="sidebar__footer_collapse" >
                        <FontAwesomeIcon icon={faAngleDoubleLeft} className="icon"/>
                        <label>Thu gọn danh sách</label>
                    </div>
                </div>
            </div>
            {openSidebar && (
                <div className='Sidebar_mini'>
                    <div className='Sidebar_mini_header'>
                        <FontAwesomeIcon icon={faList} className="icon"/>
                    </div>
                    <div className='Sidebar_mini_content'>
                        <div></div>
                    </div>
                    <div className='Sidebar_mini_footer'  onClick={handleSidebar}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} className="icon" />
                    </div>
                </div>
            )}
        </div>
    )
} 
export default Sidebar