import { clientServices } from "../services/cliente-services.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value
    const email = document.querySelector("[data-email]").value
    
    try {
        const data = await clientServices.crearCliente(nombre,email)
        if (nombre && email) {
            window.location.href = "/screens/registro_completado.html"

        } else {
            throw new Error();
        }
    } catch (error) {
        window.location.href = "/screens/error.html"
    }
    
})
