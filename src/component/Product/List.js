import React from 'react'
import { Link } from 'react-router-dom';
import "./List.css"

function List(props) {
    console.log(props.data)
  return (
   
    <section >
    <div className="container py-5">
        {props.data.map((item) => (
        <div className="row justify-content-center mb-3" key = { item.id }>
            <div className="col-md-12 col-xl-10">
                <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                <div className="bg-image hover-zoom ripple rounded ripple-surface imgheight">
                                    <img src={item.image}
                                    className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <p className="card-text ">{item.title}</p>
                                <div className="d-flex flex-row align-items-center mb-1">
                                    <h4 className="mb-1 me-1">${item.price}</h4>
                                </div>
                                <Link type="button" to={`/productdetails/${item.id}`} className="btn btn-primary btn-lg px-4 gap-3 margin">Show Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </div>
  </section>
  )
}

export default List;
