/*
Title: Game Time Day/Night
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.0.1
Release: 12.09.2022
First release: 13.08.2022
*/

/*ru
Название: Время День/Ночь
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.0.1
Релиз: 12.09.2022
Первый релиз: 13.08.2022
*/

/*:
 * @plugindesc v.1.0.1 [MV|MZ] Simple cycle of day and night.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @base DK_Game_Time
 * @orderAfter DK_Game_Time
 * @help

 ### Info about plugin ###
 Title: DK_Game_Time_DayNight
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 1.0.1
 Release: 12.09.2022
 First release: 13.08.2022

 ###===========================================================================
 ## Compatibility
 ###===========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Requirements and dependencies
 ###=========================================================================
 Availability of working plugin Game Time version 2.6.0 or above
 Download plugin: https://dk-plugins.ru/game-time/

 ###=========================================================================
 ## Plugin commands (RPG Maker MV)
 ###=========================================================================
 1. Show tint of day/night: ShowGameTint
 2. Hide tint of day/night: HideGameTint
 3. Set visibility of day/night tint: SetGameTintVisible visible
 visible - Visibility of day/night tint (true or false)
 4. Set static time for day/night tint: SetGameTintStaticTime hour min
 hour - Hour
 min - Minutes
 5. Reset static time for day/night tint: ResetGameTintStaticTime

 ###=========================================================================
 ## Script calls
 ###=========================================================================
 1. Show tint of day/night: $gameTimeTint.show()
 2. Hide tint of day/night: $gameTimeTint.hide()
 3. Set static time for day/night tint: $gameTimeTint.setStaticTime(hour, min)
 hour - Hour
 min - Minutes
 4. Reset static time for day/night tint: $gameTimeTint.setStaticTime(null)

 ###=========================================================================
 ## License and terms of use
 ###=========================================================================
 You can:
 -To use the plugin for your non-commercial projects
 -Change code of the plugin

 You cannot:
 -Delete or change any information about the plugin
 -Distribute the plugin and its modifications

 ## Commercial license ##
 Visit the page: https://dk-plugins.ru/commercial-license/

 ###=========================================================================
 ## Support
 ###=========================================================================
 Become a subscriber: https://boosty.to/dkplugins



 * @command ShowGameTint
 * @desc Show tint of day/night

 * @command HideGameTint
 * @desc Hide tint of day/night

 * @command SetGameTintVisible
 * @desc Set visibility of day/night tint
 *
 * @arg visible
 * @text Visibility
 * @desc Visibility of day/night tint
 * @type boolean
 * @default true

 * @command SetGameTintStaticTime
 * @desc Set static time for day/night tint
 *
 * @arg hour
 * @text Hour
 * @desc Hour
 * @type number
 * @min 0
 * @max 23
 * @default 0
 *
 * @arg min
 * @text Minutes
 * @desc Minutes
 * @type number
 * @min 0
 * @max 59
 * @default 0

 * @command ResetGameTintStaticTime
 * @desc Reset static time for day/night tint



 * @param tints
 * @text Tints
 * @desc Screen tints at different hours
 * @type struct<Tint>
 * @default {"0":"{\"r\":\"30\",\"g\":\"0\",\"b\":\"40\",\"a\":\"165\"}","1":"{\"r\":\"20\",\"g\":\"0\",\"b\":\"30\",\"a\":\"165\"}","2":"{\"r\":\"20\",\"g\":\"0\",\"b\":\"30\",\"a\":\"155\"}","3":"{\"r\":\"10\",\"g\":\"0\",\"b\":\"30\",\"a\":\"145\"}","4":"{\"r\":\"10\",\"g\":\"0\",\"b\":\"20\",\"a\":\"125\"}","5":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"20\",\"a\":\"125\"}","6":"{\"r\":\"75\",\"g\":\"20\",\"b\":\"20\",\"a\":\"115\"}","7":"{\"r\":\"100\",\"g\":\"30\",\"b\":\"10\",\"a\":\"105\"}","8":"{\"r\":\"75\",\"g\":\"20\",\"b\":\"10\",\"a\":\"85\"}","9":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"55\"}","10":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"30\"}","11":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"10\"}","12":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"0\"}","13":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"0\"}","14":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"0\"}","15":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"5\"}","16":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"15\"}","17":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"10\",\"a\":\"45\"}","18":"{\"r\":\"75\",\"g\":\"20\",\"b\":\"20\",\"a\":\"85\"}","19":"{\"r\":\"100\",\"g\":\"40\",\"b\":\"30\",\"a\":\"105\"}","20":"{\"r\":\"75\",\"g\":\"20\",\"b\":\"40\",\"a\":\"125\"}","21":"{\"r\":\"10\",\"g\":\"0\",\"b\":\"45\",\"a\":\"145\"}","22":"{\"r\":\"20\",\"g\":\"0\",\"b\":\"45\",\"a\":\"145\"}","23":"{\"r\":\"20\",\"g\":\"0\",\"b\":\"50\",\"a\":\"160\"}"}

 * @param disabledMaps
 * @text Disabled maps
 * @desc Disabled maps. Screen tint does not work on these maps.
 * @type number[]
 * @default []

*/

