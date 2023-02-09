import React from 'react';
import '../../sass/main.css'
import '../../sass/Tela1/tela1.css'
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import crddrs from '../../img/crddrs.png'
import { CadGrt } from '../../api/formulario/FormCad';
import { FormularioPesquisa } from '../../api/formulario/FormPesq';

const Dashboard = () => {
// console.log('teste de produção')
    const [tela0, setTela0] = React.useState(true)
    const [tela1, setTela1] = React.useState(false);
    const [tela2, setTela2] = React.useState(false);
    const [tela3, setTela3] = React.useState(false);
    const [tela4, setTela4] = React.useState(false);
    const [tela5, setTela5] = React.useState(false);
    const [tela6, setTela6] = React.useState(false);
    const [tela7, setTela7] = React.useState(false);
    const [tela8, setTela8] = React.useState(false);
    const [tela9, setTela9] = React.useState(false);
    const [tela10, setTela10] = React.useState(false);
    const [tela11, setTela11] = React.useState(false);
    const [tela12, setTela12] = React.useState(false);
    const [tela13, setTela13] = React.useState(false);
    const [tela14, setTela14] = React.useState(false);
    const [tela15, setTela15] = React.useState(false);
    const [tela16, setTela16] = React.useState(false);
    const [tela17, setTela17] = React.useState(false);
    const [tela18, setTela18] = React.useState(false);
    const [tela19, setTela19] = React.useState(false);
    const [tela20, setTela20] = React.useState(false);
    const [tela21, setTela21] = React.useState(false);
    const [tela22, setTela22] = React.useState(false);
    const [tela23, setTela23] = React.useState(false);
    const [tela24, setTela24] = React.useState(false);
    const [tela25, setTela25] = React.useState(false);
    const [tela26, setTela26] = React.useState(false);
    const [tela27, setTela27] = React.useState(false);
    const [tela28, setTela28] = React.useState(false);
    const [tela29, setTela29] = React.useState(false);
    const [tela30, setTela30] = React.useState(false);
    const [tela31, setTela31] = React.useState(false);
    const [tela32, setTela32] = React.useState(false);
    const [tela33, setTela33] = React.useState(false);
    const [tela34, setTela34] = React.useState(false);
    const [tela35, setTela35] = React.useState(false);
    const [tela36, setTela36] = React.useState(false);
    const [tela37, setTela37] = React.useState(false);
    const [tela38, setTela38] = React.useState(false);
    const [tela97, setTela97] = React.useState(false);
    const [tela98, setTela98] = React.useState(false);
    const [tela99, setTela99] = React.useState(false);

    const botaoOpt0 = () => {
        setTela0(true);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt1 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt2 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt3 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt4 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt5 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt6 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt7 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt8 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt9 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt10 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt11 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt12 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt13 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt14 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt15 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt16 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt17 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt18 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt19 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt20 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt21 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt22 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt23 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt24 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt25 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt26 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt27 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt28 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt29 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt30 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt31 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt32 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt33 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt34 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt35 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt36 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt37 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt38 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        tela38 ? setTela38(tela38) : setTela38(!tela38);
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt97 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        tela97 ? setTela98(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt98 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        !tela97 ? setTela98(tela97) : setTela97(!tela97);
        tela98 ? setTela98(tela98) : setTela98(!tela98);
        !tela99 ? setTela99(tela99) : setTela99(!tela99);
    }
    const botaoOpt99 = () => {
        tela0 ? setTela0(!tela0) : setTela0(tela0);
        !tela1 ? setTela1(tela1) : setTela1(!tela1);
        !tela2 ? setTela2(tela2) : setTela2(!tela2);
        !tela3 ? setTela3(tela3) : setTela3(!tela3);
        !tela4 ? setTela4(tela4) : setTela4(!tela4);
        !tela5 ? setTela5(tela5) : setTela5(!tela5);
        !tela6 ? setTela6(tela6) : setTela6(!tela6);
        !tela7 ? setTela7(tela7) : setTela7(!tela7);
        !tela8 ? setTela8(tela8) : setTela8(!tela8);
        !tela9 ? setTela9(tela9) : setTela9(!tela9);
        !tela10 ? setTela10(tela10) : setTela10(!tela10);
        !tela11 ? setTela11(tela11) : setTela11(!tela11);
        !tela12 ? setTela12(tela12) : setTela12(!tela12);
        !tela13 ? setTela13(tela13) : setTela13(!tela13);
        !tela14 ? setTela14(tela14) : setTela14(!tela14);
        !tela15 ? setTela15(tela15) : setTela15(!tela15);
        !tela16 ? setTela16(tela16) : setTela16(!tela16);
        !tela17 ? setTela17(tela17) : setTela17(!tela17);
        !tela18 ? setTela18(tela18) : setTela18(!tela18);
        !tela19 ? setTela19(tela19) : setTela19(!tela19);
        !tela20 ? setTela20(tela20) : setTela20(!tela20);
        !tela21 ? setTela21(tela21) : setTela21(!tela21);
        !tela22 ? setTela22(tela22) : setTela22(!tela22);
        !tela23 ? setTela23(tela23) : setTela23(!tela23);
        !tela24 ? setTela24(tela24) : setTela24(!tela24);
        !tela25 ? setTela25(tela25) : setTela25(!tela25);
        !tela26 ? setTela26(tela26) : setTela26(!tela26);
        !tela27 ? setTela27(tela27) : setTela27(!tela27);
        !tela28 ? setTela28(tela28) : setTela28(!tela28);
        !tela29 ? setTela29(tela29) : setTela29(!tela29);
        !tela30 ? setTela30(tela30) : setTela30(!tela30);
        !tela31 ? setTela31(tela31) : setTela31(!tela31);
        !tela32 ? setTela32(tela32) : setTela32(!tela32);
        !tela33 ? setTela33(tela33) : setTela33(!tela33);
        !tela34 ? setTela34(tela34) : setTela34(!tela34);
        !tela35 ? setTela35(tela35) : setTela35(!tela35);
        !tela36 ? setTela36(tela36) : setTela36(!tela36);
        !tela37 ? setTela37(tela37) : setTela37(!tela37);
        !tela38 ? setTela38(tela38) : setTela38(!tela38);
        
        !tela97 ? setTela97(tela97) : setTela97(!tela97);
        !tela98 ? setTela98(tela98) : setTela98(!tela98);
        tela99 ? setTela99(tela99) : setTela99(!tela99);
    }

    const ListaStyle = { p: 2, m: 0.01, border: 1, height: 45, fontSize: 14, bgcolor: 'rgb(255,255,255)', "&:hover": { color: "white" ,bgcolor: "rgba(0, 120,0, 0.9)" } }
    const ListaStyleClicado = { p:1, height: 45, fontSize: 14, color: "white", bgcolor: "rgba(0, 120,0, 0.9)", "&:hover": { bgcolor: "rgba(0, 120,0, 0.9)" } }
    const ListaInicial = { p:1, height: 45, fontSize: 14, color: "white", bgcolor: "rgba(0, 120,0, 0.9)", "&:hover": { bgcolor: "rgba(0, 120,0, 0.9)" } }
    
    const [open1, setOpen1] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);
    const [open3, setOpen3] = React.useState(true);
    const [open4, setOpen4] = React.useState(true);
    const [open5, setOpen5] = React.useState(true);
    const [open6, setOpen6] = React.useState(true);
    const [open7, setOpen7] = React.useState(true);
    const [open8, setOpen8] = React.useState(true);
    const [open9, setOpen9] = React.useState(true);
    const [open10, setOpen10] = React.useState(true);
    const [open11, setOpen11] = React.useState(true);
    
    const [estilo1, setEstilo1] = React.useState(ListaStyle)
    const [estilo2, setEstilo2] = React.useState(ListaStyle)
    const [estilo3, setEstilo3] = React.useState(ListaStyle)
    const [estilo4, setEstilo4] = React.useState(ListaStyle)
    const [estilo5, setEstilo5] = React.useState(ListaStyle)
    const [estilo6, setEstilo6] = React.useState(ListaStyle)
    const [estilo7, setEstilo7] = React.useState(ListaStyle)
    const [estilo8, setEstilo8] = React.useState(ListaStyle)
    const [estilo9, setEstilo9] = React.useState(ListaStyle)
    const [estilo10, setEstilo10] =React.useState(ListaStyle)
    const [estilo11, setEstilo11] =React.useState(ListaStyle)

    const handleClick1 = () => { setOpen1(!open1); open1 === true ? setEstilo1(ListaStyleClicado) : setEstilo1(ListaStyle) };
    const handleClick3 = () => { setOpen3(!open3); open3 === true ? setEstilo3(ListaStyleClicado) : setEstilo3(ListaStyle) };
    const handleClick2 = () => { setOpen2(!open2); open2 === true ? setEstilo2(ListaStyleClicado) : setEstilo2(ListaStyle) };
    const handleClick4 = () => { setOpen4(!open4); open4 === true ? setEstilo4(ListaStyleClicado) : setEstilo4(ListaStyle) };
    const handleClick5 = () => { setOpen5(!open5); open5 === true ? setEstilo5(ListaStyleClicado) : setEstilo5(ListaStyle) };
    const handleClick6 = () => { setOpen6(!open6); open6 === true ? setEstilo6(ListaStyleClicado) : setEstilo6(ListaStyle) };
    const handleClick7 = () => { setOpen7(!open7); open7 === true ? setEstilo7(ListaStyleClicado) : setEstilo7(ListaStyle) };
    const handleClick8 = () => { setOpen8(!open8); open8 === true ? setEstilo8(ListaStyleClicado) : setEstilo8(ListaStyle) };
    const handleClick9 = () => { window.location.href = "/" };
    const handleClick10 = () => { setOpen9(!open9); open9 === true ? setEstilo9(ListaStyleClicado) : setEstilo9(ListaStyle) };
    const handleClick11 = () => { setOpen10(!open10); open10 === true ? setEstilo10(ListaStyleClicado) : setEstilo10(ListaStyle); }
    const handleClick12 = () => { setOpen11(!open11); open11 === true ? setEstilo11(ListaStyleClicado) : setEstilo11(ListaStyle); }
    const ListaTestoStyle = { p: 0 }

    const Inicial = () => { return ( <ListItemButton sx={ListaInicial} onClick={botaoOpt0}> <ListItemText sx={ListaTestoStyle} ><h1>Inicial</h1></ListItemText> </ListItemButton> ) }
    const Consulta = () => { return ( <ListItemButton sx={estilo9} onClick={handleClick10}> <ListItemText sx={ListaTestoStyle} ><h1>Consulta</h1></ListItemText> </ListItemButton> ) }
    const Alteracao = () => { return ( <ListItemButton sx={estilo1} onClick={handleClick1}> <ListItemText sx={ListaTestoStyle} ><h1 id='alteracao'>Alteração</h1></ListItemText> </ListItemButton> ) }
    const Autorizacao = () => { return ( <ListItemButton sx={estilo2} onClick={handleClick2}> <ListItemText sx={ListaTestoStyle} ><h1>Autorizacao</h1></ListItemText> </ListItemButton> ) }
    const Baixa = () => { return ( <ListItemButton sx={estilo3} onClick={handleClick3}> <ListItemText sx={ListaTestoStyle} ><h1>Baixa</h1></ListItemText> </ListItemButton> ) }
    const Processo = () => { return ( <ListItemButton sx={estilo4} onClick={handleClick4}> <ListItemText sx={ListaTestoStyle} ><h1>Processo</h1></ListItemText> </ListItemButton> ) }
    const Correcao = () => { return ( <ListItemButton sx={estilo5} onClick={handleClick5}> <ListItemText sx={ListaTestoStyle} ><h1>Correcao</h1></ListItemText> </ListItemButton> ) }
    const Inclusao = () => { return ( <ListItemButton sx={estilo6} onClick={handleClick6}> <ListItemText sx={ListaTestoStyle} ><h1>Inclusao</h1></ListItemText> </ListItemButton> ) }
    const Troca = () => { return ( <ListItemButton sx={estilo7} onClick={handleClick7}> <ListItemText sx={ListaTestoStyle} ><h1>Troca</h1></ListItemText> </ListItemButton> ) }
    const GRT = () => { return ( <ListItemButton sx={estilo10} onClick={handleClick11}> <ListItemText sx={ListaTestoStyle} ><h1>GRT</h1></ListItemText> </ListItemButton> ) }
    const Servicos = () => { return ( <ListItemButton sx={estilo11} onClick={handleClick12}> <ListItemText sx={ListaTestoStyle} ><h1>Serviços</h1></ListItemText> </ListItemButton> ) }
    const Outros = () => { return ( <ListItemButton sx={estilo8} onClick={handleClick8}> <ListItemText sx={ListaTestoStyle} ><h1>Outros</h1></ListItemText> </ListItemButton> ) }
    const Sair = () => { return ( <ListItemButton sx={ListaStyle} onClick={handleClick9}> <ListItemText sx={ListaTestoStyle} ><h1>Sair</h1></ListItemText> </ListItemButton> )}
    
    const TelaInicial = () => {

        const d = new Date();
        const dt = Intl.DateTimeFormat('pt-BR', { dateStyle: 'full' }).format(d)   
        
        return(
            <div className='tela--inicio'>
                <p>CRDD-RS</p>
                <p>{dt}</p>
                <p>Seja bem vindo.</p>
            </div>
        )
    }
    const AIProp = () => { return (<FormularioPesquisa pesquisa='Alteração de Informações do Proprietário' id='0'/>) }
    const AIVeic = () => { return (<FormularioPesquisa pesquisa='Alteração de Informações do Veículo' id='1' />) }
    const ARFin = () => { return (<FormularioPesquisa pesquisa='Alteração de Restrição Financeira' id='2' />) }
    const AACara = () => { return (<FormularioPesquisa pesquisa='Autorização para Alteração de Características' id='3' />) }
    const ACLPlaca = () => { return (<FormularioPesquisa pesquisa='Autorização para Colocação de Lacre em Placa' id='7' />) }
    const AFPlaca = () => { return (<FormularioPesquisa pesquisa='Autorização para Fabricação de Placa' id='4' />) }
    const ARChassi = () => { return (<FormularioPesquisa pesquisa='Autorização para Regravação de Chassi' id='5' />) }
    const ARMotor = () => { return (<FormularioPesquisa pesquisa='Autorização para Regravação de Motor' id='6' />) }
    const BMilitar = () => { return (<FormularioPesquisa pesquisa='Baixa para Militarização' id='9' />) }
    const BPais = () => { return (<FormularioPesquisa pesquisa='Baixa para outro Pais' id='11' />) }
    const BPEFab = () => { return (<FormularioPesquisa pesquisa='Baixa de Placa de Experiência ou de Fabricante' id='8' />) }
    const BSVeiculo = () => { return (<FormularioPesquisa pesquisa='Baixa Simples de Veículo' id='12' />) }
    const BUF = () => { return (<FormularioPesquisa pesquisa='Baixa para outro UF' id='10' />) }
    const CamProcess = () => { return (<FormularioPesquisa pesquisa='Cancelamento de Processo' id='14' />) }
    const ComProcess = () => { return (<FormularioPesquisa pesquisa='Comunicação de Processo' id='13' />) }
    const CChassi = () => { return (<FormularioPesquisa pesquisa='Correção das Observações do CRLV-E' id='15' />) }
    const CIProp = () => { return (<FormularioPesquisa pesquisa='Correção de Chassi' id='16' />) }
    const CIVeic = () => { return (<FormularioPesquisa pesquisa='Correção de Informações do Proprietário' id='17' />) }
    const CMuni = () => { return (<FormularioPesquisa pesquisa='Correção de Informações do Veículo' id='18' />) }
    const CObs = () => { return (<FormularioPesquisa pesquisa='Correção de Município' id='19' />) }
    const CRest = () => { return (<FormularioPesquisa pesquisa='Correção de Restrições' id='20' />) }
    const IAExec = () => { return (<FormularioPesquisa pesquisa='Inclusão de Restrição Financeira' id='21' />) }
    const IPEFab = () => { return (<FormularioPesquisa pesquisa='Inclusão de Placa de Experiências ou de Fabricante' id='22' />) }
    const IRFinan = () => { return (<FormularioPesquisa pesquisa='Inclusão de Averbação de Execução' id='23' />) }
    const TPVRS = () => { return (<FormularioPesquisa pesquisa='Transferência de Propriedade de Veículo de Outra UF' id='24' />) }
    const TPVUF = () => { return (<FormularioPesquisa pesquisa='Transferência de Propriedade de Veículo do RS' id='25' />) }
    const TMVRS = () => { return (<FormularioPesquisa pesquisa='Troca de Município de Veículo de Outra UF' id='26' />) }
    const TMVUF = () => { return (<FormularioPesquisa pesquisa='Troca de Município de Veículo do RS' id='27' />) }
    const ECert = () => { return (<FormularioPesquisa pesquisa='Emissão de Certidão' id='28' />) }
    const ICrlv = () => { return (<FormularioPesquisa pesquisa='Impressão do CRLV-E' id='29' />) }
    const LRFinan = () => { return (<FormularioPesquisa pesquisa='Liberação de Restrição Financeira' id='30' />) }
    const LETran = () => { return (<FormularioPesquisa pesquisa='Licença Especial de Trânsito' id='31' />) }
    const MPUMerc = () => { return (<FormularioPesquisa pesquisa='Mudança para Placa Única de Placa Mercosul' id='32' />) }
    const PEmp = () => { return (<FormularioPesquisa pesquisa='Primeiro Emplacamento' id='33' />) }
    const RPEFab = () => { return (<FormularioPesquisa pesquisa='Renovação de Placa de Experiência ou Fabricante' id='34' />) }
    const RPlac = () => { return (<FormularioPesquisa pesquisa='Reserva de Placa' id='35' />) }
    const RTran = () => { return (<FormularioPesquisa pesquisa='Restrição de Transferência' id='36' />) }
    const SVist = () => { return (<FormularioPesquisa pesquisa='Solicitação de Vistoria' id='37' />) }
    const Agregado = () => { return (<FormularioPesquisa pesquisa='Consulta Base Agregados' id='99' />) }
    const CRLV = () => { return (<FormularioPesquisa pesquisa='Solicitar CRVL.' id='98' />) }
    const IPG = () => { return (<CadGrt />) }

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
            <div className='box--container'>
                <div className='menu--lateral'>
                    <div>
                        <List
                            sx={{
                                width: '99.3%',
                                paddingTop: 0,
                                paddingBottom: 0,
                            }}
                        >
                            <Inicial />
                            <Consulta />
                            <Collapse in={!open9} timeout='auto' unmountOnExit>
                                <p id='99' onClick={botaoOpt99}>Agregados</p>
                            </Collapse>
                            <GRT />
                            <Collapse in={!open10} timeout='auto' unmountOnExit>
                                <p id='98' onClick={botaoOpt98}>Solicitar CRLV-e</p>
                            </Collapse>
                            <Servicos />
                            <Collapse in={!open11} timeout='auto' unmountOnExit>
                                <p onClick={botaoOpt97}>Iniciar Processo</p>
                            </Collapse>
                            <Alteracao />
                            <Collapse in={!open1} timeout="auto" unmountOnExit>
                                <p onClick={botaoOpt1} >Informações do Proprietário</p>
                                <p onClick={botaoOpt2} >Informações do Veículo</p>
                                <p onClick={botaoOpt3} >Restrição Financeira</p>
                            </Collapse>
                            <Autorizacao />
                            <Collapse in={!open2} timeout="auto" unmountOnExit>
                                <p onClick={botaoOpt4} >Alteração de Características</p>
                                <p onClick={botaoOpt5} >Fabricação de Placa</p>
                                <p onClick={botaoOpt6} >Regravação de Chassi</p>
                                <p onClick={botaoOpt7} >Regravação de Motor</p>
                                <p onClick={botaoOpt8} >Colocação de Lacre em Placa</p>
                            </Collapse>
                            <Baixa />
                            <Collapse in={!open3} timeout="auto" unmountOnExit>
                                <p onClick={botaoOpt9} >Placa de Experiência ou de Fabricante</p>
                                <p onClick={botaoOpt10} >Militarização</p>
                                <p onClick={botaoOpt11} >outro UF</p>
                                <p onClick={botaoOpt12} >outro Pais</p>
                                <p onClick={botaoOpt13} >Simples de Veículo</p>
                            </Collapse>
                            <Processo />
                            <Collapse in={!open4} timeout="auto" unmountOnExit>
                                <p onClick={botaoOpt14} >Comunicação de Processo</p>
                                <p onClick={botaoOpt15} >Cancelamento de Processo</p>
                            </Collapse>
                            <Correcao />
                            <Collapse in={!open5} timeout="auto" unmountOnExit>
                                <p onClick={botaoOpt16} >Observações do CRLV-E</p>
                                <p onClick={botaoOpt17} >Chassi</p>
                                <p onClick={botaoOpt18} >Informações do Proprietário</p>
                                <p onClick={botaoOpt19} >Informações do Veículo</p>
                                <p onClick={botaoOpt20} >Município</p>
                                <p onClick={botaoOpt21} >Restrições</p>
                            </Collapse>
                            <Inclusao />
                            <Collapse in={!open6} timeout="auto" unmountOnExit>
                                <p onClick={botaoOpt22} >Restrição Financeira</p>
                                <p onClick={botaoOpt23} >Placa de Experiências ou de Fabricante</p>
                                <p onClick={botaoOpt24} >Averbação de Execução</p>
                            </Collapse>
                            <Troca />
                            <Collapse in={!open7} timeout="auto" unmountOnExit>
                                <p onClick={botaoOpt25} >Transferência Propriedade de Veículo de Outra UF</p>
                                <p onClick={botaoOpt26} >Transferência Propriedade de Veículo do RS</p>
                                <p onClick={botaoOpt27} >Troca Município de Veículo de Outra UF</p>
                                <p onClick={botaoOpt28} >Troca Município de Veículo do RS</p>
                            </Collapse>
                            <Outros />
                            <Collapse in={!open8} timeout="auto" unmountOnExit>
                                <p onClick={botaoOpt29} >Emissão de Certidão</p>
                                <p onClick={botaoOpt30} >Impressão do CRLV-E</p>
                                <p onClick={botaoOpt31} >Liberação de Restrição Financeira</p>
                                <p onClick={botaoOpt32} >Licença Especial de Trânsito</p>
                                <p onClick={botaoOpt33} >Mudança para Placa Única de Placa Mercosul</p>
                                <p onClick={botaoOpt34} >Primeiro Emplacamento</p>
                                <p onClick={botaoOpt35} >Renovação de Placa de Experiência ou Fabricante</p>
                                <p onClick={botaoOpt36} >Reserva de Placa</p>
                                <p onClick={botaoOpt37} >Restrição de Transferência</p>
                                <p onClick={botaoOpt38} >Solicitação de Vistoria</p>
                            </Collapse>
                            <Sair />
                        </List>
                    </div>
                </div>
                <div className='tela--inicial'>
                    <div>
                        {tela0? <TelaInicial /> : null}
                        {!tela1 ? null : <AIProp /> }
                        {!tela2 ? null : <AIVeic /> }
                        {!tela3 ? null : <ARFin /> }
                        {!tela4 ? null : <AACara /> }
                        {!tela5 ? null : <AFPlaca /> }
                        {!tela6 ? null : <ARChassi /> }
                        {!tela7 ? null : <ARMotor /> }
                        {!tela8 ? null : <ACLPlaca /> }
                        {!tela9 ? null : <BPEFab /> }
                        {!tela10 ? null : <BMilitar /> }
                        {!tela11 ? null : <BUF /> }
                        {!tela12 ? null : <BPais /> }
                        {!tela13 ? null : <BSVeiculo /> }
                        {!tela14 ? null : <ComProcess /> }
                        {!tela15 ? null : <CamProcess /> }
                        {!tela16 ? null : <CChassi /> }
                        {!tela17 ? null : <CIProp /> }
                        {!tela18 ? null : <CIVeic /> }
                        {!tela19 ? null : <CMuni /> }
                        {!tela20 ? null : <CObs /> }
                        {!tela21 ? null : <CRest /> }
                        {!tela22 ? null : <IAExec /> }
                        {!tela23 ? null : <IPEFab /> }
                        {!tela24 ? null : <IRFinan /> }
                        {!tela25 ? null : <TPVRS /> }
                        {!tela26 ? null : <TPVUF /> }
                        {!tela27 ? null : <TMVRS /> }
                        {!tela28 ? null : <TMVUF /> }
                        {!tela29 ? null : <ECert /> }
                        {!tela30 ? null : <ICrlv /> }
                        {!tela31 ? null : <LRFinan /> }
                        {!tela32 ? null : <LETran /> }
                        {!tela33 ? null : <MPUMerc /> }
                        {!tela34 ? null : <PEmp /> }
                        {!tela35 ? null : <RPEFab /> }
                        {!tela36 ? null : <RPlac /> }
                        {!tela37 ? null : <RTran /> }
                        {!tela38 ? null : <SVist /> }
                        {!tela97 ? null : <IPG />}
                        {!tela98 ? null : <CRLV /> }
                        {!tela99 ? null : <Agregado />}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard
