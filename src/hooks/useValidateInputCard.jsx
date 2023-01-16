import { useState } from "react"

const error = {
    isValid : false,
    message: "Wrong format",
    style: "border-red-500 focus:border-red-500"
}
const useValidateInputCard = (intialValues) =>{

    const [validationInput , setvalidationInput] = useState(intialValues);
    const currentYear = new Date().getFullYear();


    const validateCorrect = (name) =>{
        setvalidationInput({...validationInput,
            [name]: {
                isValid : true,
                message: "",
                style: ""
            }
        })
    }

    //The input can''t be emty
    const validateRequired = (name, value) =>{
        
        if(!value){
            setvalidationInput({...validationInput,
                [name]: {
                    isValid : false,
                    message: "Can't be blanck",
                    style: "border-red-500 focus:border-red-500"
                }
            })
            return false;

        }
        return true
    }

    const ValidateCardNumber =  (value) =>{   
        
        let required = validateRequired("cardNumber",value);   
        if(value.length < 19 && required){
            setvalidationInput({...validationInput,
                cardNumber: { ...error }
            })      
        }else if(required){
            validateCorrect("cardNumber");
        }
    }

    
    
    const validateMonth = ( value) =>{
        let required = validateRequired("month", value);   
        if((value.length < 2 || parseInt(value) > 12)  && required){

            setvalidationInput({...validationInput,
                month: { ...error }
            })
        }else if(required){
            validateCorrect("month");
        }
    }

    const validateYear = (value) =>{
        let required = validateRequired("year", value);
       
        if((value.length < 2 || parseInt(`20${value}`) < currentYear)  && required){

            setvalidationInput({...validationInput,
                year: { ...error }
            })
        }else if(required){
            validateCorrect("year");
        }
    }


    return{
        validationInput, 
        ValidateCardNumber,
        validateMonth,
        validateYear,
        validateRequired

    }
}

export default useValidateInputCard;