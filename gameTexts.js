var Section0 =["褪色者从英雄墓地中苏醒。<br>","在回忆起自己身为战士的事实之后，他勇敢地推开墓地的大门，呼吸到第一口宁姆格福的新鲜空气。<br>","「嘿！」<br>","前方不远处，传来一个男人的声音。褪色者顺着声源望去，发现一位身穿轻便服饰，面戴白面具的可疑人物。<br>","「你是谁？」褪色者走近然后问他。<br>"];
var Section1= ["我？我是白面具梵雷。","至于你……啊！你就是褪色者吧。渴求艾尔登法环，因此来到这块交界地。","我全都知道，事情肯定是如此。","…但是呢，着实可悲可叹，你没有女巫的陪伴……","……不知引导在何方，无法获得卢恩的力量…更不可能受邀到圆桌厅堂……","……只能死得默默无名吧……哈哈。"];
var Section2=["根据赐福的引导，褪色者避开大树守卫，来到艾雷教堂。<br>","信仰癫火的流浪商人咖列坐在角落里烤着火。他看见褪色者的到来，于是招呼道：<br>","「你是褪色者吧？……而且，看起来不会攻击我。既然如此，要不要买些什么？<br>」","「都有些什么货？」褪色者问。<br>","「望远镜，弓箭，箭矢，火把……你想买的，这里都有……」咖列的语气不见起伏。<br>","褪色者翻了翻自己的衣兜，发现除了白面具掉落的物品，没有卢恩可供支付。<br>","「我没有钱……能赊账吗？」<br>","咖列没有回答，只是继续默默地烤火。<br>","褪色者只得坐在赐福旁边休息片刻，然后继续跟随指引赶路，方向正朝着关卡前方。<br>"];


function gameTexts (section,paragragh){

    switch(section){
        case 0:{
            return Section0[paragragh];
        }case 1:{
            return Section1[paragragh];
        }case 2:{
            return Section2[paragragh];
        }
    }
    
    
}
