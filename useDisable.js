import {useEffect,useState} from "react";
const useDisable = (Quantity)=>{
    const [disableMinus, setDisableMinus] = useState(false);
    useEffect(()=>{
        if(Quantity<=0){
            setDisableMinus(true);
        }
        else{
            setDisableMinus(false);
        }
    },[Quantity]);
    return disableMinus;
};
export default useDisable;