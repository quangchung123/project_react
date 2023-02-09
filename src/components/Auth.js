import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Provider";
const Auth = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validationMsg, setValidationMsg] = useState({});
    const [loading, setLoading] = useState(false)
    const [error, setError] =useState("");
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const validateAll = ()=>{
        const msg = {}
        if (username.length===0) 
            msg.username = "Hãy nhập Tên đăng nhập"
        if (password.length===0) 
            msg.password = "Hãy nhập Mật khẩu"
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) return false
        return true
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
    
        const isValid = validateAll();
        if (!isValid) return
        
        let item ={username, password}
        // lưu token và localstore 
   
        fetch('http://27.72.147.196:28001/api/ws/rest/v1/hospital/31313/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.token !==0){
              localStorage.setItem("token", data.token.access_token)
              localStorage.setItem("checkLogin",true);
              setUser({loggedIn: true})
              navigate("/Header")
            }
            else{
                   setUser({loggedIn: false})
                    setError("Tên đăng nhập hoặc mật khẩu không đúng")
                }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        setLoading(false);
    }
    return (
        <div id="wrapper">
            <div id="authlogin-block">
                <div className="logo-heading">
                    <img src="http://27.72.147.196:28001/images/icon.svg" alt="Avatar" className="avatar" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="authlogin-container">
                        <label className="authlogin__label">Tên đăng nhập</label>
                        <input className="ogin__input" type="text" placeholder="Tên đăng nhập" value={username} onChange={e => setUsername(e.target.value)} />
                        <p className="login_error">{validationMsg.username}</p>
                        
                    </div>
                    <div className="authlogin-container">
                        <label className="authlogin__label">Mật khẩu</label>
                        <input className="authlogin__input" type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} />
                        <p className="login_error">{validationMsg.password}</p>
                        <p className="login_error">{error}</p>
                    </div>
                    <div className="authlogin-icon">
                        <img src="http://27.72.147.196:28001/images/vn-rectangle.svg" alt="Icon" className="icon" />
                        <img src="http://27.72.147.196:28001/images/uk-rectangle.svg" alt="Icon" className="icon" />
                    </div>
                    <div className="authlogin-btn">
                        <button disabled={loading}>Đăng nhập</button>
                    </div>
                </form>
                <div className="authlogin_footer">
                    <span>Hỗ trợ kỹ thuật: 0962.800.362</span>
                </div>
            </div>
        </div>
    )
}
export default Auth





