/**
 * @description Central API class for admin routes for convenient export to api.js
 * @author Ricky Liu
 */

import express from 'express';

// admin routers
export const router = express.Router();

import { admin } from './admin';
import { user } from './user';

router.use("/admin", admin);
router.use("/user", user);