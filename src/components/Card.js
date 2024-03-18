import React, {useState}from 'react'

export default function Card(Props) {

    const [newData, setNewData] = useState(Object.keys(Props.cardData.options[0])[0])
    const [numData, setnumData] = useState(1)
    console.log(8989,newData)
    console.log(9898, Props.cardData.options[0])

    const dropdownFn = (e) => {
        setNewData(e.target.value)
    }

    const numFn = (e) => {
        setnumData(e.target.value)
    }

    return (
        <div>
            <div>
                <div className="card mt-3 d-inline-block" style={{ width: "18rem", maxHeight: "460px" }}>
                    <img src={Props.cardData.img} className="card-img-top" alt="..." style={{ width: "287px", height: "230px" }} />
                    <div className="card-body">
                        <h5 className="card-titles " style={{marginLeft:"38px"}}>{Props.cardData.name}</h5>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' value={numData} onChange={numFn}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded' value={newData} onChange={dropdownFn} >
                                {Object.keys(Props.cardData.options[0]).map((item) => (
                                    <option value={item}>{item}</option>
                                ))}
                            </select>
                            <div className='d-inline h-100 fs-5'>
                              {` = ${Props.cardData.options[0][newData] * numData}`}
                            </div>
                            <hr/>
                            <button className='btn btn-success justify-center ms-2 '>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
