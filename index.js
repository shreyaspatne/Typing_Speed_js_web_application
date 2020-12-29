const setwords=[`Because of the laboriousness of the translation process, with varying degrees of success, to automate translation or to mechanically aid the human translator.`,`Business casual is an ambiguously defined dress code that has been adopted by many professional and white-collar workplaces in Western countries.`,`Web designers are expected to have an awareness of usability and also expected to be up to date with web accessibility`]

const msg=document.getElementById('msg');
const myTypeWords=document.getElementById("myword");
const btn=document.getElementById("btn")

let starttime,endtime;



function playgame(){
    myTypeWords.focus();
    let randomnumber=Math.floor(Math.random()*setwords.length);
    msg.innerText=setwords[randomnumber];
    let date=new Date();
    starttime=date.getTime();
    btn.innerText="Done";
}
function endplay(){
    let date=new Date();
    endtime=date.getTime();
    let totalTime=((endtime-starttime)/1000);
    // console.log(totalTime);

    let totalstring=myTypeWords.value;
    let wordcounter=wordCounter(totalstring);

    let speed=Math.round((wordcounter/totalTime)*60);
    let finalmsg="your typed at a speed of" +" "+speed+" "+ "words per minutes"+" ";
    finalmsg+=compareWord(msg.innerText,totalstring);
    msg.innerText=finalmsg;
    btn.innerText="Start";
}
function wordCounter(str){
    let response=str.split(" ").length;
    // console.log(response);
    return response;
}
function compareWord(str1,str2){
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let cnt=0;

    words1.forEach(function(item,index){
        if(item==words2[index]){
            cnt++
        }
        
    });
    myTypeWords.value="";

    let errorwords=(words1.length-cnt);
    return (cnt+ " correct out of " + words1.length+ " words and the total number of error are "+ errorwords +" Words.");

}


btn.addEventListener("click",function(){
    
    if(this.innerText=="Start"){
        myTypeWords.value="";
        myTypeWords.removeAttribute("placeholder");
        
        myTypeWords.disabled=false;
        playgame();
    }else if(this.innerText=="Done"){
        myTypeWords.disabled=true;
        btn.innerText="Start";
        endplay();
    }
});