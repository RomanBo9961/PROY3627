import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    ManyToOne, 
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name;

    @Column({ type: 'varchar', length: 255 })
    lastName;

    @Column({ type: 'varchar', length: 255 })
    docType;

    @Column({ type: 'varchar', length: 255 })
    docNumber;

     @ManyToOne(() => Role, (role) => role.users)
    role: Role; 
}
