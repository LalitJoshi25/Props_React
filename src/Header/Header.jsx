import HeaderSub from "./HeaderSub";

const Header = (props)=>{
    return(
        <>
            <h1>Hello {props.name}</h1>
            <HeaderSub name = {props.name} />
        </>
    );
}

const Footer = ({fend})=>{
    return(
        <>
            <h1>Footer here {fend}</h1>
        </>
    );
}

export default Header;
export {Footer};