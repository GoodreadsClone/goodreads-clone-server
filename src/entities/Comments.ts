import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User.js";
import { Book } from "./Book.js";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne((type) => User)
    userId: User

    @ManyToOne((type) => Book)
    bookId: Book

    @Column ()
    timestamp : string

    @Column()
    comment: string
}
