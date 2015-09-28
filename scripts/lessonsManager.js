(function ($) {
    "use strict";

    var reShortcuts = window.reShortcuts;
    var lessonsProvider = reShortcuts.lessonsProvider();

    reShortcuts.lessonsManager = function () {
        var currentShortcut = null;
        var shortcuts = new Array();

        var maxProgress = 0;
        var currentProgress = 0;

        var wrongHandler = function (e, shortcut) {
            var reshortcutsKey = $('#reshortcuts-key');

            reshortcutsKey.removeClass();
            reshortcutsKey.addClass('alert-danger text-center');
            $('#reshortcuts-key-value').text(e.wrong);

            setTimeout(function () {
                reshortcutsKey.removeClass();
                reshortcutsKey.addClass('alert-info text-center');
                $('#reshortcuts-key-value').text(displayShortcut(shortcut.short));
            }, 1000);
        }

        var updateProgress = function () {
            var progressPercentage = Math.floor(currentProgress / maxProgress * 100);
            var progressPercentageLeft = 100 - progressPercentage;

            $('#progress').width(progressPercentage + '%');
            $('#progress-left').width(progressPercentageLeft + '%');
        }

        var displayEndLesson = function () {
            keymage.clearChains();
            $('#thankYou').modal('show');
            $('#thankYou').on('hidden.bs.modal', function () {
                window.location = "/";
            })
        }

        var successHandler = function (shortcut) {
            var reshortcutsKey = $('#reshortcuts-key');

            reshortcutsKey.removeClass();
            reshortcutsKey.addClass('alert-success text-center');
            $('#reshortcuts-key-value').text(displayShortcut(shortcut.short));

            shortcut.count += 1;
            currentProgress += 1;

            updateProgress();


            if (currentProgress === maxProgress) {
                displayEndLesson();
            } else {
                setTimeout(initShortcut, 1000);
            }
        }

        var displayShortcut = function (short) {
            return short.replace(/-/g, "+").replace(/ /g, ", ").toUpperCase();
        }

        var getShortcut = function () {
            var i = Math.floor(Math.random() * shortcuts.length);
            var s = shortcuts[i];

            if (s.count >= 5) {
                shortcuts.splice(i, 1);

                return getShortcut();
            }

            return s;
        }

        var initShortcut = function () {
            var shortcut = getShortcut();

            var reshortcutsKey = $('#reshortcuts-key');

            reshortcutsKey.removeClass();
            reshortcutsKey.addClass('alert-info text-center');
            $('#reshortcut-command').text(shortcut.name + ':');

            if (shortcut.count < 2) {
                $('#reshortcuts-key-value').text(displayShortcut(shortcut.short));
            } else {
                $('#reshortcuts-key-value').html('? ? ?');
            }

            keymage.clearChains();

            keymage(shortcut.short, function (e) {
                successHandler(shortcut);
            }, { preventDefault: true });

            if (shortcut.alternateShort !== null) {
                keymage(shortcut.alternateShort, function (e) {
                    successHandler(shortcut);
                }, { preventDefault: true });
            }

            keymage.wrongHandler = function (e) {
                wrongHandler(e, shortcut);
            };
        }

        var init = function (lessonNo) {
            var lesson = lessonNo.toString();
            switch (lesson) {
                case "1":
                    shortcuts = lessonsProvider.getLesson1();
                    break;
                case "2":
                    shortcuts = lessonsProvider.getLesson2();
                    break;
                case "3":
                    shortcuts = lessonsProvider.getLesson3();
                    break;
                case "4":
                    shortcuts = lessonsProvider.getLesson4();
                    break;
                case "5":
                    shortcuts = lessonsProvider.getLesson5();
                    break;
                case "6":
                    shortcuts = lessonsProvider.getLesson6();
                    break;
                case "7":
                    shortcuts = lessonsProvider.getLesson7();
                    break;
                case "8":
                    shortcuts = lessonsProvider.getLesson8();
                    break;
                case "9":
                    shortcuts = lessonsProvider.getLesson9();
                    break;
                default:
                    alert("Lesson " + lesson + " doesn't exist");
                    return;
            }

            maxProgress = shortcuts.length * 5;

            initShortcut();
        };

        return {
            init: init
        }
    };
} (jQuery));
