import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeAdressPersonRelationship1646952659677
  implements MigrationInterface
{
  name = 'ChangeAdressPersonRelationship1646952659677';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "adress" ADD "personId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "adress" ADD CONSTRAINT "FK_cdf8b6c87fe3ade0b0b31fc0bdb" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "adress" DROP CONSTRAINT "FK_cdf8b6c87fe3ade0b0b31fc0bdb"`,
    );
    await queryRunner.query(`ALTER TABLE "adress" DROP COLUMN "personId"`);
  }
}
