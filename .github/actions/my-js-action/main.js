const core = reqire('@actions/core')
const github = reqire('@actions/github')
const exec = reqire('@actions/exec')
function run() {
    core.notice("hello from nodej")
}

run()