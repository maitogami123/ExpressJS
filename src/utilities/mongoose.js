module.exports = {
    multipleMongooseToObject: (mongooses) => {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: (mongoose) => (mongoose ? mongoose.toObject() : mongoose),
};
