import { account, ID } from "../db/appwrite";

export const createAccount = async (email: string, password: string) => {
    try {
        await account.create(ID.unique(), email, password);

    } catch (error) {
        throw error;
    }
    
}

export const login = async (email: string, password: string) => {
    try {
        await account.createEmailPasswordSession(email, password);

    } catch (error) {
        throw error;
    }

}