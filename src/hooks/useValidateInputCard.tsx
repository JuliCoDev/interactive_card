import { useState } from "react"
import { CardData } from "../types";

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

const useValidateInputCard = (intialValues : ErrorData) =>{

    const [validationInput , setvalidationInput] = useState<ErrorData>(intialValues);

    const currentYear = new Date().getFullYear();


    const validateCorrect = (name: string) =>{        
        setvalidationInput({...validationInput,
            [name]: {
                isValid : true,
                message: "",
                style: ""
            }
        })
    }
 
    //The input can''t be emty
    const validateRequired = (name : string, value : string) =>{ 
        
        if(typeof value === 'string' && value.trim().length === 0){    

            setvalidationInput((prevState) => {                          
                return{
                    ...prevState,
                    [name]: {
                        isValid : false,
                        message: "Can't be blanck",
                        style: "border-red-500 focus:border-red-500"
                    }
                }
                
            })
            return false;

        }
        validateCorrect(name);
        return true
    }

    const validateVardName = (value: string) =>{
        let required = validateRequired("cardholderName",value);   
        if(required){
            validateCorrect("cardholderName");
        }
    }

    const ValidateCardNumber =  (value : string ) =>{           
        let required = validateRequired("cardNumber",value);   
        if(value.length < 19 && required){
            setvalidationInput({...validationInput,
                cardNumber: { ...error }
            })      
        }else if(required){
            validateCorrect("cardNumber");
        }
    }

    
    
    const validateMonth = ( value : string) =>{
        let required = validateRequired("month", value);   
        if((value.length < 2 || parseInt(value) > 12)  && required){

            setvalidationInput({...validationInput,
                month: { ...error }
            })
        }else if(required){
            validateCorrect("month");
        }
    }

    const validateYear = (value : string) =>{
        let required = validateRequired("year", value);
       
        if((value.length < 2 || parseInt(`20${value}`) < currentYear)  && required){

            setvalidationInput({...validationInput,
                year: { ...error }
            })
        }else if(required){
            validateCorrect("year");
        }
    }

    const validateCvc = (value : string) =>{
        let required = validateRequired("cvc", value);
       
        if(value.length < 3 && required){

            setvalidationInput({...validationInput,
                cvc: { ...error }
            })
        }else if(required){
            validateCorrect("cvc");
        }
    }


    return{
        validationInput, 
        ValidateCardNumber,
        validateMonth,
        validateYear,
        validateRequired,
        validateCvc,
        validateVardName,
        setvalidationInput
        

    }
}

export default useValidateInputCard;