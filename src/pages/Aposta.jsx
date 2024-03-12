import { useOutletContext } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import { inserirAposta } from "../infra/aposta";

export default function Aposta() {

    const [indicados, apostas] = useOutletContext();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    async function submeterDados(dados) {
        let id = await inserirAposta(dados);
        reset();
    }    

    function handleSelectChange(event){
        let valor = event.target.value;
        event.target.previousElementSibling.previousElementSibling.children[0].src = getImage(valor);     
    };    

    function getImage(id){
        if (id != "-") {
            let indicado = indicados.filter((elem) => elem.id == id)[0];
            return "https://image.tmdb.org/t/p/w500" + indicado.tmdb[indicado.tmdb.length - 1];
        } else {
            return "vazio.png";
        }
    }

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

    return (
        <>
            <div className="container">
                <h2>Faça sua Aposta!</h2>
                <form onSubmit={handleSubmit(submeterDados)}>
                    <label className="formLabel" htmlFor="email">E-mail</label>&nbsp;
                    <input size={20} {...register("email", {
                        required: "E-mail é obrigatório",
                        validate: {
                            matchPattern: (value) => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value) || "E-mail não é válido",
                            alreadyExists: (value) => apostas.map((aposta) => aposta.email==value?1:0).reduce((acum, elem) => acum + elem, 0) == 0 || "Aposta com esse e-mail já foi registrada"
                        },
                    })} />
                    <br />
                    {
                        categorias.map((item, index) => (
                            <div onChange={handleSelectChange} key={"cat-" + index}>
                                <div>
                                    <img src="vazio.png" />     
                                </div>
                                <label className="formLabel" htmlFor={item}>{item}</label>
                                <select key={"catsel-" + index} {...register(item, {
                                    validate:{
                                        default: (value) => value!="-" || "Selecione uma opção"
                                    },
                                })}>
                                    <option key={"nada"+index} value="-"></option>
                                    {
                                        indicados.filter((elem) => elem.categoria === item).map((elem2) => (
                                            <option key={elem2.id} value={elem2.id}>{
                                                elem2.tmdb.length>=3?
                                                elem2.tmdb[0] + " - " +
                                                elem2.tmdb[1]
                                                :
                                                elem2.tmdb[0]}</option>
                                        ))                            
                                    }
                                </select> 
                            </div>
                                                
                        ))
                    }
                    <input type="submit" value="Enviar" />
                </form>
            </div>
            <div className="errorsContainer">
            {errors.email?.message && (
                <div>{errors.email.message}</div>
            )}
            {categorias.map((elem3) => {
                errors[elem3]?.message && (
                    <div>{errors[elem3].message}</div>
                )
            }
            )}
            </div>
        </>
    );
}