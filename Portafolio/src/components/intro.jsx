import '../Styles/Intro.css'


export function Introduccion () {
    return(
        <>
        <div className='divMiNombre'>
        <h1 className='titulos'>David Diaz</h1>
        <h1 className='subtitulos' >Software Developer </h1> <br />
        </div>
        
        <div>
            💻 Desarrollador de software en crecimiento | C# .NET | React | Desarrollo web <br />
            "Con cada línea, aprendo y crezco, Mi código es mi arte, en cada proceso."
        </div>
        </>
    )
}

  
export function Details () {
    return(
        <>
        <div className='divCard'>
        </div>
        
        <br />
        <h2 className='subtitulos'>mi experiencia</h2>
        <br />
        <p>A lo largo del último año, realicé mis prácticas profesionales durante un periodo de 12 meses,
             en los cuales me dediqué a diversas tareas, como la documentación del código, la creación de nuevas funciones, 
             el testeo de software, el soporte remoto y presencial a clientes, así como el diseño de interfaces web, entre otras funciones.
        </p>
        <br />
        <p>
        Fui asignado a dos proyectos para empresas financieras, donde mi responsabilidad principal fue realizar ajustes y modificaciones
             según las solicitudes de los clientes, además de brindar mantenimiento a sus páginas web. Durante mis últimos meses,
              también participé en la integración de la Facturación Electrónica, tanto en el frontend como parcialmente en el backend.
        </p>
        <div className='divCard'>
        </div>
        <br />
        <br />

        <h2 className='subtitulos'>Mis Proyectos</h2>
        </>
    
    )
    
}