import {Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinTable} from "typeorm"

import {User} from "./User";
import {Book} from "./Book";



@Entity()
export class History {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne((type) => User)
    user_id: User

    @ManyToOne((type) => Book)
    book_id: Book

    @Column ({type:"timestamp"})
    timestamp

    @Column()
    page_number:number








}
