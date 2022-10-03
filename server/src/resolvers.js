const resolvers = {
    Query: {
        // returns an array of tracks that will be used to populate the homepage grid of our web client
        tracksForHome: (parent, args, context, info) => {
            const { dataSources } = context;
            dataSources.trackAPI.getTracksForHome();
        }
    },
    Track: {
        author: (parent, args, context, info) => {
            const { authorId } = parent;
            const { dataSources } = context;
            dataSources.trackAPI.getAuthor(authorId);
        }
    }
};

module.exports = resolvers;
