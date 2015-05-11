Genres = new Mongo.Collection('genres');
MovieMakers = new Mongo.Collection('moviemakers');
Actors = new Mongo.Collection('actors');
Sellers = new Mongo.Collection('sellers');
CDCatalogue = new Mongo.Collection('cdcatalogue');
Clients = new Mongo.Collection('clients');
OrderHistory = new Mongo.Collection('orderhistory');
Log = new Mongo.Collection('log');

if (Meteor.isClient) {
    Meteor.subscribe('genresPub');
    Meteor.subscribe('moviemakersPub');
    Meteor.subscribe('actorsPub');
    Meteor.subscribe('sellersPub');
    Meteor.subscribe('cdcataloguePub');
    Meteor.subscribe('clientsPub');
    Meteor.subscribe('orderhistoryPub');
    Meteor.subscribe('logPub');

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

    sellersForSelect = function() {
        return Sellers.find({}).map( function (obj) {
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

    Meteor.publish('clientsPub', function() {
        return Clients.find({});
    });

    Meteor.publish('orderhistoryPub', function() {
        return OrderHistory.find({});
    });

    Meteor.publish('logPub', function() {
        return Log.find({});
    });

    Genres.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });
    Genres._ensureIndex({title: 1}, {unique: true});

    MovieMakers.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });
    MovieMakers._ensureIndex({title: 1}, {unique: true});

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
    Sellers._ensureIndex({spassport: 1, npassport: 1}, {unique: true});

    CDCatalogue.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });

    Clients.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });
    Clients._ensureIndex({spassport: 1, npassport: 1}, {unique: true});

    OrderHistory.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });

    Log.allow({
        insert: function () { return true; },
        update: function () { return true; },
        remove: function () { return true; }
    });
}

