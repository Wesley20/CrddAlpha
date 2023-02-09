import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import Loading from '../../img/loading.gif'
import Loading2 from '../../img/loading.gif'


const CadGrt = () => {

  const steps = ['Buscar Veículo', 'Conferindo Veículo', 'Inserindo GRT', 'Validando Digital'];

  const [activeStep, setActiveStep] = React.useState(0);
  const [dado, setDado] = React.useState('')
  const [resposta, setResporta] = React.useState()
  const [grt, setGrt] = React.useState()
  const [clo, setClo] = React.useState(true)
  const [clo1, setClo1] = React.useState(true)
  const [serv, setServ] = React.useState('')
  const [foto, setFoto] = React.useState(false)
  const [img, setImg] = React.useState()

  const handleChange = (e) => {
    setServ(e.target.value)
  }

  const ConsultaPlaca = (e) => {
    axios.get(`http://localhost:3005/ConsultaGRT`, {
      params: {
        dado: e,
      }
    })
      .then((res) => {
        const { BASE_AGREGADOS } = res.data.RESPOSTA
        setResporta(BASE_AGREGADOS)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const HandleNext = (e) => {
    if ((activeStep === 0) && (dado === '')) {
      document.getElementById('msg1').innerHTML = 'Digite a placa do veículo!'
    } else if ((activeStep === 1) && (resposta.situacao)) {
      console.log('oi')
      document.getElementById('msg1').innerHTML = 'Digite uma placa valida!'
    } else {
      // console.log('Placa preenchida');
      setActiveStep(activeStep + 1);
      ConsultaPlaca(dado)
    }
  };
  var tipe = 10000
  useEffect(() => {
    activeStep === 2 ? setClo(false) : setClo(true)
  }, [activeStep])
  useEffect(() => {
    activeStep === 3 ? setClo1(false) : setClo1(true)
  }, [activeStep])

  function Activa1() {
    document.getElementById('pp').style.display = "block"
    setTimeout(() => {
      document.getElementById('pp').style.display = 'none'
    }, tipe)
  }
  function Activa2() {
    setClo1(true)
  }
  function Activa3() {
    setTimeout(() => {
      document.getElementById('msg1').innerHTML = 'Digital Confere!'
    }, tipe)
  }
  const Active4 = (e) => {
    setTimeout(() => {
      Activa2()//mostra botao
      document.getElementById('msg2').innerHTML = `GRT: ${e.grt} resposta: ${e.situacao}, status inicial: ${e.status}`
    }, 20000)
  }
  const Active5 = (e) => {
    setTimeout(() => {
      document.getElementById('msg2').innerHTML = `Retorno do GRT: ${e.grt} Resposta:${e.situacao}`
    }, 20000)
  }

  function Activa0() {
    // document.getElementById('pp').style.display = "block"
  }

  useEffect(() => {
    if (activeStep === 3) {
      Activa0()//liga loading
      axios.get('http://localhost:3005/IncGRT', {
        params: {
          grt: grt,
          placa: dado
        }
      })
        .then((res) => {
          const resp = res.data.resposta.insercao_dados
          console.log(resp)
          Activa3()//digital confere
          if (resp.status === 'Erro') {
            console.log("erro")
            Activa1()//desliga loading
            Active5(resp)//resposta do banco ruim
          } else {
            console.log('gloria')
            Active4(resp)//resposta do banco boa
          }

        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [activeStep])


  const ValidaGRT = (e) => {
    e.preventDefault()
    let verifica = grt
    let val0 = Number(verifica[0])
    document.getElementById('msg1').innerHTML = ''
    if (verifica.length === 7) {
      if (isNaN(val0)) {
        for (let x = 1; x < 7; x++) {
          let val = Number(verifica[x])
          if (!isNaN(val)) {
            // console.log(x, "É numero");
            if (serv === '') {
              document.getElementById('msg1').innerHTML = "Favor selecionar o serviço e validar novamente!"
            } else if (x === 6) {
              document.getElementById('l').style.display = 'block'
              document.getElementById('l').style.display = 'block'

              axios.get('http://localhost:3005/ValGRT', {
                params: {
                  grt: grt
                }
              })
                .then((res) => {
                  const [grt] = res.data.verificar.grt
                  // console.log(grt)
                  if (grt.flag === 'true') {
                    setTimeout(() => {
                      document.getElementById('l').style.display = 'none'
                      setClo(true)
                    }, 2950)
                    setTimeout(() => {
                      document.getElementById('msg1').innerHTML = `GRT: ${verifica} validado!`;
                      setFoto(true)
                    }, 3000)
                  } else {
                    setTimeout(() => {
                      document.getElementById('msg1').innerHTML = `GRT: ${verifica} invalida!`
                    }, 3000)
                    setTimeout(() => {
                      document.getElementById('l').style.display = 'none'
                    }, 2950)
                  }

                })
                .catch((err) => {
                  console.log(err)
                })
            }
          } else {
            setClo(false)
            console.log(x, 'É letra')
            document.getElementById('msg1').innerHTML = "GRT Incorreto verifique e tente novamente!"
            break;
          }
        }
      } else {
        document.getElementById('msg1').innerHTML = 'O primeiro caracter precisa ser uma letra!';
        setClo(false)
      }
    } else {
      document.getElementById('msg1').innerHTML = "GRT Precisa ter 7 caracteres!"
      setClo(false)
    }
  }

  const HandleValida = (e) => {
    let validah = e.target.value
    setGrt(validah.toUpperCase())
  }

  const handlePlaca = (e) => {
    let placah = e.target.value
    setDado(placah.toUpperCase())
  }

  const HandleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const Passo1 = () => {
    return (
      <div className='placa--input'>
        <TextField id='placa' name='placa' onBlur={handlePlaca} label='Placa' defaultValue={dado} size='small' fullWidth />
        <p>*Digite a placa e clique em PRÓXIMO</p>
        <p id='msg1' style={{ color: 'black' }} />
      </div>
    )
  }

  const Passo2 = () => {
    if (resposta) {
      if (resposta.situacao) {
        return (
          <>
            <div className='sessao'>
              <div className='titulo'>
                <p>Resposta: </p>
              </div>
              <div className='resposta'>
                <p>{resposta.situacao}</p>
              </div>
            </div>
            <p id='msg1' style={{ color: 'black' }} />
          </>
        )
      } else {
        return (
          <>
            <div className='sessao'>
              <div className='titulo'>
                <p>Veículo: </p>
                <p>Ano Modelo: </p>
                <p>Ano Fabricação: </p>
                <p>Chassi: </p>
                <p>Motor: </p>
                <p>Marca: </p>
                <p>Município: </p>
                <p>UF: </p>
              </div>
              <div className='resposta'>
                <p>{resposta.MarcaModelo}</p>
                <p>{resposta.AnoModelo}</p>
                <p>{resposta.AnoFabricacao}</p>
                <p>{resposta.chassi}</p>
                <p>{resposta.Motor}</p>
                <p>{resposta.Fabricante}</p>
                <p>{resposta.Municipio}</p>
                <p>{resposta.UF}</p>
              </div>
            </div>
            <h4>* Ao clicar em PRÓXIMO você confirma que as informações passadas estão corretas!</h4>
          </>
        )
      }
    } else {
      return (
        <div className='placa--input'>
          <p>Carregando!!!</p>
        </div>
      )
    }
  }
  const Passo3 = () => {
    return (
      <div className='grt'>
        <form onSubmit={ValidaGRT}>
          <div className='campo'>
            <FormControl size='small' fullWidth>
              <InputLabel id="demo-simple-select-label">Serviço</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={serv}
                label="Serviço"
                onChange={handleChange}
              >
                <MenuItem value='atpv'>ATPV-e</MenuItem>
                <MenuItem value='crlv'>CRLV</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='campo'>
            <TextField id='grt' name='grt' onBlur={HandleValida} label='GRT' size='small' defaultValue={grt} helperText='Ex: A0123456' fullWidth />
            <Button type='onsubmit' sx={{ m: 4 }} variant='contained'>Validar</Button>
            {foto === true ?<Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" onChange={e => setImg(e.target.value)}/>
            </Button> : null}
            <p>{img}</p>
            <p id='msg1' />
            <img id='l' src={Loading} alt='Loading...' style={{ width: "100px", display: 'none' }} />
          </div>
        </form>
      </div>
    )
  }
  const Passo4 = () => {
    return (
      <div className='Digital'>
        <p>Verificado Digital Cadastrada</p>
        <div className='dedo'>
          <img id='pp' src={Loading2} alt='Loading...' style={{ width: "100px", margin: 'auto' }} />
          <p id='msg1' />
          <p id='msg2' />
        </div>
      </div>
    )
  }


  useEffect(() => {
    activeStep === 3 && console.log('PLACA: ', dado, 'PASSO: ', activeStep, 'GRT: ', grt, 'Serviço:', serv);
  }, [activeStep, dado, grt, serv])


  return (<>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Inicio do processo realizado com sucesso!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Novo</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Passo {activeStep + 1}</Typography>

          {activeStep === 0 ? <Passo1 /> : null}
          {activeStep === 1 ? <Passo2 e={resposta} /> : null}
          {activeStep === 2 ? <Passo3 /> : null}
          {activeStep === 3 ? <Passo4 /> : null}

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={HandleBack}
              sx={{ mr: 1 }}
            >
              Voltar
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {clo === true ? clo1 === true ?
              <Button onClick={HandleNext}>
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
              </Button> : null : null
            }
          </Box>
        </React.Fragment>
      )}
    </Box>
  </>);
}
export { CadGrt }