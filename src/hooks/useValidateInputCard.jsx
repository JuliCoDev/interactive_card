import { useState } from "react"


const useValidateInputCard = (intialValues) =>{

    const [validationInput , setvalidationInput] = useState(intialValues);


    const handleErrors = (type, name, message) =>{       
        setvalidationInput((prevState) => {    
            return{
                ...prevState,
                [type]: {  
                    ...prevState[type],                      
                    [name] : {
                        name: name,
                        style: "border-red-500 focus:border-red-500"
                    },
                    isValid : false,
                    message: message,
                }
            }
            
        }) 
        return true; //Have error                    
    }
    
    //The input can''t be emty
    const validateRequired = (type, name , value) =>{ 
        if(typeof value === 'string' && value.trim().length === 0){  
            return (handleErrors(type, name, "Can't be blanck"))                                                 
        } 
    }

    const validateLength = (minLength, type, name, value) => {
        if(value.trim().length < minLength && value.trim().length !== 0){
           return (handleErrors(type, name, "Wrong format"));                                 
        }
    }

    const validateInput = (type, name, value, length) =>{    
        let required =  validateRequired(type, name, value);       
        let lenght =  validateLength(length, type, name, value);
        
        if(!required && !lenght){
            validateCorrect(type, name) 
        }else{
            return true;//Have errors
        }
    }

    const validateDate = (type, name, value) =>{                  
        let error = validateInput(type, name, value, 2);

        if(name === "month" && parseInt(value) > 12){
            error = handleErrors(type, name, "Invalid month")                
        }else if(name === "year" && parseInt(value) < 23){
            error = handleErrors(type, name, "Invalid year")          
        }

        if(!error){
            validateCorrect(type, name) 
        }
    }


    

    const validateCorrect = (type, name) =>{        
        setvalidationInput((prevState) => {    
            return{
                ...prevState,
                [type]: {  
                    ...prevState[type],                      
                    [name] : {
                        name: name,
                        style: ""
                    },
                    isValid : true,
                    message: "",
                }
            }
            
        }) 
    }

 
    //Review input to verify the errors
    const setErros = (type, name , value) =>{    
    
        const InputsWithValidation = {
            "cardNumber" :      () => {validateInput(type, name, value, 16)} ,
            "cardDate":         () => {validateDate(type, name, value) },
            "cvc" :             () => {validateInput(type, name, value, 3)},        
            "cardholderName" :  () => {validateRequired(type, name, value)}
        }
        InputsWithValidation[type](type, name, value) 
    }
    
    
    return{
        validationInput,
        setErros   
    }
}

export default useValidateInputCard;