import {Link} from 'react-router-dom'

export default function NotFoundt() {
    return (
       <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8">
                    <h2> Ups! Pokemon no encontrado.</h2>
                    <Link className='btn btn-primary mt-3' to="/">Buscar de nuevo</Link>
                    </div>
                </div>
            </div>
       </>
    )
}