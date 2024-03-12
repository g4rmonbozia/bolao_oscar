export default function Header() {
    return (
        <div style={{position:"relative", width:"100vw", height:"250px", overflow:"clip", display:"flex", alignItems:"center", justifyContent:"right"}}>
            <img style={{position:"absolute", top:"-50px", width:"100%"}} src="banner.png"/>
            <img style={{position:"absolute", right:"50px", height:"150px"}} src="logo.png" />
        </div>
    );
};