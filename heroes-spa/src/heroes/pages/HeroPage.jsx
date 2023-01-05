import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  
  const hero = useMemo( () => getHeroById( id ), [ id ] ); ;

  const onNavigateBack = () => {
    navigate(-1);
  }

  /**
   * Cuando el componente lanza un cambio en el state (useState, useReducer, etc) (aunque sea en un componente padre)
   * El componente se vuelve a disparar y las funciones llamadas tambien
   * Podríamos memorizar el resultado si el id no cambio
   * Así estaba antes: const hero = getHeroById( id );
   * En este ejercicio no es necesario, pero lo implementamos para reforzar el tema
   * Conexión a la bd, restful api endpoint, grabar en nuestro index db
   */
  
  if( !hero ){
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ `/assets/heroes/${ id }.jpg` }
          alt={ hero.superhero }
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego: </b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher: </b> {hero.publisher} </li>
          <li className="list-group-item"> <b>First Appearance:</b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters}</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Back
        </button>

      </div>
    </div>
  )
}
