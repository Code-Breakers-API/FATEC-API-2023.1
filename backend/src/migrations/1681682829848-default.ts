import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1681682829848 implements MigrationInterface {
    name = 'Default1681682829848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`profile_user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`cpf\` varchar(100) NOT NULL, \`register\` int NOT NULL, \`password_user\` varchar(100) NOT NULL, \`active\` tinyint NOT NULL, \`profile_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_23371445bd80cb3e413089551bf\` FOREIGN KEY (\`profile_id\`) REFERENCES \`profile_user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_23371445bd80cb3e413089551bf\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`profile_user\``);
    }
}
