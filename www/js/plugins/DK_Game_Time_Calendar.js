/*
Title: Game Time Calendar
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.2.0
Release: 30.03.2023
First release: 28.11.2020
*/

/*ru
Название: Время Календарь
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.2.0
Релиз: 30.03.2023
Первый релиз: 28.11.2020
*/

/*:
 * @plugindesc v.1.2.0 [MV|MZ] Adds a calendar and event system.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @base DK_Game_Time
 * @orderAfter DK_Game_Time
 * @help

 ### Info about plugin ###
 Title: DK_Game_Time_Calendar
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 1.2.0
 Release: 30.03.2023
 First release: 28.11.2020

 ###===========================================================================
 ## Compatibility
 ###===========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Requirements and dependencies
 ###=========================================================================
 Availability of working plugin Game Time version 2.6.2 or above

 ###=========================================================================
 ## Plugin commands (RPG Maker MV)
 ###=========================================================================
 1. Enable calendar: EnableCalendar
 2. Disable calendar: DisableCalendar
 3. Open calendar: OpenCalendar
 4. Open calendar with a specific date: OpenCalendarWithDate day month year
 day - Day
 month - Month
 year - Year
 5. Remove a calendar event: RemoveCalendarEvent ID
 ID - Event id. Calculated with Javascript.

 ###=========================================================================
 ## Script calls
 ###=========================================================================
 1. Enable calendar: $gameSystem.setCalendarEnabled(true)
 2. Disable calendar: $gameSystem.setCalendarEnabled(false)
 3. Check calendar availability: $gameSystem.isCalendarEnabled()

 $gameCalendar.addEvent(data) - Add an event to calendar. Returns a created event.
 data should contain the following fields:
 name - String - Event name
 start - Game_Time object - Start date/time of the event
 end - Game_Time object - End date/time of the event
 Additional fields:
 iconIndex - Number - Icon index
 location - String - Event location
 description - String - Event description
 switch - Number - Switch that turns on when an event occurs
 Example:
 $gameCalendar.addEvent({
    name: "Take the quest",
    iconIndex: 193,
    start: $gameTime.clone(),
    end: $gameTime.clone().addDay(1),
    description: "You must take the quest from the character \\i[4]Headman",
    location: "\\i[191]Headman's house"
 })

 $gameCalendar.getById(id) - Returns event with a specific id (or null).
 $gameCalendar.removeById(id) - Removes event with a specific id.
 $gameCalendar.getAllEvents(gameTime) - Returns an array with events (includes holidays) on the specified date.
 $gameCalendar.getEvents(gameTime) - Returns an array with events on the specified date.
 $gameCalendar.getHolidays(gameTime) - Returns an array with holidays on the specified date.
 $gameCalendar.isHoliday() - Returns true if today is a holiday.

 ###=========================================================================
 ## See also
 ###=========================================================================
 1. Mouse System (https://dk-plugins.ru/mouse-system/)
 Allows you to change the mouse cursor, activate events by clicking, hovering, etc.

 2. Picture Choices (https://dk-plugins.ru/picture-choices/)
 Allows to use a graphic buttons instead of the choice window.

 3. Pictures Glow (https://dk-plugins.ru/pictures-glow/)
 Allows highlighting pictures on mouse hover.

 4. Events Glow (https://dk-plugins.ru/events-glow/)
 Allows highlighting events on mouse hover.

 ###=========================================================================
 ## Graphics
 ###=========================================================================
 Additional graphics for your project: https://dk-plugins.ru/resources/

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



 * @command EnableCalendar
 * @desc Enable calendar

 * @command DisableCalendar
 * @desc Disable calendar

 * @command OpenCalendar
 * @desc Open calendar

 * @command OpenCalendarWithDate
 * @desc Open calendar with a specific date
 *
 * @arg date
 * @text Date
 * @desc Date
 * @type struct<Date>
 * @default {"day":"1","month":"0","year":"0"}

 * @command AddCalendarEvent
 * @desc Add an event to calendar
 *
 * @arg variable
 * @text Variable
 * @desc The variable where the id of the created event will be written
 * @type variable
 * @default 0
 *
 * @arg event
 * @text Event
 * @desc Event
 * @type struct<Event>
 * @default {"name":"","iconIndex":"0","description":"","location":"","switch":"0","start":"{\"sec\":\"0\",\"min\":\"0\",\"hour\":\"0\",\"day\":\"1\",\"month\":\"0\",\"year\":\"0\"}","end":"{\"sec\":\"0\",\"min\":\"0\",\"hour\":\"0\",\"day\":\"1\",\"month\":\"0\",\"year\":\"0\"}"}

 * @command RemoveCalendarEvent
 * @desc Remove a calendar event
 *
 * @arg id
 * @text ID
 * @desc ID. Calculated with Javascript.
 * @type combo
 * @option
 * @option $gameVariables.value(ID)



 * @param holidays
 * @text Holidays
 * @desc Holidays
 * @type struct<Holiday>[]
 * @default []

 * @param defaultCalendarEnabled
 * @text Default calendar enabled
 * @desc Is the calendar enabled by default?
 * @type boolean
 * @default true

 * @param firstDay
 * @text First day of the week
 * @desc First day of the week
 * @type select
 * @option Monday
 * @value 0
 * @option Sunday
 * @value 6
 * @default 0

 * @param Map
 * @default ---------------------------------

 * @param mapButton
 * @text Map button
 * @parent Map
 * @desc Button to open the calendar on the map. Leave blank to not use.
 * @type combo
 * @option
 * @option control

 * @param mapOpenSE
 * @text Calendar opening sound
 * @parent Map
 * @desc Calendar opening sound
 * @type struct<SE>
 * @default {"name":"","volume":"90","pitch":"100","pan":"0"}

 * @param Menu
 * @default ---------------------------------

 * @param menuCommandName
 * @text Menu command name
 * @parent Menu
 * @desc Menu command name
 * @default Calendar

 * @param Colors
 * @default ---------------------------------

 * @param todayColor
 * @text Today color
 * @parent Colors
 * @desc Today color. Color in hex format or window skin color number.
 * @type combo
 * @option 3
 * @option #ffffff
 * @default 3

 * @param weekendsColor
 * @text Weekends color
 * @parent Colors
 * @desc Weekends color. Color in hex format or window skin color number.
 * @type combo
 * @option 2
 * @option #ffffff
 * @default 2

 * @param eventsIndicatorColor
 * @text Events indicator color
 * @parent Colors
 * @desc Events indicator color. Color in hex format or window skin color number.
 * @type combo
 * @option 14
 * @option #ffaa00
 * @default 14

 * @param Terms
 * @default ---------------------------------

 * @param helpWindowFormat
 * @text Help window format
 * @parent Terms
 * @desc Help window format. Information about formats in the Game Time plugin.
 * @default %DD %MMMM %YYYY

 * @param noEvents
 * @text No events
 * @parent Terms
 * @desc No events
 * @default No events

 * @param allDay
 * @text All day
 * @parent Terms
 * @desc All day
 * @default All day

 * @param location
 * @text Location
 * @parent Terms
 * @desc Location
 * @default Location

 * @param description
 * @text Description
 * @parent Terms
 * @desc Description
 * @default Description

 * @param start
 * @text Start
 * @parent Terms
 * @desc Start
 * @default Start

 * @param end
 * @text End
 * @parent Terms
 * @desc End
 * @default End

*/

