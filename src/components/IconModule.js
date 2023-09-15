import { Link } from "react-router-dom";

export default function IconModule({hasLink, image, link, name, onClick}) { 
    const Component = hasLink ? Link : "div";
    const props = hasLink ? {to: link} : {};

    return (
        <div onClick={onClick} className="m-4">
            <div className="icon-box centered cursor-pointer">
                <Component {...props}>
                    <div className="centered">
                        <img src={image} alt="" className={"icon"} ></img>
                    </div>
                    <p className="font-scp centered sm:text-sm md:text-base lg:text-lg">{name}</p>
                </Component>
            </div>
        </div>
    );
}
