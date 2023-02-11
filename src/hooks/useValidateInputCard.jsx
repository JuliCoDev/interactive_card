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
                        style: "border-red-500 focus:border-red-500"
                    },
                    message: message,
                    isValid : false,
                },
            }
            
        }) 
        return true; //Have error                    
    }
    
    //The input can''t be emty
    const validateRequired = (type, name , value) =>{        
        if(typeof value === 'string' && value.trim().length === 0){  
            return handleErrors(type, name, "Can't be blanck")                                                            
        } 
    }

    const validateMinLength = (type, name, value, minLength) => {        
        if(value.trim().length < minLength ){
           return handleErrors(type, name, "Wrong format");                                 
        }
    }

    const validateMinValue = (type, name, value, minValue) => {   
        if(parseInt(value) < minValue){
            return handleErrors(type, name, "Invalid date");                                 
        }
    }

    const validateMaxValue = (type, name, value, maxValue) => {   

        if(parseInt(value) > maxValue){
            return handleErrors(type, name, "Invalid date");                                 
        }
    }


    const validateCorrect = (type, name) =>{        
        setvalidationInput((prevState) => {    
            return{
                ...prevState,
                [type]: {  
                    ...prevState[type],                      
                    [name] : {
                        style: ""
                    },
                    isValid : true,
                    message: "",
                }
            }
            
        }) 
    }

 
    //Review input to verify the errors
    const setErros = (typeField, inputName, validations, value) =>{ 

        const validationsInput = {
            "required" : () => validateRequired(typeField, inputName , value),
            "minLength" : (minlength) => validateMinLength(typeField, inputName, value, minlength),
            "minValue" : (minValue) => validateMinValue(typeField, inputName, value, minValue),
            "maxValue" : (maxValue) => validateMaxValue(typeField, inputName, value, maxValue)
        } 
        
        Object.keys(validations)?.map(validation => { 
            let required =validateRequired(typeField, inputName , value);
            let error = required;
            if(!required){
                error = validationsInput[validation](validations[validation])
            }
            if(!error){
                validateCorrect(typeField, inputName)
            }            
        });

    }
 
    return{
        validationInput,
        setErros   
    }
}

export default useValidateInputCard;