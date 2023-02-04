var content1 = "啊，有新的褪色者来到圆桌厅堂…………上一次有新人来，是很久以前了。我是百智爵士基甸•奥夫尼尔。";
var content2_1 ="哈哈，作为圆桌厅堂的老前辈，我一直致力于打造这个整个交界地最适宜褪色者休闲娱乐，互通有无，交流情报的场所。但是，新人，你现在只是有办法出入圆桌厅堂，换句话说，你只是一名过客。所以记住，不要逾矩。好好放松吧…………另外，需要我提供一些建议吗？"
var content2_2 ="什么！？你竟然完全没有听说过我的名号。……………………唉，算了，你走吧。没有了解过“百智爵士”这个称号的人一定是无名之辈，圆桌厅堂不欢迎你。";

var content3_1 = "很好。听着，我的朋友。作为新人，你唯二能在圆桌厅堂做的事情，是休息和体验‘项目’。圆桌当前有一些项目可供新人游玩，你可以任意选择一项。下面是项目列表：【与梅琳娜的生活】，【null】，【null】…………在愉快地体验之前，你需要了解一些基本知识。"
var content3_2 = "啊，原来如此。那么新人，祝你好运，恰当地借助圆桌的力量，早日成为真正的艾尔登之王。";

var content4 = "在【与梅琳娜的生活】中，你可以体验到有一名真正的女巫的快乐…………在流程中，只要符合规定，你可以做任何自己想做的事情。该项目有三个非常重要的参考值：「好感」「情绪」和「害怕」，每个值的极限波动范围都是-100到+100，它们将忠实地显示关于梅琳娜的精神状态。你可以自己分析，自己判断，然后做出自己的决定。任何选项都可能影响到这三个值，所以，慎重选择啊……………………最后，在你的体验过程中，我会安排魔法师罗杰尔随时等候你的指令，如果需要「暂停」「保存」或者加载上一次的进度，你可以找他…………";
var content5 = "这就是我能给你的全部建议。祝你好运，褪色者。"
var i=0;

function tutorial_1 (option){  
    document.getElementById("proceedButton1").style.display="none";
    if(i<=content1.length){  
        document.getElementById('content').innerHTML = content1.substring(0,i);
        h(i);
        t=setTimeout("tutorial_1()",90);
        if(i==content1.length+1){
            clearTimeout(t);
            i=0;
            document.getElementById("proceedButton1").style.display="inline";
            document.getElementById("proceedButton2").style.display="inline";

            document.getElementById("proceedButton1").value = "您就是圆桌厅堂的领导者百智爵士？";
            document.getElementById("proceedButton2").value ="我从未听说过这个人。";
        }

    }   
}

function tutorial_2 (option){
    document.getElementById("proceedButton1").style.display="none";
    document.getElementById("proceedButton2").style.display="none";
    if (option ==1){
        if(i<=content2_1.length){  
            document.getElementById('content').innerHTML = content2_1.substring(0,i);
            h(i);
            t=setTimeout("tutorial_2(1)",90);
            if(i==content2_1.length+1){
                clearTimeout(t);
                i=0;
                document.getElementById("proceedButton1").style.display="inline";
                document.getElementById("proceedButton2").style.display="inline";
    
                document.getElementById("proceedButton1").value = "非常需要，奥夫尼尔先生。";
                document.getElementById("proceedButton2").value ="暂时不需要，奥夫尼尔先生，我已足够了解圆桌厅堂。";
            }
        }   
    }else {
        if(i<=content2_2.length){  
            document.getElementById('content').innerHTML = content2_2.substring(0,i);
            h(i);
            t=setTimeout("tutorial_2(2)",90);
            if(i==content2_2.length+1){
                clearTimeout(t);
                i=0;
                document.getElementById("proceedButton1").style.display="inline";
    
                document.getElementById("proceedButton1").value = "【跳过教程直接进入游戏】";
            }
        }   
    }
    
}

function tutorial_3 (option){
    document.getElementById("proceedButton1").style.display="none";
    document.getElementById("proceedButton2").style.display="none";
    if (option ==1){
        if(i<=content3_1.length){  
            document.getElementById('content').innerHTML = content3_1.substring(0,i);
            h(i);
            t=setTimeout("tutorial_3(1)",90);
            if(i==content3_1.length+1){
                clearTimeout(t);
                i=0;
                document.getElementById("proceedButton1").style.display="inline";
                document.getElementById("proceedButton1").value = "Proceed";
                
            }
        }   
    }else {
        if(i<=content3_2.length){  
            document.getElementById('content').innerHTML = content3_2.substring(0,i);
            h(i);
            t=setTimeout("tutorial_3(2)",90);
            if(i==content3_2.length+1){
                clearTimeout(t);
                i=0;
                document.getElementById("proceedButton1").style.display="inline";
    
                document.getElementById("proceedButton1").value = "【跳过教程直接进入游戏】";
            }
        }   
    }
}

function tutorial_4 (option){
    document.getElementById("proceedButton1").style.display="none";
    if(i<=content4.length){  
        document.getElementById('content').innerHTML = content4.substring(0,i);
        h(i);
        t=setTimeout("tutorial_4()",90);
        if(i==content4.length+1){
            clearTimeout(t);
            i=0;
            document.getElementById("proceedButton1").style.display="inline";
            

            document.getElementById("proceedButton1").value = "Proceed";
            
        }

    } 
}

function tutorial_5 (option){
    document.getElementById("proceedButton1").style.display="none";
    if(i<=content5.length){  
        document.getElementById('content').innerHTML = content5.substring(0,i);
        h(i);
        t=setTimeout("tutorial_5()",90);
        if(i==content5.length+1){
            clearTimeout(t);
            i=0;
            document.getElementById("proceedButton1").style.display="inline";
            

            document.getElementById("proceedButton1").value = "【进入游戏】";
            
        }

    } 
}

function h(x){
    x++;
    i =x;
    
}