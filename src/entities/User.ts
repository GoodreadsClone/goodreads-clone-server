import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Book } from "./Book.js";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({unique: true})    
    email: string

    @Column()
    password: string

    @OneToOne(() => Book, (book) => book.id, { cascade: true })
    @JoinColumn()
    currentBook : Book
}
