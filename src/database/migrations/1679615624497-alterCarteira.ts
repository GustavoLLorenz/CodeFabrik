// import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

// export class alterCarteira1679615624497 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
        
//         await queryRunner.addColumn('carteira', new TableColumn({
//             name: 'deleted_at',
//             type: 'Date',
//             isNullable: true
//         }))
//         await queryRunner.dropColumn('carteira', 'updated_at')
//         await queryRunner.addColumn('carteira', new TableColumn({
//             name: 'updated_at',
//             type: 'Date',
//             isNullable: true
//         }))
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropColumn('carteira', 'deleted_at')
//         await queryRunner.dropColumn('carteira', 'updated_at')
//     }

// }
