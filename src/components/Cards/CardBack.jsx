import Card from "../../styleComponents/Card";

export default function CardBack({cvc}){       
    return(                 
        <Card className="bg-[url('./assets/bg-card-back.png')]">
            <div className="absolute w-full md:relative">
                <p className="relative text-white text-right top-[67px] right-[30px] lg:top-[90px] lg:right-[45px]">{cvc}</p>
            </div>
        </Card>    
    )

}


