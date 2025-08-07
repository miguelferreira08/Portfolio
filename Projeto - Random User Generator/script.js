const listaItem = document.querySelectorAll(".lista li");

listaItem.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {

      if(index==0){
        document.getElementById("desc").innerText = "Hi, my name is";
        document.getElementById("nome").innerText = "Cristiano Ronaldo";
      }
      if(index==1){
        document.getElementById("desc").innerText = "My email adress is";
        document.getElementById("nome").innerText = "cristiano.ronaldo@gmail.com";
      }
      if(index==2){
        document.getElementById("desc").innerText = "My birthday is";
        document.getElementById("nome").innerText = "05/02/1985"
      }
      if(index==3){
        document.getElementById("desc").innerText = "My adress is";
        document.getElementById("nome").innerText = "Funchal, Madeira";
      }
      if(index==4){
        document.getElementById("desc").innerText = "My phone number is";
        document.getElementById("nome").innerText = "+966 50 123 4567";
      }
      if(index==5){
        document.getElementById("desc").innerText = "My password is";
        document.getElementById("nome").innerText = "CR7_09/2005"
      }

    });
});