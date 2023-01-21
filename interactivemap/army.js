function ArmyInfo(nationId,value){
    //行动(0)，谍报(1)，军需(2)，攻击(3)，防御(4)，医疗(5)
    var hongChao = [5,15,10,20,20,15];
    var griffin =[10,0,6,10,8,4];
    var luoMianRepublic=[5,9,4,9,9,9];
    var arnokov=[8,2,7,15,10,8];
    var akatika=[10,15,5,10,10,5];
    var leaonia=[1,0,7,4,9,8];
    var laiPaRepublic=[1,3,2,4,16,3];
    var lianBangZhongZhuJun=[2,5,5,5,20,5];
    var tianChao=[10,11,12,12,12,11];
    var Liurnia=[3,2,4,2,8,10];
    var puKeKingdom=[5,1,1,1,8,1];
    var LeagueOfLiberty=[5,3,3,8,15,5];
    var americaSocialism=[7,10,6,5,6,5];
    var sheep=[8,5,4,10,13,0];
    var britainSocialism=[null,null,null,null,null,null];
    var Gambia=[9,9,9,10,10,8];
    var limburg=[8,9,9,9,9,8];
    var korea=[null,null,null,null,null,null];
    var atlantisKingdom=[5,6,4,8,5,7];

    switch (nationId){
        case "hongChao":{
            return hongChao[value];
        }case "griffin":{
            return griffin[value];
        }case "luoMianRepublic":{
            return luoMianRepublic[value];
        }case "arnokov":{
            return arnokov[value];
        }case "akatika":{
            return akatika[value];
        }case "leaonia":{
            return leaonia[value];
        }case "laiPaRepublic":{
            return laiPaRepublic[value];
        }case "lianBangZhongZhuJun":{
            return lianBangZhongZhuJun[value];
        }case "tianChao":{
            return tianChao[value];
        }case "Liurnia":{
            return Liurnia[value];
        }case "puKeKingdom":{
            return puKeKingdom[value];
        }case "LeagueOfLiberty":{
            return LeagueOfLiberty[value];
        }case "americaSocialism":{
            return americaSocialism[value];
        }case "sheep":{
            return sheep[value];
        }case "britainSocialism":{
            return britainSocialism[value];
        }case "Gambia":{
            return Gambia[value];
        }case "limburg":{
            return limburg[value];
        }case 'korea':{
            return korea[value];
        }case 'atlantisKingdom':{
            return atlantisKingdom[value];
        }
    }
}
/*
简述思路：
获取军队信息，生成图片。
监听键盘按键，分析军队动向
判断动向的格子是敌方还是我方
根据格子的基本信息决定剩余的行动点数
*/







