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
exports.PlayersController = void 0;
const common_1 = require("@nestjs/common");
const players_service_1 = require("./players.service");
const create_player_dto_1 = require("./dto/create-player.dto");
const swagger_1 = require("@nestjs/swagger");
const player_entity_1 = require("./entities/player.entity");
let PlayersController = class PlayersController {
    constructor(playersService) {
        this.playersService = playersService;
    }
    create(createPlayerDto) {
        return this.playersService.create(createPlayerDto);
    }
    findAll() {
        return this.playersService.findAll();
    }
    findOne(id) {
        return this.playersService.findOne(+id);
    }
    update(id, updatePlayerDto) {
        return this.playersService.update(+id, updatePlayerDto);
    }
    remove(id) {
        return this.playersService.remove(+id);
    }
};
exports.PlayersController = PlayersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new player' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The player has been successfully created.', type: player_entity_1.Player }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Team not found.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_dto_1.CreatePlayerDto]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all players' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all players.', type: [player_entity_1.Player] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a player by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the player.', type: player_entity_1.Player }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Player not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a player' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The player has been successfully updated.', type: player_entity_1.Player }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Player or Team not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_player_dto_1.CreatePlayerDto]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a player' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The player has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Player not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "remove", null);
exports.PlayersController = PlayersController = __decorate([
    (0, swagger_1.ApiTags)('players'),
    (0, common_1.Controller)('players'),
    __metadata("design:paramtypes", [players_service_1.PlayersService])
], PlayersController);
//# sourceMappingURL=players.controller.js.map