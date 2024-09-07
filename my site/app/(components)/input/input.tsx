export default function Input(prop:any){
    console.log("prop",prop.text)
    return(
        <input type="text" placeholder={prop.text} required/>
    )
}