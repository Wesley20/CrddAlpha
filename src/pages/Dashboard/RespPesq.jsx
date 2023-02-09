import React from 'react';
import '../../sass/Tela1/tela1.css'

export const RespPesq = (e, d) => {
    const titulo = [
        'Consulta Base Agregados',
        'Solicitar CRLV'
    ]
    
    var x

    if (e === '99'){
        x = 0
    } else {
        x = 1
    }
    
    return(
    <div className='CorpoProntas'>
        <h1>{titulo[x]}</h1>
        <div className='aba'>
            <div className='text--bar'><h2>Dados do Veículo</h2></div>
            <div className='aba1'>
                <div className='tab'>Placa:</div>
                <div className='tab'>Veículo:</div>
                <div className='tab'>Chassi:</div>
                <div className='tab'>Ano Fabricação:</div>
                <div className='tab'>Linha:</div>
                <div className='tab'>Ultima Atualização:</div>
                <div className='tab'>Faturado:</div>
            </div>
            <div className='aba2'>
                <div className='tab'>{e.Placa}</div>
                <div className='tab'>{e.MarcaModelo}</div>
                <div className='tab'>{e.chassi}</div>
                <div className='tab'>{e.AnoFabricacao}</div>
                <div className='tab'>{e.Linha}</div>
                <div className='tab'>{e.data_atualizacao}</div>
                <div className='tab'>{e.Faturado}</div>
            </div>
            <div className='text--bar'><h2>Endereço do Veículo</h2></div>
            <div className='aba1'>
                <div className='tab'>Município:</div>
                <div className='tab'>UF:</div>
                <div className='tab'>Tipo de Veículo:</div>
                <div className='tab'>Marca do Veículo:</div>
                <div className='tab'>Fabricante:</div>
                <div className='tab'>Cor do Veículo:</div>
            </div>
            <div className='aba2'>
                <div className='tab'>{e.Municipio}</div>
                <div className='tab'>{e.Grupo_Modelo}</div>
                <div className='tab'>{e.UF}</div>
                <div className='tab'>{e.TipoVeiculo}</div>
                <div className='tab'>{e.Fabricante}</div>
                <div className='tab'>{e.CorVeiculo}</div>
            </div>
            <div className='text--bar'><h2>Ficha Técnica</h2></div>
            <div className='aba1'>
                <div className='tab'>Veículo:</div>
                <div className='tab'>Tipo do Veículo:</div>
                <div className='tab'>Fabricante:</div>
                <div className='tab'>Cor do Veículo:</div>
                <div className='tab'>Protencia:</div>
                <div className='tab'>Combustível:</div>
                <div className='tab'>Capacidade de Carga:</div>
                <div className='tab'>Peso Bruto:</div>
                <div className='tab'>Tração Máx:</div>
            </div>
            <div className='aba2'>
                <div className='tab'>{e.MarcaModelo}</div>
                <div className='tab'>{e.TipoVeiculo}</div>
                <div className='tab'>{e.Fabricante}</div>
                <div className='tab'>{e.CorVeiculo}</div>
                <div className='tab'>{e.Potencia}</div>
                <div className='tab'>{e.Combustivel}</div>
                <div className='tab'>{e.CapacidadeCarga === '0' ? <p>N/A</p> : e.CapacidadeCarga}</div>
                <div className='tab'>{e.PesoBrutoTotal}</div>
                <div className='tab'>{e.CapMaximaTracao}</div>
            </div>
        </div>
    </div>
    )
}