/*:ru
 * @plugindesc v.1.0.1 [MV|MZ] Простой цикл смены дня и ночи.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @base DK_Game_Time
 * @orderAfter DK_Game_Time
 * @help

 ### Информация о плагине ###
 Название: DK_Game_Time_DayNight
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 1.0.1
 Релиз: 12.09.2022
 Первый релиз: 13.08.2022

 ###=========================================================================
 ## Совместимость
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Требования и зависимости
 ###=========================================================================
 Наличие включенного плагина Game Time версии 2.6.0 или выше
 Скачать плагин: https://dk-plugins.ru/game-time/

 ###=========================================================================
 ## Команды плагина (RPG Maker MV)
 ###=========================================================================
 1. Показать оттенок дня и ночи: ShowGameTint
 2. Скрыть оттенок дня и ночи: HideGameTint
 3. Установить видимость оттенка дня и ночи: SetGameTintVisible visible
 visible - Видимость оттенка дня и ночи (true или false)
 4. Установить статическое время для оттенка дня и ночи: SetGameTintStaticTime hour min
 hour - Час
 min - Минуты
 5. Сбросить статическое время для оттенка дня и ночи: ResetGameTintStaticTime

 ###=========================================================================
 ## Вызовы скриптов
 ###=========================================================================
 1. Показать оттенок дня и ночи: $gameTimeTint.show()
 2. Скрыть оттенок дня и ночи: $gameTimeTint.hide()
 3. Установить статическое время для оттенка дня и ночи: $gameTimeTint.setStaticTime(hour, min)
 hour - Час
 min - Минуты
 4. Сбросить статическое время для оттенка дня и ночи: $gameTimeTint.setStaticTime(null)

 ###=========================================================================
 ## Лицензия и правила использования плагина
 ###=========================================================================
 Вы можете:
 -Использовать плагин в некоммерческих проектах
 -Изменять код плагина

 Вы не можете:
 -Удалять или изменять любую информацию о плагине
 -Распространять плагин и его модификации

 ## Коммерческая лицензия ##
 Посетите страницу: https://dk-plugins.ru/commercial-license/

 ###=========================================================================
 ## Поддержка
 ###=========================================================================
 Стать подписчиком: https://boosty.to/dkplugins



 * @command ShowGameTint
 * @desc Показать оттенок дня и ночи

 * @command HideGameTint
 * @desc Скрыть оттенок дня и ночи

 * @command SetGameTintVisible
 * @desc Установить видимость оттенка дня и ночи
 *
 * @arg visible
 * @text Видимость
 * @desc Видимость оттенка дня и ночи
 * @type boolean
 * @default true

 * @command SetGameTintStaticTime
 * @desc Установить статическое время для оттенка дня и ночи
 *
 * @arg hour
 * @text Час
 * @desc Час
 * @type number
 * @min 0
 * @max 23
 * @default 0
 *
 * @arg min
 * @text Минуты
 * @desc Минуты
 * @type number
 * @min 0
 * @max 59
 * @default 0

 * @command ResetGameTintStaticTime
 * @desc Сбросить статическое время для оттенка дня и ночи



 * @param tints
 * @text Оттенки
 * @desc Оттенки экрана в разные часы
 * @type struct<Tint>
 * @default {"0":"{\"r\":\"30\",\"g\":\"0\",\"b\":\"40\",\"a\":\"165\"}","1":"{\"r\":\"20\",\"g\":\"0\",\"b\":\"30\",\"a\":\"165\"}","2":"{\"r\":\"20\",\"g\":\"0\",\"b\":\"30\",\"a\":\"155\"}","3":"{\"r\":\"10\",\"g\":\"0\",\"b\":\"30\",\"a\":\"145\"}","4":"{\"r\":\"10\",\"g\":\"0\",\"b\":\"20\",\"a\":\"125\"}","5":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"20\",\"a\":\"125\"}","6":"{\"r\":\"75\",\"g\":\"20\",\"b\":\"20\",\"a\":\"115\"}","7":"{\"r\":\"100\",\"g\":\"30\",\"b\":\"10\",\"a\":\"105\"}","8":"{\"r\":\"75\",\"g\":\"20\",\"b\":\"10\",\"a\":\"85\"}","9":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"55\"}","10":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"30\"}","11":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"10\"}","12":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"0\"}","13":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"0\"}","14":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"0\"}","15":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"5\"}","16":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"0\",\"a\":\"15\"}","17":"{\"r\":\"0\",\"g\":\"0\",\"b\":\"10\",\"a\":\"45\"}","18":"{\"r\":\"75\",\"g\":\"20\",\"b\":\"20\",\"a\":\"85\"}","19":"{\"r\":\"100\",\"g\":\"40\",\"b\":\"30\",\"a\":\"105\"}","20":"{\"r\":\"75\",\"g\":\"20\",\"b\":\"40\",\"a\":\"125\"}","21":"{\"r\":\"10\",\"g\":\"0\",\"b\":\"45\",\"a\":\"145\"}","22":"{\"r\":\"20\",\"g\":\"0\",\"b\":\"45\",\"a\":\"145\"}","23":"{\"r\":\"20\",\"g\":\"0\",\"b\":\"50\",\"a\":\"160\"}"}

 * @param disabledMaps
 * @text Отключенные карты
 * @desc Отключенные карты. На этих картах оттенок экрана не работает.
 * @type number[]
 * @default []

*/

