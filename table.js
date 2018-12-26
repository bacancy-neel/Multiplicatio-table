function showTable(){
            var txt, txt2;
            var num1 = document.getElementById("num").value;
            
            
            if(/^[1-9]\d*$/.test(num1)){
                txt = "Table for "+num1+"........";

                for (let i = 1; i <= 10; i++) {
                    
                    var ul = document.getElementById("list");
                    txt2 = num1+" *"+i+" ="+(num1*i);
                    var li = document.createElement("li");
                    li.setAttribute('id',txt2);
                    li.appendChild(document.createTextNode(txt2));
                    ul.appendChild(li);
                }
                
            }
            else
                txt = "Enter valid number........";
                


           document.getElementById("status").innerHTML = txt;
        }