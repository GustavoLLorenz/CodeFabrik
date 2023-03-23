import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createUser1679542479090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_name",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "carteira_id",
                        type: "uuid",
                        isNullable: false,
                        isGenerated: true
                    },
                    {
                        name: "cpf_cnpj",
                        type: "number",
                        isNullable: false,
                        isGenerated: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "deleted_at",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        isNullable: true
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
