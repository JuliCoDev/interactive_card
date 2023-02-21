import Card from "../../styleComponents/Card"



export default function CardFront({cardValues}){
    const {cardNumber, cardholderName, month, year} = cardValues;
    
    return(

        <Card className={`text-white bg-[url("./assets/bg-card-front.png")] p-6`}>  
            <div className="flex items-center">
                <div className="w-[30px] h-[30px] bg-white rounded-full lg:w-[40px] lg:h-[40px]"></div>      
                <div className="ml-4 w-[15px] h-[15px] border border-white rounded-full lg:w-[20px] lg:h-[20px]"></div>             
            </div>     
            <div className="font-medium text-sm">
                <p className="absolute bottom-[40%]">{cardNumber}</p>
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