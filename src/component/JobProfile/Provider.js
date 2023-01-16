import FormData from "./Context"
import { useState } from "react";

const Provider = props =>{
    const [finalData, setFinalData] =useState([])
        return(
            <FormData.Provider 
                value ={{data:finalData,
                setdata:()=>{
                    setFinalData({...finalData})
                }
                }}                
            >
                {props.children}
            </FormData.Provider>
        )
}
export default Provider