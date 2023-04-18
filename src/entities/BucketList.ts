import {Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinTable} from "typeorm"
import {inspect} from "util";
import colors = module
import {Author} from "./Author";
import {User} from "./User";
import {Book} from "./Book";



@Entity()
export class BucketList {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne((type) => User)
    user_id: User

    @OneToOne((type) => Book)
    book_id: Book

    @Column ({type:"timestamp"})
    timestamp







}
