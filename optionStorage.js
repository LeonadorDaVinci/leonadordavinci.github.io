var optionGroup1 = ["杀了白面具，不用再听他的嘲讽。","假装无事发生，默默离开。"];
var optionGroup2 = ["拒不从命，抵抗到最后一刻。","悄悄溜走，等到晚上再来。"];
var button1 = document.getElementById("MainButton1");
var button2 = document.getElementById("MainButton2");
var MainArea = document.getElementById("mainArea");
var settings = document.getElementById("Settings");
var fair = document.getElementById("fair");

function clickOption (section,paragragh,option){
    switch (section){
        case 1:{
            if(option==1){
                removeImg();
                MainArea.innerHTML = "褪色者击杀了白面具梵雷，看着他的头颅与身体分离。<br>";
                button1.value = "【Next Section】";
                button2.style.display = "none";
                //settings.style.display="inline";
                fair.innerHTML = Number(fair.innerHTML)+2;
            }else{
                removeImg();
                MainArea.innerHTML = "在白面具嘲讽的语气中，你悄悄离开了。";
                button1.value = "【Next Section】";
                button2.style.display = "none";
                //settings.style.display="inline";
                settings.style.display="";
            }
            break;
        }case 4:{
            if(option==1){
                removeImg();
                MainArea.innerHTML = "依靠精湛的格斗技术，关卡前废墟的士兵招架不住，被逐个击破。褪色者在杀死他们后，取走了所有的战利品。<br>";
                button1.value = "【Next Section】";
                button2.style.display = "none";
                //settings.style.display="inline";
                fair.innerHTML = Number(fair.innerHTML)+2;
            }else{
                removeImg();
                MainArea.innerHTML = "褪色者的速度是这些葛瑞克士兵远远不及的，在他们还没反应过来时，他就已经溜走了。";
                button1.value = "【Next Section】";
                button2.style.display = "none";
                //settings.style.display="inline";
                settings.style.display="";
            }
            break;
        }
    }
}

function checkOptions (section,paragragh){//自动给按钮分配选项内容
    switch (section){
        case 1:{
            button2.style.display = "inline";
            button1.value = optionGroup1[0];
            button2.value = optionGroup1[1];
        }case 2:{
            button2.style.display = "inline";
            button1.value = optionGroup2[0];
            button2.value = optionGroup2[1];
        }
    }
}

