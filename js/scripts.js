//Links

var links

function cataratasDoIguacu() {
    links = window.open('cataratas.html')
}

function parqueDasAves() {
    links = window.open('parque-das-aves.html')
}

function ecomuseuDeItaipu() {
    links = window.open('ecomuseu-de-itaipu.html')
}

function marcoDas3Fronteiras() {
    links = window.open('marco-das-3-fronteiras.html')
}

//Formulários

class Passeio {

    constructor(name, lastname, phone, email, cpf, date, number, turno, detalhes) {
        this.name = name,
        this.lastname = lastname,
        this.phone = phone,
        this.email = email,
        this.cpf = cpf,
        this.date = date,
        this.number = number,
        this.turno = turno,
        this.detalhes = detalhes
    }

    validarDados() {

        for(let i in this) {
            if(this[i] == '' || this[i] == undefined || this[i] == null) {
                return false
            }
        }

        return true
    }
}

function enviarFormulario() {

    let name = document.getElementById('name')
    let lastname = document.getElementById('lastname')
    let phone = document.getElementById('phone')
    let email = document.getElementById('email')
    let cpf = document.getElementById('cpf')
    let date = document.getElementById('date')
    let number = document.getElementById('number')
    let turno = document.getElementById('turno')
    let detalhes = document.getElementById('detalhes')

    let passeio = new Passeio(
        name.value,
        lastname.value,
        phone.value,
        email.value,
        cpf.value,
        date.value,
        number.value,
        turno.value,
        detalhes.value
    )

    if(passeio.validarDados()){

        document.getElementById('modal_titulo').innerHTML = 'Concluído'
        document.getElementById('modal_titulo_div').className = 'modal-header bg-visita-sucesso-topo'
        document.getElementById('modal_conteudo').innerHTML = 'Visita marcada com sucesso! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo ipsum, mollis sed rhoncus id, egestas non mauris. Donec porta rhoncus blandit. In interdum purus a magna commodo, nec molestie justo tristique. Sed sodales urna sit amet nisl pulvinar scelerisque. Duis vitae lectus vitae lectus hendrerit facilisis sit amet vitae nibh. Sed pellentesque nulla gravida nisl luctus tincidunt. Maecenas porttitor arcu sed vestibulum ultricies. Aliquam ac ligula eros. Fusce vulputate orci sed augue viverra, pretium vehicula ligula tempor. Aliquam in ullamcorper erat. Vivamus at velit turpis. Nam et nibh non velit ultrices ullamcorper. Cras euismod mauris diam, quis sodales dui commodo a. Curabitur volutpat nisl sit amet rhoncus laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo ipsum, mollis sed rhoncus id, egestas non mauris. Donec porta rhoncus blandit. In interdum purus a magna commodo, nec molestie justo tristique. Sed sodales urna sit amet nisl pulvinar scelerisque. Duis vitae lectus vitae lectus hendrerit facilisis sit amet vitae nibh. Sed pellentesque nulla gravida nisl luctus tincidunt. Maecenas porttitor arcu sed vestibulum ultricies. Aliquam ac ligula eros. Fusce vulputate orci sed augue viverra, pretium vehicula ligula tempor. Aliquam in ullamcorper erat. Vivamus at velit turpis. Nam et nibh non velit ultrices ullamcorper. Cras euismod mauris diam, quis sodales dui commodo a. Curabitur volutpat nisl sit amet rhoncus laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo ipsum, mollis sed rhoncus id, egestas non mauris. Donec porta rhoncus blandit. In interdum purus a magna commodo, nec molestie justo tristique. Sed sodales urna sit amet nisl pulvinar scelerisque. Duis vitae lectus vitae lectus hendrerit facilisis sit amet vitae nibh. Sed pellentesque nulla gravida nisl luctus tincidunt. Maecenas porttitor arcu sed vestibulum ultricies. Aliquam ac ligula eros. Fusce vulputate orci sed augue viverra, pretium vehicula ligula tempor. Aliquam in ullamcorper erat. Vivamus at velit turpis. Nam et nibh non velit ultrices ullamcorper. Cras euismod mauris diam, quis sodales dui commodo a. Curabitur volutpat nisl sit amet rhoncus laoreet.'
        document.getElementById('modal_conteudo').className = 'modal-body bg-visita-conteudo-sucesso'
        document.getElementById('modal_btn').innerHTML = 'Concluído'
        document.getElementById('modal_footer_div').className = 'modal-footer bg-visita-sucesso-footer'
        document.getElementById('modal_btn').className = 'btn btn-visita-sucesso'
        $('#modalEnviarFormulario').modal('show')
        name.value = ''
        lastname.value = ''
        phone.value = ''
        email.value = ''
        cpf.value = ''
        date.value = ''
        number.value = ''
        turno.value = ''
        detalhes.value = ''
        document.getElementById('name').className = 'form-control'
        document.getElementById('lastname').className = 'form-control'
        document.getElementById('phone').className = 'form-control'
        document.getElementById('email').className = 'form-control'
        document.getElementById('cpf').className = 'form-control'
        document.getElementById('date').className = 'form-control'
        document.getElementById('number').className = 'form-control'
        document.getElementById('turno').className = 'form-control'
        document.getElementById('detalhes').className = 'form-control'
    } else {
        
        document.getElementById('modal_titulo').innerHTML = 'Erro'
        document.getElementById('modal_titulo_div').className = 'modal-header bg-visita-erro-topo'
        document.getElementById('modal_conteudo').innerHTML = 'Preencha os dados corretamente!'
        document.getElementById('modal_conteudo').className = 'modal-body bg-visita-conteudo-erro'
        document.getElementById('modal_btn').innerHTML = 'Voltar'
        document.getElementById('modal_footer_div').className = 'modal-footer bg-visita-erro-footer'
        document.getElementById('modal_btn').className = 'btn btn-visita-erro'
        $('#modalEnviarFormulario').modal('show')
        document.getElementById('name').className = 'form-control is-invalid'
        document.getElementById('lastname').className = 'form-control is-invalid'
        document.getElementById('phone').className = 'form-control is-invalid'
        document.getElementById('email').className = 'form-control is-invalid'
        document.getElementById('cpf').className = 'form-control is-invalid'
        document.getElementById('date').className = 'form-control is-invalid'
        document.getElementById('number').className = 'form-control is-invalid'
        document.getElementById('turno').className = 'form-control is-invalid'
        document.getElementById('detalhes').className = 'form-control is-invalid'
    }
}