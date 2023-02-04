import Card from "../../styleComponents/Card"
import { CardData } from "../../types"

interface Props{
    cardValues: CardData
}
export default function CardFront({cardValues} : Props){
    return(
        <Card className={`text-white bg-[url("./assets/bg-card-front.png")] p-6`}>                    
            <div className="font-medium text-sm">
                <p className="absolute bottom-1/2">{cardValues.cardNumber}</p>
            </div>
            <div className="font-light text-xs tracking-normal">
                <p className="absolute bottom-6 w-3/5 whitespace-pre-wrap">
                    {cardValues.cardholderName}
                </p>
                <p className="absolute bottom-6 right-6">
                    {cardValues.month}/{cardValues.year}
                </p>
            </div>
        </Card>
    )
}