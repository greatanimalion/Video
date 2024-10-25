import { User } from "./model/user";
import sql from '../database/config'

export async function addUser(user: User) {
    const query = `INSERT INTO user ( email, password) VALUES (?,?)`;
    const values = [user.email, user.password];
    return sql.query(query, values);
}

export async function getUserById(id: number){
    const query = `SELECT * FROM user WHERE id = ?`;
    const values = [id];
    return new Promise((resolve, reject) => {
        sql.query(query, values, (err, result) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
            }
            resolve(result);
        });
    });
} 
export async function getUserByEmail(email:string): Promise<User[]> {
    const query = `SELECT * FROM user WHERE email = ?`;
    const values = [email];
    return new Promise((resolve, reject) => {
        sql.query(query, values, (err, result) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
            }
            resolve(result);
        });
    });
}