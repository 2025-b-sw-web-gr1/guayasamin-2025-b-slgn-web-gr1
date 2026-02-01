import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Team } from '../teams/entities/team.entity';
export declare class PlayersService {
    private playersRepository;
    private teamsRepository;
    constructor(playersRepository: Repository<Player>, teamsRepository: Repository<Team>);
    create(createPlayerDto: CreatePlayerDto): Promise<Player>;
    findAll(): Promise<Player[]>;
    findOne(id: number): Promise<Player>;
    update(id: number, updatePlayerDto: CreatePlayerDto): Promise<Player>;
    remove(id: number): Promise<void>;
}
