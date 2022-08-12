import {useEffect,useState} from "react";
const useDisable = (Cart)=>{
    const [disableMinus, setDisableMinus] = useState(false);
    useEffect(()=>{
        if(Cart<=0){
            setDisableMinus(true);
        }
        else{
            setDisableMinus(false);
        }
    },[Cart]);
    return disableMinus;
};
export default DisableCart;