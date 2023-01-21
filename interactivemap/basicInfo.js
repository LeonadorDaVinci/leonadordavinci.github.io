function basicInfo (x){
    if(x.getAttribute("id") == "hongChao"){
        //alert(x.getAttribute("id"));
        document.getElementById("NationName").innerHTML="宏朝";
        document.getElementById("Economy").innerHTML="12";
        display("economy");
        document.getElementById("Culture").innerHTML="0";
        display("culture");
        document.getElementById("Construction").innerHTML="0";
        display("construction");
    } else if (x.getAttribute("id") == "emptyArea"){
        document.getElementById("NationName").innerHTML="无主之地";
    }else if (x.getAttribute("id") == "Liurnia"){
        document.getElementById("NationName").innerHTML="利耶尼亚邦联";
        document.getElementById("Economy").innerHTML="5";
        display("economy");
        document.getElementById("Culture").innerHTML="10";
        display("culture");
        document.getElementById("Construction").innerHTML="6";
        display("construction");
    }else if (x.getAttribute("id") == "lianBangZhongZhuJun"){
        document.getElementById("NationName").innerHTML="联众邦驻军";
        document.getElementById("Economy").innerHTML="15";
        display("economy");
        document.getElementById("Culture").innerHTML="0";
        display("culture");
        document.getElementById("Construction").innerHTML="10";
        display("construction");
    }else if (x.getAttribute("id") == "puKeKingdom"){
        document.getElementById("NationName").innerHTML="普克王国";
        document.getElementById("Economy").innerHTML="10";
        display("economy");
        document.getElementById("Culture").innerHTML="10";
        display("culture");
        document.getElementById("Construction").innerHTML="10";
        display("construction");
    }else if (x.getAttribute("id") == "laiPaRepublic"){
        document.getElementById("NationName").innerHTML="莱帕多基亚共和国";
        document.getElementById("Economy").innerHTML="9";
        display("economy");
        document.getElementById("Culture").innerHTML="10";
        display("culture");
        document.getElementById("Construction").innerHTML="15";
        display("construction");
    }else if (x.getAttribute("id") == "tianChao"){
        document.getElementById("NationName").innerHTML="天朝联邦";
        document.getElementById("Economy").innerHTML="7";
        display("economy");
        document.getElementById("Culture").innerHTML="6";
        display("culture");
        document.getElementById("Construction").innerHTML="7";
        display("construction");
    }else if (x.getAttribute("id") == "leaonia"){
        document.getElementById("NationName").innerHTML="劳尔尼亚联邦";
        document.getElementById("Economy").innerHTML="1";
        display("economy");
        document.getElementById("Culture").innerHTML="1";
        display("culture");
        document.getElementById("Construction").innerHTML="12";
        display("construction");
    }else if (x.getAttribute("id") == "luoMianRepublic"){
        document.getElementById("NationName").innerHTML="洛眠共和国";
        document.getElementById("Economy").innerHTML="12";
        display("economy");
        document.getElementById("Culture").innerHTML="8";
        display("culture");
        document.getElementById("Construction").innerHTML="5";
        display("construction");
    }else if (x.getAttribute("id") == "griffin"){
        document.getElementById("NationName").innerHTML="格里芬之国";
        document.getElementById("Economy").innerHTML="8";
        display("economy");
        document.getElementById("Culture").innerHTML="7";
        display("culture");
        document.getElementById("Construction").innerHTML="7";
        display("construction");
    }else if (x.getAttribute("id") == "akatika"){
        document.getElementById("NationName").innerHTML="阿喀提卡城国";
        document.getElementById("Economy").innerHTML="5";
        display("economy");
        document.getElementById("Culture").innerHTML="9";
        display("culture");
        document.getElementById("Construction").innerHTML="5";
        display("construction");
    }else if (x.getAttribute("id") == "arnokov"){
        document.getElementById("NationName").innerHTML="阿诺科夫社会主义联邦";
        document.getElementById("Economy").innerHTML="6";
        display("economy");
        document.getElementById("Culture").innerHTML="9";
        display("culture");
        document.getElementById("Construction").innerHTML="7";
        display("construction");
    }else if (x.getAttribute("id") == "LeagueOfLiberty"){
        document.getElementById("NationName").innerHTML="自由国家联合体";
        document.getElementById("Economy").innerHTML="14";
        display("economy");
        document.getElementById("Culture").innerHTML="7";
        display("culture");
        document.getElementById("Construction").innerHTML="10";
        display("construction");
    }else if (x.getAttribute("id") == "sheep"){
        document.getElementById("NationName").innerHTML="羊村";
        document.getElementById("Economy").innerHTML="4";
        display("economy");
        document.getElementById("Culture").innerHTML="8";
        display("culture");
        document.getElementById("Construction").innerHTML="6";
        display("construction");
    }else if (x.getAttribute("id") == "Gambia"){
        document.getElementById("NationName").innerHTML="冈比亚";
        document.getElementById("Economy").innerHTML="5";
        display("economy");
        document.getElementById("Culture").innerHTML="7";
        display("culture");
        document.getElementById("Construction").innerHTML="5";
        display("construction");
    }else if (x.getAttribute("id") == "americaSocialism"){
        document.getElementById("NationName").innerHTML="美利坚社会主义合众国";
        document.getElementById("Economy").innerHTML="10";
        display("economy");
        document.getElementById("Culture").innerHTML="3";
        display("culture");
        document.getElementById("Construction").innerHTML="10";
        display("construction");
    }else if (x.getAttribute("id") == "britainSocialism"){
        document.getElementById("NationName").innerHTML="不列颠社会主义共和国";
        document.getElementById("Economy").innerHTML="Lack of Info";
        display("economy");
        document.getElementById("Culture").innerHTML="Lack of Info";
        display("culture");
        document.getElementById("Construction").innerHTML="Lack of Info";
        display("construction");
    }else if (x.getAttribute("id") == "limburg"){
        document.getElementById("NationName").innerHTML="里森堡";
        document.getElementById("Economy").innerHTML="7";
        display("economy");
        document.getElementById("Culture").innerHTML="7";
        display("culture");
        document.getElementById("Construction").innerHTML="8";
        display("construction");
    }else if (x.getAttribute("id") == "atlantisKingdom"){
        document.getElementById("NationName").innerHTML="亚特兰蒂斯王国";
        document.getElementById("Economy").innerHTML="11";
        display("economy");
        document.getElementById("Culture").innerHTML="12";
        display("culture");
        document.getElementById("Construction").innerHTML="5";
        display("construction");
    }else if (x.getAttribute("id") == "korea"){
        document.getElementById("NationName").innerHTML="社会主义韩国";
        document.getElementById("Economy").innerHTML="Lack of Info";
        display("economy");
        document.getElementById("Culture").innerHTML="Lack of Info";
        display("culture");
        document.getElementById("Construction").innerHTML="Lack of Info";
        display("construction");
    }
}

