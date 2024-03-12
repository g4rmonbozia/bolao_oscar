export default function Indicado(props){

    let perfil = (props.tmdb.length == 3 && typeof props.tmdb[1] === 'string');

    let image = "https://image.tmdb.org/t/p/w500" + props.tmdb[props.tmdb.length - 1];

    function handleHover(){
        props.change([props.tmdb[0],(props.tmdb.length >= 3)?props.tmdb[1]:"",(props.percent*100).toPrecision(4) + "%"])
    }

    function handleOut(){
        props.change(["", "", ""])
    }
    
    return(
            <div onMouseOver={handleHover} onMouseLeave={handleOut} className={perfil?"perfil":"filme"}>
                {perfil?
                    <svg style={{position:"absolute", left:"0"}} width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                    {(props.percent!=1)?
                    <path d={"M 40 0 A 40 40, 0, " + (props.percent>0.5?"1":"0") + ", 0, " + (40 - 40 * Math.sin(2 * Math.PI * props.percent)) +
                    " " + (40 - 40 * Math.cos(2 * Math.PI * props.percent)) + " L 40 40 Z"} fill="#b39930"/>
                    :
                    <circle cx="40" cy="40" r="40" fill="#b39930"></circle>
                    }
                    </svg>
                    :
                    <div style={{position: "absolute", bottom: "0", width: "100%", height: props.percent*100 + "%", backgroundColor: "#b39930"}}></div>
                }
                <div style={{borderRadius:perfil?"50%":"0%", overflow: "clip", display: "flex", alignItems: "center", position: "absolute", width:"90%", height:"90%"}}>
                    <img style={{width:"100%"}} src={image} />
                </div>
            </div>
            
        
    )
};