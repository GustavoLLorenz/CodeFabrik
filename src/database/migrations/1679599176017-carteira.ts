import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class carteira1679599176017 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
          new Table({
            name: "carteira",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()"
              },
              {
                name: "user_id",
                type: "uuid"
              },
              {
                name: "saldo",
                type: "varchar"
              },
             
              {
                name: "updated_at",
                type: "timestamp",
                isNullable: true
              },
              {
                name: "deleted_at",
                type: "timestamp",
                isNullable: true
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()"
              }
            ],
            foreignKeys: [
              {
                name: "fk_user_id",
                columnNames: ["user_id"],
                referencedTableName: "user",
                referencedColumnNames: ["id"]
              }
            ]
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("carteira");
      }

}
