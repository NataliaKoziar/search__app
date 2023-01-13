export interface ICharacter{
    title:string
    body:string
    img:string
}
export interface IState{
    characters:ICharacter[]|[]
    loading:boolean
}