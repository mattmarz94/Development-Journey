const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const viewMoreBlog = [...document.querySelectorAll("article.view-more-blog")]

viewMoreBlog.forEach (blog => {
    blog.style.display = "none";
});

document.addEventListener("click", function(e){
    if(e.target.classList.contains("fa-bars")){
        mobileMenu.classList.toggle("hidden")
        mobileMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'block';
    } 
    else if (e.target.classList.contains('fa-xmark')) {
        mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.style.display = 'block';
        closeMenuBtn.style.display = 'none';
    } else if (e.target.classList.contains("blog")){
        if (window.location.protocol === "http:"){
            window.location.href = "../web-journal/blog.html"
        }
    } else if (e.target.classList.contains("nav-logo")){
        if (window.location.protocol === "http:")
            window.location.href = "../index.html"

    } else if (e.target.classList.contains("view-more-link")){
        const viewMore = document.querySelector("a.view-more-link")

        e.preventDefault();

        if (viewMoreBlog[0].style.display === "none"){
            viewMoreBlog.forEach (blog => {
                blog.style.display = "grid";
            })
                viewMore.textContent = "View less";
        } else {
            viewMoreBlog.forEach (blog => {
                blog.style.display = "none";
            })
                viewMore.textContent = "View More"
        }
    }
    

})