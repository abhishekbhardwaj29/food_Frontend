import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card';

export default function Home() {
    const [data, setData] = useState([])
    const [dataCategory, setDataCategory] = useState([])
    const[searchbar,setSearchbar] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const fetchdata = await fetch('http://localhost:5000/foodItem', {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await fetchdata.json()
        setData(result[0])
        setDataCategory(result[1])
        console.log(111, data)
        console.log(222, dataCategory)
    }


    return (
        <div>
            <div><Navbar /></div>
            <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id="carousel">
                    <div className='carousel-caption' style={{ zIndex: "8" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={searchbar} onChange={(e)=>setSearchbar(e.target.value)}/>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/400*700/?burger" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/400*700/?momos" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/400*700/?pizza" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div></div>
            <div className='container'>
                {dataCategory.map((item) => (<div className='row mb-3'>
                 { data.length === 0 ? "No Data Found" :<div className='fs-3 m-3'>{item.CategoryName}</div>}
                 <hr/>
                    {data.map((innerItem) => {
                        if ((innerItem.CategoryName === item.CategoryName) && (innerItem.name.toLowerCase().includes(searchbar.toLocaleLowerCase())) ) {
                            return <div className='col-12 col-mid-6 col-lg-3'><Card cardData={innerItem} /></div>
                        }
                    })}
                </div>
                ))}
            </div>
            <div><Footer /></div>
        </div>
    );

}
