/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { faGear, faPeopleGroup, faChartLine, faGlobe, faQuestion, faUser, faChevronDown, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import "../Style/Modaltopbar.css"

function Topbar(){
    const [modalTopbar, setmodalTopbar] = useState(false);
    const navigate = useNavigate();
    const toggleModal = () => {
        setmodalTopbar(!modalTopbar);
      };

    return(
        <div id="Topbar">
              <div className="Topbar__Logo">
                   <a href="">
                      <img src="http://27.72.147.196:28001/images/navbar.svg" alt="logo"/>
                   </a>
              </div>
              <div className="Topbar__nar">
                    <div className="Topbar__nar__icon">
                        <button>
                            <a href='#'>
                                <FontAwesomeIcon icon={faGear} /><br/>
                                <span style={{fontSize : "12px"}}> Quản trị</span>
                            </a>
                        </button>
                    </div>
                    <div className="Topbar__nar__icon">
                        <div className='container'>
                            <button>
                                <a href="https://meet.ipacs.com.vn/702626" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faPeopleGroup} /><br/>
                                </a>
                            </button>
                            <button>
                                <a href='http://27.72.147.196:28001/dashboard' target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faChartLine} /><br/>
                                </a>
                            </button>
                            <button>
                                    <a href='#'>
                                     <FontAwesomeIcon icon={faGlobe} />
                                    </a>
                            </button>
                            <button>
                                    <a href="http://27.72.147.196:28001/userGuide/index.html" target="_blank" rel="noreferrer">
                                     <FontAwesomeIcon icon={faQuestion} />
                                    </a>
                            </button>
                            <button onClick={toggleModal}>
                                    <a href='#'>
                                     <FontAwesomeIcon icon={faUser} />
                                    <span style={{fontSize : "12px"}}>Nhữ Anh Hùng</span>
                                    </a>
                            </button>
                            <button  onClick={toggleModal}>
                                     <FontAwesomeIcon icon={faChevronDown} style={{color: "white"}} />
                            </button>
                            {modalTopbar && (
                                 <div onClick={toggleModal} className="overlay">
                                        <div className="modalTopbar" onClick={ (e) => e.stopPropagation()}>
                                                <div className='modalTopbar__Header'>
                                                    <span style={{fontWeight: "700"}}>Nhữ Anh Hùng</span>
                                                    <span>(hungna)</span>
                                                </div>
                                                <div className='modalTopbar__Content'>
                                                    <div className='modalTopbar__Content_infor '>
                                                        <label>Mã nhân viên</label>
                                                        <span>: hungna</span>
                                                    </div> 
                                                    <div className='modalTopbar__Content_infor'>
                                                        <label>Khoa phòng</label>
                                                        <span>: PHÒNG CÔNG NGHỆ THÔNG TIN</span>
                                                    </div>
                                                    <div className='modalTopbar__Content_infor'>
                                                        <label>Học vị</label>
                                                        <span>:</span>
                                                    </div>
                                                    <div className='modalTopbar__Content_infor'>
                                                        <label>Số điện thoại</label>
                                                        <span>:</span>
                                                    </div>
                                                    <div className='modalTopbar__Content_infor'>
                                                        <label>Email</label>
                                                        <span>: hung.nhu@itechcorp.com.vn</span>
                                                    </div>
                                                </div>
                                                <div className='modalTopbar__Footer'>
                                                    <button onClick={()=> {
                                                        localStorage.removeItem("checkLogin") 
                                                        window.location.reload();
                                                        }}>
                                                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                                        <span style={{fontSize : "12px", color:"white"}}> Đăng xuất</span>
                                                    </button>
                                                </div>
                                        </div>
                                </div>
                            )}
                        </div>
                    </div>
                                    
              </div>
        </div>
    )
}
export default Topbar