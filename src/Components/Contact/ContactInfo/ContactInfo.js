import "./ContactInfo.css";
import phone from "../../../images/Contact/ContactInfo/phone.svg";
import email from "../../../images/Contact/ContactInfo/email.svg";
import location from "../../../images/Contact/ContactInfo/location.svg";
const ContactInfo = () => {

    const icons = [
        {
            name:"facebook",
            link:"#"
        },
        {
            name:"insta",
            link:"https://instagram.com/synergy_22.0?utm_medium=copy_link"
        },
        {
            name:"mail",
            link:"mailto:metmat2k22@gmail.com"
        }
    ];

    return ( 
        <div className="contact_info">
            <div className="info_title_desc">
                <h2>Contact Information</h2>
                <p>Fill up the form and our team will get back to you within 24 hours</p>
            </div>

            <div className="contact_details_container">
                <h2>Student Co-Ordinator</h2>
                <div className="contact_details" style={{margin:"18px 0px"}}>
                    <img src={phone} alt="phone" id="contact_phone_image"/>
                   <div className="number">
                    
                    <div className="contact_number_student">
                    <div>+91 9655988806,</div>
                    <div>(Ariya krishnan)</div>
                    </div>
                    
                    <div className="contact_number_student">
                    <div>+91 7502255773.</div>
                    <div>(Deepan)</div>
                    </div>
                    

                   </div>
                </div>
                <div className="contact_details">
                    <img src={email} alt="phone" />
                    <span>metmat2k22@gmail.com</span>
                </div>
                <div className="contact_details">
                    <img src={location} alt="phone" />
                    <span>Gce Karuppur, Salem</span>
                </div>
            </div>

            <div className="social_icons contact_social_icons">
                    {
                        icons.map((icon,index)=>{
                            const image = require(`../../../images/Contact/Social/${icon.name}.svg`);
                            return(

                                <a href={icon.link} target="_blank" rel="noreferrer" key={index} className="contact_social">
                                <img src={image}  alt={icon.name} />
                                </a>
                                
                            )
                        })
                    }
            </div>

        </div>
     );
}
 
export default ContactInfo;