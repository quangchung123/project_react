import React, {  useState, useEffect} from 'react';
import Modalcontent from './Modalcontent';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Edititem =(props) =>{
    const {rowSelected, setData,type} = props;
    const[openModalcontent, setOpenModalcontent] = useState(false)
    const handleModalcontent =()=>{
          setOpenModalcontent(!openModalcontent)
    };
    return (
        <div>
            <button onClick={handleModalcontent}>
                <FontAwesomeIcon icon={faPenToSquare}/>
            </button>
            {openModalcontent && (<Modalcontent type={type} rowSelected={rowSelected} handleModalcontent={handleModalcontent} setData={setData}/>)}
        </div>
    )
}
export default Edititem