var radio = document.querySelector('.manual-btn')

document.getElementById('radio1').cheked = true

setInterval(() =>{
    proximaImg()
}, 5000)

function proximaImg(){
    cont++
    if(cont > 3){
        cont = 1
    }

document.getElementById('radio'+cont).cheked = true

}