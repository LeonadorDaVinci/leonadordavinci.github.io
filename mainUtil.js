var specialSection = [1];

var MainDiv = document.getElementById('mainDiv');

var MainArea = document.getElementById("mainArea");

var button1 = document.getElementById("MainButton1");

var settings = document.getElementById("Settings");

var chrImg = document.getElementById("chrImg");

var char=0;

var dynSection = 0;
var dynParagragh = 0;

function ShowTexts(section,paragragh){
    
    if(checkTextsSection(section)=="normal"){
        //alert(section);
        //button1.style.display = "none";
        checkUndefined(section,paragragh);//继续书写新内容
        
    }else{
        chrImg.style.width = "10%";
        MainDiv.style.width = "80%";
        addImg(section);
        if(isUndefined(section,paragragh)==false){//继续增加新可互动对话
            interactiveTexts(section,paragragh);
        }else{//监测到段落结束，引入选项
            checkOptions(section,paragragh);
        }
        
    }
}

function addImg (section){//添加人物图片
    switch (section){
        case 1:{
            chrImg.innerHTML = "<img src='fanlei.png'>";
        }

    }
}

function removeImg (){//移除人物图片
        chrImg.style.width = "0%";
        MainDiv.style.width = "100%";
        chrImg.innerHTML = "";
}

function interactiveTexts (section,paragragh){//互动对话添加
    var str = gameTexts(section,paragragh);
    
    //alert(substr);

    dynSection = section;
    dynParagragh = paragragh;

    button1.style.display="none";

    if(char<=str.length){  //逐字出现
        MainArea.innerHTML = str.substring(0,char);
        h(char);
        t=setTimeout(function(){interactiveTexts(dynSection,dynParagragh)},90);
        if(char==str.length+1){
            clearTimeout(t);
            char=0;
            button1.style.display="inline";
        }
    }
}

function isUndefined (section,paragragh){//判断变量是否未定义
    var str = gameTexts(section,paragragh);
    if(str == undefined){
        return true;
    }else{
        return false;
    }
}

function checkUndefined (section,paragragh){//普通对话判断
    if(gameTexts(section,paragragh)== undefined){
        button1.value = "【Next Section】";
        settings.style.display = "inline";
    }else{
        MainArea.innerHTML += gameTexts(section,paragragh);
    }
}






function checkTextsSection (section){//检查分区是否为特殊（人物）对话
    for(var i=-1;i++;i<=specialSection.length){
        if(section == specialSection[i]){
            
            return "special";
        }
    }
    return "normal";
}

function h(x){//增加
    x++;
    char =x;
    
}