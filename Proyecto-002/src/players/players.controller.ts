import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Player } from './entities/player.entity';

@ApiTags('players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new player' })
  @ApiResponse({ status: 201, description: 'The player has been successfully created.', type: Player })
  @ApiResponse({ status: 404, description: 'Team not found.' })
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all players' })
  @ApiResponse({ status: 200, description: 'Return all players.', type: [Player] })
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a player by id' })
  @ApiResponse({ status: 200, description: 'Return the player.', type: Player })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a player' })
  @ApiResponse({ status: 200, description: 'The player has been successfully updated.', type: Player })
  @ApiResponse({ status: 404, description: 'Player or Team not found.' })
  update(@Param('id') id: string, @Body() updatePlayerDto: CreatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a player' })
  @ApiResponse({ status: 200, description: 'The player has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }
}