/*:ru
 * @plugindesc v.1.2.0 [MV|MZ] Добавляет календарь и систему событий.
 * @author DKPlugins
 * @url https://dk-plugins.ru
 * @target MZ
 * @base DK_Game_Time
 * @orderAfter DK_Game_Time
 * @help

 ### Информация о плагине ###
 Название: DK_Game_Time_Calendar
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 1.2.0
 Релиз: 30.03.2023
 Первый релиз: 28.11.2020

 ###=========================================================================
 ## Совместимость
 ###=========================================================================
 RPG Maker MV: 1.5+
 RPG Maker MZ: 1.0+

 ###=========================================================================
 ## Требования и зависимости
 ###=========================================================================
 Наличие включенного плагина Game Time версии 2.6.2 или выше

 ###=========================================================================
 ## Команды плагина (RPG Maker MV)
 ###=========================================================================
 1. Включить доступ к календарю: EnableCalendar
 2. Выключить доступ к календарю: DisableCalendar
 3. Открыть календарь: OpenCalendar
 4. Открыть календарь на определенной дате: OpenCalendarWithDate day month year
 day - День
 month - Месяц
 year - Год
 5. Удалить событие в календаре: RemoveCalendarEvent ID
 ID - Номер события. Вычисляется с помощью Javascript.

 ###=========================================================================
 ## Вызовы скриптов
 ###=========================================================================
 1. Включить доступ к календарю: $gameSystem.setCalendarEnabled(true)
 2. Выключить доступ к календарю: $gameSystem.setCalendarEnabled(false)
 3. Проверить доступность календаря: $gameSystem.isCalendarEnabled()

 $gameCalendar.addEvent(data) - Добавить событие в календарь. Возвращает созданное событие.
 data должна содержать следующие поля:
 name - String - Название события
 start - Game_Time object - Дата/время начала события
 end - Game_Time object - Дата/время окончания события
 Дополнительные поля:
 iconIndex - Number - Номер иконки
 location - String - Место события
 description - String - Описание события
 switch - Number - Переключатель, который включается при наступлении события
 Пример:
 $gameCalendar.addEvent({
    name: "Взять квест",
    iconIndex: 193,
    start: $gameTime.clone(),
    end: $gameTime.clone().addDay(1),
    description: "Вы должны взять квест у персонажа \\i[4]Староста",
    location: "\\i[191]Дом старосты"
 })

 $gameCalendar.getById(id) - Возвращает событие с указанным id (или null).
 $gameCalendar.removeById(id) - Удаляет событие с указанным id.
 $gameCalendar.getAllEvents(gameTime) - Возвращает массив с событиями (включая праздники) в указанную дату.
 $gameCalendar.getEvents(gameTime) - Возвращает массив с событиями в указанную дату.
 $gameCalendar.getHolidays(gameTime) - Возвращает массив с праздниками в указанную дату.
 $gameCalendar.isHoliday() - Возвращает true, если сегодня праздник.

 ###=========================================================================
 ## Смотрите также
 ###=========================================================================
 1. Система Мыши (https://dk-plugins.ru/mouse-system/)
 Позволяет изменять курсор мыши, активировать события нажатием, наведением и др.

 2. Выбор С Изображениями (https://dk-plugins.ru/picture-choices/)
 Позволяет использовать графические кнопки вместо окна выбора.

 3. Свечение Изображений (https://dk-plugins.ru/pictures-glow/)
 Позволяет подсвечивать изображения при наведении мыши.

 4. Свечение Событий (https://dk-plugins.ru/events-glow/)
 Позволяет подсвечивать события при наведении мыши.

 ###=========================================================================
 ## Графика
 ###=========================================================================
 Дополнительная графика для вашего проекта: https://dk-plugins.ru/resources/

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



 * @command EnableCalendar
 * @desc Включить доступ к календарю

 * @command DisableCalendar
 * @desc Выключить доступ к календарю

 * @command OpenCalendar
 * @desc Открыть календарь

 * @command OpenCalendarWithDate
 * @desc Открыть календарь с определенной датой
 *
 * @arg date
 * @text Дата
 * @desc Дата
 * @type struct<Date>
 * @default {"day":"1","month":"0","year":"0"}

 * @command AddCalendarEvent
 * @desc Добавить событие в календарь
 *
 * @arg variable
 * @text Переменная
 * @desc Переменная, в которую будет записан id созданного события
 * @type variable
 * @default 0
 *
 * @arg event
 * @text Событие
 * @desc Событие
 * @type struct<Event>
 * @default {"name":"","iconIndex":"0","description":"","location":"","switch":"0","start":"{\"sec\":\"0\",\"min\":\"0\",\"hour\":\"0\",\"day\":\"1\",\"month\":\"0\",\"year\":\"0\"}","end":"{\"sec\":\"0\",\"min\":\"0\",\"hour\":\"0\",\"day\":\"1\",\"month\":\"0\",\"year\":\"0\"}"}

 * @command RemoveCalendarEvent
 * @desc Удалить событие в календаре
 *
 * @arg id
 * @text ID
 * @desc ID. Вычисляется с помощью Javascript.
 * @type combo
 * @option
 * @option $gameVariables.value(ID)



 * @param holidays
 * @text Праздники
 * @desc Праздники
 * @type struct<Holiday>[]
 * @default []

 * @param defaultCalendarEnabled
 * @text Календарь по умолчанию включен
 * @desc Включен ли календарь по умолчанию ?
 * @type boolean
 * @default true

 * @param firstDay
 * @text Первый день недели
 * @desc Первый день недели
 * @type select
 * @option Понедельник
 * @value 0
 * @option Воскресенье
 * @value 6
 * @default 0

 * @param Map
 * @text Карта
 * @default ---------------------------------

 * @param mapButton
 * @text Кнопка открытия календаря на карте
 * @parent Map
 * @desc Кнопка открытия календаря на карте. Оставьте пустым, чтобы не использовать.
 * @type combo
 * @option
 * @option control

 * @param mapOpenSE
 * @text Звук открытия календаря
 * @parent Map
 * @desc Звук открытия календаря
 * @type struct<SE>
 * @default {"name":"","volume":"90","pitch":"100","pan":"0"}

 * @param Menu
 * @text Меню
 * @default ---------------------------------

 * @param menuCommandName
 * @text Название команды меню
 * @parent Menu
 * @desc Название команды меню
 * @default Calendar

 * @param Colors
 * @text Цвета
 * @default ---------------------------------

 * @param todayColor
 * @text Цвет сегодняшнего дня
 * @parent Colors
 * @desc Цвет сегодняшнего дня. Цвет в hex формате или номер цвета окна.
 * @type combo
 * @option 3
 * @option #ffffff
 * @default 3

 * @param weekendsColor
 * @text Цвет выходных
 * @parent Colors
 * @desc Цвет выходных. Цвет в hex формате или номер цвета окна.
 * @type combo
 * @option 2
 * @option #ffffff
 * @default 2

 * @param eventsIndicatorColor
 * @text Цвет индикатора событий
 * @parent Colors
 * @desc Цвет индикатора событий. Цвет в hex формате или номер цвета окна.
 * @type combo
 * @option 14
 * @option #ffaa00
 * @default 14

 * @param Terms
 * @text Термины
 * @default ---------------------------------

 * @param helpWindowFormat
 * @text Формат окна помощи
 * @parent Terms
 * @desc Формат окна помощи. Информация о форматах в плагине Game Time.
 * @default %DD %MMMM %YYYY

 * @param noEvents
 * @text Нет событий
 * @parent Terms
 * @desc Нет событий
 * @default Нет событий

 * @param allDay
 * @text Весь день
 * @parent Terms
 * @desc Весь день
 * @default Весь день

 * @param location
 * @text Место
 * @parent Terms
 * @desc Место
 * @default Место

 * @param description
 * @text Описание
 * @parent Terms
 * @desc Описание
 * @default Описание

 * @param start
 * @text Начало
 * @parent Terms
 * @desc Начало
 * @default Начало

 * @param end
 * @text Окончание
 * @parent Terms
 * @desc Окончание
 * @default Окончание

*/

