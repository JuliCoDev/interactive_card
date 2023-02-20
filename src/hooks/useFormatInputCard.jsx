import { useState } from "react";
import { CardData } from "../types";


const useFormatInputCard = (cardValues) =>{
    
    const [formatCardInput , setFormatCardNumber] = useState<CardData>(cardValues);


    const changeFormatOnlyNumbers = (name , text) => {
        let textFormat =  text?.replace(/\s/g,'')//Quita espacios en blanco
        .replace(/[^0-9]/g, '')                         

       
        setFormatCardNumber({...formatCardInput,
            [name] : textFormat
        })
    }


    const changeFormatCardNumber = (name, text) =>{

        let textFormat =  text.replace(/\s/g,'')//Quita espacios en blanco
        .replace(/[^0-9]/g, '')
        .replace(/([0-9]{4})/g, '$1 ');//Coloca un espacio cada 4 numeros
       
        setFormatCardNumber({...formatCardInput,
            [name] : textFormat.trim()
        })
    }

    

    
    return{
        formatCardInput,
        changeFormatOnlyNumbers,
        changeFormatCardNumber,
    }
}

export default useFormatInputCard;