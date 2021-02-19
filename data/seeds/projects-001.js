exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_id: 1, project_name: "Twitch Stream", project_description: "I want to stream every day for the rest of the 2021. There'll be lots of gaming, and even some programming!", project_completed: false },
        { project_id: 2, project_name: "Online Portfolio", project_description: "Create a portfolio with a bunch of my projects on display for any potential employers.", project_completed: false },
        { project_id: 3, project_name: "Pelayo Card Game", project_description: "Come up with a custom card game with a bunch of references to your family and all of it's happenings!", project_completed: false }
      ]);
    });
};
