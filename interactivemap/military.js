function movement (x,direction,east,west,north,south,original){
    //alert("test");
    
    if(x.innerHTML !=""){
        //alert("test");
        if(direction=="D"){
            //alert("test");
            if(east.innerHTML ==""){
                //alert("test");
                move(x,east,original);
            }else{
                battle();
            }
        }else if(direction=="A"){
            if(west.innerHTML ==""){
                move(x,west,original);
            }else{
                battle();
            }
        }else if(direction=="W"){
            if(north.innerHTML ==""){
                move(x,north,original);
            }else{
                battle();
            }
        }else if(direction=="S"){
            if(south.innerHTML ==""){
                move(x,south,original);
            }else{
                battle();
            }
        }
    }
}

function move (x,target,original){
    var MyNation1= document.getElementsByClassName(original)[0];
    var MyNation = MyNation1.getAttribute('id');
    //alert(MyNation);
    var TargetNation = target.getAttribute('id');
    //alert(TargetNation);
    var MyAlliance = alliance(x.getAttribute('id'));
    var TargetAlliance = alliance(target.getAttribute('id'));
    
    var nationId = target.getAttribute('id');
    //当前行动力
    var currentMoveNumber = document.getElementById('CurrentMoveNumber').innerHTML;
    //计算后的行动力
    var MoveNumber = currentMoveNumber - (10 - getChunkBasicInfo(nationId,0));
    //当前步数
    var step = document.getElementById('step').innerHTML;
    
        if(step=="null"){
            //判断是否同一国家
            if(MyNation==TargetNation){//是同一國家
                document.getElementById('CurrentMoveNumber').innerHTML = currentMoveNumber-1;//更改当前行动力数值
                document.getElementById('step').innerHTML = 1;//移动步数加一
                target.innerHTML = "<img src='Soldier.png' style='width:40px;height:20px;padding-top:5px;padding-left:5px'>"+ (currentMoveNumber-1)+"/"+Personnel;
                document.getElementById('ArmyCoordinate').innerHTML = target.getAttribute('class');//将军队坐标设置为东方向格子坐标
            }else{//不是同一国家
                if(MyAlliance==TargetAlliance){//同阵营
                    document.getElementById('CurrentMoveNumber').innerHTML = MoveNumber;//更改当前行动力数值
                document.getElementById('step').innerHTML = 1;//移动步数加一
                target.innerHTML = "<img src='Soldier.png' style='width:40px;height:20px;padding-top:5px;padding-left:5px'>"+ MoveNumber+"/"+Personnel;
                document.getElementById('ArmyCoordinate').innerHTML = target.getAttribute('class');//将军队坐标设置为东方向格子坐标
                }else{//不同阵营，最后一步
                    document.getElementById('CurrentMoveNumber').innerHTML = -16;//设为无法移动
                document.getElementById('step').innerHTML = 1;//移动步数加一
                target.innerHTML = "<img src='Soldier.png' style='width:40px;height:20px;padding-top:5px;padding-left:5px'>"+ -16+"/"+Personnel;
                document.getElementById('ArmyCoordinate').innerHTML = target.getAttribute('class');//将军队坐标设置为东方向格子坐标
                }
            }
            
            
        }else{
            if(MyNation==TargetNation){
                if (currentMoveNumber>=1){
                    //alert("test");
                    document.getElementById('CurrentMoveNumber').innerHTML = currentMoveNumber-1;//更改当前行动力数值
                    document.getElementById('step').innerHTML = (Number(step) +1);//移动步数加一
                    target.innerHTML = "<img src='Soldier.png' style='width:40px;height:20px;padding-top:5px;padding-left:5px'>"+ (currentMoveNumber-1)+"/"+Personnel;
                    document.getElementById('ArmyCoordinate').innerHTML = target.getAttribute('class');//将军队坐标设置为东方向格子坐标
                }
                
            }else{
                if(MoveNumber >=0){
                    //判断敌我阵营
                    if(MyAlliance==TargetAlliance){//同阵营
                        document.getElementById('CurrentMoveNumber').innerHTML = MoveNumber;//更改当前行动力数值
                    document.getElementById('step').innerHTML = (Number(step) +1);//移动步数加一
                    target.innerHTML = "<img src='Soldier.png' style='width:40px;height:20px;padding-top:5px;padding-left:5px'>"+ MoveNumber+"/"+Personnel;
                    document.getElementById('ArmyCoordinate').innerHTML = target.getAttribute('class');//将军队坐标设置为东方向格子坐标
                    }else{//最后一步
                        document.getElementById('CurrentMoveNumber').innerHTML = -16;//更改当前行动力数值
                    document.getElementById('step').innerHTML = (Number(step) +1);//移动步数加一
                    target.innerHTML = "<img src='Soldier.png' style='width:40px;height:20px;padding-top:5px;padding-left:5px'>"+ -16 +"/"+Personnel;
                    document.getElementById('ArmyCoordinate').innerHTML = target.getAttribute('class');//将军队坐标设置为东方向格子坐标
                    }
                    
                }
            }
            
        }
    
    
    
    
}

