var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({

    createProject: function() {
        var projectName = this.name || '.';
        var dest = this.destinationRoot() + '/' + projectName + '/';

        this.remote('igorzg', 'mvcjs-testapp', function(err, remote) {
            if (err) {
                console.error('There was an error in generating the project');
                return;
            }
            remote.directory('.', dest);

        }.bind(this));
    }

});
