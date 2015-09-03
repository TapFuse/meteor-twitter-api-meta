function twitterCredentials (meteorUser) {
  var config = Accounts.loginServiceConfiguration.findOne({service: 'twitter'});
  return new TwitterApi({
    consumer_key: config.consumerKey,
    consumer_secret: config.secret,
    access_token_key: meteorUser.services.twitter.accessToken,
    access_token_secret: meteorUser.services.twitter.accessTokenSecret
  });
}

Meteor.methods({
  getTimeline: function (userName) {
    var params = {
      screen_name: 'nodejs',
      trim_user: true,
      exclude_replies: true,
      contributor_details: false,
      include_rts: false
    };

    var client = twitterCredentials(Meteor.user());
    return client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if(!error){
        console.log("Success!");
      }
    });
  },
  isFollowingUserByNames: function (userName, followedUserName) {
    var params = {
      source_screen_name: userName ,
      target_screen_name: followedUserName
    };

    var client = twitterCredentials(Meteor.user());
    return client.get('friendships/show', params, function(error, tweets, response) {
      if(!error){
        console.log("Success!");
      }
    });
  },
  isFollowingUserByIds: function (userId, followedUserId) {
    var params = {
      source_id: userId,
      target_id: followedUserId
    };

    var client = twitterCredentials(Meteor.user());
    return client.get('friendships/show', params, function(error, tweets, response) {
      if(!error){
        console.log("Success!");
      }
    });
  },
  searchTweets: function(query) {
    var params = {
      q: query
    };

    var client = twitterCredentials(Meteor.user());
    return client.get('search/tweets', params, function(error, tweets, response) {
      if(!error){
        console.log("Success!");
      }
    });
  },
  findUsers: function (query, page, count, includeEntities) {
    var params = {
      q: query,
      page: page,
      count: count,
      include_entities: includeEntities
    };

    var client = twitterCredentials(Meteor.user());
    return client.get('users/search', params, function(error, tweets, response) {
      if(!error){
        console.log("Success!");
      }
    });
  },
  findOneUserById: function (userId) {
    var params = {
      user_id: userId
    };

    var client = twitterCredentials(Meteor.user());
    return client.get('users/show', params, function(error, tweets, response) {
      if(!error){
        console.log("Success!");
      }
    });
  },
  findOneUserByName: function (userName) {
    var params = {
      screen_name: userName
    };

    var client = twitterCredentials(Meteor.user());
    return client.get('users/show', params, function(error, tweets, response) {
      if(!error){
        console.log("Success!");
      }
    });
  }
});