'use client'
export default function Button(prop:any) {
    console.log(prop.title)
    return(
        <button className={prop.title}/>
    )
}
