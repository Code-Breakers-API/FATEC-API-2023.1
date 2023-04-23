import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1682224547499 implements MigrationInterface {
    name = 'Default1682224547499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`profile_user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`cpf\` varchar(100) NOT NULL, \`email\` varchar(100) NOT NULL, \`password\` varchar(100) NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`profile_id\` int NOT NULL, UNIQUE INDEX \`IDX_230b925048540454c8b4c481e1\` (\`cpf\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`REL_23371445bd80cb3e413089551b\` (\`profile_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`status_order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rules\` (\`id\` int NOT NULL AUTO_INCREMENT, \`rules\` varchar(300) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`supplier\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`cnpj\` varchar(100) NOT NULL, \`address\` varchar(100) NOT NULL, \`phone\` varchar(100) NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_6bcf219f3f47c8de1c0c82fd52\` (\`cnpj\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` varchar(100) NOT NULL, \`type\` varchar(100) NOT NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`rule_id\` int NULL, UNIQUE INDEX \`REL_0d0a72e2385b039f3792a7f9c3\` (\`rule_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`report_order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`order_number\` int NOT NULL, \`product_description\` varchar(100) NOT NULL, \`order_date\` date NOT NULL, \`product_quantity\` int NOT NULL, \`volume_quantity\` int NOT NULL DEFAULT 0, \`delivery_date\` date NOT NULL, \`freight_type\` varchar(100) NOT NULL, \`tracking_code\` varchar(100) NOT NULL, \`status_id\` int NULL, \`carrier_id\` int NULL, \`supplier_id\` int NULL, UNIQUE INDEX \`REL_8b2587f1b89027b63379200292\` (\`status_id\`), UNIQUE INDEX \`REL_b3a4cbf4b7073aa9cd0e028d49\` (\`carrier_id\`), UNIQUE INDEX \`REL_1651d4cf4d2489ec99ae09f2ed\` (\`supplier_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`carrier\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`freigth_type\` varchar(100) NOT NULL, \`tracking_code\` varchar(100) NOT NULL, \`supplier_id\` int NULL, UNIQUE INDEX \`REL_27b92b4e2ecf962f0ec4e3ad5c\` (\`supplier_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`report_receiving_analyze\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` date NOT NULL, \`report_order_id\` int NULL, UNIQUE INDEX \`REL_5e2376ab76ce3690985cf2d878\` (\`report_order_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`technical_report\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` date NOT NULL, \`report_analyze_id\` int NULL, UNIQUE INDEX \`REL_b55d5857d016a62ba64ba14d20\` (\`report_analyze_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_23371445bd80cb3e413089551bf\` FOREIGN KEY (\`profile_id\`) REFERENCES \`profile_user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_0d0a72e2385b039f3792a7f9c3f\` FOREIGN KEY (\`rule_id\`) REFERENCES \`rules\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`report_order\` ADD CONSTRAINT \`FK_8b2587f1b89027b633792002926\` FOREIGN KEY (\`status_id\`) REFERENCES \`status_order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`report_order\` ADD CONSTRAINT \`FK_b3a4cbf4b7073aa9cd0e028d490\` FOREIGN KEY (\`carrier_id\`) REFERENCES \`carrier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`report_order\` ADD CONSTRAINT \`FK_1651d4cf4d2489ec99ae09f2ed3\` FOREIGN KEY (\`supplier_id\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`carrier\` ADD CONSTRAINT \`FK_27b92b4e2ecf962f0ec4e3ad5c2\` FOREIGN KEY (\`supplier_id\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`report_receiving_analyze\` ADD CONSTRAINT \`FK_5e2376ab76ce3690985cf2d8780\` FOREIGN KEY (\`report_order_id\`) REFERENCES \`report_order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`technical_report\` ADD CONSTRAINT \`FK_b55d5857d016a62ba64ba14d201\` FOREIGN KEY (\`report_analyze_id\`) REFERENCES \`report_receiving_analyze\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`technical_report\` DROP FOREIGN KEY \`FK_b55d5857d016a62ba64ba14d201\``);
        await queryRunner.query(`ALTER TABLE \`report_receiving_analyze\` DROP FOREIGN KEY \`FK_5e2376ab76ce3690985cf2d8780\``);
        await queryRunner.query(`ALTER TABLE \`carrier\` DROP FOREIGN KEY \`FK_27b92b4e2ecf962f0ec4e3ad5c2\``);
        await queryRunner.query(`ALTER TABLE \`report_order\` DROP FOREIGN KEY \`FK_1651d4cf4d2489ec99ae09f2ed3\``);
        await queryRunner.query(`ALTER TABLE \`report_order\` DROP FOREIGN KEY \`FK_b3a4cbf4b7073aa9cd0e028d490\``);
        await queryRunner.query(`ALTER TABLE \`report_order\` DROP FOREIGN KEY \`FK_8b2587f1b89027b633792002926\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_0d0a72e2385b039f3792a7f9c3f\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_23371445bd80cb3e413089551bf\``);
        await queryRunner.query(`DROP INDEX \`REL_b55d5857d016a62ba64ba14d20\` ON \`technical_report\``);
        await queryRunner.query(`DROP TABLE \`technical_report\``);
        await queryRunner.query(`DROP INDEX \`REL_5e2376ab76ce3690985cf2d878\` ON \`report_receiving_analyze\``);
        await queryRunner.query(`DROP TABLE \`report_receiving_analyze\``);
        await queryRunner.query(`DROP INDEX \`REL_27b92b4e2ecf962f0ec4e3ad5c\` ON \`carrier\``);
        await queryRunner.query(`DROP TABLE \`carrier\``);
        await queryRunner.query(`DROP INDEX \`REL_1651d4cf4d2489ec99ae09f2ed\` ON \`report_order\``);
        await queryRunner.query(`DROP INDEX \`REL_b3a4cbf4b7073aa9cd0e028d49\` ON \`report_order\``);
        await queryRunner.query(`DROP INDEX \`REL_8b2587f1b89027b63379200292\` ON \`report_order\``);
        await queryRunner.query(`DROP TABLE \`report_order\``);
        await queryRunner.query(`DROP INDEX \`REL_0d0a72e2385b039f3792a7f9c3\` ON \`products\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`DROP INDEX \`IDX_6bcf219f3f47c8de1c0c82fd52\` ON \`supplier\``);
        await queryRunner.query(`DROP TABLE \`supplier\``);
        await queryRunner.query(`DROP TABLE \`rules\``);
        await queryRunner.query(`DROP TABLE \`status_order\``);
        await queryRunner.query(`DROP INDEX \`REL_23371445bd80cb3e413089551b\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_230b925048540454c8b4c481e1\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`profile_user\``);
    }

}
