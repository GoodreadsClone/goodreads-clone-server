import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { User } from "./User.js";
import { Book } from "./Book.js";

@Entity()
export class BucketList {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne((type) => User)
    userId: User

    @OneToOne((type) => Book)
    bookId: Book

    @Column ()
    timestamp : string
}
