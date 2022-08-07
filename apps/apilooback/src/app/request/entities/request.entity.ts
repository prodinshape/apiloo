import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableForeignKey } from 'typeorm';
import { Collection } from '../../collection/entities/collection.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Request extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Collection, (collection) => collection.requests)
  @JoinColumn()
  collection: Collection;

  @ManyToOne(() => User, (user) => user.requests)
  @JoinColumn()
  user: User;
}
