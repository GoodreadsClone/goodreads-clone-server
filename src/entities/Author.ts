import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Book } from './Book.js'

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column({type:"float"})
    rating

    @Column()
    publishingHouse: string

    @OneToMany((type) => Book, (book) => book)
    books: Book[]
}
