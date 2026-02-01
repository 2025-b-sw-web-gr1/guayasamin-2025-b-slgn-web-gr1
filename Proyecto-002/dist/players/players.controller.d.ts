import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './entities/player.entity';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    create(createPlayerDto: CreatePlayerDto): Promise<Player>;
    findAll(): Promise<Player[]>;
    findOne(id: string): Promise<Player>;
    update(id: string, updatePlayerDto: CreatePlayerDto): Promise<Player>;
    remove(id: string): Promise<void>;
}
