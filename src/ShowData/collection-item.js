import "./collection-item.css";

const CollectionItem = () => {

    return (

        <div id="collection-item">
            <div className="collection-item_title">Animals</div>
            <div className="collection-item_list">
                <div className="collection-item_list-item">
                    Dog <span>x</span>
                </div>
                <div className="collection-item_list-item">
                    Chicken <span>x</span>
                </div>
                <div className="collection-item_list-item">
                    Cat <span>x</span>
                </div>
            </div>
        </div>

    );

}

export default CollectionItem;