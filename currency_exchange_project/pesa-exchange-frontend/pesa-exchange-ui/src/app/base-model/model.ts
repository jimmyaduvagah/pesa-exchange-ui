export class BaseModel {
    constructor(public id: number, public modified_on: Date, public created_on: Date,
        public modified_by: string,  public created_by: string) {
    }
}

export class User {
    constructor(
        public firstName: string, public lastName: string,
        public email: string, public passWord?: string,
        public gender?: string,
        public otherName?: string, public phoneNumber?: string
        )
        { }       
}



export interface LoginResult {
    username?: string;
    email?: string;
    token?: string;
    accessToken?: string;
    refreshToken?: string;
}

export interface Token {
    accessToken: string;
    refreshToken: any;
  }
