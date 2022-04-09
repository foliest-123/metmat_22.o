import "./thanks.css";
const Thanks = (props) => {

    return (  
        <div className="thanks">
            <h2>Thanks for Registering</h2>
            <p>Your id : <b>{props.studentAbstract.id}</b></p>
            <p>Check your mail {props.studentAbstract.email} to have reference of your id.</p>
        </div>
    );
}
 
export default Thanks;