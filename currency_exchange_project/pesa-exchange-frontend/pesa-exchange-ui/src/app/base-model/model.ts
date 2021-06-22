export class BaseModel {
    constructor(public id: number, public modified_on: Date, public created_on: Date,
        public modified_by: string,  public created_by: string) {
    }
}

export class User extends BaseModel {
    constructor(
        public id: number, public modified_on: Date, public created_on: Date,
        public modified_by: string,  public created_by: string,
        public firstName: string, public lastName: string,
        public otherName: string, public phoneNumber: string) 
        {
            super(id, modified_on,  created_on, modified_by,   created_by);
        }       
}



