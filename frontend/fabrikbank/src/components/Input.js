

export default function Input({className, placeholder, handleChange, name, type}) {

  return (
    <input className={className} type={type} placeholder={placeholder} onChange={(event) => handleChange(event)} name={name}/>
  )
}