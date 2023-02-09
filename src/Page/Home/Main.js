import React from 'react';
import Topbar from "../../components/Topbar"
import "../../Style/Topbar.css"
import Sidebar from "../../components/Sidebar"
import Content from "../../components/Content"

const Main=() =>{

    return(
          <>
            <Topbar />
            <div className="main" style={{display: "flex", height:"95%", backgroundColor:"#e5f3fd"}}>
                <Sidebar />
                <Content/>
            </div>
          </>
      
    )
}
export default Main