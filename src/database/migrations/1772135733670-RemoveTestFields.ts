import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveTestFields1772135733670 implements MigrationInterface {
    name = 'RemoveTestFields1772135733670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "miTest"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "miTest2"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "miTest2" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "miTest" character varying(55) NOT NULL`);
    }

}
