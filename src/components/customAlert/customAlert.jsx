import React, { useRef } from 'react'
// import { useNavigate } from 'react-router-dom'
import './customAlert.css'


const CustomAlert = ({ setShowAlert }) => {
    // For navigating onClick
    // const navigation = useNavigate()

    //for handling OTP inputs
    const otp = useRef({ input1: "", input2: "", input3: "", input4: "" })

    const handleOTP = () => {
        console.log(otp.current);
        // navigation("/")
        setShowAlert(false)
    }

    const handleCancel = () => {
        // navigation("/")
        setShowAlert(false)
    }
    return (
        <>
            <section className="custom-alert-box-container">
                <section className="custom-alert-box">
                    <section className="custom-alert-message">
                        <input type="text" onChange={e => otp.current.input1 = e.target.value} />
                        <input type="text" onChange={e => otp.current.input2 = e.target.value} />
                        <input type="text" onChange={e => otp.current.input3 = e.target.value} />
                        <input type="text" onChange={e => otp.current.input4 = e.target.value} />
                    </section>
                    <section className='alert-button-section'>
                        <button className="alert-button-verify" onClick={handleOTP}>Verify</button>
                        <button className="alert-button-cancel" onClick={handleCancel} >Cancel</button>
                    </section>
                </section>

            </section>

        </>
    )

}
export default CustomAlert;