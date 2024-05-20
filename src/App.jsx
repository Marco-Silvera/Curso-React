import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import ShowHide from './components/ShowHide'
import vehicles from './data/vehicles'

function App() {

  const vehiclesList = vehicles.map(v => {
    return <Card title={v.name} description={v.description} />
  })

  return (
    <div className='main-container'>
      <Header />
      <section className='App-container'>
        <img className='App-img' src="/src/assets/machu-picchu.webp" alt="Machu Picchu Maravilla del mundo" />
        <a className='App-button' href="">Ver circuitos</a>
      </section>

      <section className='Why-container'>
        <div className='Why-title'>
          <h2>¿Por qué elegir</h2>
          <h2>Pachamama</h2>
          <h2>Turismo?</h2>
        </div>
        <div className='Why-description'>
          <p>
            Pertenecemos a la familia CIAP, una organización de artesanos <br /> peruanos que apoya al comercio justo y la economía social.
          </p>
          <ul className='Why-list'>
            <li className='Why-list-item'>
              Nuestra experiencia en el sector del turismo alternativo.
            </li>
            <li className='Why-list-item'>
              Promoveremos un turismo responsable, sostenible y alternativo en Perú.
            </li>
            <li className='Why-list-item'>
              Buscamos involucrar al viajero responsable en el desarrollo local de nuestros pueblos.
            </li>
          </ul>
        </div>
      </section>

      <section class="image-container">
        <img src="/src/assets/amazonas-bote.webp" alt="Amazonas en bote" class="darkened-image" />
        <div className='overlay-content'>
          <div className='image-container-textos'>
            <h3 className='image-container-title'>
              Compromiso Sostenible
            </h3>
            <p className='image-container-description'>
              No dejes para mañana el viaje que <br /> puedes hacer hoy, conoce nuestros <br /> más atractivos circuitos.
            </p>
          </div>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3ETVsjQngRQ?si=qrZMIOTf-lJcd_x_&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      <section className='Circuits'>
        <h3 className='Circuits-title'>
          Circuitos Destacados
        </h3>
        <section className='Circuits-container'>
          <article className='Circuits-item'>
            <img src="/src/assets/circuito-1.webp" alt="Circuito1" />
          </article>
          <article className='Circuits-item'>
            <img src="/src/assets/circuito-1.webp" alt="Circuito1" />
          </article>
          <article className='Circuits-item'>
            <img src="/src/assets/circuito-1.webp" alt="Circuito1" />
          </article>
        </section>
      </section>

      <div className="container">
        {vehiclesList}
      </div>
      <ShowHide />
    </div>
  )
}

export default App