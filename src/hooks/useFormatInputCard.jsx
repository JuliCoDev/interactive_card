import { useState } from "react";


const useFormatInputCard = () =>{
    
    const [formatCardInputs , setFormatCardInputs] = useState({});


    const onlyNumbers = (name , text) => {
        let textFormat =  text?.replace(/\s/g,'')//Quita espacios en blanco
        .replace(/[^0-9]/g, '')                         

       
        setFormatCardInputs({...formatCardInputs,
            [name] : textFormat
        })
        
    }


    const cardInteractiveNumber = (name, text) =>{
        
        let textFormat =  text.replace(/\s/g,'')//Quita espacios en blanco
        .replace(/[^0-9]/g, '')
        .replace(/([0-9]{4})/g, '$1 ');//Coloca un espacio cada 4 numeros
       
        setFormatCardInputs((prevState) => {                
            return{
                ...prevState,
                [name] : textFormat.trim()
            }
        })

        
    }


    const setFormat = (name , format, value) => {
        const validateFormat = {
            "cardInteractiveNumber" : () => cardInteractiveNumber(name, value),
            "onlyNumbers" : () => onlyNumbers(name, value),

        } 
        
        Object.keys(format).map(typeFormat =>{
            
            return validateFormat[typeFormat]()
        })

    }
    


    return{
        formatCardInputs,
        setFormat
   
    }
}

export default useFormatInputCard;