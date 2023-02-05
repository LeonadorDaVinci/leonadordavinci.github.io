var Section0 =["褪色者从英雄墓地中苏醒。<br>","在回忆起自己身为战士的事实之后，他勇敢地推开墓地的大门，呼吸到第一口宁姆格福的新鲜空气。<br>","「嘿！」<br>","前方不远处，传来一个男人的声音。褪色者顺着声源望去，发现一位身穿轻便服饰，面戴白面具的可疑人物。<br>","「你是谁？」褪色者走近然后问他。<br>"];
var Section1= ["我？我是白面具梵雷。","至于你……啊！你就是褪色者吧。渴求艾尔登法环，因此来到这块交界地。","我全都知道，事情肯定是如此。","…但是呢，着实可悲可叹，你没有女巫的陪伴……","……不知引导在何方，无法获得卢恩的力量…更不可能受邀到圆桌厅堂……","……只能死得默默无名吧……哈哈。"];
var Section2=["根据赐福的引导，褪色者避开大树守卫，来到艾雷教堂。<br>","信仰癫火的流浪商人咖列坐在角落里烤着火。他看见褪色者的到来，于是招呼道：<br>","「你是褪色者吧？……而且，看起来不会攻击我。既然如此，要不要买些什么？」<br>","「都有些什么货？」褪色者问。<br>","「望远镜，弓箭，箭矢，火把……你想买的，这里都有……」咖列的语气不见起伏。<br>","褪色者翻了翻自己的衣兜，发现除了白面具掉落的物品，没有卢恩可供支付。<br>","「我没有钱……能赊账吗？」<br>","咖列没有回答，只是继续默默地烤火。<br>","褪色者只得坐在赐福旁边休息片刻，然后继续跟随指引赶路，方向正朝着关卡前方。<br>"];
var Section3=["褪色者来到关卡前方。很明显地，这里曾经是军营，但现在变成了废墟。<br>","关卡前废墟里，还是有很多士兵在巡逻。其中有一位骑士长，他是这支队伍中战斗力最强的人。他们都隶属于那座位于悬崖之上的城堡————史东威尔城的城主‘黄金’葛瑞克。<br>","由于法环的破碎，所有人的脑子都变得不正常，这些可怜的士兵也不例外。他们浑浑噩噩地度过每一天，但仍坚守职责，在白天拿着火把巡逻。<br>","当褪色者走近，一些士兵发现了他，急忙通风报信给骑士长。<br>"]
var Section4=["褪色者不受欢迎！","停止抵抗，接受截肢，或者死！"];
var Section5_1=["杀光葛瑞克士兵之后，褪色者跟随指引来到关卡前方的赐福。<br>","他坐在篝火旁看着跳动的金色火焰安静地思考，似乎是在想该怎么利用这些卢恩换取力量。<br>","突然间，他感到周围有某种力量在缓缓升起，明显到他以低微的智力都能察觉到的地步。他环视一周，发现一个棕色的人影在缓慢凝聚成形。<br>"];
var Section5_2=["离开关卡前废墟，褪色者回到了艾雷教堂。<br>","「你之前离开的方向是史东威尔城，按道理说应该是去挑战宁姆格福领主————半神葛瑞克。但你……怎么这么快就回来了？」咖列问。<br>","「我打算再磨砺一下自己，提升战斗力，再去会一会葛瑞克…谨慎一些总是好的。」褪色者答道，然后坐在赐福旁休息，直到夜晚降临，这片土地的木桩上挂着的长生者开始哀嚎，他才动身出发。这期间，咖列一直在向他推荐商品，但由于褪色者没有钱，流浪商人也不接受赊账，所以他一个也买不了。<br>","夜间的关卡前废墟格外宁静。在夜色的遮掩下，他潜行悄悄来到前方不远处的赐福休息，准备过一会就进入关卡。<br>","就在这时，他感到周围有某种力量在缓缓升起，明显到他以低微的智力都能察觉到的地步。他环视一周，发现一个棕色的人影在缓慢凝聚成形。<br>"];
var Section6=["…我是梅琳娜。…","…我想要和你谈个条件。","…你知道指头女巫吗？……她们是侍奉双指，帮助，引导褪色者的人。","…但现在的你……没有女巫在身边……","…我可以代替她们的职务……","…我能够将卢恩化作你的力量……","…只要你渴求艾尔登法环，这件事肯定对你有帮助……","…所以……希望你能帮忙……带我到黄金树的树角……"];
var Section7_1=["……这样就算谈成了…","…想将卢恩化为自己的力量时，请在赐福所在处呼唤我……","…对了，还有一件事……","…这枚戒指交给你……","…当你需要长距离移动时，就使用那枚戒指吧……","…那能够呼唤名为托雷特的骏马的灵魂……","…托雷特选中了你………希望你能好好待它……"];
var Section7_2=["……我明白了…心有疑念，我也不勉强……","…但你一定会需要这个条件……","…届时，希望你到赐福所在处呼唤我……"];


function gameTexts (section,paragragh){
    var Line = document.getElementById("line").innerHTML;
    //alert(Line);
    if(Line == ""){
        //alert(Line);
        return static(section,paragragh);//静态剧情
    }else{
        //alert('yes');
        var j = nonstatic(section,paragragh,Line)
        return j;//动态剧情
        
    }

    
}

function nonstatic (section,paragragh,line){//分支判定
    var sectionId = document.getElementById('sectionId').innerHTML;
    switch(section){
        case 5:{
            //alert(paragragh);
            if(line=="1"){
                //alert('yes');
                return Section5_1[paragragh];
            }else{
                return Section5_2[paragragh];
            }
        }case 6:{
            return Section6[paragragh];
        }case 7:{
            if(sectionId==1){
                return Section7_1[paragragh];
            }else{
                return Section7_2[paragragh];
            }
        }
    }
}

function static (section,paragragh){
    switch(section){
        case 0:{
            return Section0[paragragh];
        }case 1:{
            return Section1[paragragh];
        }case 2:{
            return Section2[paragragh];
        }case 3:{
            return Section3[paragragh];
        }case 4:{
            return Section4[paragragh];
        }

    }
}



