
export default function Button({className, onClick, formCpf, formPassword, text}) {
  return (
    <button className={className}
    onClick={onClick}
    disabled={formCpf  && formPassword ? false : true}>
      {text}
    </button>
  )

}