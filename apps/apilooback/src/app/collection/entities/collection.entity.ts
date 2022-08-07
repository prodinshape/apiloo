import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableForeignKey } from 'typeorm';
import { Request } from '../../request/entities/request.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Collection extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Request, (request) => request.collection)
  @JoinColumn()
  requests: Request[];

  @ManyToOne(() => User, (user) => user.requests)
  @JoinColumn()
  user: User;
}
