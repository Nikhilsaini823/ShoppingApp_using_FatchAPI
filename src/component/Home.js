import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import Sliders from './Home/Slider/Sliders'
import Title from './Home/Title/Title'

function Home() {
  return (
    <>
    <Title/>
    <Sliders/>
        <div className='container mt-4 '>
            <h1>Multiple Cards</h1>
            <div className="container center mt-4">
                <div className="row">
                    <div className="col space">
                        <div className="card imgsize">
                            <div className='container mt-4'>
                                <img className="card-img-top" src="/images/unnamed.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="/card1" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    <div className="col space">
                        <div className="card imgsize">
                            <div className='container mt-4'>
                                <img className="card-img-top" src="/images/unnamed.jpg" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="/card2" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
