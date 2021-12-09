import React from "react";
import data from './data'

function MapData(){
    return (
        <>
        {data.map((data,id) => {
            return (
                <div key={id}>
                    <h1>{data.id} Name:{data.name}</h1>
                </div>
            )
        })}
        </>
    )
}
export default MapData;