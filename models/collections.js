const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionsSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        address: String,
        logoImg: {
            type: String,
            required: true,
        },
        bannerImg: String,
        featureImg: String,
        name: {
            type: String,
            required: true,
        },
        total_supply: Number,
        symbol: String,
        description: String,
        col_name: String,
        minting: Boolean,
        bvm: Boolean,
        no_nerds: Boolean,
        royalty: Number,
        meta_uri: String,
        image_uri: String,
    },
    {
        timestamps: true,
    }
);
collectionsSchema.index({ col_name: 1, address: 1 }, { unique: true });

module.exports = mongoose.model("collections", collectionsSchema);
