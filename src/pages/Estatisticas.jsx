import { useOutletContext } from "react-router-dom";
import Categoria from '../components/Categoria';
import React from "react";

export default function Estatisticas() {

    const [indicados, apostas] = useOutletContext();

    let categorias = ["Melhor Filme",
                    "Melhor Diretor",
                    "Melhor Ator",
                    "Melhor Atriz",
                    "Melhor Ator Coadjuvante",
                    "Melhor Atriz Coadjuvante",
                    "Melhor Roteiro Original",
                    "Melhor Roteiro Adaptado",
                    "Melhor Filme de Animação",
                    "Melhor Filme Internacional",
                    "Melhor Documentário de Longa-metragem",
                    "Melhor Documentário de Curta-metragem",
                    "Melhor Curta-metragem em Live Action",
                    "Melhor Curta-metragem de Animação",
                    "Melhor Trilha Sonora",
                    "Melhor Canção Original",
                    "Melhor Som",
                    "Melhor Design de Produção",
                    "Melhor Fotografia",
                    "Melhor Maquiagem e Penteados",
                    "Melhor Figurino",
                    "Melhor Edição",
                    "Melhores Efeitos Visuais"];

    return(
        <div style={{ display: 'flex',  flexDirection: 'column', alignItems: 'center'}}>
            <h2> Estatisticas </h2>
            {
                categorias.map((item, index) => (
                    <Categoria
                        key={"cat-" + index}
                        titulo={item}
                        indicados={indicados.filter((elem) => elem.categoria === item)}
                        apostas={apostas} />
                ))
            }
                        
        </div>
    );
}