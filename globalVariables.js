var ruinOfSoldierCampsite = true;

var VarArray = [];

var tempArray = [];

function globalVar (varName){
    //addVar2arr();
    switch(varName){
        case "ruinOfSoldierCampsite":{
            return ruinOfSoldierCampsite;
        }
    }
}

function globalVar (varName,value){
    //addVar2arr();
    switch(varName){
        case "ruinOfSoldierCampsite":{
            ruinOfSoldierCampsite = value;
        }
    }
}

/*
function addVar2arr (){
    VarArray[0] = ruinOfSoldierCampsite;//关卡前废墟
}
*/