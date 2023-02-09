import React from 'react';
import '../../api/alerta/alerta.css'

export const Modal = (d,o,p) => {
    document.getElementById("modal").showModal();
    document.getElementById("msg").innerHTML="Pesquisa com "+ o +" : "+ d +" realizada com sucesso!"
    setTimeout(function() {
        document.getElementById("modal").close();
    }, 10000);
}
const FechaModal = () => {
    document.getElementById("modal").close();
}

const ApesquisaRealizada = () => {
    return(
        <>
            <dialog id='modal' onClick={FechaModal}>
                <div>
                    <p id='msg'></p>
                </div>
            </dialog>
        </>
    )
}
export { ApesquisaRealizada }

export const Modal1 = (g) => {
    document.getElementById("modal").showModal();
    document.getElementById("msg").innerHTML="GRT: " +g+ " Incorreto!"
    // setTimeout(function() {
    //     document.getElementById("modal").close();
    // }, 10000);
}
const FechaModal1 = () => {
    document.getElementById("modal").close();
}

const ApesquisaRealizada1 = () => {
    return(
        <>
            <dialog id='modal' onClick={FechaModal1}>
                <div>
                    <p id='msg'></p>
                </div>
            </dialog>
        </>
    )
}
export { ApesquisaRealizada1 }

export const Modal2 = (g) => {
    document.getElementById("modal").showModal();
    document.getElementById("msg").innerHTML="GRT não pode ter mais que 7 (sete) digitos!"
    // setTimeout(function() {
    //     document.getElementById("modal").close();
    // }, 10000);
}
const FechaModal2 = () => {
    document.getElementById("modal").close();
}

const ApesquisaRealizada2 = () => {
    return(
        <>
            <dialog id='modal' onClick={FechaModal2}>
                <div>
                    <p id='msg'></p>
                </div>
            </dialog>
        </>
    )
}
export { ApesquisaRealizada2 }
