import React from 'react'
import Card from './Card';
function All({data}) {
  return <>
  <div className="container">
  <div className="row py-5 d-flex justify-content-center">
    {data.map((e,i) => (
      <Card e = {e} i ={i}/>
    ))}
  </div>
</div>
  </>
}

export default All