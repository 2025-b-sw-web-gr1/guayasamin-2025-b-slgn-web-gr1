import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  findAll(): Promise<Player[]> {
    return this.playerRepository.find();
  }

  async findOne(id: number): Promise<Player> {
    const player = await this.playerRepository.findOneBy({ id });
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    return player;
  }

  create(playerData: Partial<Player> & { teamId: number }): Promise<Player> {
    const { teamId, ...data } = playerData;
    const player = this.playerRepository.create(data);
    if (teamId) {
      player.team = { id: teamId } as any;
    }
    return this.playerRepository.save(player);
  }

  async update(id: number, playerData: Partial<Player>): Promise<Player> {
    const player = await this.findOne(id);
    this.playerRepository.merge(player, playerData);
    return this.playerRepository.save(player);
  }

  async remove(id: number): Promise<void> {
    const player = await this.findOne(id);
    await this.playerRepository.remove(player);
  }

  findByTeam(teamId: number): Promise<Player[]> {
    return this.playerRepository.find({
      where: { team: { id: teamId } },
    });
  }
}
