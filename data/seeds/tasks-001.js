
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_id: 1, task_description: "Create appropriate socials for twitch followers to know what's going on in my life.", task_notes: "So far so good, I've got Instagram and YouTube linked up. Missing a couple others.", task_completed: false, project_id: 1 },
        { task_id: 2, task_description: "Go through all your projects and pick a handfull that you want to show everyone.", task_completed: false, project_id: 2 },
        { task_id: 3, task_description: "Host the portfolio using netlify or heroku.", task_completed: false, project_id: 2 },
        { task_id: 4, task_description: "Cut some cardboard in the shape of playing cards.", task_completed: false, project_id: 3 }
      ]);
    });
};