/*~struct~Holiday:

 * @param name
 * @text Name
 * @desc Name

 * @param iconIndex
 * @text Icon index
 * @desc Icon index
 * @type number
 * @default 0

 * @param description
 * @text Description
 * @desc Description (supports a special characters)
 * @type note
 * @default ""

 * @param location
 * @text Location
 * @desc Location (supports a special characters)
 * @type note
 * @default ""

 * @param switch
 * @text Switch
 * @desc Switch that turns on when a holiday occurs
 * @type switch
 * @default 0

 * @param date
 * @text Date
 * @desc Date
 * @type struct<Date>
 * @default {"day":"1","month":"0","year":"0"}

 * @param repeatType
 * @text Repeat type
 * @desc Repeat type
 * @type select
 * @option None
 * @value
 * @option Monthly
 * @value monthly
 * @option Yearly
 * @value yearly

*/

/*~struct~Holiday:ru

 * @param name
 * @text Название праздника
 * @desc Название праздника

 * @param iconIndex
 * @text Номер иконки
 * @desc Номер иконки
 * @type number
 * @default 0

 * @param description
 * @text Описание праздника
 * @desc Описание праздника (поддерживает специальные символы)
 * @type note
 * @default ""

 * @param location
 * @text Место праздника
 * @desc Место праздника (поддерживает специальные символы)
 * @type note
 * @default ""

 * @param switch
 * @text Переключатель
 * @desc Переключатель, который включается при наступлении праздника
 * @type switch
 * @default 0

 * @param date
 * @text Дата праздника
 * @desc Дата праздника
 * @type struct<Date>
 * @default {"day":"1","month":"0","year":"0"}

 * @param repeatType
 * @text Тип повтора
 * @desc Тип повтора
 * @type select
 * @option Нет
 * @value
 * @option Ежемесячно
 * @value monthly
 * @option Ежегодно
 * @value yearly

*/

/*~struct~Date:

 * @param day
 * @text Day
 * @desc Day
 * @type number
 * @min 1
 * @default 1

 * @param month
 * @text Month
 * @desc Month
 * @type number
 * @min 0
 * @default 0

 * @param year
 * @text Year
 * @desc Year
 * @type number
 * @min 0
 * @default 0

*/

/*~struct~Date:ru

 * @param day
 * @text День
 * @desc День
 * @type number
 * @min 1
 * @default 1

 * @param month
 * @text Месяц
 * @desc Месяц
 * @type number
 * @min 0
 * @default 0

 * @param year
 * @text Год
 * @desc Год
 * @type number
 * @min 0
 * @default 0

*/

/*~struct~Event:

 * @param name
 * @text Name
 * @desc Name

 * @param iconIndex
 * @text Icon index
 * @desc Icon index
 * @type number
 * @default 0

 * @param description
 * @text Description
 * @desc Description (supports a special characters)
 * @type note

 * @param location
 * @text Location
 * @desc Location (supports a special characters)
 * @type note

 * @param switch
 * @text Switch
 * @desc Switch that turns on when an event occurs
 * @type switch
 * @default 0

 * @param start
 * @text Start date and time
 * @desc Start date and time
 * @type struct<DateTime>
 * @default {"sec":"0","min":"0","hour":"0","day":"1","month":"0","year":"0"}

 * @param end
 * @text End date and time
 * @desc End date and time
 * @type struct<DateTime>
 * @default {"sec":"0","min":"0","hour":"0","day":"1","month":"0","year":"0"}

*/

/*~struct~Event:ru

 * @param name
 * @text Назване
 * @desc Назване

 * @param iconIndex
 * @text Номер иконки
 * @desc Номер иконки
 * @type number
 * @default 0

 * @param description
 * @text Описание события
 * @desc Описание события (поддерживает специальные символы)
 * @type note

 * @param location
 * @text Место события
 * @desc Место события (поддерживает специальные символы)
 * @type note

 * @param switch
 * @text Переключатель
 * @desc Переключатель, который включается при наступлении события
 * @type switch
 * @default 0

 * @param start
 * @text Дата/время начала события
 * @desc Дата/время начала события
 * @type struct<DateTime>
 * @default {"sec":"0","min":"0","hour":"0","day":"1","month":"0","year":"0"}

 * @param end
 * @text Дата/время окончания события
 * @desc Дата/время окончания события
 * @type struct<DateTime>
 * @default {"sec":"0","min":"0","hour":"0","day":"1","month":"0","year":"0"}

*/

/*~struct~DateTime:

 * @param sec
 * @text Seconds
 * @desc Seconds. Calculated with Javascript.
 * @default 0

 * @param min
 * @text Minutes
 * @desc Minutes. Calculated with Javascript.
 * @default 0

 * @param hour
 * @text Hour
 * @desc Hour. Calculated with Javascript.
 * @default 0

 * @param day
 * @text Day
 * @desc Day. Calculated with Javascript.
 * @default 1

 * @param month
 * @text Month
 * @desc Month. Calculated with Javascript.
 * @default 0

 * @param year
 * @text Year
 * @desc Year. Calculated with Javascript.
 * @default 0

*/

/*~struct~DateTime:ru

 * @param sec
 * @text Секунды
 * @desc Секунды. Вычисляется с помощью Javascript.
 * @default 0

 * @param min
 * @text Минуты
 * @desc Минуты. Вычисляется с помощью Javascript.
 * @default 0

 * @param hour
 * @text Час
 * @desc Час. Вычисляется с помощью Javascript.
 * @default 0

 * @param day
 * @text День
 * @desc День. Вычисляется с помощью Javascript.
 * @default 1

 * @param month
 * @text Месяц
 * @desc Месяц. Вычисляется с помощью Javascript.
 * @default 0

 * @param year
 * @text Год
 * @desc Год. Вычисляется с помощью Javascript.
 * @default 0

*/

