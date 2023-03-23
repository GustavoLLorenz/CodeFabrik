import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Carteira } from "./Carteira"

@Entity("transacao")
export class Transacao {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    carteira_id: string

    @Column()
    tipo: string

    @Column()
    valor_trasacao: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    @Column()
    deleted_at: Date

    @ManyToOne(() => Carteira, carteira => carteira.id)

    carteira: Carteira

}