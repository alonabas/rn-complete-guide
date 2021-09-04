class Meal {
    constructor(id, categoryId, title, affordability, complexity, imageUrl, duration, 
        ingradients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingradients = ingradients
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}
export default Meal;