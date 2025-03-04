import '../Styles/Intro.css'

export function CardStyle({ imagenes, titulo, descripcion, tecnologias }) {
  return (
    <div className="card">
      <div className="imagenes">
        {imagenes.map((img, index) => (
          <img className='imagenes-hover'  key={index} src={img} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
      <div className="contenido">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <span>{tecnologias}</span>
      </div>
    </div>
  );
}


export function CardTecnologias ({ imagenes, titulo, descripcion }) {
  return (
    <div className="card">
    <div className="imagenes">
      {imagenes.map((img, index) => (
        <img className='imagenes-hover'  key={index} src={img} alt={`Imagen ${index + 1}`} />
      ))}
    </div>
    <div className="contenido">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  </div>
  )
}