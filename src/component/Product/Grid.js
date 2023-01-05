import React from 'react'
import { Link } from 'react-router-dom'

function Grid(props) {
    // console.log(props.data)
  return (
    <div className="album py-5 bg-light">
    <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {props.data.map((item) => (
            <div className="col" key = { item.id }>
                <div className="card shadow-sm">
                    <img className="card-img-top imgheight" src={item.image} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">{item.price}$</p>
                        <p className="card-text containerx">{item.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <Link type="button" to={`/productdetails/${item.id}`} className="btn btn-primary btn-lg px-4 gap-3">Show Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>

    </div>
</div>
  )
}

export default Grid
