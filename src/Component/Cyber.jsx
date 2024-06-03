import React from 'react'
import Card from './Card';

function Cyber({data}) {
    let Fsd= data.filter((e)=>e.head == "Cyber security")
    return<>
    <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {Fsd.map((e, i) => {
            return (
              <>
                <Card e={e} i={i} />
              </>
            );
          })}
        </div>
      </div>
    </>
}

export default Cyber