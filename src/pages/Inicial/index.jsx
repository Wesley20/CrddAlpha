import { Button, TextField } from '@mui/material';
import React from 'react';
import '../../sass/Index/index.css';
import crddrs from '../../img/crddrs.png'

const axios = require('axios').default;

const Inicial = () => {

    const dt = new Date().toLocaleString()

    function loginRealizado(a) {
        if (a === "try") {
            document.getElementById('login--modal').showModal();
            document.getElementById('msg').innerHTML = "Verificando usuário e senha!"
        } else if (a === "successo") {
            setTimeout(() => {
                document.getElementById('msg').innerHTML = `Login realizado com sucesso! ${dt}`
            }, 3000)
        } else if (a === "incorreto") {
            setTimeout(() => {
                document.getElementById('msg').innerHTML = "Usuário ou senha incorreto."
            }, 3000)
        } else if (a === "erro") {
            setTimeout(() => {
                document.getElementById('msg').innerHTML = "Houve um erro ao tentar logar no servidor, tente novamente em alguns minutos."
            }, 3000)
        }
    }
    function fechaDiag() {
        let b = document.getElementById('msg').innerHTML
        if (b !== "Verificando usuário e senha!") {
            document.getElementById('login--modal').close();
        }
    }

    const LoginRealiza = () => {
        return (
            <>
                <dialog id='login--modal' onClick={fechaDiag}>
                    <div>
                        <p id='msg'></p>
                    </div>
                </dialog>
            </>
        )
    }

    const [login, setLogin] = React.useState();
    const [senha, setSenha] = React.useState();

    const Login = (e) => {
        e.preventDefault()
        loginRealizado("try")
        axios.get('http://localhost:3005/Logar', {
            params: {
                login: login,
                senha: senha
            }
        })
        .then((response) => {
            if (response.status === 200) {
                if (!response.data) {
                    loginRealizado("incorreto")
                } else {
                    const {_id} = response.data 
                    console.log(_id)
                    loginRealizado("successo")
                    setTimeout(() => {
                        console.log('teste')
                        window.location.href = "Dashboard";
                    }, 5000)
                    axios.post(`http://localhost:3005/DataLogin`, {
                    })
                }
            }
        })
        .catch((err) => {
            console.log(err);
            loginRealizado("erro")
        })
        .finally(() => {
            document.getElementById('login--form').reset()
        })
    }

    return (
        <>
            <div className='title--bar'>
                <img className='crddrs' alt='crddrs' src={crddrs} />
                <h1>Conselho Regional dos Despachantes Documentalistas do Rio Grande do Sul</h1>
            </div>
            <div className='faixa--bar'>
                <div className='preto1'></div>
                <div className='verde'></div>
                <div className='vermelho'></div>
                <div className='amarelo'></div>
                <div className='preto2'></div>
            </div>
            <div className='faixa--bar space' style={{backgroundColor:"white"}}></div>
            <div className='nav--bar'>
                <nav className='nav--item'>
                    <p>Inicial</p>
                    <p>Sobre</p>
                </nav>
            </div>
            <div className='box--central'> 
            <div className='login'>
                    <h1>Login</h1>
                    <form id='login--form' onSubmit={Login}>
                        <div className='login-user'>
                            <TextField
                                id='login'
                                label='Usuário'
                                onChange={(e) => setLogin(e.target.value)}
                                color='success'
                                size='small'
                                fullWidth required />
                        </div>
                        <div className='login-user'>
                            <TextField
                                id='senha'
                                label='Senha'
                                type='password'
                                onChange={(e) => setSenha(e.target.value)}
                                color='success'

                                size='small'
                                fullWidth required />
                        </div>
                        <div className='login-user botao'>
                            <Button
                                variant='contained'
                                type='onSubmit'
                                color='success'
                                fullWidth>
                                Logar
                            </Button>
                        </div>
                        <p>Esqueci minha senha</p>
                    </form>
                    <LoginRealiza />
                </div>
                <div className='box--container'>
                    <h1>Confira os serviços disponíveis:</h1>
                    <div>
                        <div>
                            <h2>Alterações de Documento</h2>
                            <li>Alteração de Informações do Proprietário</li>
                            <li>Alteração de Informações de Veículos</li>
                            <li>Alteração de Restrição Financeira</li>
                        </div>
                        <div>
                            <h2>Autorização</h2>
                            <li>Autorização para Alteração de Caracteristicas</li>
                            <li>Autorização para Fabricação de Placa</li>
                            <li>Autorização para Regravação de Chassi</li>
                            <li>Autorização para Regravação de Motor</li>
                            <li>Autorização para Colocação de Lacre em Placa</li>
                        </div>
                        <div>
                            <h2>Baixa</h2>
                            <li>Baixa de Placa de Experiência ou de Fabricante</li>
                            <li>Baixa para Militarização</li>
                            <li>Baixa para outro UF</li>
                            <li>Baixa para outro Pais</li>
                            <li>Baixa Simples de Veículo</li>
                        </div>
                        <div>
                            <h2>Processo</h2>
                            <li>Comunicação de Processo</li>
                            <li>Cancelamento de Processo</li>
                        </div>
                        <div>
                            <h2>Correção</h2>
                            <li>Correção das Observações do CRLV-E</li>
                            <li>Correção de Chassi</li>
                            <li>Correção de Informações do Proprietário</li>
                            <li>Correção de Informações do Veículo</li>
                            <li>Correção de Município</li>
                            <li>Correção de Restrições</li>
                        </div>
                        <div>
                            <h2>Inclusão</h2>
                            <li>Inclusão de Restrição Financeira</li>
                            <li>Inclusão de Placa de Experiências ou de Fabricante</li>
                            <li>Inclusão de Averbação de Execução</li>
                        </div>
                        <div>
                            <h2>Troca/Transferência</h2>
                            <li>Transferência de Propriedade de Veículo de Outra UF</li>
                            <li>Transferência de Propriedade de Veículo do RS</li>
                            <li>Troca de Município de Veículo de Outra UF</li>
                            <li>Troca de Município de Veículo do RS</li>
                        </div>
                        <div>
                            <h2>Outros</h2>
                            <li>Emissão de Certidão</li>
                            <li>Impressão do CRLV-E</li>
                            <li>Liberação de Restrição Financeira</li>
                            <li>Licença Especial de Trânsito</li>
                            <li>Mudança para Placa Única de Placa Mercosul</li>
                            <li>Primeiro Emplacamento</li>
                            <li>Renovação de Placa de Experiência ou Fabricante</li>
                            <li>Reserva de Placa</li>
                            <li>Restrição de Transferência</li>
                            <li>Solicitação de Vistoria</li>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <h1>Grupo - TDI</h1>
            </footer>
        </>
    )

}
export default Inicial