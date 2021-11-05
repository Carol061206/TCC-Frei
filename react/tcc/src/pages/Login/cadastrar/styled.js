import styled from "styled-components";


const ConteinerCadastrar = styled.div`
display: flex;
flex-direction: column;
background-color:#D2F6FF;
height: 100vh;


.conteinercadastro {
display: flex;
flex-direction: column;

}
.as {

    position:absolute;
    bottom:0;
    width:100%;
}

.caixa1-inputs {
    font-family: Gabriela;
    display: flex;
    flex-direction: column;
}

.isafoi, .ok {
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
}

.opa {
    display: flex;
    justify-content: space-between; 
    margin-top: 0.9em;
}

.titulo {
    font-family: Lobster;
}

.senha {
    font-family: Gabriela;
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
}
.cidade {
    font-family: Gabriela;
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
}

.complemento {
    font-family: Gabriela;
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
}

.caixa2-inputs {
    font-family: Gabriela;
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
}

.caixa3-inputs {
    font-family: Lobster;

    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
}

.Titulo {
    
    text-align: center;
    font-family: Lobster;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 62px;
    
    color: #000000;
}

input {
    align-items: center;
    background: #FFFFFF;
    opacity: 0.95;

    border-radius: 30px;
    border: none;
}

.carolfoi {
    display: flex;
    flex-direction: row;
    margin-top: 0.9em;
}

select {
    text-align: center;
    width: 12em;
}


.Botaomae {
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin-top: 0.9em;
}

button {
    border: none;
    font-family: Lobster;
    padding: 10px;
    margin: auto;
    width: 10em;
    margin-top: 3em;
}



.botão1 > button {
    background-color:#FF4949;
    opacity: 0.75;
    border-radius: 30px;
    text-align: center;
    font-family: Lobster;
}

.botão > button {
    background-color:#1AF38B;
    opacity: 0.75;
    border-radius: 30px;
    position: absolute;
}



.Botaomae {
    display: flex;
    flex-direction: column;
}

.Cancelar {
    font-family: Lobster;
}



`

export {ConteinerCadastrar}