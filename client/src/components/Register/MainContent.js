import React , {useRef} from 'react';
import ComponentStyling from '../../style/Register/register.module.css';



const MainContent = () => {

  const _email = useRef('');
  const _password = useRef('');
  const _cpassword = useRef('');
  const _username = useRef('');
  const _userhandler = useRef('');

  const insertUser = (Options) => 
  {
    fetch('http://localhost:8080/api/register', Options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error)) ;
  }
    
    
  const Register = (event) =>
  {
    event.preventDefault();
    	
    let formData = 
    {
      email: _email.current.value,
      password: _password.current.value,
      cpassword: _cpassword.current.value,
      username: _username.current.value,
      userhandler: _userhandler.current.value
    } ;
        
    const Options = 
    {
      method: 'POST',
      headers: 
      { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify(formData)
    };

    insertUser(Options) ;
  }



  return (
    <div className={ComponentStyling.content}>
      <div className={ComponentStyling.headings}>
        <h1>Registration</h1>
        <h2>Fill out the the form below to get started.</h2>
      </div>
      <div>
        <form className={ComponentStyling.registerForm}>
          <input type="text" ref={_email} placeholder="Email Address"  />
          <input type="password" ref={_password} placeholder="Password" />
          <input
            type="password"
            ref={_cpassword}
            placeholder="Confirm Password"
          />
          <input
            type="text"
            ref={_username}
            placeholder="Username e.g John Doe"
          />
          <input
            type="text"
            ref={_userhandler}
            placeholder="Userhandle e.g @johndoe"
          />
          <a href="/forget-password"> Already have an account?</a>
          <br />
          <input type="checkbox" name="remember-me" value="remember-me" />
          <label htmlFor="remember-me" style={{ fontSize: '16px' }}>
            {' '}
            By signing up, you agree to Terrabuzz&apos;s
            <br />
            Terms, Conditions And Private Policies
          </label>
          <br />
          <input
            className={ComponentStyling.registerButton}
            type="Submit"
            value="Register"
            onClick={Register}
          />
        </form>
      </div>
    </div>
  );
}

export default MainContent;