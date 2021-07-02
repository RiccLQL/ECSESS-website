const { ObjectId } = require("mongodb");

const handler = async (req, res, next, model, method, error, success, option, option2, option3) => {
    try {
        let data = await methodSwitch(method, req, model, option, option2, option3);
        if (data) {
            return res.status(200).json({
                success: true,
                message: success,
                data: data,
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "Nothing was returned",
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: error,
        })
    }
}

async function methodSwitch(method, req, model, option, option2, option3) {
    let data = "";
    let m = model;
    switch (method) {
        case "GET":
            data = m.find({});
            return data;
        case "GETBY":
            if (option) data = await m.find(option);
            else throw new Error("Did not specify get condition");
            return data;
        case "GETPAGINATEDBY":
            if (option && option2 && option3) data = await m.find(option).sort(option2).skip(5 * option3).limit(5);
            else throw new Error("Did not specify get condition, pagination index or order type");
            return data;
        case "GETPAGINATED":
            if (option && option2) data = await m.find({}).sort(option).skip(5 * option2).limit(5);
            else throw new Error("Did not specify pagination index or order type");
            return data;
        case "GETBYLIMIT":
            if (option && option2 && option3) data = await m.find(option).sort(option2).limit(option3);
            else throw new Error("Did not specify get condition, limit and order type");
            return data;
        case "GETWITHINTIME":
            if (option && option2) data = await m.find(option).sort(option2);
            else throw new Error("Did not specify timeframe or order type");
            return data;
        case "GETSIZE":
            data = await m.countDocuments({});
            return data;
        case "POST":
            data = await m.create(req.body);
            return data;
        case "PUT":
            if (option) {
                data = await m.findByIdAndUpdate(option, req.body.data);
            }
            else {
                throw new Error("Could not Update");
            }
            return data;
        case "DELETE":
            if (option) data = await m.deleteOne({ _id: option });
            else throw new Error("Could not Delete");
            return data;
    }
}

module.exports = { handler };