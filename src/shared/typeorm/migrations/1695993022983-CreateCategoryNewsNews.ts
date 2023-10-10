import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCategoryNewsNewsTable1695914317676
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Cria a tabela 'category_news_news'
    await queryRunner.createTable(
      new Table({
        name: 'category_news_news',
        columns: [
          {
            name: 'categoryId',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'newsId',
            type: 'uuid',
            isPrimary: true,
          },
        ],
      }),
    );

    // Cria a chave estrangeira para 'categoryId' na tabela 'category'
    await queryRunner.createForeignKey(
      'category_news_news',
      new TableForeignKey({
        columnNames: ['categoryId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'category',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    // Cria a chave estrangeira para 'newsId' na tabela 'news'
    await queryRunner.createForeignKey(
      'category_news_news',
      new TableForeignKey({
        columnNames: ['newsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'news',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove a chave estrangeira 'FK_CategoryNewsNews_Category'
    await queryRunner.dropForeignKey(
      'category_news_news',
      'FK_CategoryNewsNews_Category',
    );

    // Remove a chave estrangeira 'FK_CategoryNewsNews_News'
    await queryRunner.dropForeignKey(
      'category_news_news',
      'FK_CategoryNewsNews_News',
    );

    // Remove a tabela 'category_news_news'
    await queryRunner.dropTable('category_news_news');
  }
}
