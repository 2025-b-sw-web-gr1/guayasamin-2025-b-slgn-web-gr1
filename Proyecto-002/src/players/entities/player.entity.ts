import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Team } from '../../teams/entities/team.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Player {
  @ApiProperty({ example: 1, description: 'The unique identifier of the player' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Lionel Messi', description: 'The name of the player' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Forward', description: 'The position of the player' })
  @Column()
  position: string;

  @ApiProperty({ type: () => Team, description: 'The team the player belongs to' })
  @ManyToOne(() => Team, (team) => team.players, { onDelete: 'CASCADE' })
  team: Team;
}
