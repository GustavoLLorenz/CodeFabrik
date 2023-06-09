import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm"
import { Transacao } from "./Transacao"
import { User } from "./User"

@Entity("carteira")
export class Carteira {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    user_id: string

    @Column()
    saldo: string

    @Column()
    created_at: Date

    @Column({nullable: true})
    updated_at: Date

    @Column({nullable: true})
    deleted_at: Date

    @OneToOne(() => User, user => user.id)
    user: User

    @OneToMany(() => Transacao, trasacoes => trasacoes.carteira_id)
    // @JoinColumn({name: "carteira_id" })
    transacoes: Transacao[]

}