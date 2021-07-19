import React, {useState} from 'react'
import "../TabMenu/tab.css";
import Menu from "../TabMenu/Menu";

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={() => filterItem('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItem('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItem('evening')}>Evening</button>
                    <button className="btn btn-warning" onClick={() => filterItem('dinner')}>Dinner</button>
                    <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>
                </div>
            </div>

            {/* my main items section  */}
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                items.map((elem) => {
                                    // eslint-disable-next-line
                                   // eslint-disable-next-line
                                    const { id, name, image, description, price } = elem;

                                    return (
                                            <div className="col-lg-4 col-md-6 ">
                                        <div className="card mb-3" style={{maxWidth: "540px"}}>
                                                    <div className="row mx-auto Item-inside">
                                                        <div className="col-md-4 gx-4  img-div">
                                                        <img src={image} className="card-img" alt={name}/>
                                                        </div>
                                                        <div className="col-md-8 dabba">
                                                        <div className="card-body price-book-divide">
                                                            <h5 className="card-title main-heading text-capitalize">{name}</h5>
                                                            <p className="card-text">{description }</p>
                                                        <div className="big">
                                                            <div className="child_1">
                                                            {/* <p className="para">*boom boom.</p> */}
                                                            <h2>Price : <span className="chotu">{price}</span></h2>
                                                            </div>
                                                            <div className="child_2">
                                                            <a href="/">
                                                                <button className="btn btn-primary">Order Now</button>
                                                            </a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                    )
                                   
                                })
                        }

                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryReact
