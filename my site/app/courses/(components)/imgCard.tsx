import Image from "next/image"
export default function ImgCard(prop:any) {
    return(
        <div>
  <div className="facilities-col">
                <Image width={100} height={170} src={prop.source} alt=""/>
                <h3>{prop.title }</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    )
}