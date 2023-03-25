import { useState } from "react";

export default function useForm() {
  const [form, setForm] = useState('')

  const handleChange = ({target}) => {
   
    setForm({
      ...form,
      [target.name]: target.value
    })
  
  }
  return {
    handleChange,
    form
  }
}