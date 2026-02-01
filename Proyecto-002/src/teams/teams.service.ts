import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { Player } from '../players/entities/player.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
  ) {}

  create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = this.teamsRepository.create(createTeamDto);
    return this.teamsRepository.save(team);
  }

  findAll(): Promise<Team[]> {
    return this.teamsRepository.find();
  }

  async findOne(id: number): Promise<Team> {
    const team = await this.teamsRepository.findOneBy({ id });
    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
    return team;
  }

  async update(id: number, updateTeamDto: CreateTeamDto): Promise<Team> {
    const team = await this.findOne(id);
    this.teamsRepository.merge(team, updateTeamDto);
    return this.teamsRepository.save(team);
  }

  async remove(id: number): Promise<void> {
    const team = await this.findOne(id);
    await this.teamsRepository.remove(team);
  }

  async findPlayersByTeam(id: number): Promise<Player[]> {
    const team = await this.findOne(id); // Ensure team exists
    return this.playersRepository.find({ where: { team: { id: team.id } } });
  }
}
