import {Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinTable} from "typeorm"
import {inspect} from "util";
import colors = module



@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    author_id: number

    @Column()
    author_name: string


    @Column({type:"float"})
    author_rating

    @Column()
    publishing_house: string





}
