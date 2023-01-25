import CardBack from "../components/Cards/CardBack";
import CardFront from "../components/Cards/CardFront";
import Card from "../styleComponents/Card";

export default function Cards({cardValues}) {
    return(
        <div className="relative m-auto w-[380px]">
            <CardBack cvc={cardValues.cvc}/>
            <CardFront cardValues={cardValues}/>
        </div>
    )
}