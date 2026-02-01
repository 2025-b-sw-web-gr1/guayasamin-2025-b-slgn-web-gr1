import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({ example: 'Lionel Messi', description: 'The name of the player' })
  name: string;

  @ApiProperty({ example: 'Forward', description: 'The position of the player' })
  position: string;

  @ApiProperty({ example: 1, description: 'The ID of the team' })
  teamId: number;
}
