export type DesssertCardProp = {
    name : string
    category: string
    price: number
    image?:{
        thumbnail?:string
        mobile?:string
        tablet?:string
        desktop:string
    } 
}

const DessertCard = (props: DesssertCardProp) => {
  return (
    <div>{props.name}</div>
  )
}

export default DessertCard