import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  findAll(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  async findOne(id: number): Promise<Team> {
    const team = await this.teamRepository.findOneBy({ id });
    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
    return team;
  }

  create(teamData: Partial<Team>): Promise<Team> {
    const team = this.teamRepository.create(teamData);
    return this.teamRepository.save(team);
  }

  async update(id: number, teamData: Partial<Team>): Promise<Team> {
    const team = await this.findOne(id);
    this.teamRepository.merge(team, teamData);
    return this.teamRepository.save(team);
  }

  async remove(id: number): Promise<void> {
    const team = await this.findOne(id);
    await this.teamRepository.remove(team);
  }

  async findPlayers(id: number): Promise<import('../players/entities/player.entity').Player[]> {
    const team = await this.teamRepository.findOne({
      where: { id },
      relations: ['players'],
    });
    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
    return team.players;
  }
}
