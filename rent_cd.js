Genres = new Mongo.Collection('genres');
MovieMakers = new Mongo.Collection('moviemakers');
Actors = new Mongo.Collection('actors');

if (Meteor.isClient) {
    Meteor.subscribe('genresPub');
    Meteor.subscribe('moviemakersPub');
    Meteor.subscribe('actorsPub');
}

if (Meteor.isServer) {
    Meteor.publish('genresPub', function() {
        return Genres.find({});
    });

    Meteor.publish('moviemakersPub', function() {
        return MovieMakers.find({});
    });

    Meteor.publish('actorsPub', function() {
        return Actors.find({});
    });

    Genres.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });

    MovieMakers.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });

    Actors.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });
}

