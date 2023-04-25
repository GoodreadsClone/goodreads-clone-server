import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm"
import { User } from "./User.js";
import { Book } from "./Book.js";

@Entity()
export class BucketList {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user)
    user: User

    @OneToOne((type) => Book)
    @JoinColumn()
    book: Book

    @Column ({default: () => "CURRENT_TIMESTAMP"})
    timestamp: string
}
