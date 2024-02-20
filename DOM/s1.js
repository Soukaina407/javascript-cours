document.querySelector(".btn-calculer").addEventListener("click",()=>{

            let a = Number(document.querySelector(".num1").value)
            let b = Number(document.querySelector(".num2").value)

            console.log(a)
            console.log(b)

            let c = a+b

            document.querySelector(".resl").value = c

            if (c >20){
                document.querySelector(".resl").style.backgroundColor="red"
            }else{
                document.querySelector(".resl").style.backgroundColor="green"
            }
            console.log("oookk")
})
document.querySelector(".btn-calculer2").addEventListener("click",()=>{
   document.querySelector(".num1").value="";
   document.querySelector(".num2").value="";
   document.querySelector(".resl").value="";
});









