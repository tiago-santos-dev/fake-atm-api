import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePersonTable1646948059342 implements MigrationInterface {
  name = 'CreatePersonTable1646948059342';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "person" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cpf" character varying NOT NULL, "bith_date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "person_adress_adress" ("personId" uuid NOT NULL, "adressId" uuid NOT NULL, CONSTRAINT "PK_15f23c4700d0e3479caba5cc17c" PRIMARY KEY ("personId", "adressId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c8844399edb82e067a3770a0f0" ON "person_adress_adress" ("personId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_80de3408370b847778e9991044" ON "person_adress_adress" ("adressId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "person_adress_adress" ADD CONSTRAINT "FK_c8844399edb82e067a3770a0f0d" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "person_adress_adress" ADD CONSTRAINT "FK_80de3408370b847778e9991044c" FOREIGN KEY ("adressId") REFERENCES "adress"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "person_adress_adress" DROP CONSTRAINT "FK_80de3408370b847778e9991044c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "person_adress_adress" DROP CONSTRAINT "FK_c8844399edb82e067a3770a0f0d"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_80de3408370b847778e9991044"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c8844399edb82e067a3770a0f0"`,
    );
    await queryRunner.query(`DROP TABLE "person_adress_adress"`);
    await queryRunner.query(`DROP TABLE "person"`);
  }
}
