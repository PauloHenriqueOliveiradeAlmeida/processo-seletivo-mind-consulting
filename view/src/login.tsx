function Login() {

    return (
        <div className="centralize-content">
            <div>
                <h1>Realizar Login</h1>
                <form action="">
                    <div className="field">
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" required/>
                    </div>

                    <div className="field">
                        <label htmlFor="password">Senha:</label><br />
                        <input type="password" id="password" required/>
                    </div>

                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;