import Button from "../styleComponents/Button";
import useValidateInputCard from "../hooks/useValidateInputCard";
import { useEffect, useState } from "react";
import Complete from "./Complete.jsx";
import Cards from "./Cards";
import Input from "../components/Input";
import Field from "../components/Fiel";
import ErrorInput from "../styleComponents/ErrorInput";
import Container from "../styleComponents/Container";
import Label from "../styleComponents/Label";


const initialValues = {
    cardholderName: '',
    cardNumber: '',
    month: '',
    cvc:'',
    year: '',
} 


const containerCards = `
    absolute 
    w-full
    lg:w-1/2
    lg:static
`;

const formContainer=`
    absolute 
    top-[350px] 
    w-full
    lg:w-1/2
    lg:static
`;

const Form = `
    w-[80%] 
    m-auto
    md:w-[60%]    
    lg:max-w-[380px]
    xl:ml-[100px]
`;

const FormFields = {
    cardholderName: {
        label: "CARD HOLDER NAME NUMBER",
        infoInputs :{
            cardholderName: {                                         
                placeholder: "e.g. Jane Appleseed",
                grid: 'col-span-12',     
                value: '',  
                validations: {
                    required: true
                } 
            }
        },
        grid : 'col-span-12',    
    },

    cardNumber: {
        label: "CARD NUMBER",
        infoInputs :{
            cardNumber : {
                placeholder: "e.g. 1234 5678 9123 0000",
                grid: 'col-span-12', 
                value: '',    
                validations: {
                    required: true,
                    minLength: 16
                }                             
            }
        },
        grid : 'col-span-12',    
    },
    
    cardDate: {
        label : "EXP. DATE",
        infoInputs : {
            month: {
                placeholder: "MM",
                grid: 'col-span-6',
                value: '',
                validations: {
                    required: true,
                    minLength: 2,                     
                    maxValue: 12
                }
            },
            year: {
                placeholder: "YY",
                grid: 'col-span-6',
                value: '',
                validations: {
                    required: true,
                    minValue: 23
                }
            }
        },
        grid : 'col-span-6',
    },
    
    cvc: {
        label: "CVC",
        infoInputs : {
            cvc: {             
                placeholder: "e.g. 123",
                grid: 'col-span-12',
                value: '',  
                validations: {
                    required: true,
                }
            }
        },
        grid : 'col-span-6',   
    }
}


export default function Dashboard(){

    const [cardValues , setCardValues ] = useState(FormFields);
    const [complete , setComplete ] = useState(false);
    
       
    //Validate input
    const {
        errors,         
        setErros 
    } = useValidateInputCard(initialValues);


    const handleChange = (e, nameField) =>{  
        let dataUpdate = {
            ...cardValues,
            [nameField] : {
                ...FormFields[nameField],

                infoInputs :{
                    
                    [e.target.name] : { 
                        ...FormFields[nameField].infoInputs[e.target.name],                   
                        value : e.target.value
                    }
                }
            }
        }

        setCardValues(dataUpdate);
        
    }

    const handleValidate = (e, nameField) =>   {
        
        setErros(nameField , cardValues[nameField]?.infoInputs);
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        // const validations  =  Object.values(validationInput);

        // Object.keys(validationInput).map((error) => {            
        //     Object.keys(cardValues).map((key) => {
        //         if(cardValues[key] === '' && !validationInput[error]?.isValid){
        //         validateRequired(key, cardValues[key]); 
        //         }              
        //     })    
        // })
        
        // const isComplete = validations.some((validation) => {            
        //     return !validation.isValid
        // })

        // if(!isComplete){
        //     setComplete(true)
        // }


    }

    const renderForm = () => {
        return(
            Object.keys(FormFields).map(field => {
                const { label, infoInputs} = FormFields[field]
                return (
                    <div className="mt-8 ml-8">
                        <Label>{label}</Label>
                        <br/>
                        {renderInputs(infoInputs, errors[field], field)}

                    </div>
                )
            })
        )
    }

    const renderInputs = (inputs, error, nameField) => {
        console.log(error);
        return(
            Object.keys(inputs).map(nameInput => {
                const {placeholder} = inputs[nameInput];
                return(
                    <>
                        <input 
                            name={nameInput}
                            placeholder={placeholder} 
                            className="border-2"
                            onChange={(e) => handleChange(e, nameField)}
                            onBlur={(e) => handleValidate(e, nameField)}
                        />
                        <br/>
                        <ErrorInput>
                            {}
                        </ErrorInput>
                    </>
                )
            })
        )
    }
    
    if(!complete){
        return(
            <div className="mt-60">                
                {renderForm()}
            </div>
        )
    }

    // return(
    //     <div class="absolute bottom-[20%] w-full lg:right-[10%] lg:w-1/2 lg:bottom-[30%]">
    //         <Complete 
    //             setComplete={setComplete} 
    //             values={initialValues} 
    //             setCardValues={setCardValues}
    //             setErros={setErros}
    //         />
    //     </div>
    // )
}