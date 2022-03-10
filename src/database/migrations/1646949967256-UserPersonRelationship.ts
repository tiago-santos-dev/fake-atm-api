import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserPersonRelationship1646949967256 implements MigrationInterface {
  name = 'UserPersonRelationship1646949967256';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "name" TO "personInfoId"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "personInfoId"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "personInfoId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_96b7ee1ed873be016855dce42af" UNIQUE ("personInfoId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_96b7ee1ed873be016855dce42af" FOREIGN KEY ("personInfoId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_96b7ee1ed873be016855dce42af"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_96b7ee1ed873be016855dce42af"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "personInfoId"`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "personInfoId" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "personInfoId" TO "name"`,
    );
  }
}
