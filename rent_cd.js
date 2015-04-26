Genres = new Mongo.Collection('genres');

if (Meteor.isClient) {
    Meteor.subscribe('genresPub');
}

if (Meteor.isServer) {
    Meteor.publish('genresPub', function() {
        return Genres.find({});
    });

    Genres.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });

    //var i = 0;
    //Meteor.setInterval(function () {
    //    console.log("inserting " + i);
    //    Genres.insert({title: i++});
    //}, 1000);
}

