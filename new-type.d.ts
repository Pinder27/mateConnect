export type Images = {
    ID:number;
    FlatMateID:number;
    Url:string;

}

export type FlatMate = {
    ID:number;
    UserID : number;
    Title   : string;
    Description : string;
    Rent    :   number
    Location  :  string
    Gender    :  string 
    Sharing   :  boolean
    Parking    : boolean
    Furnished  : boolean
    WithWashroom : boolean
    Balcony    :  boolean
    DatePosted :  Date
    Type:     string
    Images  : Images[]
}


