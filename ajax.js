
          let btn = document.querySelector(".btn");
          btn.addEventListener("click",ajaxcall);
          function ajaxcall()
          {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){

                if(this.readystate==4  && this.status == 200)
                {
                  console.log(this.responseText);
                }
            }

            xhttp.open("GET","response.json",true);
            xhttp.send();
          }
