import "./pop-up.css";

const PopUp = () => {

    return (

        <div id="pop-up">
            <div className="pop-up_cancel">x</div>
            <form action="" id="pop-up_add">
                <input type="text" id="btn-add" placeholder="Input your topic want create"/>
            </form>
        </div>

    );

}

export default PopUp;