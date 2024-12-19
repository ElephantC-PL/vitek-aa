/**
 * Rick and Morty API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CharacterOrigin } from './characterOrigin';
import { CharacterLocation } from './characterLocation';


export interface Character { 
    /**
     * The id of the character.
     */
    id?: number;
    /**
     * The name of the character.
     */
    name?: string;
    /**
     * The status of the character (Alive, Dead or unknown).
     */
    status?: string;
    /**
     * The species of the character.
     */
    species?: string;
    /**
     * The type or subspecies of the character.
     */
    type?: string;
    /**
     * The gender of the character.
     */
    gender?: string;
    origin?: CharacterOrigin;
    location?: CharacterLocation;
    /**
     * Link to the character\'s image.
     */
    image?: string;
    episode?: Array<string>;
    /**
     * Link to the character\'s own URL endpoint.
     */
    url?: string;
    /**
     * Time at which the character was created in the database.
     */
    created?: string;
}
