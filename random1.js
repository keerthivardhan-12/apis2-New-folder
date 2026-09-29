function gener(){
    let min=1;
    let max=100;
    let n = Math.floor(Math.random() * (max - min + 1)) + min;
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;


    var nm=document.getElementById("nm");
    nm.innerHTML=name1+" and "+name2+" has "+n+" % of love.";
}