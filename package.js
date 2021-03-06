Package.describe({
    name: "frozeman:template-var",
    summary: "Works as a wrapper for meteors ReactiveVar, but template instance specific.",
    version: "1.1.0",
    git: "https://github.com/frozeman/meteor-template-var.git"
});


Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.1');

    // core
    api.use('underscore', 'client');
    api.use('reactive-var', 'client');

    api.export('TemplateVar');

    // FILES
    api.addFiles('TemplateVar.js', 'client');
});

Package.onTest(function (api) {
    // api.use('frozeman:template-var');
    // api.use('tinytest');
    // api.addFiles('TemplateVar_tests.js', 'client');
});