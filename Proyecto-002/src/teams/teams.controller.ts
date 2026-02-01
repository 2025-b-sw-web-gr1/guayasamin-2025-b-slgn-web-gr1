import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Team } from './entities/team.entity';
import { Player } from '../players/entities/player.entity';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new team' })
  @ApiResponse({ status: 201, description: 'The team has been successfully created.', type: Team })
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all teams' })
  @ApiResponse({ status: 200, description: 'Return all teams.', type: [Team] })
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a team by id' })
  @ApiResponse({ status: 200, description: 'Return the team.', type: Team })
  @ApiResponse({ status: 404, description: 'Team not found.' })
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a team' })
  @ApiResponse({ status: 200, description: 'The team has been successfully updated.', type: Team })
  @ApiResponse({ status: 404, description: 'Team not found.' })
  update(@Param('id') id: string, @Body() updateTeamDto: CreateTeamDto) {
    return this.teamsService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a team' })
  @ApiResponse({ status: 200, description: 'The team has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Team not found.' })
  remove(@Param('id') id: string) {
    return this.teamsService.remove(+id);
  }

  @Get(':id/players')
  @ApiOperation({ summary: 'Get players of a team' })
  @ApiResponse({ status: 200, description: 'Return all players of the team.', type: [Player] })
  @ApiResponse({ status: 404, description: 'Team not found.' })
  findPlayers(@Param('id') id: string) {
    return this.teamsService.findPlayersByTeam(+id);
  }
}
