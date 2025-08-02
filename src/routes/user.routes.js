import { Router } from "express";
import { loginUser, logoutUser, registerUser , refresAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.js";
import { verifyJWT } from "../middleware/auth.middelware.js";

const router  = Router()

router.route('/register').post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount : 1

        }


    ]),
    registerUser)

router.route('/login').post(loginUser)
//secured routes
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refresAccessToken)

export default router