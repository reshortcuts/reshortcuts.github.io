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
            shortcuts.push({ short: 'shift-alt-l', alternateShort : null, name: 'Select file in Solution Explorer', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-space', alternateShort : null, name: 'Parameter info', count: 0 });

            return shortcuts;
        };

        var getLesson3 = function () {
            var shortcuts = [];

            shortcuts.push({ short: 'alt-up', alternateShort : null, name: 'Go to next member/tag', count: 0 });
            shortcuts.push({ short: 'alt-down', alternateShort : null, name: 'Go to previous member/tag', count: 0 });
            shortcuts.push({ short: 'ctrl-,', alternateShort : null, name: 'Recent files', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-1', alternateShort : null, name: 'Create bookmark 1 (you can use numbers 1 .. 9)', count: 0 });
            shortcuts.push({ short: 'ctrl-1', alternateShort : null, name: 'Go to bookmark 1 (you can use numbers 1 .. 9)', count: 0 });
            shortcuts.push({ short: 'ctrl-`', alternateShort : null, name: 'List of all bookmarks', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-,', alternateShort : null, name: 'Go to recent edits', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-f11', alternateShort : null, name: 'Go to type of symbol', count: 0 });
            shortcuts.push({ short: 'ctrl-alt-f7', alternateShort : null, name: 'Related files', count: 0 });
            // shortcuts.push({ short: 'CTRL-SHIFT-T', alternateShort : null, name: 'Go to file', count: 0 });

            return shortcuts;
        };

        var getLesson4 = function () {
            var shortcuts = [];

            shortcuts.push({ short: 'ctrl-r v', alternateShort : 'ctrl-r ctrl-v', name: 'Introduce variable', count: 0 });
            shortcuts.push({ short: 'ctrl-e l', alternateShort : 'ctrl-e ctrl-l', name: 'Live templates', count: 0 });
            shortcuts.push({ short: 'ctrl-alt-ins', alternateShort : null, name: 'File template', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-[', alternateShort : null, name: 'Select containing declaration', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-/', alternateShort : null, name: 'Comment with block comment', count: 0 });
            shortcuts.push({ short: 'ctrl-alt-/', alternateShort : null, name: 'Comment with line comment', count: 0 });

            return shortcuts;
        };

        var getLesson5 = function () {
            var shortcuts = [];

            shortcuts.push({ short: 'ctrl-shift-r', alternateShort : null, name: 'Refactor this', count: 0 });
            shortcuts.push({ short: 'ctrl-r s', alternateShort : 'ctrl-r ctrl-s', name: 'Change signature', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-alt-down', alternateShort : null, name: 'Move code down', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-alt-up', alternateShort : null, name: 'Move code up', count: 0 });
            shortcuts.push({ short: 'ctrl-r o', alternateShort : 'ctrl-r ctrl-o', name: 'Move to separate file', count: 0 });
            shortcuts.push({ short: 'alt-ctrl-shift-left', alternateShort : null, name: 'Move argument left', count: 0 });
            shortcuts.push({ short: 'alt-ctrl-shift-right', alternateShort : null, name: 'Move argument right', count: 0 });
            shortcuts.push({ short: 'ctrl-r m', alternateShort : 'ctrl-r ctrl-m', name: 'Extract method', count: 0 });
            shortcuts.push({ short: 'ctrl-r i', alternateShort : 'ctrl-r ctrl-i', name: 'Apply Inline refactoring', count: 0 });

            return shortcuts;
        };

        var getLesson6 = function () {
            var shortcuts = [];

            shortcuts.push({ short: 'ctrl-shift-alt-8', alternateShort : null, name: 'Toggle code analysis in the current file', count: 0 });
            shortcuts.push({ short: 'alt-pgdown', alternateShort : null, name: 'Go to next code issue', count: 0 });
            shortcuts.push({ short: 'alt-pgup', alternateShort : null, name: 'Go to previous code issue', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-alt-a', alternateShort : null, name: 'Inspect this', count: 0 });
            shortcuts.push({ short: 'ctrl-e c', alternateShort : 'ctrl-e ctrl-c', name: 'Code cleanup', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-alt-space', alternateShort : null, name: 'Parameter information', count: 0 });

            return shortcuts;
        };

        var getLesson7 = function () {
            var shortcuts = [];

            shortcuts.push({ short: 'ctrl-shift-backspace', alternateShort : null, name: 'Go to last edited location', count: 0 });
            shortcuts.push({ short: 'alt-`', alternateShort : null, name: 'Navigate to…', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-alt-a', alternateShort : null, name: 'Value origin and destination', count: 0 });
            shortcuts.push({ short: 'shift-alt-pgdown', alternateShort : null, name: 'Move to next error', count: 0 });
            shortcuts.push({ short: 'shift-alt-pgup', alternateShort : null, name: 'Move to previous error', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-9', alternateShort : null, name: 'Create bookmark 9 (you can use numbers 1 .. 9)', count: 0 });
            shortcuts.push({ short: 'ctrl-9', alternateShort : null, name: 'Go to bookmark 9 (you can use numbers 1 .. 9)', count: 0 });
            shortcuts.push({ short: 'ctrl-[', alternateShort : null, name: 'Go to containing declaration', count: 0 });

            return shortcuts;
        };

        var getLesson8 = function () {
            var shortcuts = [];

            shortcuts.push({ short: 'ctrl-alt-u', alternateShort : null, name: 'Unit Test Explorer', count: 0 });
            shortcuts.push({ short: 'ctrl-alt-t', alternateShort : null, name: 'Unit Test Sessions', count: 0 });
            shortcuts.push({ short: 'ctrl-u l', alternateShort : 'ctrl-u ctrl-l', name: 'Run all Unit Tests in solution', count: 0 });
            shortcuts.push({ short: 'ctrl-u y', alternateShort : 'ctrl-u ctrl-y', name: 'Run Unit Tests from current session', count: 0 });
            shortcuts.push({ short: 'ctrl-u r', alternateShort : 'ctrl-u ctrl-r', name: 'Run unit tests', count: 0 });
            shortcuts.push({ short: 'ctrl-u d', alternateShort : 'ctrl-u ctrl-d', name: 'Debug unit tests', count: 0 });

            return shortcuts;
        };

        var getLesson9 = function () {
            var shortcuts = [];

            shortcuts.push({ short: 'ctrl-alt-f', alternateShort : null, name: 'Structure window', count: 0 });
            shortcuts.push({ short: 'ctrl-alt-v', alternateShort : null, name: 'Inspection Results window', count: 0 });
            shortcuts.push({ short: 'ctrl-e t', alternateShort : 'ctrl-e ctrl-t', name: 'Stack Trace Explorer', count: 0 });
            shortcuts.push({ short: 'ctrl-e h', alternateShort : 'ctrl-e ctrl-h', name: 'Hierarchies window', count: 0 });
            shortcuts.push({ short: 'ctrl-alt-d', alternateShort : null, name: 'Todo lists', count: 0 });
            shortcuts.push({ short: 'ctrl-shift-v', alternateShort : null, name: 'Paste multiple', count: 0 });

            return shortcuts;
        };

        return {
            getLesson1: getLesson1,
            getLesson2: getLesson2,
            getLesson3: getLesson3,
            getLesson4: getLesson4,
            getLesson5: getLesson5,
            getLesson6: getLesson6,
            getLesson7: getLesson7,
            getLesson8: getLesson8,
            getLesson9: getLesson9
        };
    };
} (jQuery));