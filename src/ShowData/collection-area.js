import "./collection-area.scss";
import { useEffect, useState } from "react";

const CollectionArea = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://myproject-bd2e6-default-rtdb.asia-southeast1.firebasedatabase.app/collection.json")
        .then((res) => res.json())
        .then((resJson) => {
            setData(Object.values(resJson));
        });
    }, []);

    console.log(data);

    return (

        <div id="collection-area">
            <div className="collection-area_title">COLLECTION's YOUR</div>
            <ul id="collection-area_box">
                {
                    data ? data.map(item => 
                        <li key={item.title}>{item.title}</li>
                    ) : <li>Not Found Data</li>
                }
            </ul>
        </div>

    );

}

export default CollectionArea;