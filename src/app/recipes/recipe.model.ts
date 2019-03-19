export class Recipe{
    public name: String;
    public description: String;
    public imagePath: String;

    constructor(name:string,description : string, imagepath: string)
    {
        this.name = name;
        this.description = description;
        this.imagePath = imagepath;
    }
 
}
