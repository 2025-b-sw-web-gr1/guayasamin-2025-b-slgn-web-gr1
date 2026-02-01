import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from './entities/player.entity';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  findAll(): Promise<Player[]> {
    return this.playersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Player> {
    return this.playersService.findOne(+id);
  }

  @Post()
  create(@Body() playerData: any): Promise<Player> {
    return this.playersService.create(playerData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() playerData: Partial<Player>): Promise<Player> {
    return this.playersService.update(+id, playerData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.playersService.remove(+id);
  }

  // Special endpoint: GET /teams/:id/players
  // Since this is in PlayersController, strict REST would be /players/teams/:id, but requirement says /teams/:id/players
  // To handle /teams/:id/players cleanly if using PlayersController, we can use a global prefix or just route it here as a separate route not under 'players' controller prefix? 
  // No, controller decorator sets prefix.
  // The User requirement "GET /teams/:id/players" implies it should be reachable there.
  // If I put it in TeamsController, it's cleaner.
  // I will add it here but I must note that the path will be /players/... if I don't override.
  // Actually, I can have a separate controller or method in TeamsController.
  // I will stick to what the user asks: "Players: ... un endpoint especial GET /teams/:id/players".
  // This phrasing "Players: ... endpoint" suggests it's part of the Player functional requirement, but URL is team centric.
  // I will ADD IT TO TEAMS CONTROLLER.
}
