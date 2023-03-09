import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function Pokemones() {
    
    const [poke, SetPoke] = useState([]);
    const navigate = useNavigate();

    const getPokemones = async() => {
        try {

        const response = await fetch('https://pokeapi.co/api/v2/pokemon') 
        const data = await response.json();  
        SetPoke(data.results)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() =>{
        getPokemones();
    }, [])

    const handleclicRedirect = () => {
        const seleccionado = document.getElementById("pokeSelect");
        const value = seleccionado.value;
        if (value == 0) {
            alert('Por favor elige un Pokemón')
        } else {
            navigate(value);
        } 
    }

    return (
        <>
            <div className="container my-5">
                <div className="box-select row d-flex justify-content-center">
                    <div className="col-lg-8 d">
                    <h1 className="text-center">Elige tu Pokemón!</h1>
                    <select className="form-select mt-3" id="pokeSelect">
                        <option value="0">Seleccionar</option>
                        {
                            poke.map(item => (
                                <option value={item.name}>
                                    {item.name}     
                            </option>
                            ))
                        }
                    </select>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 d-flex justify-content-center">
                        <button onClick={() => handleclicRedirect()} className="btn btn-primary btn-large mt-4">Ver detalle</button>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}