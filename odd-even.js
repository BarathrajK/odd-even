// odd and even
 let divele = document.getElementById("btn1");
 let divele1 = document.getElementById("btn2");
 let a =[1,2,3,4,5,6,7,8,9];
function even (){
    for(i=0;i<a.length;i++){
        if(a[i]%2 == 0){
            document.write(a[i]);
        }
    }
};
function odd (){
    for(i=0;i<a.length;i++){
        if(a[i]%2 == 1){
            document.write(a[i]);
        }
    }
}
divele.addEventListener("click",even);
divele1.addEventListener("click",odd);
