import CardBack from "../components/Cards/CardBack.jsx";
import CardFront from "../components/Cards/CardFront";
import { FieldsContext } from "../context/FieldsContext.jsx";
import { useContext, useEffect, useState } from "react";
const container = `
    relative 
    w-full
    h-[250px]
    sm:w-[80%]
    sm:m-auto  
  
`;


const containerCardFront = `
    absolute 
    left-[20px] 
    top-[150px]     
    z-10
    lg:top-[-100px]
    lg:left-[25%] 

  
`;


const containerCardBack = `
    absolute 
    right-[20px]
    top-[50px]
    lg:top-[150px]   
    lg:left-[35%] 

`;


export default function Cards() {

    const Fields = useContext(FieldsContext);
    const { inputValues } = Fields;

    const defaultValues = {
        cardholderName : "Jane Appleseed",
        cardInteractiveNumber: "0000 0000 0000 0000",
        month: "00",
        year: "00",
        cvc: "000"
    }

    const [cardValues, setCardValues ] = useState(defaultValues);
    
    useEffect(() => {
        cardInputsValues()
    },[inputValues])

    const cardInputsValues = () =>{
        let valusesInputCard = {};
        Object.keys(inputValues).map((input) =>{                                    
            if(inputValues[input] !== ""){                
                valusesInputCard = {...valusesInputCard, [input] : inputValues[input]}
            }else{
                valusesInputCard = {...valusesInputCard, [input] : defaultValues[input]}
            }
        })  
        setCardValues(valusesInputCard);
    } 
        
    
    
    return(
        <div className={container}>   
            <div className={containerCardFront}>
                <CardFront cardValues={cardValues}/>
            </div>
            <div className={containerCardBack}>
                <CardBack cvc={cardValues.cvc}/>
            </div>
        </div>
    )
}