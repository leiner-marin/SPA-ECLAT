// ========================================
// FORMULARIO DE CONTACTO - SPA ECLAT
// ========================================

const formulario = document.getElementById("formularioContacto");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = formulario.nombre.value.trim();
        const telefono = formulario.telefono.value.trim();
        const servicio = formulario.servicio.value;
        const mensaje = formulario.mensaje.value.trim();

        const texto = 
`Hola SPA ECLAT 🌸

Quiero solicitar información sobre una cita.

👤 Nombre: ${nombre}
📱 Teléfono: ${telefono}
💆 Tratamiento: ${servicio}

💬 Mensaje:
${mensaje || "Deseo recibir más información sobre el tratamiento."}

Gracias.`;

        const url = `https://wa.me/573117557016?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

    });

}