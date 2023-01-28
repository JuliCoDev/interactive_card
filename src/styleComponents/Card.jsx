import tw from "tailwind-styled-components";

const Card = tw.div`
    rounded-lg
    bg-blue-300
    ml-6
    w-[280px]
    h-card-mobile
    uppercase
    bg-cover
    bg-no-repeat	
    absolute	
    relative 
    p-6
    text-white
    md:block
    md:mt-12    
    lg:w-[400px]
    lg:h-[200px]
`;

export default Card;