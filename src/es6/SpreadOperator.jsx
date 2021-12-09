import React from "react"

const room = ["Shahadat", "Dipok", "Safayet"]
const mess = [...room, "Sobuj"]
const SpreadOperator = () => {

    return (
        <div>
            {/* {mess} */}
            {mess.toString()}
        </div>
    )
}

export default SpreadOperator
