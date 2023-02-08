import { useState } from "react"
import { CardData } from "../types"

const error = {
    isValid : false,
    message: "Wrong format",
    style: "border-red-500 focus:border-red-500"
}

type Error = {
    isValid : boolean
    message: string
    style: string
}

interface ErrorData  {
    cardholderName: Error
    cardNumber: Error
    month: Error
    year: Error
    cvc: Error
}

const useValidateInputCard = (intialValues : any) =>{

    const [validationInput , setvalidationInput] = useState(intialValues);


    const validateCorrect = (name: string) =>{        
        setvalidationInput({...validationInput,
            [name]: {
                isValid : true,
                message: "",
                style: ""
            }
        })
    }
 
    //Review input to verify the errors
    const setErros = (cardValues: any) =>{
        
        Object.keys(cardValues).map((key) => {
            validateRequired(key, cardValues[key])
        })
    }
    
    
    //The input can''t be emty
    const validateRequired = (name : string, value : any) =>{ 
        
        if(typeof value === 'string' && value.trim().length === 0){    
            setvalidationInput((prevState : any) => {                          
                return{
                    ...prevState,
                    [name]: {
                        isValid : false,
                        message: "Can't be blanck",
                        style: "border-red-500 focus:border-red-500"
                    }
                }
                
            })
            
        }else{

            validateCorrect(name);
        }
    }
    
    console.log(validationInput);
    
    
    
    return{
        validationInput,
        setErros   
    }
}

export default useValidateInputCard;