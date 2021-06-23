const handler = async (req, res, next, model, method, error, success, getWhere = undefined, putId = undefined, deleteId = undefined, getOrderBy = undefined, getLimit = undefined) => {
    try {
        let data = await methodSwitch(method, req, model, putId, deleteId, getWhere, getOrderBy);
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

async function methodSwitch(method, req, model, putId, deleteId, getWhere, getOrderBy) {
    let data = "";
    let m = model;
    switch (method) {
        case "GET":
            data = m.find({});
            return data;
        case "GETBY":
            if (getWhere) data = await m.find(getWhere).exec();
            else throw new Error("Did not specify get condition");
            return data;
        case "GETORDERBY":
            if (getOrderBy) data = await m.find({}).sort(getOrderBy).limit(5);
            else throw new Error("Did not specify order type");
            return data;
        case "GETLIMIT":
            if (getLimit) data = await m.find({}).limit(getLimit);
            else throw new Error("Did not specify limit");
            return data;
        case "POST":
            data = await m.create(req.body);
            return data;
        case "PUT":
            if (putId) data = await m.updateOne({ id: putId });
            else throw new Error("Could not Update");
            return data;
        case "DELETE":
            if (deleteId) data = await m.deleteOne({ id: deleteId });
            else throw new Error("Could not Delete");
            return data;
    }
}

module.exports = { handler };