/*~struct~SE:

 * @param name
 * @text Filename
 * @desc Filename. Leave blank to not use.
 * @type file
 * @dir audio/se/
 * @require 1

 * @param volume
 * @text Volume
 * @desc Volume
 * @type number
 * @min 1
 * @max 100
 * @default 90

 * @param pitch
 * @text Pitch
 * @desc Pitch
 * @type number
 * @min 50
 * @max 150
 * @default 100

 * @param pan
 * @text Panorama
 * @desc Panorama
 * @type number
 * @min -100
 * @max 100
 * @default 0

*/

/*~struct~SE:ru

 * @param name
 * @text Файл
 * @desc Файл. Оставьте пустым, чтобы не использовать.
 * @type file
 * @dir audio/se/
 * @require 1

 * @param volume
 * @text Громкость
 * @desc Громкость
 * @type number
 * @min 0
 * @max 100
 * @default 90

 * @param pitch
 * @text Темп
 * @desc Темп
 * @type number
 * @min 50
 * @max 150
 * @default 100

 * @param pan
 * @text Панорама
 * @desc Панорама
 * @type number
 * @min -100
 * @max 100
 * @default 0

*/

'use strict';

var Imported = Imported || {};
Imported['DK_Game_Time_Calendar'] = '1.2.0';

if (Imported['DK_Game_Time']) {
    const pluginVersion = Imported['DK_Game_Time'];
    const requiredVersion = '2.6.2';

    if (!Game_Time.checkVersion(requiredVersion)) {
        throw new Error(
            'Required to update the plugin "DK_Game_Time" to minimal version %1 (Installed: %2)'
                .format(requiredVersion, pluginVersion));
    }
} else {
    throw new Error('No plugin "DK_Game_Time"! Plugin "DK_Game_Time_Calendar" will not work!');
}

/**
 * @global
 * @type {Game_Calendar}
 */
var $gameCalendar = null;

//===========================================================================
// initialize parameters
//===========================================================================

const GameTimeCalendarParams = (function() {

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
        } catch(e) {
            return string;
        }
    }

    const parameters = PluginManager.parameters('DK_Game_Time_Calendar');

    return Object.entries(parameters).reduce((acc, [key, value]) => {
        acc[key] = parse(value);

        return acc;
    }, {});

})();

//===========================================================================
// initialize plugin commands
//===========================================================================

const GameTimeCalendar_Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    GameTimeCalendar_Game_Interpreter_pluginCommand.apply(this, arguments);

    switch (command) {
        case 'EnableCalendar': {
            $gameSystem.setCalendarEnabled(true);
            break;
        }
        case 'DisableCalendar': {
            $gameSystem.setCalendarEnabled(false);
            break;
        }
        case 'OpenCalendar': {
            SceneManager.push(Scene_Calendar);
            break;
        }
        case 'OpenCalendarWithDate': {
            const gameTime = new Game_Time({
                day: Number(args[0]),
                month: Number(args[1]),
                year: Number(args[2])
            });

            SceneManager.push(Scene_Calendar);
            SceneManager.prepareNextScene(gameTime);
            break;
        }
        case 'RemoveCalendarEvent': {
            $gameCalendar.removeById(eval(args[0]));
            break;
        }
    }
};

if (Utils.RPGMAKER_NAME === 'MZ') {

    PluginManager.registerCommand('DK_Game_Time_Calendar', 'EnableCalendar', () => {
        $gameSystem.setCalendarEnabled(true);
    });

    PluginManager.registerCommand('DK_Game_Time_Calendar', 'DisableCalendar', () => {
        $gameSystem.setCalendarEnabled(false);
    });

    PluginManager.registerCommand('DK_Game_Time_Calendar', 'OpenCalendar', () => {
        SceneManager.push(Scene_Calendar);
    });

    PluginManager.registerCommand('DK_Game_Time_Calendar', 'OpenCalendarWithDate', (args) => {
        const date = JSON.parse(args.date);
        const gameTime = new Game_Time({
            day: Number(date.day),
            month: Number(date.month),
            year: Number(date.year)
        });

        SceneManager.push(Scene_Calendar);
        SceneManager.prepareNextScene(gameTime);
    });

    PluginManager.registerCommand('DK_Game_Time_Calendar', 'AddCalendarEvent', (args) => {
        const data = JSON.parse(args.event);
        const variable = Number(args.variable);

        data.description = JSON.parse(data.description);
        data.location = JSON.parse(data.location);
        data.iconIndex = Number(data.iconIndex);
        data.switch = Number(data.switch);
        data.start = JSON.parse(data.start);
        data.end = JSON.parse(data.end);

        Object.keys(data.start).forEach((key) => {
            data.start[key] = eval(data.start[key]);
            data.end[key] = eval(data.end[key]);
        });

        const event = $gameCalendar.addEvent(data);

        if (variable > 0) {
            $gameVariables.setValue(variable, event.id);
        }
    });

    PluginManager.registerCommand('DK_Game_Time_Calendar', 'RemoveCalendarEvent', (args) => {
        $gameCalendar.removeById(eval(args.id));
    });

}

//===========================================================================
// Game_System
//===========================================================================

Game_System.prototype.isCalendarEnabled = function() {
    if (this._calendarEnabled === undefined) {
        this.setCalendarEnabled(GameTimeCalendarParams.defaultCalendarEnabled);
    }

    return this._calendarEnabled;
};

Game_System.prototype.setCalendarEnabled = function(enabled) {
    this._calendarEnabled = enabled || false;
};

//===========================================================================
// Game_Time.Calendar
//===========================================================================

class Game_Calendar {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    initialize() {
        /**
         * @type {Game_Calendar_Event[]}
         */
        this._events = [];
    }

    // A methods

    /**
     * @param {Object} data
     * @return {Game_Calendar_Event}
     */
    addEvent(data) {
        const event = new Game_Calendar_Event(
            Game_Calendar_Event.EVENT, data);

        this._events.push(event);

        return event;
    }

    // I methods

    /**
     * @return {Boolean}
     */
    isHoliday() {
        return this.getHolidays().length > 0;
    }

    // G methods

    /**
     * @param {Number} id
     * @return {Game_Calendar_Event}
     */
    getById(id) {
        return this._events.find(event => event.id === id);
    }

    /**
     * @param {Game_Time} gameTime
     * @return {Game_Calendar_Event[]}
     */
    getAllEvents(gameTime = $gameTime) {
        return this._events.filter((event) =>
            gameTime.inRangeDate(event.start, event.end))
                .concat(this.getHolidays(gameTime))
                    .sort((a, b) => {
                        if (a.type === Game_Calendar_Event.HOLIDAY) {
                            if (a.type === b.type) {
                                return 0;
                            }

                            return -1;
                        }

                        const result = a.start.compareToTime(b.start);

                        if (result === 0) {
                            return a.id - b.id;
                        }

                        return result;
        });
    }

