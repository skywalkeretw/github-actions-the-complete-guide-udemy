const core = require('@actions/core');
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    yourname = core.getInput('name', {required: true})
    yourage = core.getInput('age', {required: true})
    exec.exec('echo "from my js code"')
    core.notice("hello " + yourname + " your age is: " +yourage)
}

run()