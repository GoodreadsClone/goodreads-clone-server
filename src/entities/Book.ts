import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Author } from "./Author.js";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    isbn: string

    @ManyToOne((type) => Author)
    author: Author

    @Column({type:"float"})
    rating

    @Column ({type:"timestamp"})
    timestamp
}
