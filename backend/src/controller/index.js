const debug = require('debug')('app:controller');
const sequelize = require('../db');
const Cat = require('../model/Cat');

/**
 * @desc Gets all cats
 * @route GET /api/cats
 */

exports.getAllCats = async (req, res) => {
    try {
        const cats = await Cat.findAll();

        if (!cats) {
            res.status(400).json({
                success: false,
                message: 'No Cats Found',
            });
        } else {
            res.status(200).json({
                cats, success: true, message: 'All Cats are ready'
            })
        }
    } catch(error) {
        debug(error);
        res.status(400).json({success: false, message: `Cats not found - Error: ${error.message}`});
    }
};

/**
 * @desc Gets cat by ID
 * @route Get /api/cats/:id
 */

exports.getCatsById = async (req, res) => {
    const catId = req.params.id;

    try {
        const cat = await Cat.findByPk(catId);

        if (!cat) {
            res.status(400).json({
                success: false, message: 'Cats not Found',
            });
        } else {
            res.status(200).json({
                cat, success: true, message: 'Cats are available',
            });
        }
    } catch(error) {
        debug(error);
        res.status(400).json({
            success: false,
            message: `Cats not found - Error: ${error.message}`,
        });
    }
};

/**
 * @desc Delete cat by ID
 * @route Delete /api/cats/:id
 */

exports.deleteCatsById = async (req, res) => {

    const catId = req.params.id;

    try{
        const cat = await Cat.findByPk(catId);
        const deletedCat = await cat.destroy();

        if(!deletedCat){
            res.status(400).json({
                success: false,
                message: 'Cats not Found 🤔',
            });
        } else {
            res.status(200).json({
                deletedCat,
                success: true,
                message: `Cat at id: ${catId} deleted successfully`
            })
        }
    }catch(error){
        debug(error);
        res.status(400).json({
            success: false,
            message: `Cats not found - Error: ${error.message}`
        });
    }
};

/**
 * @desc Update cat by ID
 * @route Update /api/cats/:id
 */

exports.updateCatById = async (req, res) => {
    const catId = req.params.id;
    const update = req.body;

    try {
        const catForUpdate = await Cat.findByPk(catId);
        const completeCatUpdate = await catForUpdate.update(update);

        res.status(200).json({
            completeCatUpdate,
            success: true,
            message: 'Cat has been successfully updated',
        });
    } catch (error) {
        debug(error);
        res.status(400).json({
            success: false,
            message: `Was not able to update because of ${error.message}`,
        });
        
    }
};

/**
 * @desc Create cat
 * @route Post /api/cats/:id
 */

exports.createCat = async (req, res) => {
    try{
        const catData = req.body;
        const catPromise = await Cat.create(catData);
        console.log('1');
        
        await Promise.all([catPromise]);
        res.status(200).json({
            catPromise,
            success:true,
            message: `new cat successfully created`
        });
    } catch(error) {
        res.status(400).json({
            success:false,
            message: console.error(`Can't create a new cat object. Error: ${error.message}`)
        })
    }
};