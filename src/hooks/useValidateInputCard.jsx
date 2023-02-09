import { useState } from "react"

const error = {
    isValid : false,
    message: "Wrong format",
    style: "border-red-500 focus:border-red-500"
}


const useValidateInputCard = (intialValues) =>{

    const [validationInput , setvalidationInput] = useState(intialValues);

    const validateCardNumber = (type, name, value) =>{  
        
        if(value.trim().length < 16){
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
                        message: "Wrong format",
                    }
                }
                
            })
            return 0;
        }   
        return 1;
    }

    

    const validateCorrect = (type, name) =>{        
        setvalidationInput({...validationInput,
            [name]: {
                isValid : true,
                message: "",
                style: ""
            }
        })
    }
    

 
    //Review input to verify the errors
    const setErros = (type, name , value) =>{    
        
        const InputsWithValidation = {
            "cardNumber" : () => { validateCardNumber(type, name, value)}
        }


        InputsWithValidation[name](type, name, value)
        validateRequired(type, name, value)
        
        
    }
    
    
    //The input can''t be emty
    const validateRequired = (type, name , value) =>{ 
        if(typeof value === 'string' && value.trim().length === 0){    
            
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
                        message: "Can't be blanck",
                    }
                }
                
            })
                               
            return 0; //Have Errors   
        }
        return 1;// Not Have Errors  
    }
    
    
    return{
        validationInput,
        setErros   
    }
}

export default useValidateInputCard;