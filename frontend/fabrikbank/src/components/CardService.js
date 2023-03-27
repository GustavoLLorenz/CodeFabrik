import '../css/CardService.css'
export default function CardService({ title, description}) {

  return (
    <div className="divCard">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}