    /**
     * @param {Game_Time} gameTime
     * @return {Game_Calendar_Event[]}
     */
    getEvents(gameTime = $gameTime) {
        return this._events.filter((event) =>
            gameTime.inRangeDate(event.start, event.end))
                .sort((a, b) => {
                    const result = a.start.compareToTime(b.start);

                    if (result === 0) {
                        return a.id - b.id;
                    }

                    return result;
        });
    }

    /**
     * @param {Game_Time} gameTime
     * @return {Game_Calendar_Event[]}
     */
    getHolidays(gameTime = $gameTime) {
        return GameTimeCalendarParams.holidays.reduce((acc, data) => {
            if (data.date.day !== gameTime.day) {
                return acc;
            }

            if (data.repeatType === 'monthly') {
                acc.push(new Game_Calendar_Event(
                    Game_Calendar_Event.HOLIDAY, {
                        start: gameTime.getDayStart(),
                        end: gameTime.getDayEnd(),
                        ...data
                    }));

                return acc;
            }

            if (data.repeatType === 'yearly' && data.date.month === gameTime.month) {
                acc.push(new Game_Calendar_Event(
                    Game_Calendar_Event.HOLIDAY, {
                        start: gameTime.getDayStart(),
                        end: gameTime.getDayEnd(),
                        ...data
                    }));

                return acc;
            }

            if (data.date.month === gameTime.month && data.date.year === gameTime.year) {
                acc.push(new Game_Calendar_Event(
                    Game_Calendar_Event.HOLIDAY, {
                        start: gameTime.getDayStart(),
                        end: gameTime.getDayEnd(),
                        ...data
                    }));
            }

            return acc;
        }, []);
    }

    // R methods

    /**
     * @param {Number} id
     * @return {Game_Calendar_Event | null}
     */
    removeById(id) {
        const index = this._events.findIndex(event => event.id === id);
        const event = this._events[index];

        if (index >= 0) {
            this._events.splice(index, 1);
        }

        return event || null;
    }

    // static methods

    static getNextEventId() {
        if (this._id === undefined) {
            this._id = 1;
        }

        return this._id++;
    }

    static makeSaveContents() {
        return { id: this._id };
    }

    static extractSaveContents(data) {
        this._id = data.id || undefined;
    }

    static update() {
        this.updateEvents();
    }

    static updateEvents() {
        $gameCalendar.getAllEvents().forEach((event) => {
            if (event.switch > 0) {
                $gameSwitches.setValue(event.switch, event.isHappens());
            }
        });
    }

}

//===========================================================================
// Game_Calendar_Event
//===========================================================================

class Game_Calendar_Event  {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    initialize(type, data) {
        if (type === Game_Calendar_Event.HOLIDAY) {
            this._id = -1;
        } else {
            this._id = Game_Calendar.getNextEventId();
        }

        this._type = type;
        this._name = data.name;
        this._iconIndex = data.iconIndex;
        this._description = data.description;
        this._location = data.location;
        this._switch = data.switch;
        this._start = data.start;
        this._end = data.end;

        if (this._start instanceof Object && !(this._start instanceof Game_Time)) {
            this._start = new Game_Time(this._start);
        }

        if (this._end instanceof Object && !(this._end instanceof Game_Time)) {
            this._end = new Game_Time(this._end);
        }
    }

    // I methods

    /**
     * @return {Boolean}
     */
    isAllDay() {
        return this._type === Game_Calendar_Event.HOLIDAY ||
            this._start.equalsTime(this._start.getDayStart()) &&
            this._end.equalsTime(this._end.getDayEnd());
    }

    /**
     * @return {Boolean}
     */
    isEnded() {
        return $gameTime.more(this._end);
    }

    /**
     * @return {Boolean}
     */
    isHappens() {
        return $gameTime.inRange(this._start, this._end);
    }

    /**
     * @return {Boolean}
     */
    isOneDay() {
        return this._start.equalsDate(this._end);
    }

    /**
     * @return {Boolean}
     */
    isStarted() {
        return $gameTime.moreEquals(this._start);
    }

    // properties

    get id() {
        return this._id;
    }

    get type() {
        return this._type;
    }

    get name() {
        return this._name;
    }

    get iconIndex() {
        return this._iconIndex;
    }

    get start() {
        return this._start;
    }

    get end() {
        return this._end;
    }

    get description() {
        return this._description;
    }

    get location() {
        return this._location;
    }

    get switch() {
        return this._switch;
    }

    // static properties

    static get HOLIDAY() {
        return 'holiday';
    }

    static get EVENT() {
        return 'event';
    }

}

//===========================================================================
// Hacks for JsonEx encode/decode. Makes visibility for classes in window
//===========================================================================

window.Game_Calendar = Game_Calendar;
window.Game_Calendar_Event = Game_Calendar_Event;

//===========================================================================
// Window_MenuCommand
//===========================================================================

const GameTimeCalendar_Window_MenuCommand_addMainCommands =
    Window_MenuCommand.prototype.addMainCommands;
Window_MenuCommand.prototype.addMainCommands = function() {
    GameTimeCalendar_Window_MenuCommand_addMainCommands.apply(this, arguments);

    if ($gameSystem.isCalendarEnabled() && GameTimeCalendarParams.menuCommandName) {
        this.addCommand(GameTimeCalendarParams.menuCommandName, 'calendar');
    }
};

//===========================================================================
// Scene_Map
//===========================================================================

const GameTimeCalendar_Scene_Map_updateGameTime =
    Scene_Map.prototype.updateGameTime;
Scene_Map.prototype.updateGameTime = function() {
    GameTimeCalendar_Scene_Map_updateGameTime.apply(this, arguments);
    Game_Calendar.update();
};

const GameTimeCalendar_Scene_Map_updateScene =
    Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function() {
    GameTimeCalendar_Scene_Map_updateScene.apply(this, arguments);

    if (!SceneManager.isSceneChanging()) {
        this.updateCallCalendar();
    }
};

Scene_Map.prototype.isCalendarEnabled = function() {
    return $gameSystem.isCalendarEnabled() && !$gameMap.isEventRunning();
};

Scene_Map.prototype.isCalendarCalled = function() {
    return Input.isTriggered(GameTimeCalendarParams.mapButton);
};

Scene_Map.prototype.updateCallCalendar = function() {
    if (this.isCalendarEnabled()) {
        if (this.isCalendarCalled()) {
            this.calendarCalling = true;
        }

        if (this.calendarCalling && !$gamePlayer.isMoving()) {
            this.callCalendar();
        }
    } else {
        this.calendarCalling = false;
    }
};

Scene_Map.prototype.callCalendar = function() {
    const se = GameTimeCalendarParams.mapOpenSE;

    if (se && se.name) {
        AudioManager.playSe(se);
    }

    SceneManager.push(Scene_Calendar);

    $gameTemp.clearDestination();

    this._mapNameWindow.hide();
    this._waitCount = 2;
};

//===========================================================================
// Scene_Menu
//===========================================================================

