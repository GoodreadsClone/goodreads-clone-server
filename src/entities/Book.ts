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

    @ManyToOne(() => Author, (author) => author.id)
    author: Author

    @Column()
    rating: number

    @Column ({default: () => "CURRENT_TIMESTAMP"})
    timestamp: string
}
