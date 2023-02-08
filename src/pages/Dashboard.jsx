import Button from "../styleComponents/Button";
import useValidateInputCard from "../hooks/useValidateInputCard";
import { useState } from "react";
import Complete from "./Complete.jsx";
import Cards from "./Cards";
import Input from "../components/Input";


const initialValues = {
    cardholderName: '',
    cardNumber: '',
    month: '',
    cvc:'',
    year: '',
} 

const container=`     
    h-screen
    relative 
    lg:flex
    lg:items-center
`;

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

const FormFields = [
    {
        label: "CARD HOLDER NAME",
        inputs: [{
            name: 'cardholderName',  
            placeholder: 'e.g. Jane Appleseed',
            type: 'text',
            length: 300,
            grid: 'col-span-12'

        }],
        grid: 'col-span-12'
    },
    {
        label: 'CARD NUMBER',
        inputs: [{
            name: 'cardNumber',  
            placeholder: 'e.g. 1234 5678 9123 0000',
            type: 'number',            
            grid: 'col-span-12'

        }],
        grid: 'col-span-12'  
    },
    {   
        label: 'EXP. DATE',
        inputs: [
            {
                name: 'month',  
                placeholder: 'e.g. 05',
                type: 'text',
                length: 2,
                grid: 'col-span-6'
            },
            {
                name: 'year',  
                placeholder: 'e.g. 25',
                type: 'text',
                length: 2,
                grid: 'col-span-6'
            }
        ],
        grid: 'col-span-6'    
    },
    {
        label: 'CVC',
        inputs: [
            {
                name: 'cvc',  
                placeholder: 'e.g. 123',
                type: 'text',
                length: 3,
                grid: 'col-span-12'
            },
        ],
        grid: 'col-span-6' 
    }
]


export default function Dashboard(){

    const [cardValues , setCardValues ] = useState(initialValues);
    const [complete , setComplete ] = useState(false);
    
       
    //Validate input
    const {
        validationInput,         
        setErros
    } = useValidateInputCard(initialValues);


    const handleChange = (e) =>{
        setCardValues({
            ...cardValues,
            [e.target.name] : e.target.value
        })


    }

    const handleBlur = (e) =>{
        setErros( [e.target.name] , e.target.value)
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
    
    if(!complete){
        return(
            <div className={container}> 
                <div className={containerCards}>
                    <Cards cardValues={cardValues}/>                                    
                </div>
                <div className={formContainer}>
                    <form className={Form}>
                        <div className="grid grid-cols-12 gap-2">
                            {FormFields.map((field, index) => {
                                const {label, inputs, grid} = field
                                return(                                                    
                                    <Input
                                        label={label}
                                        inputs={inputs}
                                        grid={grid}  
                                        key={label}
                                        change={handleChange}
                                        errors={validationInput}
                                        validate={handleBlur}
                                    />                                                
                                )
                            })}
                        </div>                           
                        <div>
                            <Button type="submit"> 
                                Confirm
                            </Button>
                        </div>
                    </form>
                </div> 
            </div>
            
        )
    }

    return(
        <div class="absolute bottom-[20%] w-full lg:right-[10%] lg:w-1/2 lg:bottom-[30%]">
            <Complete 
                setComplete={setComplete} 
                values={initialValues} 
                setCardValues={setCardValues}
                setErros={setErros}
            />
        </div>
    )
}