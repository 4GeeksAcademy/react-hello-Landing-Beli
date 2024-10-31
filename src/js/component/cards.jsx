import React from "react";

const Cards = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr88Jekwjhxuzt1xAO2JB_DIYe2hAvtPgcvw&s" className="card-img-top" alt="tulipanes" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
export default Cards