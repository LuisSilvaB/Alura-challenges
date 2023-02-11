const d = document; 
export default function Encrip_desencrip(AreaEncriptador, textarea1, textarea2,botonEncriptar,botonDesencriptar,botonBorrar){
    const $textarea1 = d.querySelector(textarea1); 
    const $AreaEncriptador = d.querySelector(AreaEncriptador); 
    var valorEncriptado = ""; 
    var valorDesencriptado = ""; 

    d.addEventListener("click", (e) => {
        if(e.target.matches(botonEncriptar)){
            let valueTextArea = $textarea1.value.toLowerCase();
            valorEncriptado = valueTextArea
            .replace(/e/ig,"enter")
            .replace(/i/ig,"imes")
            .replace(/a/ig,"ai")
            .replace(/o/ig,"ober")
            .replace(/u/ig,"ufat") 

            $AreaEncriptador.innerHTML = 
            `
            <textarea name="" id="" placeholder="" >${valorEncriptado}</textarea>
            <input class="btn-copy" type="submit" value="copiar"></input>
            `;
        }
        if(e.target.matches(botonDesencriptar)){
            let valueTextArea = $textarea1.value.toLowerCase();
            valorDesencriptado = valueTextArea
            .replace(/enter/ig,"e")
            .replace(/imes/ig,"i")
            .replace(/ai/ig,"a")
            .replace(/ober/ig,"o")
            .replace(/ufat/ig,"u")
             $AreaEncriptador.innerHTML = 
            `
            <textarea name="" id="" placeholder="" >${valorDesencriptado}</textarea>
            <input class="btn-copy" type="submit" value="copiar"></input>
            `;
        }
        if (e.target.matches(".btn-copy")) {
            var $textarea2 = d.querySelector(textarea2); 
            $textarea2.select();
            d.execCommand('copy'); 
            console.log("hola");
            console.log(textarea2);
        }
        if (e.target.matches(botonBorrar)) {
            var $textarea2 = d.querySelector(textarea2); 
            $textarea1.value = ''; 
            $AreaEncriptador.innerHTML = 
            `
            <div class="MensajeNoEncontrado">
                <img src="./img/Muñeco.png" alt="Imagen usuario">
                <h3>Ningún mensaje fue encontrado</h3>
                <p>Ingresa el texto que desees encriptar o desencriptar</p>
            </div>
            
            `;
        }
    })

}

