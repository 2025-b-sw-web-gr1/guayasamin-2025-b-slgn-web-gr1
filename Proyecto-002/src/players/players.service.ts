import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Team } from '../teams/entities/team.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const team = await this.teamsRepository.findOneBy({ id: createPlayerDto.teamId });
    if (!team) {
      throw new NotFoundException(`Team with ID ${createPlayerDto.teamId} not found`);
    }

    const player = this.playersRepository.create({
      ...createPlayerDto,
      team,
    });
    return this.playersRepository.save(player);
  }

  findAll(): Promise<Player[]> {
    return this.playersRepository.find({ relations: ['team'] });
  }

  async findOne(id: number): Promise<Player> {
    const player = await this.playersRepository.findOne({ 
      where: { id },
      relations: ['team']
    });
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    return player;
  }

  async update(id: number, updatePlayerDto: CreatePlayerDto): Promise<Player> {
    const player = await this.findOne(id);
    
    // Check if teamId is changed
    if (updatePlayerDto.teamId) {
      const team = await this.teamsRepository.findOneBy({ id: updatePlayerDto.teamId });
      if (!team) {
        throw new NotFoundException(`Team with ID ${updatePlayerDto.teamId} not found`);
      }
      player.team = team;
    }
    
    this.playersRepository.merge(player, updatePlayerDto);
    return this.playersRepository.save(player);
  }

  async remove(id: number): Promise<void> {
    const player = await this.findOne(id);
    await this.playersRepository.remove(player);
  }
}
