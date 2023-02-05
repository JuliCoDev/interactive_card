import { default as InputContainer} from "../styleComponents/Input"
import useFormatInputCard from "../hooks/useFormatInputCard";
import ErrorInput from "../styleComponents/ErrorInput";
import { CardData } from "../types";
import React from "react";

interface Props {
    name: string
    placeholder: string
    cardValues: CardData
    setCardValues : any
    maxLength: number
    vaidateInput : any
    validationInput: any
}

export default function Input({
    name,
    placeholder,
    cardValues,
    setCardValues,
    maxLength,
    vaidateInput,
    validationInput
}: Props) {

    //Format input
    const {
        formatCardInput,
        changeFormatOnlyNumbers,
        changeFormatCardNumber,
    } = useFormatInputCard(cardValues);
    
    const handleChange   = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setCardValues({
            ...cardValues,
            [e.target.name] : e.target.value
        })   
        
        if(e.target.name == "cardNumber"){
            changeFormatCardNumber("cardNumber" , e.target.value);  
        }else if(e.target.name !== "cardholderName"){
            changeFormatOnlyNumbers(e.target.name , e.target.value)          
        }
    }


    return(
        <div>
            <InputContainer 
                onChange={(e) => handleChange(e)} 
                name={name} 
                placeholder={placeholder} 
                type="text" 
                onBlur={(e) => vaidateInput(e.target.value)}     
                className={validationInput[name].style}
                value={(name == "cardholderName") ? cardValues[name as keyof CardData] : formatCardInput[name as keyof CardData]}       
                maxLength={maxLength}
                
            />
            {!validationInput[name].isValid && 
                <ErrorInput>
                    {validationInput[name].message}
                </ErrorInput>                  
            }
        </div>
    )   
}