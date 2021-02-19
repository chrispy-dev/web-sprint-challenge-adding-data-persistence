
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_id: 1, resource_name: "Computer", resource_description: "The tool of all tools, with this device you could rule the world!" },
        { resource_id: 2, resource_name: "Internet", resource_description: "All the wolds most important information at your disposal!" },
        { resource_id: 3, resource_name: "Twitch Account", resource_description: "An account on one of the most popular streaming services out there!" },
        { resource_id: 4, resource_name: "Cardboard", resource_description: "With enough imagination this could be used for anything!" }
      ]);
    });
};
