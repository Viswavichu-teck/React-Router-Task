import React from 'react'

function Card({e,i}) {
  return <>
  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4" key={i}>
      <div className="card h-100">
        <img src={e.image} className="card-img-top mb-2" alt="card_img" />
        <div className="card-body px-4 mt-3">
          <h5 className="card-title">{e.title}</h5>
          <p className="card-text">{e.description}</p>
          <p className="card-sm-txt">Read More » </p>
        </div>
        <div className="card-footer ps-4 py-2 bg-transparent d-flex justify-content-between">
          <div className="txt my-2 d-flex">
            {e.date}
          </div>
          <div className="txt my-2 d-flex" style={{textAlign:"end"}}>
            {e.comment}
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Card