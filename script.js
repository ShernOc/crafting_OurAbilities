const button = document.getElementById("submit");
button.className="btn";

// event listener : for button. 

button.addEventListener("click",function(event){ event.preventDefault();

      alert("I was clicked") ;
}
);

