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
            <div className="relativeh-screen"> 
                <div className="absolute w-full">
                    <Cards cardValues={cardValues}/>                                    
                </div>
                <div className="absolute top-[350px] w-full">
                    <form className="w-[80%] m-auto" onSubmit={handleSubmit}>                    
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
        <Complete />
    )
}