function getChunkBasicInfo(chunkId){
//construction value
    var hongChao = [0];
    var Liurnia = [6];
    var lianBangZhongZhuJun =[10];
    var puKeKingdom =[10];
    var laiPaRepublic = [15];
    var tianChao = [7];
    var leaonia =[12];
    var luoMianRepublic=[5];
    var griffin =[7];
    var akatika =[5];
    var arnokov=[7];
    var LeagueOfLiberty=[10];
    var sheep =[6];
    var Gambia=[5];
    var americaSocialism=[10];
    var limburg =[8];
    var atlantisKingdom =[5];


    switch (chunkId){
        case "hongChao":{
            return hongChao[0];
        }case "Liurnia":{
            return Liurnia[0];
        }case "lianBangZhongZhuJun":{
            return lianBangZhongZhuJun[0];
        }case "puKeKingdom":{
            return puKeKingdom[0];
        }case "laiPaRepublic":{
            return laiPaRepublic[0];
        }case "tianChao":{
            return tianChao[0];
        }case "luoMainRepublic":{
            return luoMianRepublic[0];
        }case "leaonia":{
            return leaonia[0];
        }case "griffin":{
            return griffin[0];
        }case "akatika":{
            return akatika[0];
        }case "arnokov":{
            return arnokov[0];
        }case "LeagueOfLiberty":{
            return LeagueOfLiberty[0];
        }case "sheep":{
            return sheep[0];
        }case "Gambia":{
            return Gambia[0];
        }case "americaSocialism":{
            return americaSocialism[0];
        }case "limburg":{
            return limburg[0];
        }case "atlantisKingdom":{
            return atlantisKingdom[0];
        }
    }
}