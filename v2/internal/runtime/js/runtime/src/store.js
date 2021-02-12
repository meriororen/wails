
import { writable } from 'svelte/store';
import {log} from "./log";

/** Overlay */
export const overlayVisible = writable(false);

export function showOverlay() {
    overlayVisible.set(true);
}
export function hideOverlay() {
    overlayVisible.set(false);
}

/** Menubar **/
export const menuVisible = writable(true);

export function showMenuBar() {
    menuVisible.set(true);
}
export function hideMenuBar() {
    menuVisible.set(false);
}

/** Trays **/

export const trays = writable([]);
export function setTray(tray) {
    log("Set Tray:" + JSON.stringify(tray))
    trays.update((current) => {
        // Remove existing if it exists, else add
        const index = current.findIndex(item => item.ID === tray.ID);
        if ( index === -1 ) {
            current.push(tray);
        } else {
            current[index] = tray;
        }
        return current;
    })
}
export function updateTrayLabel(tray) {
    log("Update Tray Label:" + JSON.stringify(tray))
    trays.update((current) => {
        // Remove existing if it exists, else add
        const index = current.findIndex(item => item.ID === tray.ID);
        if ( index === -1 ) {
            return log("ERROR: Attempted to update tray index ", tray.ID, "but it doesn't exist")
        }
        current[index].Label = tray.Label;
        return current;
    })
}
