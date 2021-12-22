export type StoryClass = {
    id: number,
    title: string,
    description: string,
    isDone: boolean
};

export const ItemTypes = {
    STORY: 'story'
};

export class AuthContext {
    accessToken?: string;
    expiry?: Date;

    constructor(accessToken?:string , expiresIn ?:number) {
        this.accessToken = accessToken;
        if (expiresIn) {
            this.expiry = new Date(Date.now()+expiresIn);
        }
    }
}