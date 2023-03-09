import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import {Link} from 'react-router-dom'

const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 2000))

export default function Pokemon() {
    const Params = useParams();
    const nav = useNavigate();
    const [poke, setPoke] = useState(null);
    const [loading, setLoading] = useState(true); 


    const getPokemon = async() => {
        try {
            await fakePromise();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Params.name}`);
            if(!response.ok) throw ('No se encontró el pokemon')
            const data = await response.json();
            setPoke(data);
        } catch (error) {
            console.log(error);
            nav('/NotFound')
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
       getPokemon();
    }, [])

    return(
        <>
            <div className="container my-5">
            { 
                loading ? (
            
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <figure className="mb-0 text-center">
                            <img className="w-75" src="https://media4.giphy.com/media/DRfu7BT8ZK1uo/200.gif" alt="Pokemón" />
                        </figure>
                    </div>
                </div>
                
                ) : ( <>

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 bg-white">
                        <figure className="box-pokemon-detalle">
                            <img className="w-100 pokemon-detalle" src={poke.sprites.other.home.front_default} alt="Pokemon"/> 
                        </figure>
                    </div>
                    <div className="col-lg-4 bg-white box-detail-list">
                        <h1 className="text-center name-pokemon">{poke.name}</h1> 
                        <ul className="ul-list-pokemon">
                            <li>Altura: {poke.height}</li>
                            <li>Peso: {poke.weight} </li>
                            <li>Experiencia Base: {poke.base_experience} </li>
                            <li>Posición: {poke.order}</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center mt-4">
                        <Link className='btn btn-primary' to="/pokemones">Volver a buscar</Link>
                    </div>
                </div>
                  
                </>)
            }
            </div>
        </>
    )
}