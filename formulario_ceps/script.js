function buscarEndereco() {
    let cep = document.getElementById('cep').value
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

    fetch(urlAPI)
        .then(response => response.json())
        .then(dados => {
            document.getElementById('logradouro').value = dados.logradouro
            document.getElementById('bairro').value = dados.bairro
            document.getElementById('cidade').value = dados.localidade
            document.getElementById('uf').value = dados.uf;
        })
        .catch(error => console.error('Erro ao buscar o endereço:', error))
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '')

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false
    }

    let soma = 0
    let resto

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i)
    }
    resto = soma % 11
    if (resto < 2) {
        resto = 0
    } else {
        resto = 11 - resto
    }
    if (parseInt(cpf.charAt(9)) !== resto) {
        return false
    }

    soma = 0

    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i)
    }
    resto = soma % 11
    if (resto < 2) {
        resto = 0
    } else {
        resto = 11 - resto
    }
    if (parseInt(cpf.charAt(10)) !== resto) {
        return false
    }

    return true
}

function validarFormulario(event) {
    const cpf = document.getElementById('cpf').value
    
    if (!validarCPF(cpf)) {
        alert('CPF inválido. Por favor, insira um CPF válido.')
        return false
    }else{
        alert('Cadastro realizado com sucesso!')
        return true
    }
}

// Adiciona o ouvinte de evento no formulário
document.getElementById('cadastro').addEventListener('submit', validarFormulario)
