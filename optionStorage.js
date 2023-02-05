var optionGroup1 = ["【杀了白面具，不用再听他的嘲讽。】","【假装无事发生，默默离开。】"];
var optionGroup2 = ["【拒不从命，抵抗到最后一刻。】","【悄悄溜走，等到晚上再来。】"];
var optionGroup3=["【同意】","【拒绝】"];
var button1 = document.getElementById("MainButton1");
var button2 = document.getElementById("MainButton2");
var MainArea = document.getElementById("mainArea");
var settings = document.getElementById("Settings");
var fear = document.getElementById("fear");
var anger = document.getElementById("anger");
var line = document.getElementById("line");

function clickOption (section,paragragh,option){
    switch (section){
        case 1:{
            if(option==1){
                removeImg();
                MainArea.innerHTML = "褪色者击杀了白面具梵雷，看着他的头颅与身体分离。<br>";
                button1.value = "【Next Section】";
                button2.style.display = "none";
                //settings.style.display="inline";
                fear.innerHTML = Number(fear.innerHTML)+2;
            }else{
                removeImg();
                MainArea.innerHTML = "在白面具嘲讽的语气中，你悄悄离开了。";
                button1.value = "【Next Section】";
                button2.style.display = "none";
                //settings.style.display="inline";
                //settings.style.display="";
            }
            break;
        }case 4:{
            if(option==1){
                removeImg();
                MainArea.innerHTML = "依靠精湛的格斗技术，关卡前废墟的士兵招架不住，被逐个击破。褪色者在杀死他们后，取走了所有的战利品。<br>";
                button1.value = "【Next Section】";
                button2.style.display = "none";
                fear.innerHTML = Number(fear.innerHTML)+2;
                line.innerHTML ="1";
            }else{
                removeImg();
                MainArea.innerHTML = "褪色者的速度是这些葛瑞克士兵远远不及的，在他们还没反应过来时，他就已经溜走了。";
                button1.value = "【Next Section】";
                button2.style.display = "none";
                line.innerHTML="2";
            }
            break;
        }case 6:{
            if(option==1){
                //removeImg();
                button1.value = "Proceed";
                button2.style.display = "none";
                setSection(7);
                setParagraph(0);
                document.getElementById('sectionId').innerHTML = "1";
                anger.innerHTML ++;
                proceedFunction("1");
            }else{
                //removeImg();
                //alert('yes')
                button1.value = "Proceed";
                button2.style.display = "none";
                setSection(7);
                setParagraph(0);
                document.getElementById('sectionId').innerHTML = "2";
                anger.innerHTML --;
                proceedFunction("2");
            }
            break;
        }case 7:{
            removeImg();
            button1.value = "【Next Section】";
            if(document.getElementById('sectionId').innerHTML = "1"){
                document.getElementById('sectionId').innerHTML = "";
            }
            MainArea.innerHTML = "alpha1.0版本的内容到此为止！该测试版本旨在测试文件能否正确地运行，所以只开放了一小部分剧情。如有bug欢迎反馈至邮箱：LeonadorDaVinci@outlook.com。你现在可以下载地图存档（点击Settings，然后点download）";
            settings.style.display = "inline";
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
            break;
        }case 4:{
            button2.style.display = "inline";
            button1.value = optionGroup2[0];
            button2.value = optionGroup2[1];
            break;
        }case 6:{
            button2.style.display = "inline";
            button1.value = optionGroup3[0];
            button2.value = optionGroup3[1];
            break;
        }case 7:{
            button1.value = "Finish";
            break;
        }
        
        
        
        default:{
            button1.value = "Proceed";
            break;
        }
    }
}

