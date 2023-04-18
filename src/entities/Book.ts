import {Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinTable} from "typeorm"
import {inspect} from "util";
import colors = module
import {Author} from "./Author";



@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    book_id: number

    @Column()
    title: string

    @Column()
    isbn: string

    @ManyToOne((type) => Author)
    author: Author

    @Column({type:"float"})
    rating

    @Column ({type:"timestamp"})
    publishing_timestamp





}
