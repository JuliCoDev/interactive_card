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

interface Map {
    [key: string]: any
  }

const useValidateInputCard = (intialValues : any) =>{

    const [validationInput , setvalidationInput] = useState(intialValues);

    const validateCardNumber = (name : string , value: string) =>{
        if(value.length < 5){
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
        }   
    }


    

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
    const setErros = (name: string , value: any) =>{

        //This indicate the validation each input
        // const InputsWithValidation : Map = {
        //     'cardNumber' : validateCardNumber("cardNumber", cardValues['cardNumber'])
        // }
        
        validateRequired(name, value);


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
    
    
    
    
    return{
        validationInput,
        setErros   
    }
}

export default useValidateInputCard;