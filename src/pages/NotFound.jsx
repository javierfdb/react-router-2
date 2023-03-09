import {Link} from 'react-router-dom'

export default function NotFoundt() {
    return (
       <>
            <div className="container">
                <h2> Ups! Pokemon no encontrado.</h2>
                <Link className='btn btn-primary' to="/">Buscar de nuevo</Link>
            </div>
       </>
    )
}