/*~struct~Tint:

 * @param 0
 * @text 00:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 1
 * @text 01:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 2
 * @text 02:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 3
 * @text 03:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 4
 * @text 04:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 5
 * @text 05:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 6
 * @text 06:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 7
 * @text 07:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 8
 * @text 08:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 9
 * @text 09:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 10
 * @text 10:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 11
 * @text 11:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 12
 * @text 12:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 13
 * @text 13:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 14
 * @text 14:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 15
 * @text 15:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 16
 * @text 16:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 17
 * @text 17:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 18
 * @text 18:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 19
 * @text 19:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 20
 * @text 20:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 21
 * @text 21:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 22
 * @text 22:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 23
 * @text 23:00
 * @desc RGBA screen hue value
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

*/

/*~struct~Tint:ru

 * @param 0
 * @text 00:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 1
 * @text 01:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 2
 * @text 02:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 3
 * @text 03:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 4
 * @text 04:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 5
 * @text 05:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 6
 * @text 06:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 7
 * @text 07:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 8
 * @text 08:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 9
 * @text 09:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 10
 * @text 10:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 11
 * @text 11:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 12
 * @text 12:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 13
 * @text 13:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 14
 * @text 14:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 15
 * @text 15:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 16
 * @text 16:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 17
 * @text 17:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 18
 * @text 18:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 19
 * @text 19:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 20
 * @text 20:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 21
 * @text 21:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 22
 * @text 22:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

 * @param 23
 * @text 23:00
 * @desc RGBA оттенок экрана
 * @type struct<TintRGBA>
 * @default {"r":"255","g":"255","b":"255","a":"255"}

*/

/*~struct~TintRGBA:

 * @param r
 * @text Red
 * @desc Red hue
 * @type number
 * @min 0
 * @max 255
 * @default 255

 * @param g
 * @text Green
 * @desc Green hue
 * @type number
 * @min 0
 * @max 255
 * @default 255

 * @param b
 * @text Blue
 * @desc Blue hue
 * @type number
 * @min 0
 * @max 255
 * @default 255

 * @param a
 * @text Alpha
 * @desc Tint opacity
 * @type number
 * @min 0
 * @max 255
 * @default 255

*/

