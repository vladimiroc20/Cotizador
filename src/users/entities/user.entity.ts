import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('master_users') // Especificamos el nombre de la tabla
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150, nullable: false })
    userName: string;

    @Column({ length: 150, nullable: false })
    firstName: string;

    @Column({ length: 150, nullable: true })
    secondName: string;

    @Column({ length: 150, nullable: false })
    lastName: string;

    @Column({ length: 150, nullable: false })
    secondLastName: string;

    @Column({ length: 150, nullable: false, unique: true })
    email: string;

    @Column({ length: 150, nullable: false, unique: true }) // Agregamos el campo "documento de identidad"
    identityDocument: string;

    @Column({ length: 20, nullable: true }) // Agregamos el campo "número de contacto"
    contactNumber: string;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Column({ type: 'text', nullable: false }) // Agregamos el campo "contraseña"
    password: string;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;
}
