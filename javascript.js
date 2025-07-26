
        document.addEventListener("keydown", (e)=>{
            if(e.key == "Enter"){
                myFunction();
            }
        })
        function  myFunction(){
            let militarytime = document.getElementById("time").value;
            let standardtime;
            let result;
            if(militarytime == 0){
            standardtime = (militarytime/100)+12;
            result = ` Your Entered ${militarytime} it's conversion to Standard Time is: ${standardtime} AM `
            document.getElementById("output").style.background = "black"
        }
          else  if(militarytime<1200){
            standardtime = militarytime/100;
            result = ` Your Entered ${militarytime} it's conversion to Standard Time is: ${standardtime} AM `
            document.getElementById("output").style.background = "black"
        }
        else if(militarytime == 1200) {
            standardtime = (militarytime)/100;
             result = ` Your Entered ${militarytime} it's conversion to Standard Time is: ${standardtime} PM `
             document.getElementById("output").style.background = "brown"

        }
        else{
standardtime = (militarytime-1200)/100;
             result = ` Your Entered ${militarytime} it's conversion to Standard Time is: ${standardtime} PM`
             document.getElementById("output").style.background = "brown"
        }
        document.getElementById("output").style.display = "flex";
        document.getElementById("output").innerHTML = result;
        }
