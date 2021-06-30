import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Userapi {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name:string;

    @Column()
    job:string;
}
