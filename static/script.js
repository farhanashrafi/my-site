document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".download-btn");

  
  button.addEventListener("mouseover", function(){
    button.style.boxshadow = "0 0 20px rgba(255, 255, 255, 0.0)";
  });

  button.addEventListener("mouseleave", function() {
    button.style.boxshadow = "none";
  });
});