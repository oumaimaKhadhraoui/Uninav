const mongoose = require('mongoose');
const { Schema } = mongoose;

const placeSchema = new Schema({
    name: { type: String, required: true },
    category: { 
        type: String, 
        required: true,
        enum: ['amphitheater', 'cafe', 'library', 'bank', 'department', 'faculty']
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

placeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Place', placeSchema);