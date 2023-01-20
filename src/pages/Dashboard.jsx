import Input from "../styleComponents/Input";
import Label from "../styleComponents/Label";
import Button from "../styleComponents/Button";
import useFormatInputCard from "../hooks/useFormatInputCard";
import { useState } from "react";
import useValidateInputCard from "../hooks/useValidateInputCard";
import ErrorInput from "../styleComponents/ErrorInput";
import Complete from "./Complete";
import Card from "../styleComponents/Card";


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
    
    //Format input
    const {
        formatCardInput,
        changeFormatOnlyNumbers,
        changeFormatCardNumber,
    } = useFormatInputCard(cardValues);
    
    //Validate input
    const {
        validationInput, 
        validateRequired,
        ValidateCardNumber,
        validateMonth,
        validateYear,
        validateCvc,

    } = useValidateInputCard(cardValues);


    const handleChange   = (e) =>{
        setCardValues({
            ...cardValues,
            [e.target.name] : e.target.value
        })   
        
        if([e.target.name] == "cardNumber"){
            changeFormatCardNumber("cardNumber" , e.target.value);  
        }else if([e.target.name] !== "cardholderName"){
            changeFormatOnlyNumbers([e.target.name] , e.target.value)
          
        }
    }

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
            <div>  
                <Card className={`text-white bg-[url("./assets/bg-card-front.png")] relative p-6`}>                    
                    <div className="font-medium text-lg">
                        <p className="absolute bottom-1/2">{cardValues.cardNumber}</p>
                    </div>
                    <div className="font-light text-xs">
                        <p className="absolute bottom-6 w-3/5 whitespace-pre-wrap">
                            {cardValues.cardholderName}
                        </p>
                        <p className="absolute bottom-6 right-6">
                            {cardValues.month}/{cardValues.year}
                        </p>
                    </div>
                </Card>
                <form className="w-4/5 m-auto mt-12" onSubmit={handleSubmit}>
                    
                    <div className="mb-4">
                        <Label htmlFor="cardholderName">CARDHOLDER NAME</Label>
                        <Input 
                            onChange={(e) => handleChange(e)} 
                            name="cardholderName" 
                            placeholder="e.g Jane Appleseed" 
                            type="text" 
                            onBlur={(e) => validateRequired(e.target.name, e.target.value)}     
                            className={validationInput.cardholderName.style}       
                        />
                        {!validationInput.cardholderName.isValid && 
                            <ErrorInput>
                                {validationInput.cardholderName.message}
                            </ErrorInput>                  
                        }
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="cardNumber">CARD NUMBER</Label>
                        <Input 
                            onChange={(e) => handleChange(e) } 
                            name="cardNumber" 
                            placeholder="e.g. 1234 5678 9123 0000"
                            type="text"   
                            maxLength={19}     
                            value={formatCardInput.cardNumber}    
                            onBlur={(e) => ValidateCardNumber(e.target.value)}
                            className={validationInput.cardNumber.style}                        
                        />
                        {!validationInput.cardNumber.isValid && 
                            <ErrorInput>
                                {validationInput.cardNumber.message}
                            </ErrorInput>                  
                        }
                    </div>
                    
                    <div className="flex justify-between mb-4 ">               
                        <div className="w-2/4 ">
                            <Label className="block">EXP. DATE</Label>
                            <div className="flex justify-between">
                                <div className="inline-block w-2/4 box-border pr-2" >
                                    <Input 
                                        onChange={(e) => handleChange(e)} 
                                        name="month" 
                                        placeholder="MM" 
                                        type="text"
                                        maxLength={2}     
                                        value={formatCardInput.month} 
                                        onBlur={(e) => validateMonth(e.target.value)}
                                        className={validationInput.month.style}
        
                                    />
                                    {!validationInput.month.isValid && 
                                        <ErrorInput>
                                            {validationInput.month.message}
                                        </ErrorInput>                  
                                    }
                                </div>
                                <div className="inline-block w-2/4" >
                                    <Input 
                                        onChange={(e) => handleChange(e)} 
                                        name="year" 
                                        placeholder="YY" 
                                        type="text"    
                                        maxLength={2} 
                                        value={formatCardInput.year}
                                        onBlur={(e) => validateYear(e.target.value)}
                                        className={validationInput.year.style}                  
                                    />
                                    {!validationInput.year.isValid && 
                                        <ErrorInput>
                                            {validationInput.year.message}
                                        </ErrorInput>                  
                                    }
                                </div>
                            </div>
                        </div>
        
                        <div className="w-2/4 box-border pl-2 ">
                            <Label className="block">CVC</Label>
                            <Input 
                                onChange={(e) => handleChange(e)} 
                                name="cvc" 
                                placeholder="e.g. 123" 
                                type="text"    
                                maxLength={3} 
                                value={formatCardInput.cvc}    
                                onBlur={(e) => validateCvc(e.target.value)}
                                className={validationInput.cvc.style}
                            />
                            {!validationInput.cvc.isValid && 
                                <ErrorInput>
                                    {validationInput.cvc.message}
                                </ErrorInput>                  
                            }
                        </div>
                    </div>
                    <div>
                        <Button type="submit"> 
                            Confirm
                        </Button>
                    </div>
                </form>
            </div>
            
        )
    }

    return(
        <Complete />
    )
}