const GameTimeCalendar_Scene_Menu_createCommandWindow =
    Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
    GameTimeCalendar_Scene_Menu_createCommandWindow.apply(this, arguments);

    if (this._commandWindow) {
        this._commandWindow.setHandler('calendar', this.commandCalendar.bind(this));
    }
};

Scene_Menu.prototype.commandCalendar = function() {
    SceneManager.push(Scene_Calendar);
};

//===========================================================================
// Window_Calendar
//===========================================================================

class Window_Calendar extends Window_Command {

    initialize(rect, gameTime) {
        this._gameTime = gameTime;

        rect.height = this.fittingHeight(6) + this.lineHeight();

        if (Utils.RPGMAKER_NAME === 'MV') {
            this._windowWidth = rect.width;
            this._windowHeight = rect.height;

            super.initialize(rect.x, rect.y);
        } else {
            super.initialize(rect);
        }
    }

    windowWidth() {
        return this._windowWidth;
    }

    windowHeight() {
        return this._windowHeight;
    }

    setDayWindow(dayWindow) {
        this._dayWindow = dayWindow;
    }

    changePaintOpacity(paintOpacity) {
        this.contents.paintOpacity = paintOpacity;
    }

    convertTextColor(color) {
        if (Number.isFinite(color)) {
            if (Utils.RPGMAKER_NAME === 'MV') {
                return this.textColor(color);
            } else {
                return ColorManager.textColor(color);
            }
        }

        return color || this.normalColor();
    }

    normalColor() {
        return Utils.RPGMAKER_NAME === 'MV' ?
            super.normalColor() : ColorManager.normalColor();
     }

    maxCols() {
        return Game_Time.getDaysInWeek();
    }

    maxDays() {
        return this.maxCols() * this.maxPageRows();
    }

    makeCommandList() {
        const firstDay = GameTimeCalendarParams.firstDay || Game_Time.MONDAY;
        const dayWeek = this._gameTime.clone().remDay(this._gameTime.day - 1).dayWeek;
        const maxCols = this.maxCols();
        const daysInMonth = this._gameTime.getDaysInMonth();
        const month = this._gameTime.month;
        const year = this._gameTime.year;
        const maxDays = this.maxDays();
        const items = this._list;
        let preDays = dayWeek;

        if (firstDay === Game_Time.SUNDAY) {
            preDays = -(((dayWeek + 1) % Game_Time.getDaysInWeek()) - maxCols);
        }

        if (preDays > 0) {
            const gameTime = this._gameTime.clone().remMonth(1);
            const days = gameTime.getDaysInMonth();
            const month = gameTime.month;
            const year = gameTime.year;

            for (let i = preDays; i > 0; i--) {
                this.addCommand(days - i + 1, 'ok',
                    true, new Game_Time({ day: days - i + 1, month, year }));
            }
        }

        for (let i = 1; i <= daysInMonth; i++) {
            this.addCommand(i, 'ok', true, new Game_Time({ day: i, month, year }));
        }

        if (items.length < maxDays) {
            const gameTime = this._gameTime.clone().addMonth(1);
            const month = gameTime.month;
            const year = gameTime.year;

            for (let i = 1; items.length < maxDays; i++) {
                this.addCommand(i, 'ok', true, new Game_Time({ day: i, month, year }));
            }
        }
    }

    cursorLeft(wrap) {
        if (wrap && this._index === 0) {
            this.cursorPageup();
        } else {
            super.cursorLeft.apply(this, arguments);
        }
    }

    cursorRight(wrap) {
        if (wrap && this._index === this.maxItems() - 1) {
            this.cursorPagedown();
        } else {
            super.cursorRight.apply(this, arguments);
        }
    }

    cursorUp(wrap) {
        if (wrap && this.row() === 0) {
            this.cursorPageup();
        } else {
            super.cursorUp.apply(this, arguments);
        }
    }

    cursorDown(wrap) {
        if (wrap && this.row() === Math.min(this.maxRows(), this.maxPageRows()) - 1) {
            this.cursorPagedown();
        } else {
            super.cursorDown.apply(this, arguments);
        }
    }

    cursorPageup() {
        SceneManager._scene.previousActor();
    }

    cursorPagedown() {
        SceneManager._scene.nextActor();
    }

    itemRect(index) {
        const rect = super.itemRect.apply(this, arguments);

        rect.y += this.lineHeight();

        return rect;
    }

    itemLineRect(index) {
        if (typeof super.itemLineRect === 'function') {
            return super.itemLineRect(index);
        }

        return this.itemRectForText(index);
    }

    itemTextAlign() {
        return 'center';
    }

    itemTextColor(index) {
        const ext = this.itemExt(index);

        if ($gameTime.day === ext.day && $gameTime.month === ext.month && $gameTime.year === ext.year) {
            return this.convertTextColor(GameTimeCalendarParams.todayColor);
        }

        return this.normalColor();
    }

    itemNotificationColor(index) {
        return this.convertTextColor(GameTimeCalendarParams.eventsIndicatorColor);
    }

    itemPaintOpacity(index) {
        const ext = this.itemExt(index);
        return this._gameTime.month === ext.month ?
            255 : this.translucentOpacity();
    }

    itemExt(index) {
        const item = this._list[index];
        return (item ? item.ext : null);
    }

    onChangeMonth() {
        this.refresh();
    }

    onSelect() {
        if (this._selectHandler) {
            this._selectHandler(this._index, this);
        }
    }

    setSelectHandler(handler) {
        this._selectHandler = handler;
    }

    updateArrows() {
        this.upArrowVisible = true;
        this.downArrowVisible = true;
    }

    drawAllItems() {
        this.contents.fontSize -= 4;

        this.resetFontSettings();
        this.changePaintOpacity(255);

        const firstDay = GameTimeCalendarParams.firstDay || Game_Time.MONDAY;
        let offset = 0;

        if (firstDay === Game_Time.SUNDAY) {
            this.drawDayShortName(firstDay, this.itemLineRect(0));

            offset = 1;
        }

        for (let i = 0; i < Game_Time.getDaysInWeek() - offset; i++) {
            this.drawDayShortName(i, this.itemLineRect(i + offset));
        }

        this.resetFontSettings();

        super.drawAllItems.apply(this, arguments);
    }

    drawDayShortName(day, rect) {
        if (GameTimeParams.daysWeek[day].dayOff) {
            this.changeTextColor(
                this.convertTextColor(GameTimeCalendarParams.weekendsColor));
        } else {
            this.resetTextColor();
        }

        this.drawText(GameTimeParams.daysWeek[day].shortName,
            rect.x, rect.y - this.lineHeight(), rect.width, 'center');
    }

    drawItem(index) {
        const rect = this.itemLineRect(index);
        const align = this.itemTextAlign();
        const gameTime = this.itemExt(index);

        this.changeTextColor(this.itemTextColor(index));
        this.changePaintOpacity(this.itemPaintOpacity(index));
        this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);

