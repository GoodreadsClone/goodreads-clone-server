import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { Book } from "./Book.js";

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
    currentBook : Book
}
