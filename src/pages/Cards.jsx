import CardBack from "../components/Cards/CardBack";
import CardFront from "../components/Cards/CardFront";

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
    lg:left-[35%] 

  
`;


const containerCardBack = `
    absolute 
    right-[20px]
    top-[50px]
    lg:top-[150px]   
    lg:left-[25%] 

`;


export default function Cards({cardValues}) {
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