        if ($gameCalendar.getEvents(gameTime).length > 0) {
            this.drawEventsIndicator(index);
        }
    }

    drawEventsIndicator(index) {
        const rect = this.itemLineRect(index);

        this.contents.drawCircle(rect.x + rect.width + 2, rect.y + 4, 3, this.itemNotificationColor(index));
    }

    playOkSound() {
        if (this._dayWindow.maxItems() > 0) {
            SoundManager.playOk();
        } else {
            this.playBuzzerSound();
        }
    }

    processWheelScroll() {
        if (this.isWheelScrollEnabled() && this.isTouchedInsideFrame()) {
            const threshold = 20;

            if (TouchInput.wheelY >= threshold) {
                this.cursorPagedown();
            }

            if (TouchInput.wheelY <= -threshold) {
                this.cursorPageup();
            }
        }
    }

    scrollDown() {
        this.cursorPagedown();
    }

    scrollUp() {
        this.cursorPageup();
    }

    select(index) {
        super.select.apply(this, arguments);
        this.onSelect();
    }

    selectFirstItem() {
        this.select(0);
    }

    selectLasItem() {
        this.select(this.maxItems() - 1);
    }

    selectExt(gameTime) {
        const index = this._list.findIndex(
            item => item.ext.equalsDate(gameTime));

        if (index >= 0) {
            this.select(index);
        }
    }

}

//===========================================================================
// Window_CalendarDay
//===========================================================================

class Window_CalendarDay extends Window_Command {

    initialize(rect, gameTime) {
        this._gameTime = gameTime;

        if (Utils.RPGMAKER_NAME === 'MV') {
            this._windowWidth = rect.width;
            this._windowHeight = rect.height;

            super.initialize(rect.x, rect.y, rect.width, rect.height);
        } else {
            super.initialize(rect);
        }
    }

    windowWidth() {
        return this._windowWidth;
    }

    windowHeight() {
        return this._windowHeight;
    }

    setGameTime(gameTime) {
        if (this._gameTime !== gameTime) {
            this._gameTime = gameTime;
            this.refresh();
        }
    }

    makeCommandList() {
        const events = $gameCalendar.getAllEvents(this._gameTime);

        events.forEach((event) => {
            this.addCommand(event.name, 'ok', true, event);
        });
    }

    convertTextColor(color) {
        if (Number.isFinite(color)) {
            if (Utils.RPGMAKER_NAME === 'MV') {
                return this.textColor(color);
            } else {
                return ColorManager.textColor(color);
            }
        }

        return color || this.normalColor();
    }

    normalColor() {
        return Utils.RPGMAKER_NAME === 'MV' ?
            super.normalColor() : ColorManager.normalColor();
    }

    itemLineRect(index) {
        if (typeof super.itemLineRect === 'function') {
            return super.itemLineRect(index);
        }

        return this.itemRectForText(index);
    }

    itemTextAlign() {
        return 'left';
    }

    itemTextColor(index) {
        return this.normalColor();
    }

    itemExt(index) {
        const item = this._list[index];
        return (item ? item.ext : null);
    }

    selectPrevItem() {
        const maxItems = this.maxItems();

        if (maxItems > 1) {
            if (this._index === 0) {
                this.select(maxItems - 1);
            } else {
                this.select(this._index - 1);
            }
        }
    }

    selectNextItem() {
        const maxItems = this.maxItems();

        if (maxItems > 1) {
            if (this._index + 1 === maxItems) {
                this.select(0);
            } else {
                this.select(this._index + 1);
            }
        }
    }

    drawItem(index) {
        const rect = this.itemLineRect(index);
        const name = this.commandName(index);
        const align = this.itemTextAlign();
        const event = this.itemExt(index);

        this.changeTextColor(this.itemTextColor(index));
        this.changePaintOpacity(this.isCommandEnabled(index) && !event.isEnded());

        if (event.iconIndex > 0) {
            this.drawItemName({ name, iconIndex: event.iconIndex, meta: {} }, rect.x, rect.y);
        } else {
            this.drawText(name, rect.x, rect.y, rect.width, align);
        }

        if (event.isAllDay()) {
            this.drawText(GameTimeCalendarParams.allDay, rect.x, rect.y, rect.width, 'right');
        } else {
            if (event.isOneDay()) {
                this.drawText(
                    event.start.format('%HH:%mm') + ' - ' + event.end.format('%HH:%mm'),
                    rect.x, rect.y, rect.width, 'right');
            } else if (this._gameTime.equalsDate(event.start)) {
                this.drawText(event.start.format('%HH:%mm'),
                    rect.x, rect.y, rect.width, 'right');
            } else {
                this.drawText(event.end.format('%HH:%mm'),
                    rect.x, rect.y, rect.width, 'right');
            }
        }
    }

    paint() {
        if (this.maxItems() === 0) {
            this.contents.clear();
            this.contentsBack && this.contentsBack.clear();

            this.changeTextColor(this.normalColor());
            this.changePaintOpacity(true);

            this.contents.drawText(GameTimeCalendarParams.noEvents, 0, 0,
                this.innerWidth || this.contents.width,
                this.innerHeight || this.contents.height, 'center');
        } else {
            super.paint.apply(this, arguments);
        }
    }

}

//===========================================================================
// Window_CalendarEvent
//===========================================================================

class Window_CalendarEvent extends Window_Base {

    initialize(rect) {
        if (Utils.RPGMAKER_NAME === 'MV') {
            super.initialize(rect.x, rect.y, rect.width, rect.height);
        } else {
            super.initialize(rect);
        }
    }

    setEvent(event) {
        if (this._event !== event) {
            this._event = event;
            this.refresh();
        }
    }

    setCancelHandler(handler) {
        this._cancelHandler = handler;
    }

    drawEventName(x, y) {
        if (this._event.iconIndex > 0) {
            const iconWidth = Utils.RPGMAKER_NAME === 'MV' ?
                Window_Base._iconWidth : ImageManager.iconWidth;
            const iconHeight = Utils.RPGMAKER_NAME === 'MV' ?
                Window_Base._iconHeight : ImageManager.iconHeight;
            const iconOffsetX = 4; // from drawItemName
            const iconOffsetY = (this.lineHeight() - iconHeight) / 2; // from drawItemName
            const width = iconWidth + iconOffsetX + this.textWidth(this._event.name);
            const x = (this.contents.width - width) / 2;

            this.drawIcon(this._event.iconIndex, x, y + iconOffsetY);
            this.drawText(this._event.name, x + iconWidth + iconOffsetX,
                y, this.contents.width);
        } else {
            this.drawText(this._event.name, 0, y, this.contents.width, 'center');
        }
    }

    drawLocation(x, y) {
        const text = GameTimeCalendarParams.location + ': ';
        const textWidth = this.textWidth(text);

        this.drawText(text, x, y, this.contents.width);
        this.drawTextEx(this._event.location, textWidth, y);
    }

    drawStart(x, y) {
        this.drawText(`${GameTimeCalendarParams.start}: ${this._event.start.format('%DD %MMMM %YYYY %HH:%mm')}`,
            x, y, this.contents.width);
    }

    drawEnd(x, y) {
        this.drawText(`${GameTimeCalendarParams.end}: ${this._event.end.format('%DD %MMMM %YYYY %HH:%mm')}`,
            x, y, this.contents.width);
    }

