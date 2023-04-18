import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable} from "typeorm"
import {JoinColumn} from "typeorm/browser";
import {Book} from "./Book";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToOne((type) => Book)
    current_book : Book


}
