import { PlayerPositionEnum } from "./player-position.enum";

/**
 * ### Player Position Name Enum
 * Name of position according by `PlayerPositionEnum`
 * 
 * @enum PlayerPositionNameEnum
 */
export enum PlayerPositionNameEnum {

    ['Goleiro'] = PlayerPositionEnum.Goalkeeper,
    ['Defensor'] = PlayerPositionEnum.Defender,
    ['Meio-campista'] = PlayerPositionEnum.Midfielder,
    ['Atacante'] = PlayerPositionEnum.Forward

}