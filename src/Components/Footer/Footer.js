import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {

    const icons = [
        {
            name:"facebook",
            link:"#"
        },
        {
            name:"insta",
            link:"https://instagram.com/metmat__22.0?igshid=YmMyMTA2M2Y="
        },
        {
            name:"mail",
            link:"mailto:metmat2k22@gmail.com"
        }
    ];

    return ( 
        <div className="footer">
            <div className="logo_container">
                <h2>Metmat 22.o</h2>
                <p>Metmat 22.0 is organised by the <b>S</b>ociety for the <b>A</b>dvancement of <b>M</b>etallurgy <b>E</b>ngineering (SAME).</p>
            </div>
            <ul className="link_part">
                <Link to="/"><li>Home</li></Link>
                <Link to="/events"><li>Events</li></Link> 
                <Link to="/register"><li>Register</li></Link>
                <Link to="/contact-us"><li>Contact</li></Link>
                {/* <Link to="/previous-synergy"><li>About</li></Link>   */}
            </ul>
            <ul className="link_part">
                {/* <Link to="/register"><li>Register</li></Link>
                <Link to="/contact-us"><li>Contact</li></Link> */}
                <div className="social_icons">
                    {
                        icons.map((icon,index)=>{
                            const image = require(`../../images/Footer/${icon.name}.svg`);
                            return(
                                <a href={icon.link} target="_blank" rel="noreferrer" key={index}>
                                    <img src={image}  alt={icon.name} />
                                </a>
                            )
                        })
                    }
                </div>
            </ul>

        </div>
     );
}
 
export default Footer;