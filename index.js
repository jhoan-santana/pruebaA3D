function start(){

    const canvas = document.querySelector("#glcanvas");
    
    const gl = canvas.getContext("webgl");
    
    if(!gl){
    
        alert("el navegador esta picho con WEBGL")
        return;
    }
    
    gl.clearColor(0.0 , 0.7, 0.5, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    }