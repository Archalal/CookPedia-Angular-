export class recipieModel{

    name ?:string
    ingredients ?:Array<string>
    instructions ?:Array<string>
    prepTimeMinutes ?:number
    cookTimeMinutes ?:number
    servings ?:number
    difficulty ?:string
    cuisine ?:string
    caloriesPerServing ?:string
    image ?:string
    mealType ?:Array<string>
}