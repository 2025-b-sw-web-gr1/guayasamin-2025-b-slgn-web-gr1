import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { Player } from '../players/entities/player.entity';
export declare class TeamsService {
    private teamsRepository;
    private playersRepository;
    constructor(teamsRepository: Repository<Team>, playersRepository: Repository<Player>);
    create(createTeamDto: CreateTeamDto): Promise<Team>;
    findAll(): Promise<Team[]>;
    findOne(id: number): Promise<Team>;
    update(id: number, updateTeamDto: CreateTeamDto): Promise<Team>;
    remove(id: number): Promise<void>;
    findPlayersByTeam(id: number): Promise<Player[]>;
}
