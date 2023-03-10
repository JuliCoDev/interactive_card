import Button from "../styleComponents/Button";
import useValidateInputCard from "../hooks/useValidateInputCard";
import { useEffect, useState } from "react";
import Complete from "./Complete.jsx";
import Cards from "./Cards";
import Input from "../components/Input";
import Field from "../components/Field";
import Container from "../styleComponents/Container";
import Form from "../components/Form";
import useFormatInputCard from "../hooks/useFormatInputCard";



const initialValues = {
    cardholderName: '',
    cardInteractiveNumber: '',
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



const FormFields = {
    cardholderName: {
        label: "CARD HOLDER NAME",
        infoInputs :{
            cardholderName: {                                         
                placeholder: "e.g. Jane Appleseed",
                grid: 'col-span-12',     
                value: '',  
                defaultValue : 'Jane Appleseed',
                validations: {
                    required: true
                },                
            }
        },
        grid : 'col-span-12',    
    },

    cardInteractiveNumber: {
        label: "CARD NUMBER",
        infoInputs :{
            cardInteractiveNumber : {
                placeholder: "e.g. 1234 5678 9123 0000",
                grid: 'col-span-12', 
                value: '',    
                defaultValue : '0000 000 000 0000',
                validations: {
                    required: true,
                    minLength: 16
                },                                                           
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
                defaultValue : '00',
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
                defaultValue : '00',
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
                defaultValue : '000',
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
        setErros,
        clearErrors 
    } = useValidateInputCard(initialValues);
    
    

    const handleChange = (e, nameField) =>{  
        
        

        let dataUpdate = {
            ...cardValues,
            [nameField] : {
                ...cardValues[nameField],
                infoInputs :{
                    ...cardValues[nameField].infoInputs,                   
                    [e.target.name] : { 
                        ...cardValues[nameField].infoInputs[e.target.name],
                        value : e.target.value
                    }
                }
            }
        }
        
        setCardValues(dataUpdate);
        
    }

    const handleValidate = (nameField) =>   {
        setErros(nameField , cardValues[nameField]?.infoInputs);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        Object.keys(cardValues).map((nameField) => {                        
            setErros(nameField , cardValues[nameField]?.infoInputs);  
             
        })

        const validations  =  Object.values(errors);
        
        if(validations.length > 0){
            const isComplete = validations.some((validation) => {      
                return !validation.isValidType
            })
            

            if(!isComplete){
                setComplete(true)
            }
        }
    }


    if(!complete){
        return(
            <Container>
                
                <div className={containerCards}>
                    <Cards cardValues={cardValues}/>
                </div>
                <div className={formContainer}>
                    <Form handleSubmit={handleSubmit}>
                        <div className="grid grid-cols-4 gap-4"> 
                            {Object.keys(FormFields).map(field => {
                                const {infoInputs} = FormFields[field]
                                return(
                                    <Field field={FormFields[field]} errors={errors} nameField={field}>
                                        <Input 
                                            inputs={infoInputs}
                                            error={errors?.[field]?.infoInputs}
                                            nameField={field}
                                            change={(e) => handleChange(e, field)}
                                            validateInput={() => handleValidate(field)}
                                        />  
                                    </Field>
                                )
                            })}
                        </div>
                        <div>
                            <Button type="submit"> 
                                Confirm
                            </Button>
                        </div>
                    </Form>
                </div>               
                
            </Container>
        )
    }

    return(
        <div class="absolute bottom-[20%] w-full lg:right-[10%] lg:w-1/2 lg:bottom-[30%]">
            <Complete 
                setComplete={setComplete} 
                values={FormFields} 
                setCardValues={setCardValues}
                clearErrors={clearErrors}
            />
        </div>
    )
}