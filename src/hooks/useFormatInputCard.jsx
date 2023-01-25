import { useState } from "react";

const useFormatInputCard = (cardValues) =>{
    
    const [formatCardInput , setFormatCardNumber] = useState(cardValues);


    const changeFormatOnlyNumbers = (name,text) => {
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
        setFormatCardNumber( {          
            [name] : textFormat.trim()
        });

    }
    

    
    return{
        formatCardInput,
        changeFormatOnlyNumbers,
        changeFormatCardNumber,
    }
}

export default useFormatInputCard;