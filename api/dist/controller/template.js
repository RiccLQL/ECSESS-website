"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = (req, res, next, model, method, error, success, option, option2, option3) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield methodSwitch(method, req, model, option, option2, option3);
        if (data) {
            return res.status(200).json({
                success: true,
                message: success,
                data,
            });
        }
        else {
            return res.status(200).json({
                success: true,
                message: "Nothing was returned",
            });
        }
    }
    catch (_a) {
        return res.status(400).json({
            success: false,
            message: error,
        });
    }
});
exports.handler = handler;
const methodSwitch = (method, req, model, option, option2, option3) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const m = model;
        switch (method) {
            case "GET":
                return yield m.find({});
            case "GETBY":
                if (option)
                    return yield m.find(option);
                else
                    throw new Error("Did not specify get condition");
            case "GETPAGINATEDBY":
                if (option && option2 && option3)
                    return yield m.find(option).sort(option2).skip(5 * option3).limit(5);
                else
                    throw new Error("Did not specify get condition, pagination index or order type");
            case "GETPAGINATED":
                if (option && option2)
                    return yield m.find({}).sort(option).skip(5 * option2).limit(5);
                else
                    throw new Error("Did not specify pagination index or order type");
            case "GETBYLIMIT":
                if (option && option2 && option3)
                    return yield m.find(option).sort(option2).limit(option3);
                else
                    throw new Error("Did not specify get condition, limit and order type");
            case "GETWITHINTIME":
                if (option && option2)
                    return yield m.find(option).sort(option2);
                else
                    throw new Error("Did not specify timeframe or order type");
            case "GETSIZE":
                return yield m.countDocuments({});
            case "POST":
                return yield m.create(req.body);
            case "PUT":
                if (option) {
                    return yield m.findByIdAndUpdate(option, req.body.data);
                }
                else {
                    throw new Error("Could not Update");
                }
            case "DELETE":
                if (option)
                    return yield m.deleteOne({ _id: option });
                else
                    throw new Error("Could not Delete");
        }
    }
    catch (error) {
        return error;
    }
});
//# sourceMappingURL=template.js.map