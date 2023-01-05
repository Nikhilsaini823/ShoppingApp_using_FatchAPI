import "./Product.css"
import SVGLIST from "../../list.svg"
import SVGGRID from "../../grid.svg"
import React, { useEffect, useState } from "react";
import List from "./List";
import Grid from "./Grid";

function Product() {
    const [layout, setLayout] = useState('grid');
    const [products, setProducts]= useState('');

    const fetchData = async () => {
        return await fetch("https://fakestoreapi.com/products/")
            .then((response) => response.json())
            .then(res => {
                setProducts(res);
            })
    }

    // console.log('products',products);

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div id="btnContainer">
                        <button className="btn active mb-3 me-2" onClick={() => setLayout('list')}><img src={SVGLIST} /> List</button>
                        <button className="btn active mb-3" onClick={() => setLayout('grid')}><img src={SVGGRID} /> Grid</button>

                    </div>
                   {layout === "grid" ?
                   products &&
                        <Grid data={products}/>
                        :
                    products &&
                        <List data={products}/>
                    } 
                </div>
            </div>

        </>
    )
}
export default Product;
