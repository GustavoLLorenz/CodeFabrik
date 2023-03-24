import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { Carteira } from "./Carteira"

@Entity("user")
export class User {

    @PrimaryGeneratedColumn()
    id: string

    @Column({nullable: false})
    user_name: string

    @Column({nullable: false})
    cpf_cnpj: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    deleted_at: Date

    @OneToOne(() => Carteira, carteira => carteira.user_id)
    // @JoinColumn({name: "user_id"})
    carteira: Carteira

}
