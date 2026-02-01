import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './entities/team.entity';
import { Player } from '../players/entities/player.entity';
export declare class TeamsController {
    private readonly teamsService;
    constructor(teamsService: TeamsService);
    create(createTeamDto: CreateTeamDto): Promise<Team>;
    findAll(): Promise<Team[]>;
    findOne(id: string): Promise<Team>;
    update(id: string, updateTeamDto: CreateTeamDto): Promise<Team>;
    remove(id: string): Promise<void>;
    findPlayers(id: string): Promise<Player[]>;
}
