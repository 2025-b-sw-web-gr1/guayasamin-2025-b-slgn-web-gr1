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
exports.TeamsController = void 0;
const common_1 = require("@nestjs/common");
const teams_service_1 = require("./teams.service");
const create_team_dto_1 = require("./dto/create-team.dto");
const swagger_1 = require("@nestjs/swagger");
const team_entity_1 = require("./entities/team.entity");
const player_entity_1 = require("../players/entities/player.entity");
let TeamsController = class TeamsController {
    constructor(teamsService) {
        this.teamsService = teamsService;
    }
    create(createTeamDto) {
        return this.teamsService.create(createTeamDto);
    }
    findAll() {
        return this.teamsService.findAll();
    }
    findOne(id) {
        return this.teamsService.findOne(+id);
    }
    update(id, updateTeamDto) {
        return this.teamsService.update(+id, updateTeamDto);
    }
    remove(id) {
        return this.teamsService.remove(+id);
    }
    findPlayers(id) {
        return this.teamsService.findPlayersByTeam(+id);
    }
};
exports.TeamsController = TeamsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new team' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The team has been successfully created.', type: team_entity_1.Team }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all teams' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all teams.', type: [team_entity_1.Team] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a team by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the team.', type: team_entity_1.Team }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Team not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a team' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The team has been successfully updated.', type: team_entity_1.Team }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Team not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a team' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The team has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Team not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/players'),
    (0, swagger_1.ApiOperation)({ summary: 'Get players of a team' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all players of the team.', type: [player_entity_1.Player] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Team not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "findPlayers", null);
exports.TeamsController = TeamsController = __decorate([
    (0, swagger_1.ApiTags)('teams'),
    (0, common_1.Controller)('teams'),
    __metadata("design:paramtypes", [teams_service_1.TeamsService])
], TeamsController);
//# sourceMappingURL=teams.controller.js.map