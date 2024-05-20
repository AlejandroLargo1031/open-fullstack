import { useState, useEffect } from "react"
import axios from "axios"

export const Divisas = () => {
    const [value, setValue] = useState('')
    const [rates, setRates] = useState({})
    const [currency, setCurrency] = useState(null)

    useEffect(() =>{
        if(currency){
            axios.get(`https://open.er-api.com/v6/latest/${currency}`).then(response => {
                setRates(response.data.rates)
            })
        }
    }, [currency])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const onSearch = (event) => {
        event.preventDefault()
        setCurrency(value)
    }

    return (
        <div>
            <h1>Divisas</h1>
            <form onSubmit={onSearch}>
                currency: <input value={value} onChange={handleChange} />
                <button type="sumbit">Exchange rate</button>
            </form>
            <pre>
                {JSON.stringify(rates, null, 2)}
            </pre>
        </div>
    )
} 