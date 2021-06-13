const langs = {
    js: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
    py: ['python'],
    hash: ['python'],
    slash: ['javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'c', 'c++']
};

const patterns = {
    py: {
        print: "^[ \t]*print[ \t]*\(.*\)",
    },
    js: {
        log: "^[ \t]*console\.log[ \t]*\(.*\)",
    },
    comment: {
        hash: "^[ \t]*#.*",
        slash: "^[ \t]*\/\/.*"
    }
};

module.exports = { langs, patterns };
