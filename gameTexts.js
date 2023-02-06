function gameTexts (section,paragragh){
    //alert(button1);
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
    //alert(sectionId);
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
        }case 8:{
            if(line=="1"){
                if(sectionId=="1"){
                    return Section8_1_1[paragragh];
                }else if(sectionId=="2"){
                    return Section8_1_2[paragragh];
                }
            }else{
                if(sectionId=="1"){
                    return Section8_2_1[paragragh];
                }else{
                    return Section8_2_2[paragragh];
                }
            }   
        } 
        
    }
}

function static (section,paragragh){
    
    var sectionId = document.getElementById('sectionId').innerHTML;
    var Line = document.getElementById("line").innerHTML;
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



