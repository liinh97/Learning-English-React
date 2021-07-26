import "./select-area.css";
import PopUp from "./pop-up";

const SelectArea = () => {

    return (

        <div id="select-area">
            <div className="select-area_hello">Hello, Liinh</div>
            <div className="select-area_title">select your need</div>
            <ul className="select-area_item">
                <li className="select-area_item-topic">New Topic</li>
                <li className="select-area_item-collection">Collection</li>
                <li className="select-area_item-content">New Content</li>
            </ul>
            <PopUp/ >
        </div>

    );

}

export default SelectArea;