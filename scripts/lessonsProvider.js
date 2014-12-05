(function ($) {
    "use strict";

    var reShortcuts = window.reShortcuts = window.reShortcuts || {};

    reShortcuts.lessonsProvider = function () {
        var getLesson1 = function () {
            var shortcuts = [];

            shortcuts.push({ short: 'ctrl-e u', alternateShort : 'ctrl-e ctrl-u', name: 'Surround with', count: 0 });
            // shortcuts.push({ short: 'ctrl-t', alternateShort : null, name: 'Go to everything', count: 0 });
            shortcuts.push({ short: 'alt-enter', alternateShort : null, name: 'Available quick-fixes and context actions', count: 0 });
            shortcuts.push({ short: 'ctrl-space', alternateShort : null, name: 'Code completion', count: 0 });
            shortcuts.push({ short: 'ctrl-alt-space', alternateShort : null, name: 'Smart code completion', count: 0 });
            shortcuts.push({ short: 'alt-\\', alternateShort : null, name: 'Go to file member', count: 0 });
            shortcuts.push({ short: 'f12', alternateShort : null, name: 'Go to declaration', count: 0 });
            shortcuts.push({ short: 'ctrl-f12', alternateShort : null, name: 'Go to implementation', count: 0 });
            shortcuts.push({ short: 'ctrl-r r', alternateShort : 'ctrl-r ctrl-r', name: 'Rename', count: 0 });

            return shortcuts;
        };

        var getLesson2 = function () {
            var shortcuts = [];

            shortcuts.push({ short: 'alt-del', alternateShort : null, name: 'Safe delete', count: 0 });
            shortcuts.push({ short: 'ctrl-d', alternateShort : null, name: 'Duplicate a line or selection', count: 0 });
            shortcuts.push({ short: 'alt-ins', alternateShort : null, name: 'Generate code', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-f1', alternateShort : null, name: 'Quick documentation', count: 0 });
            shortcuts.push({ short: 'alt-home', alternateShort : null, name: 'Go to base symbols', count: 0 });
            shortcuts.push({ short: 'alt-ctrl-f', alternateShort : null, name: 'File Structure window', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-r', alternateShort : null, name: 'Refactor this', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-space', alternateShort : null, name: 'Parameter info', count: 0 });

            return shortcuts;
        };

        return {
            getLesson1: getLesson1,
            getLesson2: getLesson2
        };
    };
} (jQuery));