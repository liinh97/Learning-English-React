import "./select-area.scss";
import "./pop-up.scss";
import { useState, useEffect, useContext } from "react";
import { MdCancel } from "react-icons/md";
import ShowPopUpContext from "../Context/context";
import { Link } from "react-router-dom";

const SelectArea = () => {

    const [show, setShow] = useState("hide_blur");

    const handleChangeShow = (status) => {
        setShow(status);
    }

    const handleShowPopUp = () => {
        handleChangeShow("blur");
    }

    return (

        <ShowPopUpContext.Provider value={{ show: show, changeShow: handleChangeShow}}>
            <div id="select-area">
                <div className="select-area_hello">Hello, Liinh</div>
                <div className="select-area_title">select your need</div>
                <ul className="select-area_item">
                    <li className="select-area_item-topic" onClick={handleShowPopUp}>New Topic</li>
                    <Link className="select-area_item-collection" to="/Learning-English-React/collection-area">
                    Collection
                    </Link>
                    <li className="select-area_item-content" onClick={handleShowPopUp}>New Content</li>
                </ul>
                <div className={show}></div>
                <PopUp />
            </div>
        </ShowPopUpContext.Provider>

    );

}

const PopUp = () => {

    const check = useContext(ShowPopUpContext);
    const [show, setShow] = useState("show");

    useEffect(() => {
        if(check.show === "blur"){
            setShow("show visible");
        }
    }, [check.show]);

    const handleClosePopUp = () => {
        check.changeShow("hide_blur");
        setShow("show");
    }
    
    return (

        <div id="pop-up" className={show}>
            <div className="pop-up_cancel"> <MdCancel onClick={handleClosePopUp}/> </div>
            <form action="" id="pop-up_add">
                <input type="text" id="btn-add" placeholder="Input your want create"/>
            </form>
        </div>
        
    );

}

export default SelectArea;