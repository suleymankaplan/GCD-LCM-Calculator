var inputNumber = document.querySelector("input");
var addButton = document.getElementsByClassName("add-number-button");
var submit = document.getElementById("submit");
var gcdbox = document.querySelector(".gcd");
var lcmbox = document.querySelector(".lcm");
var numberbox = document.querySelector(".numbers-box")
var numbers =[];
function deleteInput(){
    if(false==Number.isInteger(Number(inputNumber.value))||inputNumber.value==""||inputNumber.value<1){
        alert("please enter a valid value")
    }
    else{
        for(var i=0;i<numbers.length;i++){
            if(numbers[i]==inputNumber.value){
                alert("please enter different number");
                return;
            }
        } 
            if(inputNumber.value!==""){
                numbers.push(inputNumber.value)
                inputNumber.value = "";
            }
            var ul = document.querySelector(".ulnum");
            ul.remove();
            showNumbers();
            console.log(numbers)
    }

}
function buttonClick(){
    if(numbers.length<2){
        alert("you should enter minimum two number");
        return;
    }
    else
        GCD();
        LCM();
}
function resetNumbers(){
    var ul=document.querySelector(".ulnum");
    ul.remove();
    numbers.splice(0,numbers.length)
    inputNumber.value="";
    lcmbox.textContent="";
    gcdbox.textContent="";
    var newul = document.createElement('ul');
    numberbox.appendChild(newul);
    newul.setAttribute("class","ulnum");
}
function showNumbers(){
    var newul = document.createElement('ul');
    newul.setAttribute("class","ulnum");
    for(var i=0;i<numbers.length;i++){
        var newli = document.createElement('li');
        newul.appendChild(newli)
        console.log(numbers[i])
        newli.textContent=numbers[i];
        numberbox.appendChild(newul);
    }
}
function GCD(){
    var gcdnum;
    var verify;
    var maxnum=numbers[0];
    for(var i=1;i<numbers.length;i++){
        if(maxnum<numbers[i])
            maxnum=numbers[i];
    }
    for(var i=1;i<=maxnum;i++){
        verify=false;
        for(var j=0;j<numbers.length;j++){
            if(numbers[j]%i==0){
                verify=true;
                continue;
            }
            else
            verify=false;
                break;
        }
        if(verify==true)
            gcdnum=i;
        
    }
    gcdbox.textContent=gcdnum;
}
function LCM(){
    var maxnum=numbers[0];
    for(var i=1;i<numbers.length;i++){
        if(maxnum<numbers[i])
            maxnum=numbers[i];
    }
    var verify;
    var lcm=1;
    var i=2;
    var a;
    var breakloop=false;
    var changeloop;

    var k=1;
    while(true){
        //console.log(k +"DONGU ")
        verify=false;
        a=0;
        changeloop=0;
        for(var j=0;j<numbers.length;j++){
            //console.log(numbers[j]+" "+i)
            if(numbers[j]%i==0){
                numbers[j]/=i;
                verify=true;
                changeloop++;
                //console.log(j+".number="+numbers[j])
            }
            //console.log(k + ".dongu verify:"+ verify)
        }
        
        if(changeloop==0){
            i++;
            //console.log("i arttı")
        }
        for(var b=0;b<numbers.length;b++){
            if(numbers[b]==1)
                a++;
            if(a==numbers.length){
                breakloop=true;
            }
        }
        
        if(verify==true)
            lcm*=i;
        //console.log("number:"+i+"lcm:"+lcm);
        if(breakloop==true)
            break;
        k++;
    }
    lcmbox.textContent=lcm;   
}
