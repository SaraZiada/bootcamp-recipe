
class Renderer {

    constructor(results){
        this.data = {recipies:results}
    }

    render(results){
        $(".recipies").empty();

        this.data = {recipies:results}
        
        const source = $("#recipies-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(this.data);
        
        $(".recipies").append(newHTML);
    }
    
}



