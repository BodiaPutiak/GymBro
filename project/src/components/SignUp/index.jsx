import './index.scss';

function SignUp() {
    return (
        <>
            <div className="banner">
                <h2>Sign Up</h2>
            </div>
            <div className="sign-up-container">
                <form action="">
                    <label>Email</label>
                    <input type="email" placeholder='gymbro@gmail.com'/>
                    <label>Password</label>
                    <input type="password" placeholder='passoword'/>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;