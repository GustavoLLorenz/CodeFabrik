import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class transacao1679599468195 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
          new Table({
            name: "transacao",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()"
              },
              {
                name: "carteira_id",
                type: "uuid"
              },
              {
                name: "tipo",
                type: "varchar"
              },
              
              {
                name: "valor_transacao",
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
                name: "fk_carteira_id",
                columnNames: ["carteira_id"],
                referencedTableName: "carteira",
                referencedColumnNames: ["id"]
              }
            ]
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transacao");
      }
    }