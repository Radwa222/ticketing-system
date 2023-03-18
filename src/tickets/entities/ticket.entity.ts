import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TICKET_STATUS } from '../enums/ticket-status.enum';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column({
    type: 'enum',
    enum: TICKET_STATUS,
    default: TICKET_STATUS.OPEN,
  })
  status: TICKET_STATUS;

  @Column({
    type: 'datetime',
    default: () => 'NOW()',
  })
  opened_at: string;

  @Column({
    type: 'datetime',
  })
  closed_at: string;

  @ManyToOne(() => User, (user) => user.tickets)
  user: User;
}
