import CardBack from "../components/Cards/CardBack";
import CardFront from "../components/Cards/CardFront";

export default function Cards({cardValues}) {
    return(
        <div className="relative w-full h-[250px]">            
            <div className="absolute left-[20px] top-[150px] z-10">
                <CardFront cardValues={cardValues}/>
            </div>
            <div className="absolute top-[50px] right-[20px]">
                <CardBack cvc={cardValues.cvc}/>
            </div>
        </div>
    )
}