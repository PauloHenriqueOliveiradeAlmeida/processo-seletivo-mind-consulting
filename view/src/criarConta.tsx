function CriarConta() {

    return (
        <div className="centralize-content">
            <div>
                <h1>Criar Conta</h1>
                <form action="">
                    <div className="field">
                        <label htmlFor="name">Nome:</label><br />
                        <input type="text" id="name" required/>
                    </div>

                    <div className="field">
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" required/>
                    </div>

                    <div className="field">
                        <label htmlFor="password">Senha:</label><br />
                        <input type="password" id="password" required/>
                    </div>

                    <button>Criar Conta!</button>
                </form>
            </div>
        </div>
    );
}

export default CriarConta;