function checkChunkArmy (object){
    var ChunkCoordinate = object;

    switch (ChunkCoordinate){
        case "A/8": {
            document.getElementById("Army1").innerHTML="宏朝";
            display("army1");
            document.getElementById("Army1personel").innerHTML="250k";
            display("army1personel");
            //ArmyInfo();
            break;
        }
        case "A/9":{
            document.getElementById("Army1").innerHTML="宏朝";
            display("army1");
            document.getElementById("Army1personel").innerHTML="250k";
            display("army1personel");
            break;
        }case "A/10":{
            document.getElementById("Army1").innerHTML="宏朝";
            display("army1");
            document.getElementById("Army1personel").innerHTML="250k";
            display("army1personel");
            break;
        }case "B/10":{
            document.getElementById("Army1").innerHTML="宏朝";
            display("army1");
            document.getElementById("Army1personel").innerHTML="250k";
            display("army1personel");
            break;
        }case "C/4":{
            document.getElementById("Army1").innerHTML="亚特兰蒂斯";
            display("army1");
            document.getElementById("Army1personel").innerHTML="84k";
            display("army1personel");
            break;
        }
        
        
        case "C/8":{
            document.getElementById("Army1").innerHTML="联众邦驻军";
            display("army1");
            document.getElementById("Army1personel").innerHTML="60k";
            display("army1personel");
            break;
        }case "C/10":{
            document.getElementById("Army1").innerHTML="宏朝";
            display("army1");
            document.getElementById("Army1personel").innerHTML="440k";
            display("army1personel");
            break;
        }case "D/4":{
            document.getElementById("Army1").innerHTML="亚特兰蒂斯";
            display("army1");
            document.getElementById("Army1personel").innerHTML="60k";
            display("army1personel");
            break;
        }case "D/5":{
            document.getElementById("Army1").innerHTML="亚特兰蒂斯";
        display("army1");
        document.getElementById("Army1personel").innerHTML="60k";
        display("army1personel");
        break;
        }case "D/6":{
            document.getElementById("Army1").innerHTML="亚特兰蒂斯";
        display("army1");
        document.getElementById("Army1personel").innerHTML="60k";
        display("army1personel");
        break;
        }case "E/8":{
            document.getElementById("Army1").innerHTML="美利坚社会主义合众国";
        display("army1");
        document.getElementById("Army1personel").innerHTML="160k";
        display("army1personel");
        break;
        }case "F/8":{
            document.getElementById("Army1").innerHTML="美利坚社会主义合众国";
        display("army1");
        document.getElementById("Army1personel").innerHTML="140k";
        display("army1personel");
        break;
        }case "F/9":{
            document.getElementById("Army1").innerHTML="阿科诺夫社会主义联邦";
        display("army1");
        document.getElementById("Army1personel").innerHTML="90k";
        display("army1personel");
        break;
        }case "G/3":{
            document.getElementById("Army1").innerHTML="羊村";
        display("army1");
        document.getElementById("Army1personel").innerHTML="50k";
        display("army1personel");
        break;
        }case "G/4":{
            document.getElementById("Army1").innerHTML="羊村";
        display("army1");
        document.getElementById("Army1personel").innerHTML="56k";
        display("army1personel");
        break;
        }case "G/8":{
            document.getElementById("Army1").innerHTML="阿科诺夫社会主义联邦";
        display("army1");
        document.getElementById("Army1personel").innerHTML="25k";
        display("army1personel");
        break;
        }case "G/9":{
            document.getElementById("Army1").innerHTML="阿科诺夫社会主义联邦";
        display("army1");
        document.getElementById("Army1personel").innerHTML="25k";
        display("army1personel");
        break;
        }case "G/10":{
            document.getElementById("Army1").innerHTML="阿科诺夫社会主义联邦";
        display("army1");
        document.getElementById("Army1personel").innerHTML="25k";
        display("army1personel");
        break;
        }case "H/3":{
            document.getElementById("Army1").innerHTML="羊村";
        display("army1");
        document.getElementById("Army1personel").innerHTML="50k";
        display("army1personel");
        break;
        }case "H/5":{
            document.getElementById("Army1").innerHTML="冈比亚";
        display("army1");
        document.getElementById("Army1personel").innerHTML="40k";
        display("army1personel");
        break;
        }case "H/6":{
            document.getElementById("Army1").innerHTML="冈比亚";
        display("army1");
        document.getElementById("Army1personel").innerHTML="40k";
        display("army1personel");
        break;
        }case "H/7":{
            document.getElementById("Army1").innerHTML="冈比亚";
        display("army1");
        document.getElementById("Army1personel").innerHTML="40k";
        display("army1personel");
        break;
        }case "H/10":{
            document.getElementById("Army1").innerHTML="阿科诺夫社会主义联邦";
        display("army1");
        document.getElementById("Army1personel").innerHTML="85k";
        display("army1personel");
        break;
        }case "I/3":{
            document.getElementById("Army1").innerHTML="羊村";
        display("army1");
        document.getElementById("Army1personel").innerHTML="50k";
        display("army1personel");
        break;
        }
        
        
        case "I/5":{
            document.getElementById("Army1").innerHTML="冈比亚";
        display("army1");
        document.getElementById("Army1personel").innerHTML="50k";
        display("army1personel");
        break;
        }case  "I/6":{
            document.getElementById("Army1").innerHTML="冈比亚";
        display("army1");
        document.getElementById("Army1personel").innerHTML="50k";
        display("army1personel");
        break;
        }case "J/3":{
            document.getElementById("Army1").innerHTML="羊村";
        display("army1");
        document.getElementById("Army1personel").innerHTML="50k";
        display("army1personel");
        break;
        }case "J/5":{
            document.getElementById("Army1").innerHTML="冈比亚";
        display("army1");
        document.getElementById("Army1personel").innerHTML="60k";
        display("army1personel");
        break;
        }case "J/6":{
            document.getElementById("Army1").innerHTML="冈比亚";
        display("army1");
        document.getElementById("Army1personel").innerHTML="60k";
        display("army1personel");
        break;
        }case "J/7":{
            document.getElementById("Army1").innerHTML="冈比亚";
        display("army1");
        document.getElementById("Army1personel").innerHTML="60k";
        display("army1personel");
        break;
        }case "J/8":{
            document.getElementById("Army1").innerHTML="冈比亚";
        display("army1");
        document.getElementById("Army1personel").innerHTML="60k";
        display("army1personel");
        break;
        }case "J/9":{
            document.getElementById("Army1").innerHTML="冈比亚";
        display("army1");
        document.getElementById("Army1personel").innerHTML="60k";
        display("army1personel");
        break;
        }default:{
            document.getElementById("Army1").innerHTML="null";
        display("army1");
        document.getElementById("Army1personel").innerHTML="0k";
        display("army1personel");
        break;
        }
    }
    
    
    
    
    






    
    
    
}