/*~struct~TintRGBA:ru

 * @param r
 * @text Red
 * @desc Красный оттенок
 * @type number
 * @min 0
 * @max 255
 * @default 255

 * @param g
 * @text Green
 * @desc Зеленый оттенок
 * @type number
 * @min 0
 * @max 255
 * @default 255

 * @param b
 * @text Blue
 * @desc Синий оттенок
 * @type number
 * @min 0
 * @max 255
 * @default 255

 * @param a
 * @text Alpha
 * @desc Прозрачность оттенка
 * @type number
 * @min 0
 * @max 255
 * @default 255

*/

'use strict';

var Imported = Imported || {};
Imported['DK_Game_Time_DayNight'] = '1.0.1';

if (Imported['DK_Game_Time']) {
    const pluginVersion = Imported['DK_Game_Time'];
    const requiredVersion = '2.6.0';

    if (!Game_Time.checkVersion(requiredVersion)) {
        throw new Error(
            'Required to update the plugin "DK_Game_Time" to minimal version %1 (Installed: %2)'
                .format(requiredVersion, pluginVersion));
    }
} else {
    throw new Error('No plugin "DK_Game_Time"! Plugin "DK_Game_Time_DayNight" will not work!');
}

/**
 * @global
 * @type {Game_Time_Tint}
 */
var $gameTimeTint = null;

//===========================================================================
// initialize parameters
//===========================================================================

const GameTimeDayNightParams = (function() {

    function parse(string) {
        try {
            return JSON.parse(string, function(key, value) {
                if (typeof string === 'number' || typeof string === 'boolean') {
                    return string;
                }

                try {
                    if (Array.isArray(value)) {
                        return value.map(val => parse(val));
                    }

                    return parse(value);
                } catch (e) {
                    return value;
                }
            });
        } catch (e) {
            return string;
        }
    }

    const parameters = PluginManager.parameters('DK_Game_Time_DayNight');

    return Object.entries(parameters).reduce((acc, [key, value]) => {
        acc[key] = parse(value);
        return acc;
    }, {});

})();

GameTimeDayNightParams.tints = Object.entries(GameTimeDayNightParams.tints).reduce((acc, [hour, rgba]) => {
    acc[hour] = Object.values(rgba);
    return acc;
}, []);
GameTimeDayNightParams.disabledMaps = GameTimeDayNightParams.disabledMaps || [];

//=============================================================================
// Game_Interpreter
//=============================================================================

const Game_Time_DayNight_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Game_Time_DayNight_Game_Interpreter_pluginCommand.apply(this, arguments);

    switch(command) {
        case 'ShowGameTint':
            $gameTimeTint.show();
            break;
        case 'HideGameTint':
            $gameTimeTint.hide();
            break;
        case 'SetGameTintVisible':
            args[0] === 'true' ?
                $gameTimeTint.show() : $gameTimeTint.hide();
            break;
        case 'SetGameTintStaticTime':
            $gameTimeTint.setStaticTime(eval(args[0]), eval(args[1]));
            break;
        case 'ResetGameTintStaticTime':
            $gameTimeTint.setStaticTime(null);
            break;
    }
};

if (Utils.RPGMAKER_NAME === 'MZ') {

    PluginManager.registerCommand('DK_Game_Time_DayNight', 'ShowGameTint', () => {
        $gameTimeTint.show();
    });

    PluginManager.registerCommand('DK_Game_Time_DayNight', 'HideGameTint', () => {
        $gameTimeTint.hide();
    });

    PluginManager.registerCommand('DK_Game_Time_DayNight', 'SetGameTintVisible', (args) => {
        args.visible === 'true' ?
            $gameTimeTint.show() : $gameTimeTint.hide();
    });

    PluginManager.registerCommand('DK_Game_Time_DayNight', 'SetGameTintStaticTime', (args) => {
        $gameTimeTint.setStaticTime(eval(args.hour), eval(args.min));
    });

    PluginManager.registerCommand('DK_Game_Time_DayNight', 'ResetGameTintStaticTime', () => {
        $gameTimeTint.setStaticTime(null);
    });

}

//=============================================================================
// Game_Time_Tint
//=============================================================================

