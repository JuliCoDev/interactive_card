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
        label: "CARD NUMBER",
        infoInputs : [
            {
                name: "cardNumber" , 
                placeholder: "e.g. 1234 5678 9123 0000",
                grid: 'col-span-12',                
            }
        ],
        grid : 'col-span-12',    
        typeField : 'cardNumber'
    },{
        label : "EXP. DATE",
        infoInputs : {
            month: {
                name: "month" , 
                placeholder: "MM",
                grid: 'col-span-6'
            },
            year: {
                name: "year" , 
                placeholder: "YY",
                grid: 'col-span-6'
            }
        },
        grid : 'col-span-6',
        typeField : 'cardDate'
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

    const handleValidate = (e, typeField) =>   {   

        setErros(typeField, e.target.name , e.target.value)
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
    console.log(validationInput);
    if(!complete){
        return(
            <div className={container}> 
                <div className={containerCards}>
                    <Cards cardValues={cardValues}/>                                    
                </div>
                <div className={formContainer}>
                    <form className={Form}>
                        <div className="grid grid-cols-12 gap-2">
                            {FormFields.map((field) => {  
                                return(                                                    
                                    <Input
                                       typeField={field.typeField}
                                       label={field.label}
                                       infoInputs={field.infoInputs}
                                       grid={field.grid}
                                       validateInput={(e) => handleValidate(e, field.typeField)}
                                       errors={validationInput}
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