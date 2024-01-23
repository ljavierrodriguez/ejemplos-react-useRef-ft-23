import React, { useRef } from 'react'

const ContactForm = () => {

    const emailRef = useRef(null)
    const textRef = useRef(null)


    const handleSubmit = e => {
        e.preventDefault()

        const email = emailRef.current.value;
        const message = textRef.current.value;

        console.log("email", email)
        console.log("message", message)

        e.target.submit.classList.add('disabled')
    }

    return (
        <div className="w-50 mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" placeholder='Email' ref={emailRef} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" cols="30" rows="10" className="form-control" placeholder='message' ref={textRef}></textarea>
                </div>
                <button id='submit' className="btn btn-primary btn-sm w-100 mb-3">Enviar</button>

            </form>
        </div>
    )
}

export default ContactForm