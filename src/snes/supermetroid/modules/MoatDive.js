import MemoryModule from "../../../util/memory/MemoryModule";
import { Rooms, LiquidPhysicsType } from "../enums";
import Addresses from "../addresses";

export default class MoatDiveModule extends MemoryModule {
    constructor() {
        super("moatDive", "Moat Dive", false);
        this.tooltip = "Sends a message in chat if you fall in the moat.";
        this.lastTrigger = 0;
    }

    settingDefs = {
        chatMessage: {
            display: "What to say in chat when you fall in the moat",
            type: "text",
            default: "funtooFine funtooFine funtooFine funtooFine funtooFine funtooFine funtooFine funtooFine",
        },
        cooldown: {
            display: "Cooldown in seconds between triggers",
            type: "number",
            default: 10,
        },
    };

    setEnabled(enabled) {
        super.setEnabled(enabled);
    }

    shouldRunForGame(gameTags) {
        return gameTags.SM && gameTags.VANILLA;
    }

    getMemoryReads() {
        return [Addresses.roomID, Addresses.samusWaterPhysics];
    }

    memoryReadAvailable({ memory, sendEvent }) {
        let curTime = Date.now() / 1000;

        if (
            curTime - this.lastTrigger > this.settings.cooldown.value &&
            Addresses.roomID.value === Rooms.Crateria.THE_MOAT &&
            Addresses.roomID.prevUnique() !== Rooms.Crateria.WEST_OCEAN &&
            memory.samusWaterPhysics.value === LiquidPhysicsType.WATER &&
            memory.samusWaterPhysics.prev() === LiquidPhysicsType.AIR
        ) {
            sendEvent("msg", this.settings.chatMessage.value, 4);
            this.lastTrigger = Date.now() / 1000;
        }
    }
}
