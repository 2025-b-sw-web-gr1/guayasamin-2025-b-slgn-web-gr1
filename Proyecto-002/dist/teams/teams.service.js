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
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const team_entity_1 = require("./entities/team.entity");
const player_entity_1 = require("../players/entities/player.entity");
let TeamsService = class TeamsService {
    constructor(teamsRepository, playersRepository) {
        this.teamsRepository = teamsRepository;
        this.playersRepository = playersRepository;
    }
    create(createTeamDto) {
        const team = this.teamsRepository.create(createTeamDto);
        return this.teamsRepository.save(team);
    }
    findAll() {
        return this.teamsRepository.find();
    }
    async findOne(id) {
        const team = await this.teamsRepository.findOneBy({ id });
        if (!team) {
            throw new common_1.NotFoundException(`Team with ID ${id} not found`);
        }
        return team;
    }
    async update(id, updateTeamDto) {
        const team = await this.findOne(id);
        this.teamsRepository.merge(team, updateTeamDto);
        return this.teamsRepository.save(team);
    }
    async remove(id) {
        const team = await this.findOne(id);
        await this.teamsRepository.remove(team);
    }
    async findPlayersByTeam(id) {
        const team = await this.findOne(id);
        return this.playersRepository.find({ where: { team: { id: team.id } } });
    }
};
exports.TeamsService = TeamsService;
exports.TeamsService = TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(team_entity_1.Team)),
    __param(1, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TeamsService);
//# sourceMappingURL=teams.service.js.map