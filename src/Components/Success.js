import React, {useEffect} from "react";
import check from '../images/check.png';
import '../style/Success.css';

function Success(){
    useEffect(() => {
        const pageReload = () =>{
            window.location.reload()
            window.location.href = `/`
        }

        setTimeout(pageReload, 3000)
    }, [])

    return (
        <div className="success">
            <div className="payment_success">
                <img src={check} alt="check" className="check"/>
                <h4>Payment Successful!</h4>
            </div>
        </div>
    )
}

export default Success;