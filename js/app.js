App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function(){
    this.resource('post', { path: ':post_id' });
  });
})

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
    }
  }
});

// Ember.Handlebars.helper('format-date', function(date) {
//   return moment(date).fromNow();
// });

// var showdown = new Showdown.converter();

// Ember.Handlebars.helper('format-markdown', function(input) {
//   return new Handlebars.SafeString(showdown.makeHtml(input));
// });

var posts = [{
  id: '1',
  title: "First post! o/",
  author: { name: "menezes" },
  date: new Date('08-20-2013'),
  excerpt: "There are lots of web blogs in the internet, but no one can beat mine.",
  body: "Following this guide, i entered in a new world of learn and upgraded my web development technique."
}, {
  id: '2',
  title: "Wow, that's my birthday!",
  author: { name: "menezes" },
  date: new Date('07-08-2014'),
  excerpt: "Happy birthday to me!",
  body: "Now i can tell that i survived 27 years on Rio de Janeiro city, and that's a notable fact, i'm really proud of myself.."
}];
