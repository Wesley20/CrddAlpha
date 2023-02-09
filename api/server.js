import db from './config/dbConnect.js';
import express from 'express';
import cors from 'cors';
import { usuarios } from './model/Models.js';
import { toJson } from 'xml2json';
import fetch from 'node-fetch';

const app = express();

const porta = 3005

db.on("error", console.log.bind(console, 'erro de conexão'))
db.once("open", () => {
    console.log("Conexão com o banco realizada com sucesso!")
})
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Server Online!")
})

app.get("/Logar", (req, res) => {
    console.log(req.query)
    const {login, senha} = req.query
    console.log(login, senha)
    usuarios.findOne(req.query, (err, usuarios) => {
        if(!err) {
            console.log(usuarios)
            res.status(200).json(usuarios)
        } else {
            console.log(err)
            res.status(400).json(err)
        }
    })
})
app.post(`/DataLogin`, (req, res) => {
    console.log('teste111', req, res)
    console.log(res.body)
    // usuarios.updateOne(req.query, (err, response) => {
    //     if(!err) {
    //         console.log(response)
    //         res.status(200).json(response)
    //     } else {
    //         console.log(err)
    //         res.status(400).json(err)
    //     }
    // })
})

app.get("/Consulta", (req, res ) => {
    const {dado, opt} = req.query;
    // console.log(dado, opt)
    let url = 'http://consultas.consulcar.com.br/webservice/serach_agregados.php?serial=2AWBALR9ZTHCK4CC&'+opt+'='+dado+'&tipo=1'
    fetch(url)
    .then(res => 
        res.text(),
        // console.log(res)
    )
    .then(body => 
        res.send(pegaArquivo(body)),
        // console.log(res)
    )
    .catch(err =>(console.log(err)))
})

app.get("/ConsultaGRT", (req, res ) => {
    const {dado} = req.query;
    // const opt = 'placa'
    // console.log(dado, opt)
    let url = 'http://consultas.consulcar.com.br/webservice/serach_agregados.php?serial=2AWBALR9ZTHCK4CC&placa='+dado+'&tipo=1'
    fetch(url)
    .then(res => 
        res.text(),
        // console.log(res)
    )
    .then(body => 
        res.send(pegaArquivo(body)),
        console.log(res)
    )
    .catch(err =>(console.log(err)))
})

app.get('/ValGRT', (req, res) => {
    const { grt } = req.query
    let url = `http://consultas.consulcar.com.br/webservice_crddrs/verificacao.php?usuario=teste&senha=testecliente&tipo=grt&numero=${grt}`
    
    fetch(url)
    .then(res =>
        res.json()
    )
    .then(body => {
        res.send(body)
    })
    .catch(err => {
        console.log(err)
    })
})

app.get('/IncGRT', (req, res) => {
    const { grt, dado } = req.query
    let url = `http://consultas.consulcar.com.br/webservice_crddrs/verificacao.php?usuario=teste&senha=testecliente&tipo=incluir_processos&numero=${grt}&placa=${dado}`

    fetch(url)
    .then(res => res.json())
    .then(body => res.send(body))
    .catch(err => console.log(err))
})

app.listen(porta, () => {
    console.log(`Serviço de login online na porta ${porta}!`)
})


// const http = require("http");
// const port = 3005;
// const servidor = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': "text/plain"})
//     res.end("Curso node")
// })
// servidor.listen(port, () => {
//     console.log(`Servidor escutando na porta ${port}`)
// })

function pegaArquivo(body){
    var dadoXML = body.indexOf('xml')
    console.log( body , "Fim")
    if(dadoXML !== -1){
        var xmlTOjson = toJson(body)//string xml to string JSON
        // console.log(xmlTOjson)
        var jSON = JSON.parse(xmlTOjson)//string JSON to JSON
        // console.log(t6)
        return(jSON)
    } else {
        //console.log(body)
        return(body)
    }
}


// import React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { TextField } from '@mui/material';
// import axios from 'axios';



// const CadGrt = () => {

//   const steps = ['Buscar Veículo', 'Conferindo Veículo', 'Inserindo GRT','Validando Digital'];

