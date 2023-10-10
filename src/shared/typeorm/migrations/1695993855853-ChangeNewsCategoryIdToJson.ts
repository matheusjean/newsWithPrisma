import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateCategoryIdToJsonb1665450351136
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "news" ADD COLUMN "category_id_temp" jsonb`,
    );

    await queryRunner.query(`
      UPDATE "news"
      SET "category_id_temp" = (
        SELECT jsonb_agg("news_categories"."categoryId") 
        FROM "category_news_news" AS "news_categories"
        WHERE "news_categories"."newsId" = "news"."id"
      );
    `);

    await queryRunner.query(`ALTER TABLE "news" DROP COLUMN "category_id"`);
    await queryRunner.query(
      `ALTER TABLE "news" RENAME COLUMN "category_id_temp" TO "category_id"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "news" RENAME COLUMN "category_id" TO "category_id_temp"`,
    );
    await queryRunner.query(`ALTER TABLE "news" ADD COLUMN "category_id" uuid`);
    await queryRunner.query(
      `ALTER TABLE "news" DROP COLUMN "category_id_temp"`,
    );
  }
}
