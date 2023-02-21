import tw from "tailwind-styled-components";

const Card = tw.div`
    rounded-lg
    bg-blue-300    
    w-[290px]
    h-card-mobile
    uppercase
    bg-cover
    bg-no-repeat
    sm:top-[80px]
    lg:w-[400px]
    lg:h-[200px]
`;

export default Card;