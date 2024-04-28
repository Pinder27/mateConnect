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
    User:{
        Name:string
  
    }
    Images  : Images[]
}

export type Profile = {
  
    ProfileID: number,
    UserID: number,
    BIO: string | null,
    dOB: string | null,
    ProfilePic: string | null,
    Gender: string | null,
    Phone: string | null,
    FacebookHandle: string | null,
    TwitterHandle: string | null,
    InstagramHandle: string | null,
    LinkedInHandle: string | null,

}


