function filterArticles(){
    
    const selectcategory = document.getElementById('category-select').value;
    const articles = document.querySelectorAll('.article');
    console.log(selectcategory);
    articles.forEach(article=>{
        if(selectcategory === 'all' || article.dataset.category === selectcategory){
            article.classList.add('visible');
            console.log("visible class added");
        }else{
            article.classList.remove('visible');
            console.log("visible class removed");
        }
    })

}
filterArticles();
// function filterArticles() {
//     const selectcategory = document.getElementById('category-select').value;
//     const articles = document.querySelectorAll('article');
//     console.log(selectcategory);
// }
// filterArticles();