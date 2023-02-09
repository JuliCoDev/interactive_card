import Card from "../../styleComponents/Card";
import { CardData } from "../../types";

export default function CardBack({cvc} : CardData){       
    return(                 
        <Card className="bg-[url('./assets/bg-card-back.png')]">
            <div className="absolute w-full md:relative">
                <p className="relative text-white text-right top-[60px] right-[30px] lg:top-[90px] lg:right-[45px]">{cvc}</p>
            </div>
        </Card>    
    )

}

