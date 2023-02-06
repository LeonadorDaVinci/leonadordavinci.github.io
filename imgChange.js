function addImg (section){//添加人物图片
    switch (section){
        case 1:{
            chrImg.innerHTML = "<img src='fanlei.png' width='70px' height='70px'>";
            break;
        }case 4:{
            chrImg.innerHTML = "<img src='soldierofgodrick.png' width='70px' height='70px'>";
            break;
        }case 6:{
            chrImg.innerHTML = "<img src='melina1.png' width='70px' height='70px'>";
            break;
        }case 7:{
            chrImg.innerHTML = "<img src='melina1.png' width='70px' height='70px'>";
            break;
        }

    }
}

function removeImg (){//移除人物图片
        chrImg.style.width = "0%";
        MainDiv.style.width = "80%";
        chrImg.innerHTML = "";
}
