import Card from "../../styleComponents/Card"

export default function CardFront({cardValues}){
    return(
        <Card className={`text-white bg-[url("./assets/bg-card-front.png")]`}>   
                <div className="font-medium text-sm">
                    <p className="">{cardValues.cardNumber}</p>
                </div>
                <div className="">
                    <p className="">
                        {cardValues.cardholderName}
                    </p>
                    <p className="">
                        {cardValues.month}/{cardValues.year}
                    </p>
                </div>
        </Card>
    )
}