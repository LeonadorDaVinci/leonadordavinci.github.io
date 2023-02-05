var ruinOfSoldierCampsite = true;

var test = [ruinOfSoldierCampsite];

function globalVar (varName){
    for(var i=-1;i<=test.length;i++){
        if(varName == test[i]){
            return test[i];
        }
    }
}

function testing (){
    alert('yes');
}