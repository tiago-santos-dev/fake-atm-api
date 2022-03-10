import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixBirthDateColumnName1646953138334 implements MigrationInterface {
  name = 'FixBirthDateColumnName1646953138334';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person" RENAME COLUMN "bith_date" TO "birth_date"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person" RENAME COLUMN "birth_date" TO "bith_date"`,
    );
  }
}
