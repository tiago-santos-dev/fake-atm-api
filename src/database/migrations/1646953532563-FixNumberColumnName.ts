import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixNumberColumnName1646953532563 implements MigrationInterface {
  name = 'FixNumberColumnName1646953532563';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "adress" RENAME COLUMN "street_number" TO "number"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "adress" RENAME COLUMN "number" TO "street_number"`,
    );
  }
}
