import { useState } from 'react'
import Title from "./Title";

function Registration() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData((data) => { return { ...data, [name]: value } })
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted!", formData);
        setFormData(
            () => {
                return {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        )
    };
    return (
        <section className="section" id="registration" >
            <Title title="registration" subTitle="form" />

            <div className="section-center">
                <form className="form-center" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" value={formData.name} id="name" name="name" onChange={handleOnChange} />
                    <label htmlFor="email">Email:</label>
                    <input type="text" value={formData.email} id="email" name="email" onChange={handleOnChange} />
                    <label htmlFor="password">Password:</label>
                    <input type="text" value={formData.password} id="password" name="password" onChange={handleOnChange} />
                    <div>
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </section>
    )

}

export default Registration
