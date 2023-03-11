import React, { useState } from 'react'
import axios from 'axios'
import './register.css'
import CustomAlert from '../customAlert/customAlert';


const Registration = () => {
    //for handling alert
    const [showAlert, setShowAlert] = useState(false);

    // for handling form
    const [formData, setFormData] = useState({ name: "", email: "", mobile: "", scheme: "" })

    // for handling form inputs
    const [isValied, setIsValied] = useState(false)

    //for handling form inputs
    const isAllInputsValied = formData.name.length && formData.email.length && formData.mobile.length && formData.scheme.length

    // form details submitting to backend
    const handleForm = (e) => {
        e.preventDefault()

        if (isAllInputsValied === 0) {
            setIsValied(true)
        }

        else {

            const postData = async () => {
                let result = await axios.post("http://localhost:5000/api/v1/register", {
                    data: formData
                })
            }

            postData()
            setFormData({ name: "", email: "", mobile: "", scheme: "" })
            alert("Successfully Registered")
        }
    }

    //for handling email verification
    const verifyEmail = () => {
        //alert("Verify Email")
        setShowAlert(true)
    }

    // for handling mobile number verification
    const verifyMobile = () => {
        //alert(" Verify Mobile Number")
        setShowAlert(true)
    }

    return (

        <>  {


            !showAlert ?

                <section className='registration-container'>
                    <section className='registration-form'>
                        <h3>APPLY NOW</h3>
                        <form className='form' onSubmit={handleForm} >
                            <article className='form-fields'>
                                <label htmlFor="name" >Name</label>
                                <input name='name' id='name' type="text" placeholder='Enter your name' onChange={e => setFormData({ ...formData, name: e.target.value })} value={formData.name} />
                            </article>

                            <article className='form-fields'>
                                <label htmlFor="email">Email</label>
                                <input onBlur={verifyEmail} name='email' id='email' type="email" placeholder='Enter your email' onChange={e => setFormData({ ...formData, email: e.target.value })} value={formData.email} />
                            </article>

                            <article className='form-fields'>
                                <label htmlFor="mobile">Mobile</label>
                                <input onBlur={verifyMobile} name='mobile' id='mobile' type="text" placeholder='Enter your mobile' onChange={e => setFormData({ ...formData, mobile: e.target.value })} value={formData.mobile} />
                            </article>

                            <article className='form-fields'>
                                <label htmlFor="service_cost">Services</label>
                                <select name="service_cost" id="service_cost" className='form-fields' onChange={e => setFormData({ ...formData, scheme: e.target.value })} value={formData.scheme}>
                                    <option value="">Select...</option>
                                    <option value="GST_R_MN_500">GST Return Monthly – Rs500</option>
                                    <option value="GST_R_QR_1400">GST Return Quarterly – Rs1400</option>
                                    <option value="GST_R_HY_2500">GST Return Half yearly – Rs2500</option>
                                    <option value="GST_R_AN_4800">GST Return Annually – Rs4800</option>
                                    <option value="GST_ACTIVATION_1000">GST Activation – Rs1000</option>
                                    <option value="GST_CANCELLATION_500">GST Cancellation- Rs.500</option>
                                    <option value="GST_MODIFICATION_500">GST Modification Rs-500</option>
                                    <option value="GST_CHANGE_CONSTITUTION_1000">Change of Constitution- Rs 1000</option>
                                    <option value="GST_REFUND_3000">GST Refund: Rs 3000</option>
                                </select>
                            </article>
                            {isValied && <div style={{ color: "red", textAlign: "center" }}>Please Fill all Fields</div>}
                            <article className='register-btn-container'>
                                <button className='register-btn'>Register</button>
                            </article>

                        </form>
                    </section>

                </section>


                //    OR Case

                :

                <CustomAlert setShowAlert={setShowAlert} />

        }

        </>
    )

}
export default Registration