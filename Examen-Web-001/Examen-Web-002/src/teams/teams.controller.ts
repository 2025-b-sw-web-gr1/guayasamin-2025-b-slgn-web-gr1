import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './entities/team.entity';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Team> {
    return this.teamsService.findOne(+id);
  }

  @Post()
  create(@Body() teamData: Partial<Team>): Promise<Team> {
    return this.teamsService.create(teamData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() teamData: Partial<Team>): Promise<Team> {
    return this.teamsService.update(+id, teamData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.teamsService.remove(+id);
  }

  @Get(':id/players')
  findPlayers(@Param('id') id: string): Promise<import('../players/entities/player.entity').Player[]> {
    return this.teamsService.findPlayers(+id);
  }
}
