import Encrip_desencrip from "./Modules/Encri_Descrip.js";

{/* <textarea name="" id="" disabled></textarea>
<input type="submit" value="copiar"></input> */}

const d = document; 
d.addEventListener("DOMContentLoaded", (e) => {
    Encrip_desencrip(".Result-encriptador-pr-2",".Encriptador-pr-1 textarea", ".Result-encriptador-pr-2 textarea",".class-btn-encriptar",".class-btn-desencriptar",".class-btn-borrar"); 
    
})