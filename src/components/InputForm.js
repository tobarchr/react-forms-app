import React, { useState } from 'react';

const InputForm = (props) => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onChangeHandler = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    
    const NameValid = (nameImput) => {
        if(nameImput.length > 2 || nameImput.length == 0)
            return false;
        else 
            return true;
    }
    const PasswordLen = (pwInput) => {
        if(pwInput.length > 8 || pwInput.length == 0)
            return false;
        return true;
    }
    const confirmPw = (pwInput,cwdImput) => {
        if(cwdImput == pwInput || cwdImput.length == 0)
            return false;
        return true;
    }
    return(
        <div className="container">
            <div className="row pb-3">
                <div className="col-3"></div>
                <form className="col-6">
                    <h2>User Input Form</h2>
                    <div className="form-group">
                        <label className="form-control bg-secondary text-white">First Name:</label>
                        <input type="text" name="firstName" onChange={onChangeHandler}/>
                        {NameValid(form.firstName) && <p className="alert alert-danger mt-2 p-2">First Name must be at least 2 Characters</p>}
                        {/* <p className="alert alert-danger mt-2 p-2">Must be at least 2 Characters</p> */}
                    </div>
                    <div className="form-group">
                        <label className="form-control bg-secondary text-white">Last Name:</label>
                        <input type="text" name="lastName" onChange={onChangeHandler}/>
                        {NameValid(form.lastName) && <p className="alert alert-danger mt-2 p-2">Last Name must be at least 2 Characters</p>}
                    </div>
                    <div className="form-group">
                        <label className="form-control bg-secondary text-white">Email:</label>
                        <input type="text" name="email" onChange={onChangeHandler}/>
                        {NameValid(form.email) && <p className="alert alert-danger mt-2 p-2">Email must be at least 2 Characters</p>}
                    </div>
                    <div className="form-group">
                        <label className="form-control bg-secondary text-white">Password:</label>
                        <input type="password" name="password" onChange={onChangeHandler}/>
                        {PasswordLen(form.password, form.confirmPassword) && <p className="alert alert-danger mt-2 p-2">Password must be at least 8 Characters</p>}
                    </div>
                    <div className="form-group">
                        <label className="form-control bg-secondary text-white">Confirm Password:</label>
                        <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                        {confirmPw(form.password, form.confirmPassword) && <p className="alert alert-danger mt-2 p-2">Password must match</p>}
                    </div>
                </form>
            </div>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Password: {form.password}</p>
                <p>Confirm Password: {form.confirmPassword}</p>
            </div>
        </div>
    )
}

export default InputForm;