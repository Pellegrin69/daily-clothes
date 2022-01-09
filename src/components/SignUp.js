import React, {useState} from 'react';

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submission', {username, password, email})
  }

  return (
    <>
      <h2>Sign Up</h2>

      <form id="form" action="/" method="POST" onSubmit={submitHandler}>
        <div className="row justify-content-center">
          <div className="col-4">

            <div className="mb-2">
              <label htmlFor="inputUsername" className="form-label">Username</label>
              <input type="text"
                     id="inputUsername"
                     className="form-control"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className="mb-2">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input type="email"
                     id="inputEmail"
                     className="form-control"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="mb-2">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input type="password"
                     id="inputPassword"
                     className="form-control"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="text-end">
              <div className="btn-group">
                <button className="btn btn-secondary" value="Cancel"/>
                <button className="btn btn-primary" type="Submit"/>
              </div>
            </div>

          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;