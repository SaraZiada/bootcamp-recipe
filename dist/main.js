const render = new Renderer()

const getRecipies = function(){
    let ingredient = $("#ingredient-input").val();
    
    $.get(`/recipes/${ingredient}`, function (response) {
       if(response.length===0)
            alert("No Recipies for this Ingredient")
        else
            render.render(response)
    })
}

$(".recipies").on("click",".image",function(){
    alert($(this).closest(".recipe").find(".list li:first").text())
})