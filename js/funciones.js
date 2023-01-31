var contador = 1
const texto = $(".segundoText");
const textoPC =$(".segundoTextoPc");
const textoCargar =()=>{
    setInterval(()=>{
        switch(contador){
            case 1: 
                texto.text("BackEnd Dev");
                textoPC.text("BackEnd Dev");
                //console.log("backend"); 
                break;
            case 2:
                texto.text("FrontEnd Dev");
                textoPC.text("FrontEnd Dev");
                //console.log("FrontEnd");
                break;
            case 3:
                texto.text("FullStack Dev");
                textoPC.text("FullStack Dev");
                //console.log("Fullstack")
                contador = 0
                break;
        }
        contador ++;
    }, 4000);
}
textoCargar();