function gradizeMap (rows,columns){
    chunk_rows = Math.floor(rows/10);
    chunk_columns = Math.floor(columns/10);
    //alert(chunk_columns);
    for(var n=1;n<=chunk_rows;n++){
        for(var m=1;m<=chunk_columns;m++){
            generatePoints(n,m);//将区块坐标代入该方法
            //alert(n+"+"+m);
        }
    }
}


function generatePoints (rows,columns){

    var pn = new Perlin(Math.random);
    
    //alert(Math.floor(value*10));

    for(x=1;x<=10;x++){
        for(y=1;y<=10;y++){
            value = pn.noise(x/10, y/10, 0); // Leave z fixed at zero while varying x and y will give you a 2D perlin noise function.
            var theFirstPointCoordinate_row = x+(rows-1) * 10;
            var theFirstPointCoordinate_column = y+(columns-1) * 10;
            var theFirstPointCoordinate = theFirstPointCoordinate_row +"/"+ theFirstPointCoordinate_column;
            document.getElementById(theFirstPointCoordinate).className=Math.floor(value*10);
            //document.getElementById(x+'/'+y).innerHTML=document.getElementById(x+'/'+y).getAttribute('class');
                
        }
    }
    /*
    //判定是否生成权值为4的点
    var generatePoints = Math.round(Math.random())
    //alert(generatePoints);
    //如果判定值为1则执行
    if (generatePoints==1){
        //随机生成 点的数量
        var FourPointsNumberInThis = getRandomInt(1,8);
        var theFirstPointCoordinate_row = getRandomInt(1,10) + (rows-1) * 10;
        //alert(theFirstPointCoordinate_row);
        var theFirstPointCoordinate_column = getRandomInt(1,10) + (columns-1) * 10;
        var theFirstPointCoordinate = theFirstPointCoordinate_row +"/"+ theFirstPointCoordinate_column;
        //根据绝对坐标更改权值
        document.getElementById(theFirstPointCoordinate).className='4';
        //alert(theFirstPointCoordinate);
        //生成周围的剩余权值为4的点
        for(var t=0;t<FourPointsNumberInThis-1;t++){
            //生成+1或-1点函数值，确保新生成的点在初始点的周围
            var functionValue1 = getRandomInt(1,3) - 2;
            var functionValue2 = getRandomInt(1,3) - 2;
            rowsValue = theFirstPointCoordinate_row + functionValue1;
            columnValue = theFirstPointCoordinate_column + functionValue2;

            document.getElementById(rowsValue+'/'+columnValue).className='4';
            
        }
    }else{
        
    }
    */
}

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)+min);
}