Genres = new Mongo.Collection('genres');
MovieMakers = new Mongo.Collection('moviemakers');
Actors = new Mongo.Collection('actors');
Sellers = new Mongo.Collection('sellers');
CDCatalogue = new Mongo.Collection('cdcatalogue');

if (Meteor.isClient) {
    Meteor.subscribe('genresPub');
    Meteor.subscribe('moviemakersPub');
    Meteor.subscribe('actorsPub');
    Meteor.subscribe('sellersPub');
    Meteor.subscribe('cdcataloguePub');

    genresForSelect = function() {
        return Genres.find({}).map( function (obj) {
            return {id: obj._id, value: obj.title};
        })
    };

    moviemakersForSelect = function() {
        return MovieMakers.find({}).map( function (obj) {
            return {id: obj._id, value: obj.title};
        })
    };

    actorsForSelect = function() {
        return Actors.find({}).map( function (obj) {
            return {id: obj._id, value: obj.fname + " " + obj.sname};
        })
    };

    directorsForSelect = function() {
        return Actors.find({}).map( function (obj) {
            return {id: obj._id, value: obj.fname + " " + obj.sname};
        })
    };
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

    Meteor.publish('sellersPub', function() {
        return Sellers.find({});
    });

    Meteor.publish('cdcataloguePub', function() {
        return CDCatalogue.find({});
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

    Sellers.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });

    CDCatalogue.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });
}

