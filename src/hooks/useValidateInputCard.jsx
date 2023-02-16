import { useEffect, useState } from "react"
 

const useValidateInputCard = () =>{

    const [errors , setvalidationInput] = useState({});
    const [field , setField] = useState("");

    useEffect(() => {     
        if(field !== "" && Object.entries(errors).length !== 0 ){
            validateCorrectType(field);
        }
    },[errors[field]?.infoInputs])

    const handleErrors = (type, name, message) =>{    
        setvalidationInput((prevState) => {                
            return{
                ...prevState,
                [type]: {  
                    ...prevState[type],    
                    infoInputs:{ 
                        ...prevState[type]?.infoInputs,
                        [name] : {                        
                            style: "border-red-500 focus:border-red-500",
                            isValid : false,
                        }
                    },            
                    message: message,
                    isValidType : false,
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

    
    const validateType = (typeField) =>{
        //If someone of the inputs of a type have error, te type needo to return error
        return (
            Object.keys(errors[typeField]).map((validation) => {     
                  if(!errors[typeField]?.[validation].isValid){
                    return {message: errors[typeField].message ,  isValid: false}
                  }
            })            
        )
        
    }

    const validateCorrectInput = (typeName, inputName) =>{  
        
        setvalidationInput((prevState) => {    
            
            return{
                ...prevState,
                [typeName]: {  
                    ...prevState[typeName],   
                    infoInputs:{
                        ...prevState[typeName]?.infoInputs, 
                        [inputName] : {
                            style: "",
                            isValid : true,
                        },
                    }                   
                }
            }
            
        }) 
    }

    const validateCorrectType = (nameField) =>{ 
                
        
        let inputError = Object.keys(errors[nameField]?.infoInputs).some((validation) => {
            return !errors[nameField].infoInputs[validation].isValid;

        })
         
        if(!inputError){
            setvalidationInput((prevState) => {    
                return{
                    ...prevState,
                    [nameField]: {  
                        ...prevState[nameField],   
                        message: "",
                        isValidType : true,                   
                    }
                }
            })
       }
    }

 
    //Review input to verify the errors
    const setErros = (nameField, objectFieldInputs) =>{ 
        
        
        const validationsInput = {
            "required" : (inputName , value) => validateRequired(nameField, inputName , value),
            "minLength" : (inputName, value, minlength) => validateMinLength(nameField, inputName, value, minlength),
            "minValue" : (inputName, value, minValue) => validateMinValue(nameField, inputName, value, minValue),
            "maxValue" : (inputName, value, maxValue) => validateMaxValue(nameField, inputName, value, maxValue)
        } 

        setField(nameField)

        Object.keys(objectFieldInputs).map(inputName =>{
            
            const {validations, value} = objectFieldInputs?.[inputName];
            

            Object.keys(validations).map(validation =>{
                let error = false;

                if(validation !== "required") {                    
                    error = validationsInput[validation](inputName , value, validations[validation])
                }      
                     
                let required = false;       
                required = validationsInput["required"](inputName , value, validations[validation])
                
                if(!error && !required){
                    validateCorrectInput(nameField, inputName);
                }
            })
            
        })
        
        

    }

    const clearErrors = () =>{
        setvalidationInput({});
    }

 
    return{
        errors,
        setErros,  
        clearErrors, 
    }
}

export default useValidateInputCard;