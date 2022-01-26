/**
 *
 * @param number x world coordinate number
 * @param number y world coordinate number
 * @param number z world coordinate number
 * @param string text Your text
 */
export declare function DrawText3D(x: number, y: number, z: number, text: string): void;
/**
 * Show a notification above the map.
 * @param string your message.
 * @param number default duration is set to 2500.
 */
export declare function showSubtitle(message: string, duration?: number): void;
/**
 * Show help notification which is visible in top left of your screen.
 * @param string your message.
 */
export declare function displayHelpTextThisFrame(message: string): void;
/**
 *
 * @param number maxInputLength default set to 1.
 * @param string title.
 * @returns return your value entered on the keyboard input.
 */
export declare function KeyboardAmount(title: string, maxInputLength?: number): Promise<number>;
/**
 * @returns Returns a table of all connected players (server ID’s).
 */
export declare function getPlayers(): number[];
/**
 * show you a marker on top of the entity player target to see which player your are currently targeting :
 */
export declare function showMarkerTarget(): void;
export declare function HidAllHudFrame(): void;
