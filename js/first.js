/*
https://forkify-api.herokuapp.com/api/search?&q=${term}`
https://forkify-api.herokuapp.com/api/search?&q=pasta
https://forkify-api.herokuapp.com/api/get?rId=${id}
*/
/*
let allRecipes = [];
let searchBtn = document.getElementById('searchBtn');
let searchInput = document.getElementById('searchInput');


async function getRecipes (term){

    let apiResponse = await fetch (`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
    let finalResult = await apiResponse.json();
    allRecipes = finalResult.recipes;
    displayRecipes();
}

searchBtn.addEventListener("click",function(){

    getRecipes(searchInput.value);
})

function displayRecipes(){

    let cartoona= ``;
    for(let i = 0; i< allRecipes.length; i++){

        cartoona += `<div class = "col-md-4">
         <div class="recipe text-left">
        <img src="${allRecipes[i].image_url}" class=" w-100" alt="">
        <h4 class= "color-mine font-weight-bolder"> ${allRecipes[i].title}</h4>
        <p class= "font-weight-bold">${allRecipes[i].publisher} </p>
        </div>
        </div>`;
     
    }

  document.getElementById('recipesRow').innerHTML = cartoona;
};
*/
//https://forkify-api.herokuapp.com/api/search?&q=${term}

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let recipesDetalis = {}

let allRecipes = [];

 async function getRecipes(term)
{
    let apiResponse = await fetch (`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
        allRecipes = await apiResponse.json();
        allRecipes = allRecipes.recipes;
        //console.log(allRecipes);
        displayRecipes();

}
async function getRecipesDetalis(id)
{
    let apiResponse = await fetch (`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
        recipesDetalis = await apiResponse.json();
        recipesDetalis = recipesDetalis.recipe;
        displayRecipeDetalis()
       // console.log(recipesDetalis);

};

//getRecipesDetalis(47746);


getRecipes('salad');


function displayRecipes()
{
    let content = ``;
    for(let i = 0 ; i < allRecipes.length ;i++)
    {
        let myId = "'"+allRecipes[i].recipe_id+"'";
        content += `
        <div class="col-md-4">
                   <div class="recipe" onclick="getRecipesDetalis(${myId})">
                    <img src="${allRecipes[i].image_url}" class="w-100" alt="">
                    <h3 clas="color-mine py-1">${allRecipes[i].title}</h3>
                    <p>${allRecipes[i].publisher}</p>
                  </div>
                </div>`;
    }
     document.getElementById("recipesRow").innerHTML = content ;
};

function displayRecipeDetalis()
{ 
    let content2 = ``;
     for(let x of recipesDetalis.ingredients)
     {
        content2 += `<li class="d-flex align-items-center font-weight-bolder"><span class="fa-li"><i class="fas fa-utensils"></i></span>${x}</li>`;
            
     }
    
    let content =`<div class="recipeDetalis py-3">
    <h2 class="color-mine py-1">${recipesDetalis.title}</h2>
    <img src="${recipesDetalis.image_url}" class="w-100" alt="">
    <ul class="fa-ul py-3">
    ${content2}
    </ul>
  </div>`
    
    document.getElementById("recipeDetails").innerHTML = content;
};



searchBtn.addEventListener("click", function()
{
    getRecipes(searchInput.value);
});