"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const player_entity_1 = require("./entities/player.entity");
const team_entity_1 = require("../teams/entities/team.entity");
let PlayersService = class PlayersService {
    constructor(playersRepository, teamsRepository) {
        this.playersRepository = playersRepository;
        this.teamsRepository = teamsRepository;
    }
    async create(createPlayerDto) {
        const team = await this.teamsRepository.findOneBy({ id: createPlayerDto.teamId });
        if (!team) {
            throw new common_1.NotFoundException(`Team with ID ${createPlayerDto.teamId} not found`);
        }
        const player = this.playersRepository.create(Object.assign(Object.assign({}, createPlayerDto), { team }));
        return this.playersRepository.save(player);
    }
    findAll() {
        return this.playersRepository.find({ relations: ['team'] });
    }
    async findOne(id) {
        const player = await this.playersRepository.findOne({
            where: { id },
            relations: ['team']
        });
        if (!player) {
            throw new common_1.NotFoundException(`Player with ID ${id} not found`);
        }
        return player;
    }
    async update(id, updatePlayerDto) {
        const player = await this.findOne(id);
        if (updatePlayerDto.teamId) {
            const team = await this.teamsRepository.findOneBy({ id: updatePlayerDto.teamId });
            if (!team) {
                throw new common_1.NotFoundException(`Team with ID ${updatePlayerDto.teamId} not found`);
            }
            player.team = team;
        }
        this.playersRepository.merge(player, updatePlayerDto);
        return this.playersRepository.save(player);
    }
    async remove(id) {
        const player = await this.findOne(id);
        await this.playersRepository.remove(player);
    }
};
exports.PlayersService = PlayersService;
exports.PlayersService = PlayersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __param(1, (0, typeorm_1.InjectRepository)(team_entity_1.Team)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PlayersService);
//# sourceMappingURL=players.service.js.map