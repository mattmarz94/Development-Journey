const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');


document.addEventListener("click", function(e){
    if(e.target.classList.contains("fa-bars")){
        mobileMenu.classList.toggle("hidden")
        mobileMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'block';
        
    } else if (e.target.classList.contains('fa-xmark')) {
        mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.style.display = 'block';
        closeMenuBtn.style.display = 'none';
    }
})