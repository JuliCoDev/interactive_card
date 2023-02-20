import Card from "../../styleComponents/Card"



export default function CardFront({cardValues}){
    const {cardNumber, cardholderName, month, year} = cardValues;
    
    return(

        <Card className={`text-white bg-[url("./assets/bg-card-front.png")] p-6`}>                    
            <div className="font-medium text-sm">
                <p className="absolute bottom-1/2">{cardNumber}</p>
            </div>
            <div className="font-light text-xs tracking-normal">
                <p className="absolute bottom-6 w-3/5 whitespace-pre-wrap">
                    {cardholderName}
                </p>
                <p className="absolute bottom-6 right-6">
                    {month}/{year}
                </p>
            </div>
        </Card>
    )
}