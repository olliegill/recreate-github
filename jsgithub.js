


function myTemplate(templateId, container, model) {
  var templateString = $('#' + templateId).text();
  var templateFunction = _.template(templateString);
  var renderTemplate = templateFunction(model);
  $(container).append(renderTemplate);
}

//TOP SECTION

$.getJSON("https://api.github.com/users/olliegill").done(function(top) {

var top_section_stuff = {
  imagelarge: top.avatar_url,
  imageurl: top.html_url,
  username: top.login,
};

 myTemplate('top-section-image', '.top-right', top_section_stuff);
 });

// SIDEBAR

$.getJSON("https://api.github.com/users/olliegill").done(function(user) {

var sidebar_stuff = {
  imagelarge: user.avatar_url,
  imageurl: user.html_url,
  name: user.name,
  username: user.login,
  location: user.location,
  email: user.email,
  joined: user.created_at,
  joined2: moment(user.created_at).format('MMM D, YYYY'),
  followers: user.followers,
  following: user.following,
};

  myTemplate('user-sidebar-image', '.imagelarge', sidebar_stuff);
});

// SIDEBAR STARRED

$.getJSON("https://api.github.com/users/olliegill/starred").done(function(star) {

  var starred_stuff = {
    starred:star.length,
  };

  myTemplate('starredId', '.number2', starred_stuff);
});

// SIDEBAR ORGANIZATIONS

$.getJSON("https://api.github.com/users/olliegill/orgs").done(function(orgs) {
  _.each(orgs, function(org){
  var org_stuff = {
    orgUrl: org.url,
    orgAvatar: org.avatar_url,
  };
  myTemplate('orgId', '.org-avatar', org_stuff);

});
});


// TOP OF MAIN SECTION


// MAIN REPOSITORIES

$.getJSON("https://api.github.com/users/olliegill/repos").done(function(repos) {

 _.each(repos, function(repo){
var main_repos = {
      repoName: repo.name,
      repoUrl: repo.url,
      language: repo.language,
      stargazersCount: repo.stargazers_count,
      stargazersUrl: repo.stargazers_url,
      forksCount: repo.forks_count,
      forksUrl: repo.forks_url,
      updated: repo.updated_at,
      updated2: moment(repo.created_at).fromNow(),

    };
    myTemplate('main-repos-script', '.main-repos', main_repos);

});

});
