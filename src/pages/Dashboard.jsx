import Input from "../styleComponents/Input";
import Label from "../styleComponents/Label";
import Button from "../styleComponents/Button";
import useFormatInputCard from "../hooks/useFormatInputCard";
import { useEffect, useState } from "react";

const initialValues = {
    cardholderName: '',
    cardNumber: '',
    month: '',
    year: ''
} 


export default function Dashboard(){

    const [ cardValues , setCardValues ] = useState(initialValues);

    const {
        formatCardInput,
        changeFormatOnlyNumbers,
        changeFormatCardNumber,
    } = useFormatInputCard(cardValues);
    

    const handleChange = (e) =>{
        setCardValues({
            [e.target.name] : e.target.value
        })   
        
        if([e.target.name] == "cardNumber"){
            changeFormatCardNumber("cardNumber" , e.target.value);  
        }else if([e.target.name] !== "cardholderName"){
            changeFormatOnlyNumbers([e.target.name] , e.target.value)
          
        }
    }


    
    return(
        <form className="w-4/5 m-auto mt-4">
            

            <Label htmlFor="cardholderName">CARDHOLDER NAME</Label>
            <Input 
                onChange={(e) => handleChange(e)} 
                name="cardholderName" 
                placeholder="e.g Jane Appleseed" 
                type="text"              
            />

            <Label htmlFor="cardNumber">CARD NUMBER</Label>
            <Input 
                onChange={(e) => handleChange(e) } 
                name="cardNumber" 
                placeholder="e.g. 1234 5678 9123 0000"
                type="text"   
                maxLength={19}     
                value={formatCardInput.cardNumber}                          
            />
            
            <div className="flex justify-between ">               
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

                            />
                        </div>
                        <div className="inline-block w-2/4" >
                            <Input 
                                onChange={(e) => handleChange(e)} 
                                name="year" 
                                placeholder="YY" 
                                type="text"    
                                maxLength={2} 
                                value={formatCardInput.year}                  
                            />
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
                    />
                </div>
            </div>
            <div>
                <Button type="submit"> 
                    Confirm
                </Button>
            </div>
        </form>
    )
}