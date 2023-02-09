import axios from 'axios';
import React, { useEffect } from 'react';
import { RespPesq } from '../../pages/Dashboard/RespPesq';
import { ApesquisaRealizada, Modal } from '../alerta/alertas';


function FormularioPesquisa(props) {

    const idD = props.id
    const pesquisa = props.pesquisa

    const [dado, setDado] = React.useState('');
    const [opt, setOpt] = React.useState('placa');
    const [resposta, setResposta] = React.useState('');

    const EnvioDados = (e) => {
        e.preventDefault()
        console.log('Enviado: ', dado, opt, idD)
        if(dado === ''){
            alert("O campo de "+ opt + " não pode ficar vazio!")
        } else if (idD === '99') {
            Modal(dado,opt,pesquisa)
            document.getElementById('formulario').reset()
            setDado('')

            axios.get(`http://localhost:3005/Consulta`, {
                params: {
                    dado: dado,
                    opt: opt,
                }
            })
            .then((res) => {
                const { BASE_AGREGADOS } = res.data.RESPOSTA
                setResposta(BASE_AGREGADOS)
            })
            .catch((err) => {
                console.log(err)
            })
        }else if (idD === '98') {
            Modal(dado,opt,pesquisa)
            document.getElementById('formulario').reset()
            setDado('')

            axios.get(`http://localhost:3005/Consulta`, {
                params: {
                    dado: dado,
                    opt: opt,
                }
            })
            .then((res) => {
                const { BASE_AGREGADOS } = res.data.RESPOSTA
                setResposta(BASE_AGREGADOS)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
    useEffect(() => {
        if(opt === 'placa'){
            document.getElementById('btn').placeholder='Digite a placa aqui!'
        } else if(opt === 'chassi'){
            document.getElementById('btn').placeholder='Digite o chassi aqui!'
        } 
    },[opt])

    if( resposta === '' ) {
    return (
        <div className='tela--geral'>
            <div className='tela--consulta'>
                <h1>{pesquisa}</h1>
                <form id='formulario' onSubmit={EnvioDados}>
                    <div className='opt'>
                        <input name='doc' defaultChecked className='radio' id='placa' onClick={(e) => setOpt(e.target.id)} value='placa' type='radio'></input>
                        <label id='opt' htmlFor='placa'>Placa </label>
                    </div>
                    <div className='opt'>
                        <input name='doc' className='radio' id='chassi' onClick={(e) => setOpt(e.target.id)} value='chassi' type='radio'></input>
                        <label id='opt' htmlFor='chassi'>Chassi</label>
                    </div>
                    <div>
                        <h4>*Não inserir ponto(.) virgula(,) traço(-)</h4>
                        <h4>*Apenas numeros e letras</h4>
                    </div>
                    <label> </label>
                    <input id='btn' onChange={(e) => setDado(e.target.value)} type='text' />
                    <button id='botao' type='onsubmit'>enviar</button>
                </form>
            </div>
            <ApesquisaRealizada />
        </div>
    )} else { 
        return(
            <div className='tela--geral'>
                {RespPesq(resposta, idD)}
                <div className='botoes'>
                    { idD === '98' ? <button onClick={(e) => setResposta('')}>Confirmar</button> : null}
                    <button onClick={(e) => setResposta('')}>Sair</button>
                </div>
            </div>
        )
     }
}

export { FormularioPesquisa }