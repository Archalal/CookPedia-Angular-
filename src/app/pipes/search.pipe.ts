import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
 

  transform(recipesArray:any[],searchKey:string): any[] {
    let  result:any=[]
    if(!recipesArray || searchKey==""){
      return recipesArray

    }

    result=recipesArray.filter((eachRecipie:any)=>eachRecipie.name.toLowerCase().includes(searchKey.toLowerCase()))
    return result;
  }

}
