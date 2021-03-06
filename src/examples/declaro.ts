/**
* EXAMPLE ONLY - DO NOT INCLUDE IN INDEX
*/
const allowedItems: any = {
    "ELYTRA": "ELYTRA"
};

export const name = 'declaro';
export const cost = 1;
export const code = (canon: ICanon) => (item: string) => {
    var MSG = canon.MSG;

    const manifest = (item: string) => {
        var MATERIAL = Java.type("org.bukkit.Material");
        var ItemStack = Java.type("org.bukkit.inventory.ItemStack");
        var thing = new ItemStack(MATERIAL[item]);
        canon.sender.getInventory().addItem(thing);
        canon.magik.msg(MSG.DECLARO);
    };

    if (item) {
        const thing = allowedItems[item.toUpperCase()]
        if (thing) manifest(thing);
    }
};