function battle (){

}





function militaryModeSwitch (){
    if(document.getElementById('militaryButton').value=="Military Mode On"){
        document.getElementById('militaryButton').value="Military Mode Off"
        display("currentMoveNumber");
        display("armyCoordinate");
    }else{
        document.getElementById('militaryButton').value = "Military Mode On";
        document.getElementsByTagName("td").innerHTML = "";
    }
}


function alliance(nation){

    var Modern= ["luoMianRepublic","griffin","arnokov","akatika","LeagueOfLiberty","Gambia","britainSocialism","americaSocialism","korea"];
    var Feudalism= ["hongChao","lianBangZhongZhuJun","puKeKingdom","laiPaRepublic","tianChao","leaonia","Liurnia","sheep","limburg","atlantisKingdom"];
    var alliance = null;
    for(var n=0;n<=Modern.length;n++){
        if(Modern[n]==nation){
            alliance = "Modern";
            return alliance;
        }
    }
    if(alliance == null){
        alliance = "Feudalism"
        return alliance;
    }
    
}

function getMilitaryInfo (ChunkObject){
    NationName = document.getElementById("Army1").innerHTML;
    Personnel = document.getElementById("Army1personel").innerHTML;
    NationId = ChunkObject.getAttribute('id');

    if(NationName=="null"){
        ChunkObject.innerHTML = "";
    }else {
        if (ChunkObject.innerHTML==""){
            if(alliance(NationId)=="Modern"){
                ChunkObject.innerHTML = "<img src='Modern.png' style='width:40px;height:20px;padding-top:5px;padding-left:5px'>"+ ArmyInfo(NationId,0)+"/"+Personnel;
                //document.getElementById("CurrentMoveNumber").innerHTML = ArmyInfo(NationId,0);
            }else{
                ChunkObject.innerHTML = "<img src='Feudalism.png' style='width:40px;height:20px;padding-top:5px;padding-left:5px'>"+ ArmyInfo(NationId,0)+"/"+Personnel;
            }
            
        }else{
            ChunkObject.innerHTML = "";
        }
        
    }
}


function coordinateChange(coordinate,xChange){
    xValue = coordinate.substring(0,1);//core
    yValue = coordinate.substring(2,4);
    //alert(xValue + "+" + yValue);
    if (xChange ==-1){
        switch(xValue){
            case "A" :{
                xValue = "null";
                break;
            }case "B":{
                xValue = "A";
                break;
            }case "C":{
                xValue = "B";
                break;

            }case "D":{
                xValue = "C";
                break;
            }case "E":{
                xValue = "D";
                break;
            }case "F":{
                xValue = "E";
                break;
            }case "G":{
                xValue = "F";
                break;
            }case "H":{
                xValue = "G";
                break;
            }case "I":{
                xValue = "H";
                break;
            }case "J":{
                xValue = "I";
                break;
            }
        }
    }else {
        switch(xValue){
            case "A" :{
                xValue = "B";
                break;
            }case "B":{
                xValue = "C";
                break;
            }case "C":{
                xValue = "D";
                break;

            }case "D":{
                xValue = "E";
                break;
            }case "E":{
                xValue = "F";
                break;
            }case "F":{
                xValue = "G";
                break;
            }case "G":{
                xValue = "H";
                break;
            }case "H":{
                xValue = "I";
                break;
            }case "I":{
                xValue = "J";
                break;
            }case "J":{
                xValue = "null";
                break;
            }
        }
    }
    return xValue + "/" + yValue;
}