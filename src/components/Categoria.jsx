import Indicado from "./Indicado";
import React, { useState, useEffect } from "react";

export default function Categoria(props){

    const [detalhes, setDetalhes] = useState(["","",""]);

    function handleState(valores){
        setDetalhes(valores);
    }
    
    let indicados = props.indicados.map((indicado) => 
        [indicado.id, indicado.tmdb, (props.apostas.filter((elem) => elem[props.titulo]===indicado.id).length) / props.apostas.length]     
    ).sort((a, b) => b[2] - a[2]);

    return(
        <div className="categoria">
            <div className="titulo">
                <p>{props.titulo}</p>
            </div>
            <div style={{gridTemplateRows: "1fr" + ((props.indicados.length > 5)?" 1fr":"")}} className="resto">
                {indicados.map((item) => (
                     <Indicado change={handleState} key={item[0]} tmdb={item[1]} percent={item[2]} />
                ))
                }
            </div>
            <div className="detalhes">
                <div style={{gridRow:detalhes[1]==""?"1 / 3":"1 / 2"}}>{detalhes[0]}</div>
                <div style={{gridRow:detalhes[1]==""?"3 / 3":"2 / 3"}}>{detalhes[1]}</div>
                <div>{detalhes[2]}</div>
            </div>
        </div>
    )
};