import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Formula {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    describe: string;

    @Column()
    photo: string;

    @Column()
    excelText: string;

}