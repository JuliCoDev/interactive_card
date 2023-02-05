import Label from "../styleComponents/Label";
import Button from "../styleComponents/Button";

import useValidateInputCard from "../hooks/useValidateInputCard";
import { useState } from "react";
import Complete from "./Complete";
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


export default function Dashboard(){

    const [cardValues , setCardValues ] = useState(initialValues);
    const [complete , setComplete ] = useState(false);
    
       
    //Validate input
    const {
        validationInput, 
        validateRequired,
        ValidateCardNumber,
        validateMonth,
        validateYear,
        validateCvc,
        validateVardName,
        setvalidationInput

    } = useValidateInputCard(cardValues);


   
    const handleSubmit = (e) =>{
        e.preventDefault();

        const validations  =  Object.values(validationInput);

        Object.keys(validationInput).map((error) => {            
            Object.keys(cardValues).map((key) => {
                if(cardValues[key] == '' && !validationInput[error]?.isValid){
                validateRequired(key, cardValues[key]); 
                }              
            })    
        })
        
        const isComplete = validations.some((validation) => {            
            return !validation.isValid
        })

        if(!isComplete){
            setComplete(true)
        }


    }
    
    if(!complete){
        return(
            <div className={container}> 
                <div className={containerCards}>
                    <Cards cardValues={cardValues}/>                                    
                </div>
                <div className={formContainer}>
                    <form className={Form} onSubmit={handleSubmit}>                    
                        <div className="mb-4">
                            <Label htmlFor="cardholderName">CARDHOLDER NAME</Label>
                            <Input                             
                                name="cardholderName" 
                                placeholder="e.g Jane Appleseed" 
                                type="text"                              
                                vaidateInput={validateVardName}
                                validationInput={validationInput}
                                cardValues={cardValues}
                                setCardValues={setCardValues} 
                            />                        
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="cardNumber">CARD NUMBER</Label>
                            <Input                            
                                name="cardNumber" 
                                placeholder="e.g. 1234 5678 9123 0000"
                                type="text"                               
                                maxLength={19}   
                                vaidateInput={ValidateCardNumber}
                                validationInput={validationInput}
                                cardValues={cardValues}
                                setCardValues={setCardValues}  
                            />
                        </div>
                        
                        <div className="flex justify-between mb-4 ">               
                            <div className="w-2/4 ">
                                <Label className="block">EXP. DATE</Label>
                                <div className="flex justify-between">
                                    <div className="inline-block w-2/4 box-border pr-2" >
                                        <Input 
                                            name="month" 
                                            placeholder="MM" 
                                            type="text"
                                            cardValues={cardValues}
                                            setCardValues={setCardValues}  
                                            maxLength={2}   
                                            vaidateInput={validateMonth}
                                            validationInput={validationInput}
                                        />
                                    </div>
                                    <div className="inline-block w-2/4" >
                                        <Input 
                                            name="year" 
                                            placeholder="YY" 
                                            type="text"    
                                            cardValues={cardValues}
                                            setCardValues={setCardValues}  
                                            maxLength={2}   
                                            vaidateInput={validateYear}
                                            validationInput={validationInput}                
                                        />
                                    </div>
                                </div>
                            </div>
            
                            <div className="w-2/4 box-border pl-2 ">
                                <Label className="block">CVC</Label>
                                <Input 
                                    name="cvc" 
                                    placeholder="e.g. 123" 
                                    type="text"    
                                    cardValues={cardValues}
                                    setCardValues={setCardValues}  
                                    maxLength={3}   
                                    vaidateInput={validateCvc}
                                    validationInput={validationInput}  
                                />
                            </div>
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
                setErros={setvalidationInput}
            />
        </div>
    )
}