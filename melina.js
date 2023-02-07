function Melina (){
    var love = Number(document.getElementById('love').innerHTML);
    var anger = Number(document.getElementById('anger').innerHTML);
    var fear = Number(document.getElementById('fear').innerHTML);
    if (love <=10 && love >= -10){
        document.getElementById('LOVE').innerHTML = "【冷淡】";
    }else if(love <=-11 && love>= -25){
        document.getElementById('LOVE').innerHTML = "【冷漠】";
    }else if(love <=-26 && love>=-40){
        document.getElementById('LOVE').innerHTML = "【怀疑】";
    }else if(love <=-41 && love>=-60){
        document.getElementById('LOVE').innerHTML = "【排斥】";
    }else if(love <=-61 && love>=-75){
        document.getElementById('LOVE').innerHTML = "【厌恶】";
    }else if(love <=-76 && love>=-100){
        document.getElementById('LOVE').innerHTML = "【憎恨】";
    }else if(love <=20 && love>=11){
        document.getElementById('LOVE').innerHTML = "【熟悉】";
    }else if(love <=35 && love>=21){
        document.getElementById('LOVE').innerHTML = "【友善】";
    }else if(love <=45 && love>=21){
        document.getElementById('LOVE').innerHTML = "【友谊】";
    }else if(love <=79 && love>=46){
        document.getElementById('LOVE').innerHTML = "【超友谊】";
    }else if(love <=100 && love>=80){
        document.getElementById('LOVE').innerHTML = "【LOVE】";
    }

    if(anger <=-80 && anger>=-100){
        document.getElementById('ANGER').innerHTML = "【极端悲愤交加】";
    }else if(anger <=-60 && anger>=-81){
        document.getElementById('ANGER').innerHTML = "【悲愤】";
    }else if(anger <=-35 && anger>=-59){
        document.getElementById('ANGER').innerHTML = "【悲伤】";
    }else if(anger <=-11 && anger>=-34){
        document.getElementById('ANGER').innerHTML = "【难过】";
    }else if(anger <=-1 && anger>=--10){
        document.getElementById('ANGER').innerHTML = "【伤感】";
    }else if(anger <=10 && anger>=0){
        document.getElementById('ANGER').innerHTML = "【平静】";
    }else if(anger <=25 && anger>=11){
        document.getElementById('ANGER').innerHTML = "【愉悦】";
    }else if(anger <=40 && anger>=26){
        document.getElementById('ANGER').innerHTML = "【快乐】";
    }else if(anger <=70 && anger>=41){
        document.getElementById('ANGER').innerHTML = "【兴奋】";
    }else if(anger <=100 && anger>=71){
        document.getElementById('ANGER').innerHTML = "【极度快乐】";
    }
}