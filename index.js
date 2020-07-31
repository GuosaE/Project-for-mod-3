const recipeForm = document.querySelector('#recipe-form')
console.log(recipeForm)
recipeForm.addEventListener('submit', (e) => createRecipe(e))

const fetchAll = () => {
    fetch(`http://localhost:3000/recipes`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        renderRecipe(data[0])
        return data.map(item => renderListItem(item))
    })
    }
    fetchAll()


const fetchOne = (id) => {
    fetch(`http://localhost:3000/recipes/${id}`)
    .then(res => res.json())
    .then(data => {
        renderRecipe(data)
    })
    }


const createRecipe = (e) => {
    e.preventDefault()
    let data = {
        title: e.target.title.value,
        image: e.target.image.value,
        servings: e.target.servings.value,
        readyInMinutes: e.target.readyInMinutes.value,
        sourceName: e.target.sourceName.value,
        sourceUrl: e.target.sourceUrl.value,
        cuisines: e.target.cuisines.value,
        dairyFree: e.target.dairyFree.value,
        glutenFree: e.target.glutenFree.value,
        vegan: e.target.vegan.value,
        vegetarian: e.target.vegetarian.value,
        ingredients: e.target.ingredients.value
    }
   
    fetch('http://localhost:3000/recipes',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(recipe => renderListItem(recipe))

}




  const patchRecipe = (e, recipe) => {
      let currentOnDomRecipe = document.getElementById('recipe_information')
      let h1 = currentOnDomRecipe.querySelector('h1')
      let image1 = document.getElementById('image')
      let servings1 = document.getElementById('servings')
      let readyInMinutes1 = document.getElementById('readyInMinutes')
      let sourceName1 = document.getElementById('sourceName')
      let sourceUrl1 = document.getElementById('sourceUrl')
      let cuisines1 = document.getElementById('cuisines')
      let dairyFree1 = document.getElementById('dairyFree')
      let glutenFree1 = document.getElementById('glutenFree')
      let vegan1 = document.getElementById('vegan')
      let vegetarian1 = document.getElementById('vegetarian')
      let p = currentOnDomRecipe.querySelector('p')
      h1.textContent = e.target[0].value
      image1 = e.target[1].value
      servings1 = e.target[2].value
      readyInMinutes1 = e.target[3].value
      sourceName1 = e.target[4].value
      sourceUrl1 = e.target[5].value
      cuisines1 = e.target[6].value
      dairyFree1 = e.target[7].value
      glutenFree1 = e.target[8].value
      vegan1 = e.target[9].value
      vegetarian1 = e.target[10].value
      p = e.target[11].value

    
      let data = {
        title: e.target.title.value,
        image: e.target.image.value,
        servings: e.target.servings.value,
        readyInMinutes: e.target.readyInMinutes.value,
        sourceName: e.target.sourceName.value,
        sourceUrl: e.target.sourceUrl.value,
        cuisines: e.target.cuisines.value,
        dairyFree: e.target.dairyFree.value,
        glutenFree: e.target.glutenFree.value,
        vegan: e.target.vegan.value,
        vegetarian: e.target.vegetarian.value,
        ingredients: e.target.ingredients.value
        }
    
      fetch(`http://localhost:3000/recipe/${recipe.id}`,{
        method:'PATCH',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then((data) => {console.log(data);})}
    
    

  const deleteRecipe = (id) => {
    fetch(`http://localhost:3000/recipe/${id}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(json=>{
      let currentOnDomRecipe = document.getElementById('recipe_information')
      currentOnDomRecipe.innerHTML = ''

      const recipeForm = document.querySelector('#recipe-form')
      const recipeTitle = document.getElementById('title_id')
      const recipeImage = document.getElementById('image_id')
      const recipeServings = document.getElementById('servings_id')
      const recipePrepTime = document.getElementById('prepTime_id')
      const recipeSourceName = document.getElementById('sourceName_id')
      const recipeSourceUrl = document.getElementById('sourceUrl_id')
      const recipeCuisines = document.getElementById('cuisines_id')
      const recipeDairyFree = document.getElementById('dairy_id')
      const recipeGlutenFree = document.getElementById('gluten_id')
      const recipeVegan = document.getElementById('vegan_id')
      const recipeVegetarian = document.getElementById('vegetarian_id')
      const recipeIngredients = document.getElementById('ingredients_id')

      recipeTitle.value = ''
      recipeImage.value = ''
      recipeServings.value = ''
      recipePrepTime.value = ''
      recipeSourceName.value = ''
      recipeSourceUrl.value = ''
      recipeCuisines.value = ''
      recipeDairyFree.value = ''
      recipeGlutenFree.value = ''
      recipeVegan.value = ''
      recipeVegetarian.value = ''
      recipeIngredients.value = ''
      
      let btn = recipeForm.querySelector('button')
      btn.remove()
    })
  }


  const editRecipe = (recipe) => {
    const recipeForm = document.querySelector('#recipe-form')
    const recipeTitle = document.getElementById('title_id')
    const recipeImage = document.getElementById('image_id')
    const recipeServings = document.getElementById('servings_id')
    const recipePrepTime = document.getElementById('prepTime_id')
    const recipeSourceName = document.getElementById('sourceName_id')
    const recipeSourceUrl = document.getElementById('sourceUrl_id')
    const recipeCuisines = document.getElementById('cuisines_id')
    const recipeDairyFree = document.getElementById('dairy_id')
    const recipeGlutenFree = document.getElementById('gluten_id')
    const recipeVegan = document.getElementById('vegan_id')
    const recipeVegetarian = document.getElementById('vegetarian_id')
    const recipeIngredients = document.getElementById('ingredients_id')
    recipeTitle.value = recipe.title
    recipeImage.value = recipe.image
    recipeServings.value = recipe.servings
    recipePrepTime.value = recipe.readyInMinutes
    recipeSourceName.value = recipe.sourceName
    recipeSourceUrl.value = recipe.sourceUrl
    recipeCuisines.value = recipe.cuisines
    recipeDairyFree.value = recipe.dairyFree
    recipeGlutenFree.value = recipe.glutenFree
    recipeVegan.value = recipe.vegan
    recipeVegetarian.value = recipe.vegetarian
    recipeIngredients.value = recipe.ingredients
    recipeForm.removeEventListener('submit', (e) => createRecipe(e))
    recipeForm.addEventListener('submit', (e)=> patchRecipe(e,recipe))
    let p = recipeForm.getElementById('form_head')
    p.textContent = 'Edit Recipe'
  
   
    const btn = document.createElement('button')
    btn.textContent = 'DELETE'
    btn.addEventListener('click', (e) => deleteRecipe(recipe.id))
    recipeForm.appendChild(btn)
  }





  const renderListItem = (item) => {
    let ul = document.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = item.title
    li.id = item.id
    li.addEventListener('click',(e)=>{
        fetchOne(e.target.id)
    })
    ul.appendChild(li)
  }

  const renderRecipe = (recipe) => {
      let recipeContainer = document.getElementById('recipe_information')
      let h1 = recipeContainer.querySelector('h1')
      let image1 = document.getElementById('image')
      let servings1 = document.getElementById('servings')
      let readyInMinutes1 = document.getElementById('readyInMinutes')
      let sourceName1 = document.getElementById('sourceName')
      let sourceUrl1 = document.getElementById('sourceUrl')
      let cuisines1 = document.getElementById('cuisines')
      let dairyFree1 = document.getElementById('dairyFree')
      let glutenFree1 = document.getElementById('glutenFree')
      let vegan1 = document.getElementById('vegan')
      let vegetarian1 = document.getElementById('vegetarian')
      let p = recipeContainer.querySelector('p')
      h1.textContent = recipe.title
      image1.textContent = recipe.image
      servings1.textContent = recipe.servings
      readyInMinutes1.textContent = recipe.readyInMinutes
      sourceName1.textContent = recipe.sourceName
      sourceUrl1.textContent = recipe.sourceUrl
      cuisines1.textContent = recipe.cuisines
      dairyFree1.textContent = recipe.dairyFree
      glutenFree1.textContent = recipe.glutenFree
      vegan1.textContent = recipe.vegan
      vegetarian1.textContent = recipe.vegetarian1
      p.textContent = recipe.ingredients
  }


  let reviewForm = document.getElementsByClassName("review-form");
  reviewForm.addEventListener('submit', (e) => addReview(e))

  const addReview = (e) => {
    e.preventDefault()
    console.log(e.target.review.value)
    let ol = document.querySelector('.reviews')
    console.log(ol)
    let review = document.createElement('li')
    review.innerText = e.target.review.value
    ol.appendChild(review)
    form.reset()
}

