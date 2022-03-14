import {MigrationInterface, QueryRunner} from "typeorm";

export class ClientMigration1647295473179 implements MigrationInterface {
    name = 'ClientMigration1647295473179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "email" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "PK_96da49381769303a6515a8785c7"`);
    }

}
