import { Outlet, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";
import { listarIndicados } from "../infra/indicado";
import { listarApostas } from "../infra/aposta";
import { fetchDataFromApi } from "../infra/tmdb";
import Header from "../components/Header";

export default function Layout() {

    const [indicados, setIndicados] = useState([]);
    const [apostas, setApostas] = useState([]);

    useEffect(() => {
        let url = "";
        async function fetchData() {
            let data = await listarIndicados();

            data.map(async(elem) => {
                let data_tmdb = "";
                if(elem.tmdb.length == 2){
                    if(typeof elem.tmdb[0] == "number"){
                        url = "person/" + elem.tmdb[0];                 
                        data_tmdb = await fetchDataFromApi(url);
                        elem.tmdb[0] = data_tmdb.name;
                        elem.tmdb[2] = data_tmdb.profile_path; 
                    } else {
                        url = "movie/" + elem.tmdb[1];
                        data_tmdb = await fetchDataFromApi(url);
                        elem.tmdb[3] = data_tmdb.poster_path;
                        elem.tmdb[2] = "canção";    
                    }
                    url = "movie/" + elem.tmdb[1];
                    data_tmdb = await fetchDataFromApi(url);
                    elem.tmdb[1] = data_tmdb.title;
                } else {
                    url = "movie/" + elem.tmdb[0];   
                    data_tmdb = await fetchDataFromApi(url);
                    elem.tmdb[0] = data_tmdb.title;
                    elem.tmdb[1] = data_tmdb.poster_path;
                }
            });
            
            setIndicados(data);

            data = await listarApostas();
            setApostas(data);
        };
    
        fetchData();

    }, []);

    return (
        <div style={{ display: 'flex',  flexDirection: 'column', alignItems: 'center'}}>
            <Header />
            <div>
                <ul>
                    <li>
                        <Link to={"/"}><FaHome /></Link>
                    </li>
                    <li>
                        <Link to={"/stats"}>Estatísticas</Link>
                    </li>
                    <li>
                        <Link to={"/aposta"}>Faça sua Aposta</Link>
                    </li>
                </ul>
            </div>
            <Outlet context={[indicados, apostas]} />
        </div>
    )
};