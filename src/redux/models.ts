export interface ICharacter{
    byline:string
    critics_pick:string
    date_updated:string
    display_title:string
    headline:string
    link:object
    mpaa_rating:string
    multimedia:IMultemedia
    opening_date:string
    publication_date:string
    summary_short:string
    
}
export interface IMultemedia{
    height:number
    src:string
    type:string
    width:number
}
export interface IState{
    characters:ICharacter[]|[]
    searchValue:string
    loading:boolean
}