class Game_Time_Tint {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    initialize() {
        this._visible = true;
    }

    // get methods

    getStaticTime() {
        return this._staticTime;
    }

    // set methods

    setStaticTime(hour, min) {
        if (arguments[0] == null) {
            this._staticTime = null;
        } else {
            this._staticTime = { hour, min };
        }

        if (this._sprite) {
            this._sprite.update();
        }
    }

    // is methods

    isVisible() {
        return this._visible;
    }

    // other methods

    show() {
        this._visible = true;
    }

    hide() {
        this._visible = false;
    }

}

//===========================================================================
// Hacks for JsonEx encode/decode. Makes visibility for classes in window
//===========================================================================

window.Game_Time_Tint = Game_Time_Tint;

//=============================================================================
// Game_Time_Tint.Sprite
//=============================================================================

Game_Time_Tint.Sprite = class extends Sprite {

    // initialize methods

    initialize() {
        super.initialize(new Bitmap(Graphics.width, Graphics.height));
        this._gameTime = $gameTime.clone().remMin(1);
    }

    // get methods

    getTint() {
        const rgb = [];

        for (let i = 0; i < 3; i++) {
            rgb[i] = (this._currentHour[i] + (this._nextHour[i] - this._currentHour[i]) / Game_Time.getMinutesInHour() * this._min).clamp(0, 255);
        }

        return rgb;
    }

    getOpacity() {
        return (this._currentHour[3] + (this._nextHour[3] - this._currentHour[3]) / Game_Time.getMinutesInHour() * this._min).clamp(0, 255);
    }

    // update methods

    updateVisibility() {
        this.visible = $gameTimeTint.isVisible();
    }

    updateCurrentHour() {
        this._currentHour = GameTimeDayNightParams.tints[this._hour];
    }

    updateNextHour() {
        const hour = (this._hour + 1) % Game_Time.getHoursInDay();
        this._nextHour = GameTimeDayNightParams.tints[hour];
    }

    updateParameters() {
        const staticTime = $gameTimeTint.getStaticTime();

        this._hour = $gameTime.hour;
        this._min = $gameTime.min;

        if (staticTime) {
            this._hour = staticTime.hour;
            this._min = staticTime.min;
        }

        this.updateCurrentHour();
        this.updateNextHour();
    }

    updateTint() {
        this.updateParameters();

        this.bitmap.clear();
        this.bitmap.fillRect(0, 0, this.bitmap.width, this.bitmap.height, `rgb(${this.getTint().join(',')})`);
        this.opacity = this.getOpacity();
    }

    update() {
        const staticTime = $gameTimeTint.getStaticTime();

        this.updateVisibility();

        if (staticTime) {
            if (this._staticTime && this._staticTime.hour === staticTime.hour && this._staticTime.min === staticTime.min) {
                return;
            }

            this._staticTime = staticTime;
        } else {
            if (this._gameTime.equals($gameTime, true)) {
                return;
            }

            this._gameTime = $gameTime.clone();
        }

        this.updateTint();
    }

}

//=============================================================================
// Spriteset_Map
//=============================================================================

const Game_Time_DayNight_Spriteset_Map_createTilemap = Spriteset_Map.prototype.createTilemap;
Spriteset_Map.prototype.createTilemap = function() {
    Game_Time_DayNight_Spriteset_Map_createTilemap.apply(this, arguments);

    if (!GameTimeDayNightParams.disabledMaps.includes($gameMap.mapId())) {
        this._baseSprite.addChild(new Game_Time_Tint.Sprite());
    }
};

//=============================================================================
// Data Manager
//=============================================================================

const Game_Time_DayNight_DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
    Game_Time_DayNight_DataManager_createGameObjects.apply(this, arguments);
    $gameTimeTint = new Game_Time_Tint();
};

const Game_Time_DayNight_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
    const contents = Game_Time_DayNight_DataManager_makeSaveContents.apply(this, arguments);

    contents.gameTimeTint = $gameTimeTint;

    return contents;
};

const Game_Time_DayNight_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
    Game_Time_DayNight_DataManager_extractSaveContents.apply(this, arguments);

    if (contents.gameTimeTint) {
        $gameTimeTint = contents.gameTimeTint;
    }
};
