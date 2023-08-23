function cadastrarCurso() {

    return (
        <div className="centralize-content">
            <div>
                <h1>Criar Conta</h1>
                <form action="">

                    <div className="field">
                        <label htmlFor="image">Imagem:</label><br />
                        <input type="file" id="image" />
                    </div>

                    <div className="field">
                        <label htmlFor="name">Nome do curso:</label><br />
                        <input type="text" id="name" />
                    </div>

                    <div className="field">
                        <label htmlFor="teacher">Professor Responsável:</label><br />
                        <input type="text" id="teacher" />
                    </div>

                    <div className="field">
                        <label htmlFor="category">Categoria:</label><br />
                        <input type="text" id="category" />
                    </div>

                    <div className="field">
                        <label htmlFor="description">Descrição:</label><br />
                        <textarea name="description" rows={10}></textarea>
                    </div>

                    <button>Cadastrar Curso!</button>
                </form>
            </div>
        </div>
    );
}

export default cadastrarCurso;