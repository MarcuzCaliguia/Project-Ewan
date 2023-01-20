const parentContainer =  document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})

let nightModeButton = document.getElementById("night-mode-button");

nightModeButton.addEventListener("click", function() {
  document.body.classList.toggle("night-mode");

  checkbox.addEventListener( 'change', function() {
    localStorage.setItem('dark',this.checked);
    if(this.checked) {
         body.classList.add('dark')
    } else {
         body.classList.remove('dark')     
    }
});
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("nav-right").style.padding = "30px 10px";
    document.getElementsByClassName("nav-brand").style.fontSize = "25px";
    document.getElementsByClassName("navbar").style.padding = "30px 10px";
  } else {
    document.getElementsByClassName("nav-right").style.padding = "80px 10px";
    document.getElementsByClassName("nav-brand").style.fontSize = "35px";
    document.getElementsByClassName("navbar").style.padding = "30px 10px";
  }
}
