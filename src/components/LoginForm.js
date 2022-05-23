import React, { useState } from 'react'

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", Email:"", password:""});

   const  submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !="") ? (<div className="error">{error}</div>):""} 
<div className="form-group">
    <lable htmlfor="name">Name:</lable>
    <input type="text" name="name" id="name" onChange={e =>setDetails({...details, name: e.target.value})} value={details.name} />
</div>
<div className="form-group">
<lable htmlfor="email">Email:</lable>
    <input type="email" name="email" id="email"onChange={e =>setDetails({...details, email: e.target.value})} value={details.email} />
</div>
<div className='form-group'>
<lable htmlfor="name">password:</lable>
    <input type="password" name="passowrd" id="password"onChange={e =>setDetails({...details, password: e.target.value})} value={details.password} />
</div>
<div>
    <input type="submit" value="LOGIN"/>
</div>
            </div>
        </form>
    )
}

export default LoginForm;