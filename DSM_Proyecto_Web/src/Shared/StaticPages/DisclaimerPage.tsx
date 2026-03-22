import "./DisclaimerPage.css"

export default function DisclaimerPage() {
    return (
        <div className="static-page">
            <h1>Aviso Legal</h1>

            <p>
                Este sitio web ha sido desarrollado como parte de un proyecto académico.
            </p>

            <h2>Propiedad intelectual</h2>
            <p>
                Todo el contenido mostrado en esta página, incluyendo textos, imágenes y diseño,
                pertenece a sus respectivos autores o se utiliza únicamente con fines educativos.
            </p>

            <h2>Responsabilidad</h2>
            <p>
                No se garantiza la exactitud ni la actualización de la información mostrada.
                El uso de este sitio es responsabilidad del usuario.
            </p>

            <h2>Uso de datos</h2>
            <p>
                Los datos introducidos por los usuarios (como comentarios o listas de favoritos)
                se almacenan únicamente con fines de funcionamiento de la aplicación.
            </p>

            <h2>Contacto</h2>
            <p>
                Para cualquier duda, puedes utilizar la página de contacto.
            </p>
        </div>
    );
}