import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';
import { Method } from '../api/methods';
import { ModelType } from '../mongo';

export const handler = async (
    req: Request,
    res: Response,
    next: NextFunction,
    model: ModelType,
    method: Method,
    error: string,
    success: string,
    option?: any,
    option2?: any,
    option3?: any
): Promise<Response> => {
    try {
        const data = await methodSwitch(method, req, model, option, option2, option3);
        if (data) {
            return res.status(200).json({
                success: true,
                message: success,
                data,
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

const methodSwitch = async (method: Method, req: Request, model: ModelType, option?: any, option2?: any, option3?: any): Promise<any> => {
    try {
        const m: Model<any> = model;
        switch (method) {
            case "GET":
                return await m.find({});
            case "GETBY":
                if (option) return await m.find(option);
                else throw new Error("Did not specify get condition");
            case "GETPAGINATEDBY":
                if (option && option2 && option3) return await m.find(option).sort(option2).skip(5 * option3).limit(5);
                else throw new Error("Did not specify get condition, pagination index or order type");
            case "GETPAGINATED":
                if (option && option2) return await m.find({}).sort(option).skip(5 * option2).limit(5);
                else throw new Error("Did not specify pagination index or order type");
            case "GETBYLIMIT":
                if (option && option2 && option3) return await m.find(option).sort(option2).limit(option3);
                else throw new Error("Did not specify get condition, limit and order type");
            case "GETWITHINTIME":
                if (option && option2) return await m.find(option).sort(option2);
                else throw new Error("Did not specify timeframe or order type");
            case "GETSIZE":
                return await m.countDocuments({});
            case "POST":
                return await m.create(req.body);
            case "PUT":
                if (option) {
                    return await m.findByIdAndUpdate(option, req.body.data);
                }
                else {
                    throw new Error("Could not Update");
                }
            case "DELETE":
                if (option) return await m.deleteOne({ _id: option });
                else throw new Error("Could not Delete");
        }
    } catch (error: any){
        return error;
    }
}