//   const [activeStep, setActiveStep] = React.useState(0);
//   const [dado, setDado] = React.useState('')
//   const [resposta, setResporta] = React.useState()
//   const [grt, setGrt] = React.useState('')

//   console.log(dado, activeStep)

//   const ConsultaPlaca = (e) => {
//     axios.get(`http://localhost:3005/ConsultaGRT`, {
//                 params: {
//                     dado: e,
//                 }
//             })
//             .then((res) => {
//                 const { BASE_AGREGADOS } = res.data.RESPOSTA
//                 console.log(BASE_AGREGADOS)
//                 setResporta(BASE_AGREGADOS)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//   }

//   const handleNext = () => {
//     if ((activeStep === 0) && (dado === '')) {
//       console.log('Placa vazia')
//     } else {
//       console.log('Placa preenchida');
//       setActiveStep((prevActiveStep) => prevActiveStep + 1);
//       ConsultaPlaca(dado)
//     }
//   };

//   const ValidaGRT = (e) => {
//     e.preventDefault()
//     setGrt(e.target.value)
//     console.log(grt)
//   }
//   const handleValida = (e) => {
//     e.preventDefault()
//     // console.log(e.target.value)
//     setGrt(e.target.value)
//     console.log(grt)
//   }

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   const Passo1 = () => {
//     return(
//         <div className='placa--input'>
//           <TextField type='text' id='placa' name='placa' onBlur={(e) => setDado(e.target.value)} label='Placa' size='small' defaultValue={dado} fullWidth/>
//           <p>*Digite a placa e clique em PRÓXIMO</p>
//         </div>
//     )
//   }
// console.log(document.getElementById('grt'))
//   const Passo2 = () => {
//     if (resposta) {
//       return(
//         <>
//         <div className='sessao'>
//           <div className='titulo'>
//             <p>Veículo: </p>
//             <p>Ano Modelo: </p>
//             <p>Ano Fabricação: </p>
//             <p>Chassi: </p>
//             <p>Motor: </p>
//             <p>Marca: </p>
//             <p>Município: </p>
//             <p>UF: </p>
//           </div>
//           <div className='resposta'>
//             <p>{resposta.MarcaModelo}</p>
//             <p>{resposta.AnoModelo}</p>
//             <p>{resposta.AnoFabricacao}</p>
//             <p>{resposta.chassi}</p>
//             <p>{resposta.Motor}</p>
//             <p>{resposta.Fabricante}</p>
//             <p>{resposta.Municipio}</p>
//             <p>{resposta.UF}</p>
//           </div>
//         </div>
//         <h4>* Ao clicar em PRÓXIMO você confirma que as informações passadas estão corretas!</h4>
//         </>
//       )
//     } else {
//       return(
//         <div className='placa--input'>
//           <p>Carregando!!!</p>
//         </div>
//       )
//     }
//   }
//   const Passo3 = () => {
//     return(
//         <div className='grt'>
//           <form onSubmit={ValidaGRT}>
//             <TextField id='grt' name='grt' onChange={handleValida} label='GRT' size='small' helperText='Ex: A0123456' fullWidth/>
//             <Button type='onsubmit' sx={{m:4}} variant='contained'>Validar</Button>
//           </form>
//         </div>
//     )
//   }
//   console.log(grt)
//   const Passo4 = () => {
//     return(
//       <div>
//         <div className='placa--input'>
//           {/* <TextField onChange={(e) => setDado(e.target.value)} label='Placa' size='small' fullWidth/><p>tesssssssssssste</p> */}
//         </div>
//       </div>
//     )
//   }


//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       {activeStep === steps.length ? (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed - you&apos;re finished
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//             <Box sx={{ flex: '1 1 auto' }} />
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>Passo {activeStep + 1}</Typography>
          
//           {activeStep === 0 ? <Passo1 /> : null}
//           {activeStep === 1 ? <Passo2 e={resposta} /> : null}
//           {activeStep === 2 ? <Passo3 /> : null}
//           {activeStep === 3 ? <Passo4 /> : null}

//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//             >
//               Voltar
//             </Button>
//             <Box sx={{ flex: '1 1 auto' }} />

//             <Button onClick={handleNext}>
//               {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
//             </Button>
//           </Box>
//         </React.Fragment>
//       )}
//     </Box>
//   );
// }
// export default CadGrt