// export const RespPesq = (e) => {
//     return(
//     <div className='CorpoProntas'>
//         <h1>Consulta Base Agregados</h1>
//         <div className='aba'>
//             <div className='text--bar'><h2>Dados do Veículo</h2></div>
//             <div className='aba1'>
//                 <div className='tab'>Placa:</div>
//                 <div className='tab'>Veículo:</div>
//                 <div className='tab'>Chassi:</div>
//                 <div className='tab'>Ano Fabricação:</div>
//                 <div className='tab'>Linha:</div>
//                 <div className='tab'>Ultima Atualização:</div>
//                 <div className='tab'>Faturado:</div>
//             </div>
//             <div className='aba2'>
//                 <div className='tab'>{e.Placa}</div>
//                 <div className='tab'>{e.MarcaModelo}</div>
//                 <div className='tab'>{e.chassi}</div>
//                 <div className='tab'>{e.AnoFabricacao}</div>
//                 <div className='tab'>{e.Linha}</div>
//                 <div className='tab'>{e.data_atualizacao}</div>
//                 <div className='tab'>{e.Faturado}</div>
//             </div>
//             <div className='text--bar'><h2>Endereço do Veículo</h2></div>
//             <div className='aba1'>
//                 <div className='tab'>Município:</div>
//                 <div className='tab'>UF:</div>
//                 <div className='tab'>Tipo de Veículo:</div>
//                 <div className='tab'>Marca do Veículo:</div>
//                 <div className='tab'>Fabricante:</div>
//                 <div className='tab'>Cor do Veículo:</div>
//             </div>
//             <div className='aba2'>
//                 <div className='tab'>{e.Municipio}</div>
//                 <div className='tab'>{e.Grupo_Modelo}</div>
//                 <div className='tab'>{e.UF}</div>
//                 <div className='tab'>{e.TipoVeiculo}</div>
//                 <div className='tab'>{e.Fabricante}</div>
//                 <div className='tab'>{e.CorVeiculo}</div>
//             </div>
//             <div className='text--bar'><h2>Ficha Técnica</h2></div>
//             <div className='aba1'>
//                 <div className='tab'>Veículo:</div>
//                 <div className='tab'>Tipo do Veículo:</div>
//                 <div className='tab'>Fabricante:</div>
//                 <div className='tab'>Cor do Veículo:</div>
//                 <div className='tab'>Protencia:</div>
//                 <div className='tab'>Combustível:</div>d
//                 <div className='tab'>Capacidade de Carga:</div>
//                 <div className='tab'>Peso Bruto:</div>
//                 <div className='tab'>Tração Máx:</div>
//             </div>
//             <div className='aba2'>
//                 <div className='tab'>{e.MarcaModelo}</div>
//                 <div className='tab'>{e.TipoVeiculo}</div>
//                 <div className='tab'>{e.Fabricante}</div>
//                 <div className='tab'>{e.CorVeiculo}</div>
//                 <div className='tab'>{e.Potencia}</div>
//                 <div className='tab'>{e.Combustivel}</div>
//                 <div className='tab'>{e.CapacidadeCarga === '0' ? <p>N/A</p> : e.CapacidadeCarga}</div>
//                 <div className='tab'>{e.PesoBrutoTotal}</div>
//                 <div className='tab'>{e.CapMaximaTracao}</div>
//             </div>
//         </div>
//     </div>
//     )
// }

// {
//     "resposta": {
//         "base_agregados": {
//             "data_atualizacao": "2018-08-09 00:00:00",
//             "chassi": "8A1BA00253L372805",
//             "Placa": "ASD1234",
//             "Faturado": "01802592000128",
//             "AnoFabricacao": "2002",
//             "Municipio": "",
//             "UF": "PR",
//             "MarcaModelo": "MEGANE RT 1.6",
//             "Fabricante": "",
//             "Segmento": "",
//             "Sub_Segmento": "",
//             "Grupo_Modelo": "",
//             "Combustivel": "",
//             "Potencia": "110",
//             "CapacidadeCarga": "0",
//             "Nacionalidade": "",
//             "Linha": "95475963",
//             "Carroceria": "",
//             "CaixaCambio": "",
//             "EixoTraseiroDif": "",
//             "TerceiroEixo": "",
//             "Motor": "",
//             "TipoDoctoFaturado": "",
//             "UFFaturado": "",
//             "TipoDoctoProp": "",
//             "AnoModelo": "",
//             "TipoVeiculo": "",
//             "EspecieVeiculo": "",
//             "TipoCarroceria": "",
//             "CorVeiculo": "",
//             "QtdPax": "",
//             "SituacaoChassi": "",
//             "Eixos": "",
//             "TipoMontagem": "",
//             "TipoDoctoImportadora": "",
//             "IdentImportadora": "",
//             "NR_DI": "",
//             "RegistroDI": "",
//             "UnidadeLocalSRF": "",
//             "UltimaAtualizacao": "",
//             "Restricao01": "",
//             "Restricao02": "",
//             "Restricao03": "",
//             "Restricao04": "",
//             "LimiteRestricaoTrib": "",
//             "Cilindradas": "",
//             "CapMaximaTracao": "",
//             "PesoBrutoTotal": "",
//             "SituacaoVeiculo": ""
//         }
//     }
// }