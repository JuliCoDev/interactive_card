import CardBack from "../components/Cards/CardBack";
import CardFront from "../components/Cards/CardFront";
import Card from "../styleComponents/Card";

export default function Cards({cardValues}) {
    return(
        <div className="relative m-auto w-[380px] md:w/2 md:bg-red-500 md:w-1/2 md:block">
            <CardBack cvc={cardValues.cvc}/>
            <CardFront cardValues={cardValues}/>
        </div>
    )
}