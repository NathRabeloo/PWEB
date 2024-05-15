// Função para abrir a janela com informações do curso
function abrirCurso(curso) {
    const cursosInfo = {
        "ADS": "Análise e Desenvolvimento de Sistemas: Curso voltado ao desenvolvimento de software e sistemas.",
        "EA": "Eletrônica Automotiva: Curso focado em carros.",
        "Logística": "Logística: Curso que aborda a administração e o gerenciamento de recursos e processos logísticos.",
        "Gestão Empresarial": "Gestão Empresarial: Curso que trata da gestão em empresas.",
        "Gestão de Qualidade": "Gestão de Qualidade: Curso que trata da garantia da qualidade nas operações.",
        "Mecatrônica": "Mecatrônica: Curso que integra as áreas de mecânica, eletrônica e informática.",
        "Manufatura Avançada": "Mecatrônica: Curso que integra as áreas de mecânica, eletrônica e informática.",
        "Polímeros": "Polimeros: sem palavras para descrever"
    };

    const largura = 600;
    const altura = 300;
    const left = (screen.width / 2) - (largura / 2);
    const top = (screen.height / 2) - (altura / 2);

    const novaJanela = window.open("", "_blank", `width=${largura},height=${altura},top=${top},left=${left}`);
    novaJanela.document.write(`
        <html>
            <head>
                <title>Informações do Curso</title>
            </head>
            <body>
                <h1>${curso}</h1>
                <p>${cursosInfo[curso]}</p>
            </body>
        </html>
    `);
}

// Função para confirmar a abertura da nova janela
function confirmarAbertura(curso) {
    const confirmacao = confirm(`Você realmente deseja abrir informações sobre o curso ${curso}?`);
    if (confirmacao) {
        abrirCurso(curso);
    }
}

// Função chamada quando o valor da caixa de seleção muda
function selecionarCurso() {
    const cursoSelecionado = document.getElementById("cursos").value;
    if (cursoSelecionado !== "") {
        confirmarAbertura(cursoSelecionado);
    }
}
