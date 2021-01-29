
    function executar() {
        
        var res = document.querySelector('#resposta');
        var erro = document.querySelector('#erro');

        var contador = 0;


        //Nome
        if (formulario.nome.value == "" ) {

            formulario.nome.style.borderColor = "#FF0000";
            formulario.nome.placeholder = "Digite seu nome";
            formulario.nome.focus();
            erro.innerHTML ="Erro:  Nome inválido";
            return false;
        } else {

            formulario.nome.style.borderColor = "#00FF00";
            contador++;
            erro.innerHTML =""
        }

        //Idade  
        if (formulario.idade.value == "") {

            formulario.idade.style.borderColor = "#FF0000";
            formulario.idade.placeholder = "Digite sua idade";
            formulario.idade.focus();
            erro.innerHTML = "Erro: Idade inválida ";
            return false;
        } else {

            formulario.idade.style.borderColor = "#00FF00";
            contador++
            erro.innerHTML =""
        }

        //E-mail
        if (formulario.email.value == "" || formulario.email.value.indexOf("@") == -1) {

            formulario.email.style.borderColor = "#FF0000";
            formulario.email.placeholder = "Preencha o e-mail corretamente";
            formulario.email.focus();
            erro.innerHTML = "Erro: E-mail inválido"
            return false;
        } else {

            formulario.email.style.borderColor = "#00FF00";
            contador++;
            erro.innerHTML =""
            
        }

        //Senha 

        if (formulario.senha.value.length < 8) {

            formulario.senha.style.borderColor = "#FF0000";
            formulario.senha.placeholder = "Minimo 8 caracteres";
            formulario.senha.focus();
            erro.innerHTML = "Erro: Senha inválida"
            return false

        }else{

            formulario.senha.style.borderColor = "#00FF00" 
            contador++;  
            erro.innerHTML = ""
         
        }

        if(contador > 3){ 
       
        res.innerHTML = "Cadastro efetuado com sucesso!!";

        setInterval(function(){
        location.reload();
        }, 4000);
    
        
        }

      
       
    }