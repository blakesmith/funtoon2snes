import { wram } from "../datatypes";
import MemState from "../../util/memory/MemState";

export default {
    roomID: new MemState(wram.uint16Read(0x079b), "roomID", "Room ID"),
    gameState: new MemState(wram.uint16Read(0x0998), "gameState", "Game State"),
    samusHP: new MemState(wram.uint16Read(0x09c2), "samusHP", "Samus HP"),
    samusMaxHP: new MemState(wram.uint16Read(0x09c4), "samusHP", "Samus Max HP"),
    enemyHP: new MemState(wram.uint16Read(0x0f8c), "enemyHP", "Enemy HP"),
    phantoonEyeTimer: new MemState(wram.uint16Read(0x0fe8), "phantoonEyeTimer", "Phantoon Eye Timer"),
    ceresTimer: new MemState(wram.bcdRead(0x0945, 2, true), "ceresTimer", "Ceres Timer"),
    ceresState: new MemState(wram.uint16Read(0x093f), "ceresState", "Ceres State"),
    eventStates: new MemState(wram.uint32Read(0xd820), "eventStates", "Event States"),
    bossStates: new MemState(wram.uint64Read(0xd828), "bossStates", "Boss States"),
    samusMissiles: new MemState(wram.uint16Read(0x09ce), "samusMissiles", "Samus Missiles"),
    samusMaxMissiles: new MemState(wram.uint16Read(0x09d0), "samusMaxMissiles", "Samus Max Missiles"),
    samusSupers: new MemState(wram.uint16Read(0x09ce), "samusSupers", "Samus Super Missiles"),
    samusMaxSupers: new MemState(wram.uint16Read(0x09d0), "samusMaxSupers", "Samus Max Super Missiles"),
    samusPBs: new MemState(wram.uint16Read(0x09ce), "samusPBs", "Samus Power Bombs"),
    samusMaxPBs: new MemState(wram.uint16Read(0x09d0), "samusMaxPBs", "Samus Max Power Bombs"),
    samusReserveHP: new MemState(wram.uint16Read(0x09ce), "samusReserveHP", "Samus Reserve HP"),
    samusMaxReserveHP: new MemState(wram.uint16Read(0x09d0), "samusMaxReserveHP", "Samus Max Reserve HP"),
    samusWaterPhysics: new MemState(wram.uint16Read(0x0ad2), "samusWaterPhysics", "Samus water physics state"),
    samusX: new MemState(wram.uint16Read(0x0af6), "samusX", "Samus X Position"),
    samusY: new MemState(wram.uint16Read(0x0afa), "samusY", "Samus y Position"),
    samusSubX: new MemState(wram.uint16Read(0x0af8), "samusSubX", "Samus X Sub-pixel Position"),
    samusSubY: new MemState(wram.uint16Read(0x0afc), "samusSubY", "Samus Y Sub-pixel Position"),
    samusXRadius: new MemState(wram.uint16Read(0x0afe), "samusXRadius", "Samus X Radius"),
    samusYRadius: new MemState(wram.uint16Read(0x0b00), "samusYRadius", "Samus Y Radius"),
    samusXSpeed: new MemState(wram.int16Read(0x0b42), "samusXSpeed", "Samus X Sub-Speed"),
    samusXSubSpeed: new MemState(wram.uint16Read(0x0b44), "samusXSubSpeed", "Samus X Sub-Speed"),
    samusXSubMomentum: new MemState(wram.uint16Read(0x0b48), "samusXSubMomentum", "Samus X Sub-Momentum"),
    samusYSpeed: new MemState(wram.int16Read(0x0b2e), "samusYSpeed", "Samus Y Sub-Speed"),
    samusYSubSpeed: new MemState(wram.uint16Read(0x0b2c), "samusYSubSpeed", "Samus Y Sub-Speed"),
    samusYDirection: new MemState(wram.uint16Read(0x0b36), "samusYDirection", "Samus Y Direction"),
    samusPose: new MemState(wram.uint16Read(0x0a1c), "samusPose", "Samus Pose"),
    collectedItems: new MemState(wram.dataRead(0xd870, 19), "collectedItems", '"Collected Items" Bit Array'),
};
