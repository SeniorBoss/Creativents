const {
    registration,
    verifyEmail,
    resendEmailVerification,
    logIn,
    signOut,
    allLoginUsers,
    changePassword,
    forgotPassword,
    resetPassword,
    allUsers,
    updateUsers,
    deleteUser,
    addProfilePicture,
    createAdmin,
    allAdminUsers,
    makeAdmin,
    makeSuperAdmin
} = require('../controllers/userController')
const {
    userAuth,
    isAdminAuthorized,
    isSuperAdminAuthorized,
} = require('../middlewares/authMiddleware')
const { validationMiddleware } = require("../middlewares/validator");

const express = require('express');
const router = express.Router();
// const upload = require("../utilities/multer");


// Major Routes for Normal USERS
router.post('/signup',validationMiddleware, registration)  // checked
router.put('/verify/:token', verifyEmail) // checked
router.put('/re-verify', resendEmailVerification) // checked
router.post('/login', logIn) //checked
router.put('/logout/:id',  userAuth, signOut) // checked
router.put('/changepassword/:id', userAuth,changePassword) // checked
router.post('/changepassword/:id/:token', resetPassword) // checked
router.post('/forgotpassword', forgotPassword) // checked
router.put(
    "/add-profile-image/:id",
    userAuth,
    addProfilePicture
  );    
router.get('/allusers', allUsers)



// Major Routes for SUPER ADMIN routes
router.get('/loginusers/:id', userAuth, isSuperAdminAuthorized, allLoginUsers)
router.post('/createAdmin/:id', userAuth, isSuperAdminAuthorized, createAdmin);
router.get('/allAdminUsers/:id', userAuth, isSuperAdminAuthorized, allAdminUsers);
router.post('/:id/makeAdmin/:userId', userAuth, isSuperAdminAuthorized, makeAdmin);
router.post('/:id/makeSuperAdmin/:userId', userAuth, isSuperAdminAuthorized, makeSuperAdmin);



module.exports = router;