    drawDescription(x, y) {
        const text = GameTimeCalendarParams.description + ':';

        this.drawText(text, x, y, this.contents.width);

        y += this.lineHeight();

        this.drawTextEx(this._event.description, x, y);
    }

    refresh() {
        this.contents.clear();

        const lineHeight = this.lineHeight();
        let y = 0;

        this.drawEventName(0, y);

        y += lineHeight;

        if (this._event.location) {
            this.drawLocation(0, y);
        }

        y += lineHeight;

        this.drawStart(0, y);

        y += lineHeight;

        this.drawEnd(0, y);

        y += lineHeight;

        if (this._event.description) {
            this.drawDescription(0, y);

            y += lineHeight;
        }
    }

    update() {
        super.update();

        if (this.isOpen() && (Input.isTriggered('cancel') || TouchInput.isCancelled()) && this._cancelHandler) {
            SoundManager.playCancel();
            this._cancelHandler();
        }
    }

}

//===========================================================================
// Scene_Calendar
//===========================================================================

class Scene_Calendar extends Scene_MenuBase {

    initialize() {
        super.initialize.apply(this, arguments);
        this._gameTime = $gameTime.clone();
    }

    prepare(gameTime) {
        this._gameTime = gameTime.clone();
    }

    create() {
        super.create.apply(this, arguments);
        this.createAllWindows();
    }

    createAllWindows() {
        this.createHelpWindow();
        this.createCalendarWindow();
        this.createDayWindow();
        this.createEventWindow();
    }

    createHelpWindow() {
        if (Utils.RPGMAKER_NAME === 'MV') {
            this._helpWindow = new Window_Help(1);
            this.addWindow(this._helpWindow);
        } else {
            super.createHelpWindow();
        }
    }

    createCalendarWindow() {
        const x = 0;
        const y = this._helpWindow.height;
        const width = Graphics.boxWidth;
        const height = 0;

        this._calendarWindow = new Window_Calendar(new Rectangle(x, y, width, height), this._gameTime);

        this._calendarWindow.selectExt(this._gameTime.date);
        this._calendarWindow.setHandler('ok', this.onCalendarOk.bind(this));
        this._calendarWindow.setHandler('cancel', this.popScene.bind(this));

        this._calendarWindow.setSelectHandler(this.onSelectDay.bind(this));

        this.addWindow(this._calendarWindow);
    }

    createDayWindow() {
        const x = this._calendarWindow.x;
        const y = this._calendarWindow.y + this._calendarWindow.height;
        const width = this._calendarWindow.width;
        const height = Graphics.boxHeight - y;

        this._dayWindow = new Window_CalendarDay(new Rectangle(x, y, width, height), this._gameTime);

        this._dayWindow.deactivate();
        this._dayWindow.deselect();
        this._dayWindow.setHandler('ok', this.onDayOk.bind(this));
        this._dayWindow.setHandler('cancel', this.onDayCancel.bind(this));

        this._calendarWindow.setDayWindow(this._dayWindow);

        this.addWindow(this._dayWindow);
    }

    createEventWindow() {
        const x = this._calendarWindow.x;
        const y = this._calendarWindow.y;
        const width = this._calendarWindow.width;
        const height = this._calendarWindow.height;

        this._eventWindow = new Window_CalendarEvent(new Rectangle(x, y, width, height));
        this._eventWindow.openness = 0;
        this._eventWindow.setCancelHandler(this.onEventCancel.bind(this));

        this.addWindow(this._eventWindow);
    }

    arePageButtonsEnabled() {
        return this._calendarWindow.active ||
            this._eventWindow.isOpen() && this._dayWindow.maxItems() > 1;
    }

    needsPageButtons() {
        return true;
    }

    helpWindowRect() {
        const x = (this._pagedownButton ?
            this._pagedownButton.x + this._pagedownButton.width + 8 : 0);
        const y = 0;
        const width = Graphics.boxWidth - x - (this._cancelButton ?
            this._cancelButton.width + 12 : 0);
        const height = this.calcWindowHeight(1, false);

        return new Rectangle(x, y, width, height);
    }

    start() {
        super.start();
        this.refreshHelp();
    }

    nextActor() {
        if (this._eventWindow.isOpen()) {
            this._dayWindow.selectNextItem();
            this._eventWindow.setEvent(this._dayWindow.currentExt());
        } else {
            this._gameTime.addMonth(1);
            this._calendarWindow.onChangeMonth();
            this._calendarWindow.selectFirstItem();
            this._dayWindow.refresh();
            this.refreshHelp();
        }
    }

    previousActor() {
        if (this._eventWindow.isOpen()) {
            this._dayWindow.selectPrevItem();
            this._eventWindow.setEvent(this._dayWindow.currentExt());
        } else {
            this._gameTime.remMonth(1);
            this._calendarWindow.onChangeMonth();
            this._calendarWindow.selectLasItem();
            this._dayWindow.refresh();
            this.refreshHelp();
        }
    }

    refreshHelp() {
        const gameTime = this._calendarWindow.currentExt();
        const text = gameTime.format(GameTimeCalendarParams.helpWindowFormat);

        this._helpWindow.contents.clear();
        this._helpWindow.drawText(text, 0, 0, this._helpWindow.contents.width, 'center');
    }

    onSelectDay() {
        this._dayWindow.setGameTime(this._calendarWindow.currentExt());
        this.refreshHelp();
    }

    onCalendarOk() {
        if (this._dayWindow.maxItems() > 0) {
            this._dayWindow.activate();
            this._dayWindow.select(0);
        } else {
            this._calendarWindow.activate();
        }
    }

    onDayOk() {
        this._eventWindow.setEvent(this._dayWindow.currentExt());
        this._calendarWindow.close();
        this._eventWindow.open();
    }

    onDayCancel() {
        this._dayWindow.deselect();
        this._calendarWindow.activate();
    }

    onEventCancel() {
        this._eventWindow.close();
        this._calendarWindow.open();
        this._dayWindow.activate();
    }

}

//=============================================================================
// DataManager
//=============================================================================

const GameTimeCalendar_DataManager_createGameObjects =
    DataManager.createGameObjects;
DataManager.createGameObjects = function() {
    GameTimeCalendar_DataManager_createGameObjects.apply(this, arguments);
    $gameCalendar = new Game_Calendar();
};

const GameTimeCalendar_DataManager_makeSaveContents =
    DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
    const contents = GameTimeCalendar_DataManager_makeSaveContents.apply(this, arguments);

    contents.gameCalendar       = $gameCalendar;
    contents.gameCalendarExtra  = Game_Calendar.makeSaveContents();

    return contents;
};

const GameTimeCalendar_DataManager_extractSaveContents =
    DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
    GameTimeCalendar_DataManager_extractSaveContents.apply(this, arguments);

    if (contents.gameCalendar) {
        $gameCalendar = contents.gameCalendar;
    }

    if (contents.gameCalendarExtra) {
        Game_Calendar.extractSaveContents(contents.gameCalendarExtra);
    }
};
