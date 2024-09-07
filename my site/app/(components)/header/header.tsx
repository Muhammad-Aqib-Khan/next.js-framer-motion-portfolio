import Navbar from "../navbar/navbar"
export default function Header(prop:any){
    console.log("props",prop.title)
    return(
        
            <section className="Sub-header">
            <Navbar/>
            <h1>{prop.title}</h1>
    </section>
        
    )
} 